'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Petals from './Petals';
import styles from './Hero.module.css';
import MagneticButton from './MagneticButton';
import Ripple from './Ripple';

export default function Hero() {
  const titleWords1 = ['Where', 'Every'];
  const titleWords2 = ['Detail', 'Is', 'A'];
  const titleWords3 = ['Masterpiece'];

  return (
    <section id="hero" className={styles.hero}>
      {/* Background Image with Ken Burns */}
      <div className={styles.bg}>
        <Image src="/images/hero-bg-new.jpg" alt="Luxury event decoration by Phoolkari Decor Studio" fill priority className={styles.bgImg} />
        <div className={styles.overlay} />
        <div className={styles.grain} />
        <Petals />
      </div>

      <div className={styles.content}>
        {/* Left — Text */}
        <motion.div className={styles.textSide}>
          <motion.div
            className={styles.goldLine}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className={styles.labelLine} />
            Luxury Event Decoration
            <span className={styles.labelLine} />
          </motion.span>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              {titleWords1.map((word, i) => (
                <motion.span
                  key={word + i}
                  className={styles.word}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className={styles.titleLine2}>
              {titleWords2.map((word, i) => (
                <motion.span
                  key={word + i}
                  className={styles.word}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className={styles.titleLine3}>
              {titleWords3.map((word, i) => (
                <motion.em
                  key={word + i}
                  className={styles.wordAccent}
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.em>
              ))}
            </span>
          </h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Crafting unforgettable experiences at Amritsar&apos;s finest hotels, resorts &amp; farmhouses
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <MagneticButton>
              <a href="/gallery" className="btn btn--outline-light">
                Explore Our Work
                <Ripple />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="/#contact" className="btn btn--gold btn--glow">
                Book a Consultation
                <Ripple />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <Image
              src="/images/portfolio/event-1.png"
              alt="Royal Wedding Décor"
              fill
              sizes="40vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.goldStrip} />
          <motion.div
            className={styles.imageBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <div className={styles.badgeIcon}>✦</div>
            <span className={styles.badgeText}>500+ Events<br />Delivered</span>
          </motion.div>
        </motion.div>
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
