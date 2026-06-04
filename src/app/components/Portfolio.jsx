'use client';
import Image from 'next/image';
import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';
import { portfolioEvents as events } from '../data/content';

const filters = ['all', 'wedding', 'celebration', 'corporate', 'haldi', 'mehendi'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxSrc, setLightboxSrc] = useState(null);
  
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const filtered = activeFilter === 'all' ? events : events.filter(e => e.category === activeFilter);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <>
      <section id="gallery" className={`section ${styles.portfolio}`}>
        <div className="container">
          <motion.div
            ref={headerRef}
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Event <em>Gallery</em></h2>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
            <p className="section-desc">A glimpse into the celebrations we&apos;ve brought to life</p>
          </motion.div>

          {/* Filter tabs */}
          <div className={styles.filters}>
            {filters.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1) + (f === 'celebration' ? 's' : f === 'wedding' ? 's' : '')}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div className={styles.masonryGrid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((event) => (
                <motion.div
                  key={event.id}
                  className={styles.item}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setLightboxSrc(event.image)}
                >
                  <div className={styles.itemImageWrap}>
                    <Image src={event.image} alt={event.alt || event.title} fill sizes="(max-width: 768px) 50vw, 33vw" />
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemTextBg}>
                      <span className={styles.itemVenue}>{event.venue}</span>
                      <h4 className={styles.itemTitle}>{event.title}</h4>
                    </div>
                    <div className={styles.viewIcon}>+</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div style={{ textAlign: 'center', margin: '60px auto 0', padding: '0 20px' }}>
            <a href="/gallery" className="btn btn--gold">View Gallery</a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxImgWrap}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{ position: 'relative', width: '90vw', height: '90vh', maxWidth: '1200px' }}
            >
              <Image
                src={lightboxSrc}
                alt="Portfolio preview"
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
