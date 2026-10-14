'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { portfolioEvents } from '../data/content';
import styles from './galleryPage.module.css';

const filterCategories = [
  { id: 'All', label: 'All Works' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate Galas' },
  { id: 'celebration', label: 'Celebrations' },
  { id: 'haldi', label: 'Haldi Ceremonies' },
  { id: 'mehendi', label: 'Mehndi Soirées' },
];

export default function GalleryClient() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredEvents = filter === 'All' 
    ? portfolioEvents 
    : portfolioEvents.filter(event => event.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevPhoto = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((curr) => (curr > 0 ? curr - 1 : filteredEvents.length - 1));
  }, [filteredEvents.length]);

  const nextPhoto = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((curr) => (curr < filteredEvents.length - 1 ? curr + 1 : 0));
  }, [filteredEvents.length]);

  // Lock body scroll and listen for Escape and Arrow keys
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto]);

  const currentEvent = lightboxIndex !== null ? filteredEvents[lightboxIndex] : null;

  return (
    <>
      <Navbar />
      <main className={styles.galleryPage}>
        <div className="container">
          <div className={styles.header}>
            <span className="section-label">Our Portfolio</span>
            <h1 className="section-title">Visual <em>Masterpieces</em></h1>
            <div className="gold-divider">
              <span className="line" /><span className="dot" /><span className="line" />
            </div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Browse through our extensive gallery of luxury weddings, corporate galas, and themed celebrations. Each event is a testament to our dedication to perfection.
            </p>
          </div>

          <div className={styles.filters}>
            {filterCategories.map(cat => (
              <button 
                key={cat.id} 
                className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ''}`}
                onClick={() => {
                  setFilter(cat.id);
                  setLightboxIndex(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className={styles.grid}>
            <AnimatePresence>
              {filteredEvents.map((event, index) => (
                <motion.div 
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={styles.gridItem}
                  onClick={() => setLightboxIndex(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${event.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(index);
                    }
                  }}
                >
                  <Image 
                    src={event.image} 
                    alt={event.alt || event.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className={styles.itemOverlay}>
                    <span className={styles.itemCategory}>{event.category}</span>
                    <h3 className={styles.itemTitle}>{event.title}</h3>
                    <p className={styles.itemVenue}>{event.venue}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentEvent && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview modal"
          >
            {/* Close Button */}
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close modal">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Prev Button */}
            {filteredEvents.length > 1 && (
              <button
                className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                onClick={prevPhoto}
                aria-label="Previous photo"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            )}

            {/* Next Button */}
            {filteredEvents.length > 1 && (
              <button
                className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
                onClick={nextPhoto}
                aria-label="Next photo"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            )}

            {/* Image Wrap */}
            <motion.div 
              key={currentEvent.id || lightboxIndex}
              className={styles.lightboxImageWrap}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              onClick={e => e.stopPropagation()}
            >
              <Image 
                src={currentEvent.image} 
                alt={currentEvent.alt || currentEvent.title} 
                fill 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className={styles.lightboxCaption} onClick={e => e.stopPropagation()}>
              <strong>{currentEvent.title}</strong> &bull; {currentEvent.venue} ({lightboxIndex + 1} of {filteredEvents.length})
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
      <Footer />
    </>
  );
}
