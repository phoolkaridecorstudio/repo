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
    <span ref={ref} className={styles.statNumber}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay }}
        >
          <NumberCounter to={target} suffix={suffix} duration={2} />
        </motion.span>
      ) : '0' + suffix}
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
            <span className="section-label">Our Story</span>
            <h2 className={`section-title ${styles.title}`}>
              Crafting Unforgettable<br /><em>Experiences</em>
            </h2>
            <div className="gold-divider" style={{ justifyContent: 'flex-start' }}>
              <span className="line" /><span className="dot" /><span className="line" />
            </div>

            <p className={styles.text}>
              As Amritsar&apos;s premier <strong>Event Planners and Decorators</strong>, we believe every celebration deserves to be extraordinary.
              Rooted in the rich artistry of Punjabi Phoolkari tradition, we bring the same intricate craftsmanship
              and attention to detail to every event we design.
            </p>
            <p className={styles.text}>
              From grand wedding mandaps adorned with thousands of fresh flowers to intimate anniversary dinners
              bathed in candlelight — we transform venues into breathtaking experiences that your guests will
              remember for a lifetime.
            </p>
            <p className={styles.text}>
              Working with Amritsar&apos;s finest hotels, resorts, and farmhouses, our team of expert designers
              brings the latest global trends fused with timeless Indian elegance to create décor that is uniquely yours.
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
                src="/images/portfolio/event-1.png"
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
