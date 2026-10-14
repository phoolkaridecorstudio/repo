'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { number: '01', title: 'Chat & Consultation', desc: 'We talk on call or WhatsApp to understand your event date, venue, budget, and the look you want.' },
  { number: '02', title: 'Design & Pricing Plan', desc: 'We share photo samples, decoration ideas, and clear pricing so you know exactly what to expect.' },
  { number: '03', title: 'Setup & Decoration', desc: 'Our team arrives early and carefully arranges all flowers, lighting, stage props, and seating.' },
  { number: '04', title: 'Enjoy Your Celebration', desc: 'You arrive at a ready, picture-perfect venue on time. You and your family can simply relax and celebrate!' },
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
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Simple 4-Step <em>Process</em></h2>
          <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          <p className="section-desc">From your first phone call to the wedding day, we make everything smooth and stress-free</p>
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
