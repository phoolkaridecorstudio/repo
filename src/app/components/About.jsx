'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.css';
import NumberCounter from './NumberCounter';

function Counter({ target, suffix = '+', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <span ref={ref} className={styles.statNumber} aria-label={`${target}${suffix}`}>
      <span className={styles.srOnly}>{target}{suffix}</span>
      <span aria-hidden="true">
        {inView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay }}
          >
            <NumberCounter to={target} suffix={suffix} duration={2} />
          </motion.span>
        ) : `${target}${suffix}`}
      </span>
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="about" className={`section ${styles.about} baile-pattern`} ref={sectionRef}>
      <div className={`container ${styles.contentContainer}`} style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.grid}>
          {/* Text Column — Left */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionWatermark}>01</div>
            <span className="section-label">About Us</span>
            <h2 className={`section-title ${styles.title}`}>
              Making Every Celebration<br /><em>Unforgettable</em>
            </h2>
            <div className="gold-divider" style={{ justifyContent: 'flex-start' }}>
              <span className="line" /><span className="dot" /><span className="line" />
            </div>

            <p className={styles.text}>
              We are Phoolkari Decor Studio, one of Amritsar&apos;s most trusted <strong>Wedding Decorators and Event Planners</strong>. Inspired by Punjab&apos;s rich Phulkari heritage, we bring warmth, vibrant colors, and fine craftsmanship to every family celebration.
            </p>
            <p className={styles.text}>
              From royal wedding mandaps decorated with fresh flowers to colorful Haldi &amp; Mehndi setups and intimate family dinners — we decorate your venue so beautifully that your guests will remember it for years.
            </p>
            <p className={styles.text}>
              We regularly decorate Amritsar&apos;s top hotels, banquet halls, and farmhouses. Our dedicated team handles all setup work on time, so you and your family can relax and enjoy the celebrations without any stress.
            </p>
          </motion.div>

          {/* Image Column — Right */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className={styles.heroImage} style={{ y: imageY }}>
              <Image
                src="/images/portfolio/event-1.webp"
                alt="Luxury Wedding Decor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              className={styles.floatingBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span className={styles.badgeNumber}>10+</span>
              <span className={styles.badgeLabel}>Years of<br />Excellence</span>
            </motion.div>

            {/* Stats card overlapping the image */}
            <motion.div
              className={styles.statsCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={styles.stat}>
                <Counter target={500} suffix="+" delay={0} />
                <span className={styles.statLabel}>Events Delivered</span>
              </div>
              <div className={styles.stat}>
                <Counter target={50} suffix="+" delay={0.15} />
                <span className={styles.statLabel}>Premium Venues</span>
              </div>
              <div className={styles.stat}>
                <Counter target={100} suffix="%" delay={0.3} />
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
