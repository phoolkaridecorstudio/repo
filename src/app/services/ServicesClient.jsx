'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { servicesData } from '../data/content';
import styles from './servicesPage.module.css';

export default function ServicesClient() {
  return (
    <>
      <Navbar />
      <main className={styles.servicesPage}>
        <div className="container">
          <div className={styles.header}>
            <span className="section-label">What We Offer</span>
            <h1 className="section-title" style={{ color: 'var(--black)' }}>Our <em>Expertise</em></h1>
            <div className="gold-divider">
              <span className="line" /><span className="dot" /><span className="line" />
            </div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              From concept to creation, we handle every detail to deliver a flawless experience tailored to your unique celebration.
            </p>
          </div>

          <div className={styles.servicesList}>
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id} 
                className={styles.serviceRow}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.imageWrap}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 899px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{service.title}</h2>
                  <p className={styles.desc}>{service.desc}</p>
                  <a href={`/services/${service.id}`} className={`btn btn--gold ${styles.btn}`}>
                    Explore {service.title}
                  </a>
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
