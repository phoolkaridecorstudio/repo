'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Marquee.module.css';

const pressItems = [
  { name: 'Vogue Weddings', src: '/images/logos/vogue.png' },
  { name: 'WedMeGood', src: '/images/logos/wedmegood.png' },
  { name: 'ShaadiSaga', src: '/images/logos/shaadisaga.png' },
  { name: 'WeddingSutra', src: '/images/logos/weddingsutra.png' },
  { name: 'Harpers Bazaar', src: '/images/logos/harpers.png' }
];

export default function PressMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <p className={styles.marqueeLabel}>As Seen In</p>
      <div className={styles.marqueeContainer}>
        {/* Left/Right Fades */}
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Original set */}
          <div className={styles.marqueeContent}>
            {pressItems.map((item, idx) => (
              <div key={idx} className={styles.pressLogo}>
                <Image src={item.src} alt={item.name} width={150} height={45} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} />
              </div>
            ))}
          </div>
          {/* Duplicate set for infinite loop */}
          <div className={styles.marqueeContent}>
            {pressItems.map((item, idx) => (
              <div key={`dup-${idx}`} className={styles.pressLogo}>
                <Image src={item.src} alt={item.name} width={150} height={45} style={{ objectFit: 'contain', height: '100%', width: 'auto' }} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
