'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Skip preloader if already seen in this session
    if (sessionStorage.getItem('preloader_shown')) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('preloader_shown', 'true');
    }, 2400);
    
    return () => clearTimeout(timer);
  }, []);

  const pathVariants = {
    hidden: { pathLength: 0, fill: "rgba(197, 151, 62, 0)" },
    visible: { 
      pathLength: 1, 
      fill: "rgba(197, 151, 62, 1)",
      transition: { 
        default: { duration: 1.8, ease: "easeInOut" },
        fill: { duration: 0.8, ease: "easeIn", delay: 1.2 }
      }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.inner}>
            <motion.div 
              className={styles.logoSvg}
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <Image src="/images/logo.svg" alt="Phoolkari Decor Studio" width={240} height={110} style={{ objectFit: 'contain' }} priority />
            </motion.div>
            
            <div className={styles.bar}>
              <motion.div
                className={styles.barFill}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
