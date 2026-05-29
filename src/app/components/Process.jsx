'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We begin with a detailed one-on-one discussion to understand your vision, preferences, budget, and the unique story you want your event to tell.' },
  { number: '02', title: 'Design & Concept', desc: 'Our creative team crafts a bespoke design concept with mood boards, 3D renders, and material samples — so you can see the magic before it happens.' },
  { number: '03', title: 'Execution', desc: 'Our skilled artisans and installation team bring the design to life with precision, transforming your venue into a breathtaking experience.' },
  { number: '04', title: 'Celebration', desc: 'You walk in to a picture-perfect setting. Every flower, drape, and light exactly where it should be. All that\'s left is to celebrate.' },
];

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="process" className={`section section--cream ${styles.process}`}>
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our <em>Process</em></h2>
          <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          <p className="section-desc">Four seamless steps from your first call to a flawless celebration</p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={styles.step}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
    >
      <div className={styles.stepNumber}>
        <span className={styles.stepNumberWatermark}>{step.number}</span>
        <span className={styles.stepNumberLabel}>Step {step.number}</span>
      </div>
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </motion.div>
  );
}
