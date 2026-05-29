'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Themes.module.css';
import BlurText from './BlurText';
import { themesData as themes } from '../data/content';

const MobileCardStack = ({ themes, headerInView }) => {
  const [cards, setCards] = useState(themes);
  const [exitX, setExitX] = useState(0);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50 || info.offset.x > 50) {
      setExitX(info.offset.x);
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
    }
  };

  return (
    <div className={styles.mobileStackContainer}>
      <motion.div
        className={styles.mobileHeader}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
      >
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>Trending Now</span>
        <h2 className="section-title" style={{ color: '#fff', display: 'flex', gap: '0.3em', flexWrap: 'wrap', justifyContent: 'center' }}>
          <BlurText text="Signature" delay={0.2} />
          <em style={{ color: 'var(--gold)' }}><BlurText text="Themes" delay={0.6} /></em>
        </h2>
        <div className="gold-divider">
          <span className="line" /><span className="dot" /><span className="line" />
        </div>
      </motion.div>

      <div className={styles.stackWrapper}>
        <AnimatePresence initial={false}>
          {cards.map((theme, index) => {
            if (index > 3) return null;
            const isTop = index === 0;
            return (
              <motion.div
                key={theme.id}
                className={styles.stackCard}
                style={{ zIndex: 10 - index }}
                initial={{ scale: 0.8, y: 40, opacity: 0 }}
                animate={{
                  scale: 1 - index * 0.05,
                  y: index * 18,
                  opacity: 1 - index * 0.2,
                  x: 0,
                }}
                exit={{ 
                  x: exitX > 0 ? 300 : -300, 
                  opacity: 0, 
                  transition: { duration: 0.3 } 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={isTop ? handleDragEnd : undefined}
                whileTap={isTop ? { scale: 0.98 } : {}}
              >
                <div className={styles.stackCardImage}>
                  <Image src={theme.image} alt={theme.title} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.stackCardOverlay} />
                </div>
                <div className={styles.stackCardContent}>
                  <span className={styles.stackCardTag}>{theme.tag}</span>
                  <h3 className={styles.stackCardTitle}>{theme.title}</h3>
                  <p className={styles.stackCardDesc}>{theme.desc}</p>
                  <div className={styles.stackSwipeHint}>Swipe to explore &rarr;</div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Themes() {
  const [hoveredTheme, setHoveredTheme] = useState(themes[0]);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="themes" className={styles.themes} ref={headerRef}>
      <div className={styles.contentContainer}>
        
        <MobileCardStack themes={themes} headerInView={headerInView} />

        <div className={styles.splitLayout}>
          {/* Left — Image Panel */}
          <div className={styles.imagePanel}>
            <div className={styles.bgReveal}>
              <AnimatePresence mode="wait">
                {hoveredTheme && (
                  <motion.div
                    key={hoveredTheme.id}
                    className={styles.bgImageWrap}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image src={hoveredTheme.image} alt={hoveredTheme.title} fill style={{ objectFit: 'cover' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className={styles.imagePanelOverlay} />
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredTheme?.id}
                className={styles.imagePanelNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {String(themes.indexOf(hoveredTheme) + 1).padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — List Panel */}
          <div className={styles.listPanel}>
            <motion.div
              className={styles.listHeader}
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
            >
              <span className="section-label" style={{ color: 'var(--gold-light)' }}>Trending Now</span>
              <h2 className="section-title" style={{ color: '#fff', display: 'flex', gap: '0.3em', flexWrap: 'wrap' }}>
                <BlurText text="Signature" delay={0.2} />
                <em style={{ color: 'var(--gold)' }}><BlurText text="Themes" delay={0.6} /></em>
              </h2>
              <div className="gold-divider" style={{ justifyContent: 'flex-start' }}>
                <span className="line" /><span className="dot" /><span className="line" />
              </div>
            </motion.div>

            <div className={styles.list}>
              {themes.map((theme, i) => (
                <motion.div
                  key={theme.id}
                  className={`${styles.listItem} ${hoveredTheme?.id === theme.id ? styles.active : ''}`}
                  onMouseEnter={() => setHoveredTheme(theme)}
                  onClick={() => setHoveredTheme(theme)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.itemNumber}>0{i + 1}</div>
                  <h3 className={styles.itemTitle}>{theme.title}</h3>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemTag}>{theme.tag}</span>
                    <p className={styles.itemDesc}>{theme.desc}</p>
                  </div>
                  <div className={styles.itemArrow}>→</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
