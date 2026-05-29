'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Services.module.css';
import BlurText from './BlurText';
import { servicesData as services } from '../data/content';

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.cardImage}>
        <div className={styles.cardImageInner}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 80vw, 400px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.cardOverlay} />
        <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.desc}</p>
        <a href={`/services/${service.id}`} className={styles.cardLink}>
          Explore Service
          <span className={styles.cardLinkArrow}>→</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  
  const trackRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    trackRef.current.classList.add(styles.active);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    trackRef.current.classList.remove(styles.active);
  };

  const onMouseUp = () => {
    isDown.current = false;
    trackRef.current.classList.remove(styles.active);
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll-fast multiplier
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="services" className={`section section--cream ${styles.services} lotus-pattern`}>
      <div className={`container ${styles.contentContainer}`} style={{ position: 'relative', zIndex: 2 }}>
        {/* Left-aligned header with scroll hint */}
        <div className={styles.headerArea}>
          <motion.div
            ref={headerRef}
            className={styles.headerText}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">What We Offer</span>
            <h2 className="section-title" style={{ display: 'flex', gap: '0.3em', flexWrap: 'wrap' }}>
              <BlurText text="Our" delay={0.2} />
              <em><BlurText text="Expertise" delay={0.4} /></em>
            </h2>
            <div className="gold-divider" style={{ justifyContent: 'flex-start' }}>
              <span className="line" /><span className="dot" /><span className="line" />
            </div>
            <p className="section-desc" style={{ margin: 0, textAlign: 'left' }}>From concept to creation, we handle every detail to deliver a flawless experience tailored to your unique celebration.</p>
          </motion.div>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Scroll to explore
            <span className={styles.scrollHintLine} />
            →
          </motion.div>
        </div>

        {/* Horizontal scroll track */}
        <div 
          className={styles.scrollTrack}
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
