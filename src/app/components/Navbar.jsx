'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Ripple from './Ripple';



export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Themes', href: '/themes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ];

  const checkIsActive = (href) => {
    if (pathname === '/' && href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      return activeSection === sectionId;
    }
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, href) => {
    // No hash — normal page navigation
    if (!href.includes('#')) {
      if (menuOpen) setMenuOpen(false);
      return;
    }

    const hash = href.includes('/#') ? href.replace('/#', '#') : href;

    // If we're not on the homepage, let the browser navigate to /#section naturally
    if (window.location.pathname !== '/') {
      if (menuOpen) setMenuOpen(false);
      return;
    }

    e.preventDefault();

    if (menuOpen) {
      setMenuOpen(false);
      // Wait for menu close animation, then scroll
      setTimeout(() => scrollToHash(hash), 350);
    } else {
      scrollToHash(hash);
    }
  };


  return (
    <>
      <header className={`${styles.navbar} ${scrolled || pathname !== '/' ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" onClick={(e) => handleLinkClick(e, '/')} className={styles.logo}>
            <Image src="/images/logo.svg" alt="Phoolkari Decor Studio" width={200} height={60} style={{ objectFit: 'contain' }} priority />
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${checkIsActive(link.href) ? styles.active : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Link href="/#contact" className={`btn btn--gold ${styles.cta}`} onClick={(e) => handleLinkClick(e, '/#contact')}>
            Book Consultation
            <Ripple />
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileInner}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image src="/images/logo.svg" alt="Phoolkari Decor Studio" width={180} height={50} className={styles.mobileLogo} style={{ objectFit: 'contain' }} priority />
              <nav className={styles.mobileNav}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <Link href="/#contact" className="btn btn--gold" onClick={(e) => handleLinkClick(e, '/#contact')} style={{ width: '100%', marginTop: '2rem' }}>
                Book Consultation
                <Ripple />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
