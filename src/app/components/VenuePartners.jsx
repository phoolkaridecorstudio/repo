'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Marquee.module.css';

const venueItems = [
  { name: 'Le Meridien', src: '/images/logos/lemeridien.jpeg' },
  { name: 'Welcomhotel', src: '/images/logos/welcomhotel.png' },
  { name: 'Radisson Blu', src: '/images/logos/radissonblu.png' },
  { name: 'Voco', src: '/images/logos/voco.png' },
  { name: 'RAAS', src: '/images/logos/raas.png' },
  { name: 'Regalia The Forest Resort', src: '/images/logos/regalia.png' },
  { name: 'Utsav The Forest Resort', src: '/images/logos/utsav.png' },
];

export default function VenuePartners() {
  return (
    <section className={styles.partnerSection}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Where We Work</span>
          <h2 className="section-title">Top Hotels &amp; <em>Resorts We Decorate</em></h2>
          <div className="gold-divider">
            <span className="line" /><span className="dot" /><span className="line" />
          </div>
          <p className="section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
            We regularly decorate weddings and parties at Amritsar&apos;s top 5-star hotels, luxury banquets, and private farmhouses.
          </p>
        </div>

        <div className={styles.partnerGrid}>
          {venueItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.partnerCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className={styles.partnerLogoWrap}>
                <Image
                  src={item.src}
                  alt={`${item.name} Amritsar partner logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 50vw, 260px"
                />
              </div>
              <h3 className={styles.partnerName}>{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
