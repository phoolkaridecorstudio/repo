'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { portfolioEvents } from '../data/content';
import styles from './galleryPage.module.css';

const categories = ['All', 'wedding', 'corporate', 'celebration'];

export default function GalleryClient() {
  const [filter, setFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredEvents = filter === 'All' 
    ? portfolioEvents 
    : portfolioEvents.filter(event => event.category === filter);

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
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'All' ? 'All Works' : cat}
              </button>
            ))}
          </div>

          <motion.div layout className={styles.grid}>
            <AnimatePresence>
              {filteredEvents.map(event => (
                <motion.div 
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={styles.gridItem}
                  onClick={() => setLightboxImage(event.image)}
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
        {lightboxImage && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button className={styles.lightboxClose} onClick={() => setLightboxImage(null)}>×</button>
            <motion.div 
              className={styles.lightboxImageWrap}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <Image 
                src={lightboxImage} 
                alt="Enlarged view" 
                fill 
                style={{ objectFit: 'contain' }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
      <Footer />
    </>
  );
}
