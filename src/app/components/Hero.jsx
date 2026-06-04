'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Petals from './Petals';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background Image with Ken Burns */}
      <div className={styles.bg}>
        <Image src="/images/hero-bg-royal.jpg" alt="Luxury event decoration by Phoolkari Decor Studio" fill priority sizes="100vw" className={styles.bgImg} />
        <div className={styles.overlay} />
        <div className={styles.grain} />
        <Petals />
        <div className={styles.bottomFade} />
      </div>

      {/* Scroll Indicator — absolute on desktop, inline on mobile */}
      <motion.a
        href="/#about"
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </motion.a>
    </section>
  );
}
