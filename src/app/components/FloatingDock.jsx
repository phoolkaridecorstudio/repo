'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './FloatingDock.module.css';

const items = [
  { 
    id: 'home', 
    label: 'Home', 
    href: '#hero', 
    icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> 
  },
  { 
    id: 'services', 
    label: 'Services', 
    href: '#services', 
    icon: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></> 
  },
  { 
    id: 'gallery', 
    label: 'Gallery', 
    href: '#gallery', 
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></> 
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    href: '#contact', 
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> 
  }
];

export default function FloatingDock() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.dockWrapper}>
      <motion.div 
        className={styles.dock}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActive(item.id)}
            className={styles.dockItem}
            aria-label={item.label}
            title={item.label}
          >
            <div className={styles.iconWrapper}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={active === item.id ? "var(--gold)" : "var(--text-muted)"} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ transition: 'stroke 0.3s' }}
              >
                {item.icon}
              </svg>
            </div>
            <span className={styles.label} style={{ color: active === item.id ? "var(--gold)" : "var(--text-muted)" }}>
              {item.label}
            </span>
            {active === item.id && (
              <motion.div
                layoutId="dock-indicator"
                className={styles.indicator}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
