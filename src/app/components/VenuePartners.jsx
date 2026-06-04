'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Marquee.module.css';

const venueItems = [
  { name: 'Regalia The Forest Resort', src: '/images/logos/regalia.png' },
  { name: 'Utsav The Forest Resort', src: '/images/logos/utsav.png' },
  { name: 'Moulsari Farms', src: '/images/logos/moulsari-new.png' },
  { name: 'Hazelnut Villas', src: '/images/logos/hazelnut.png' },
  { name: 'Le Meridien', src: '/images/logos/lemeridien.png' },
  { name: 'JW Marriott', src: '/images/logos/jw-marriott.png' },
  { name: 'Umaid Bhawan Palace', src: '/images/logos/umaid-bhawan.png' },
  { name: 'Welcomhotel', src: '/images/logos/welcomhotel.png' },
  { name: 'RAAS', src: '/images/logos/raas.png' },
  { name: 'Rajmahal Palace', src: '/images/logos/rajmahal-palace.png' }
];

// Duplicate 4x for seamless infinite loop
const duplicated = [...venueItems, ...venueItems, ...venueItems, ...venueItems];

export default function VenuePartners() {
  return (
    <section className={`${styles.marqueeSection} ${styles.venueSection}`}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '16px' }}>
          <h2 className="section-title">Preferred <em>Partners</em></h2>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 35, repeat: Infinity }}
        >
          {duplicated.map((item, idx) => (
            <div key={idx} className={styles.venueLogo}>
              <div className={styles.venueImageWrap}>
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
