'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import FounderNote from '../components/FounderNote';
import styles from './aboutPage.module.css';

const coreValues = [
  {
    icon: '✨',
    title: 'Bespoke Artistry',
    desc: 'We don\'t do cookie-cutter. Every setup is a blank canvas, completely custom-designed to reflect your personality and style.'
  },
  {
    icon: '🌿',
    title: 'Premium Quality',
    desc: 'From fresh imported florals to hand-crafted props, we source only the absolute highest quality materials for your events.'
  },
  {
    icon: '🤝',
    title: 'Flawless Execution',
    desc: 'Our dedicated team of artisans and planners work tirelessly behind the scenes so you can simply arrive and enjoy your celebration.'
  }
];

export default function AboutClient() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutPage}>
        {/* Custom About Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <Image 
              src="/images/portfolio/event-5.png" 
              alt="Phoolkari Decor Studio luxury event setup" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The Studio
            </motion.span>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who We <em>Are</em>
            </motion.h1>
            <motion.div 
              className="gold-divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="line" /><span className="dot" /><span className="line" />
            </motion.div>
          </div>
        </section>

        {/* Existing Founder Note component */}
        <FounderNote />

        {/* New Core Values Section */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.valuesHeader}>
              <span className="section-label">Our Philosophy</span>
              <h2 className="section-title">The Phoolkari <em>Difference</em></h2>
              <div className="gold-divider">
                <span className="line" /><span className="dot" /><span className="line" />
              </div>
            </div>

            <div className={styles.valuesGrid}>
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
