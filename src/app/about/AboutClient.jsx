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
    title: 'Customized For You',
    desc: 'No two weddings are the same. We design your stage, mandap, and flowers according to your personal taste, colors, and budget.'
  },
  {
    icon: '🌿',
    title: 'Fresh Flowers & Quality Props',
    desc: 'We use fresh, fragrant flowers, neat fabric drapes, and premium lighting so your venue looks stunning in person and in photos.'
  },
  {
    icon: '🤝',
    title: 'On-Time, Stress-Free Setup',
    desc: 'Our experienced team completes all setup work well before guests arrive, so you and your family never have to worry.'
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
              src="/images/portfolio/event-5.webp" 
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
              About Phoolkari
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
        <FounderNote asH1={false} />

        {/* New Core Values Section */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.valuesHeader}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">Why Families <em>Trust Us</em></h2>
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
