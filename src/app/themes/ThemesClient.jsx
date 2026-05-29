'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { themesData } from '../data/content';
import styles from './themesPage.module.css';

// Expand data for deep detail view
const expandedThemesData = themesData.map(theme => {
  // Mock expanded features based on the theme ID
  const features = {
    'rajasthani': ['Handcrafted Kundan props', 'Marigold cascades', 'Vintage brass lighting', 'Traditional archways'],
    'garden': ['Fairy light canopies', 'Lush botanical arches', 'Pastel floral arrangements', 'Wooden rustic seating'],
    'celestial': ['Fiber optic star ceilings', 'Deep navy velvet drapes', 'Crystal chandeliers', 'Silver & chrome accents'],
    'rustic': ['Wine barrel tables', 'Edison bulb string lights', 'Pampas grass decor', 'Reclaimed wood structures'],
    'minimalist': ['Acrylic transparent chairs', 'Monochromatic flowers', 'Geometric metal frames', 'Soft ambient up-lighting']
  };

  return {
    ...theme,
    features: features[theme.id] || ['Custom floral design', 'Premium lighting', 'Bespoke props']
  };
});

export default function ThemesClient() {
  return (
    <>
      <Navbar />
      <main className={styles.themesPage}>
        <div className="container">
          <div className={styles.header}>
            <span className="section-label">Immersive Worlds</span>
            <h1 className="section-title">Signature <em>Themes</em></h1>
            <div className="gold-divider">
              <span className="line" /><span className="dot" /><span className="line" />
            </div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Explore our meticulously crafted design themes. Each concept is a fully immersive environment designed to transport you and your guests to another world.
            </p>
          </div>

          <div className={styles.themesList}>
            {expandedThemesData.map((theme, index) => (
              <motion.div 
                key={theme.id} 
                className={styles.themeRow}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.imageWrap}>
                  <Image 
                    src={theme.image} 
                    alt={theme.title} 
                    fill 
                    sizes="(max-width: 992px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.content}>
                  <span className={styles.tag}>{theme.tag}</span>
                  <h2 className={styles.title}>{theme.title}</h2>
                  <p className={styles.desc}>{theme.desc}. Every detail is tailored to fit your venue, ensuring a breathtaking, cohesive aesthetic from the entrance to the main stage.</p>
                  
                  <ul className={styles.featuresList}>
                    {theme.features.map((feature, i) => (
                      <li key={i}>
                        <span className={styles.checkIcon}>✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="/#contact" className="btn btn--gold">Inquire About This Theme</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
