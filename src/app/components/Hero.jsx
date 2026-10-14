'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Petals from './Petals';
import styles from './Hero.module.css';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background Image with Ken Burns */}
      <div className={styles.bg}>
        <Image src="/images/hero-bg-royal.jpg" alt="Luxury wedding and event decoration by Phoolkari Decor Studio Amritsar" fill priority sizes="100vw" className={styles.bgImg} />
        <div className={styles.overlay} />
        <div className={styles.grain} />
        <Petals />
        <div className={styles.bottomFade} />
      </div>

      {/* Center Cinematic Content */}
      <div className={styles.heroCenter}>
        <motion.div
          className={styles.heroTaglineBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.heroTaglineLine} />
          <span className={styles.heroTaglineText}>Amritsar &bull; Punjab</span>
          <span className={styles.heroTaglineLine} />
        </motion.div>

        <motion.h2
          className={styles.heroMainTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Phoolkari <span className={styles.heroScript}>Decor Studio</span>
        </motion.h2>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          Crafting majestic royal mandaps, bespoke floral installations &amp; grand celebrations across Punjab&apos;s finest venues.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link href="/gallery" className="btn btn--outline-light">
            Explore Portfolio
          </Link>
          <Link href="/#contact" className="btn btn--gold btn--glow">
            Plan Your Event
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator — absolute on desktop, inline on mobile */}
      <motion.a
        href="/#about"
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-label="Scroll to explore"
      >
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </motion.a>
    </section>
  );
}
