'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './FounderNote.module.css';

export default function FounderNote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.founderSection}`}>
      <div className={`container ${styles.container}`} ref={ref}>
        {/* Decorative quote mark */}
        <motion.div
          className={styles.quoteMark}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          &ldquo;
        </motion.div>

        {/* Quote */}
        <motion.div
          className={styles.quoteWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.quote}>
            Luxury is not just about abundance; it&apos;s about meticulous attention to the smallest details. Our goal is to translate your most cherished dreams into a tangible, breathtaking reality.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className={styles.divider}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerLine} />
        </motion.div>

        {/* Bio */}
        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          With years of experience in curating bespoke events across Punjab&apos;s most elite venues, we believe in design that speaks. Every floral arrangement, every draped fabric, and every lighting cue is orchestrated to create an atmosphere of pure magic.
        </motion.p>

        {/* Signature */}
        <motion.div
          className={styles.signatureContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h4 className={styles.name}>Mukesh N Aggarwal</h4>
          <p className={styles.title}>Creative Director & Founder</p>
          <div className={styles.signature}>Mukesh N Aggarwal</div>
        </motion.div>
      </div>
    </section>
  );
}
