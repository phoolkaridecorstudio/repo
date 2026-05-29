'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1, name: 'Priya & Arjun Malhotra', event: 'Wedding Reception, Radisson Blu',
    text: 'Phoolkari Decor Studio turned our wedding into a fairytale. Every single guest commented on how breathtaking the décor was. The team went above and beyond — the mandap was pure art. We couldn\'t have asked for anything better.',
    initials: 'PM',
  },
  {
    id: 2, name: 'Ravneet Kaur', event: 'Daughter\'s 1st Birthday, Green Valley',
    text: 'I wanted a unicorn-garden theme and they absolutely nailed it! The attention to detail was incredible — from the entrance arch to the cake table. Every corner was Instagram-worthy. Highly recommend for any event!',
    initials: 'RK',
  },
  {
    id: 3, name: 'Vikram Singh Chadha', event: 'Corporate Awards Night, ITC Grand',
    text: 'Professional, creative, and flawless execution. Our annual gala looked world-class. The stage design and lighting were at an international standard. Phoolkari Decor truly understands luxury.',
    initials: 'VC',
  },
  {
    id: 4, name: 'Simran & Gurpreet', event: 'Engagement Ceremony, Heritage Haveli',
    text: 'From our very first meeting, we knew we were in great hands. They listened to every detail we wanted and delivered something even more beautiful than we imagined. Our families are still talking about it!',
    initials: 'SG',
  },
  {
    id: 5, name: 'Neha & Sameer', event: 'Sangeet Ceremony, Taj Swarna',
    text: 'The floral arrangements were absolutely magical! They understood our vision of a vibrant, traditional yet modern Sangeet perfectly. The execution was flawless, and the entire venue felt alive with colors.',
    initials: 'NS',
  },
  {
    id: 6, name: 'Rohan Sethi', event: '50th Anniversary Gala, The Ritz',
    text: 'For my parents\' golden anniversary, we wanted pure elegance. Phoolkari Decor Studio delivered exactly that. The grand chandelier installations and table centerpieces were simply majestic. A truly professional team.',
    initials: 'RS',
  },
  {
    id: 7, name: 'Ananya Verma', event: 'Baby Shower, Private Farmhouse',
    text: 'I cannot express how beautiful my baby shower looked. They created a gorgeous pastel theme with custom props and soft lighting that made the evening so intimate and special. I am beyond thankful!',
    initials: 'AV',
  },
  {
    id: 8, name: 'Deepak & Sonam', event: 'Destination Wedding, Jaipur',
    text: 'We trusted Phoolkari Decor Studio for our destination wedding, and it was the best decision we made. Despite the logistical challenges, they transformed the palace into a breathtaking set. Highly recommend their services!',
    initials: 'DS',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>Client Love</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>What Our Clients <em>Say</em></h2>
          <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
        </motion.div>

        <div className={styles.spotlight}>
          <div className={styles.quoteIcon}>&ldquo;</div>
          <div className={styles.stars}>★★★★★</div>

          <div className={styles.textWrap}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={t.id}
                className={styles.quoteText}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {t.text}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              className={styles.author}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <span className={styles.authorName}>{t.name}</span>
                <span className={styles.authorEvent}>{t.event}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.nav}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.navBtn} onClick={next} aria-label="Next testimonial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
