'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Marquee.module.css';

const venueItems = [
  { name: 'Regalia The Forest Resort', src: '/images/logos/regalia.png' },
  { name: 'Utsav The Forest Resort', src: '/images/logos/utsav.png' },
  { name: 'Moulsari Farms', src: '/images/logos/moulsari-new.png' },
  { name: 'Hazelnut Villas', src: '/images/logos/hazelnut.png' },
  { name: 'Le Meridien', src: '/images/logos/lemeridien.png' }
];

export default function VenuePartners() {
  return (
    <section className={`${styles.marqueeSection} ${styles.venueSection}`}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h2 className="section-title">Preferred <em>Partners</em></h2>
        </div>
      </div>
      
      <div className={styles.marqueeContainer}>
        {/* Left/Right Fades */}
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ["-50%", "0%"] }} // Scroll right for variation
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate set for infinite loop */}
          <div className={styles.marqueeContent}>
            {venueItems.map((item, idx) => (
              <div key={idx} className={styles.venueLogo}>
                <Image src={item.src} alt={item.name} width={300} height={140} className={styles.venueImage} />
              </div>
            ))}
            {venueItems.map((item, idx) => (
              <div key={`extra-${idx}`} className={styles.venueLogo}>
                <Image src={item.src} alt={item.name} width={300} height={140} className={styles.venueImage} />
              </div>
            ))}
          </div>
          <div className={styles.marqueeContent}>
            {venueItems.map((item, idx) => (
              <div key={`dup-${idx}`} className={styles.venueLogo}>
                <Image src={item.src} alt={item.name} width={300} height={140} className={styles.venueImage} />
              </div>
            ))}
            {venueItems.map((item, idx) => (
              <div key={`dup-extra-${idx}`} className={styles.venueLogo}>
                <Image src={item.src} alt={item.name} width={300} height={140} className={styles.venueImage} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
