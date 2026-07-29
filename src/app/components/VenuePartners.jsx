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
          <h2 className="section-title">Preferred <em>Partners</em></h2>
        </div>

        <div className={styles.partnerList}>
          {venueItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.partnerLogoBlock}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.partnerLogoWrap}>
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
