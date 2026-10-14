'use client';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { trackPhoneClick } from '../utils/analytics';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.ornament} />
      <div className={styles.watermark}>Phoolkari</div>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image src="/images/logo.png" alt="Phoolkari Decor Studio" width={400} height={200} className={styles.logo} style={{ objectFit: 'contain' }} />
            <p className={styles.tagline}>Where Every Occasion Becomes a Masterpiece.</p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/phoolkaridecorstudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
              <a href="https://www.facebook.com/phoolkaridecorstudio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://in.pinterest.com/phoolkaridecorstudio/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.18c-.03-.96-.06-2.45.05-3.51.1-.96.65-5.55.65-5.55s-.17-.33-.17-.82c0-.77.45-1.34 1-1.34.48 0 .7.36.7.79 0 .48-.31 1.2-.47 1.86-.13.56.28 1.01.83 1.01 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.29-2.35-2.29-1.6 0-2.54 1.2-2.54 2.44 0 .48.19.99.42 1.27.05.06.05.11.04.17-.04.18-.14.58-.16.66-.03.11-.09.13-.21.08-.79-.37-1.28-1.52-1.28-2.45 0-1.99 1.45-3.83 4.18-3.83 2.19 0 3.9 1.56 3.9 3.65 0 2.18-1.37 3.93-3.28 3.93-.64 0-1.24-.33-1.45-.72l-.39 1.5c-.14.55-.53 1.24-.79 1.66A12 12 0 1 0 12 0z"/></svg></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/themes">Themes</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.links}>
              <li><Link href="/services/wedding-decor">Wedding Decor</Link></li>
              <li><Link href="/services/birthday-parties">Birthday Parties</Link></li>
              <li><Link href="/services/corporate-events">Corporate Events</Link></li>
              <li><Link href="/services/festival-decor">Festival Decor</Link></li>
              <li><Link href="/themes">Theme Parties</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.heading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919155703155" onClick={() => trackPhoneClick('+919155703155', 'footer')}>+91 91557-03155</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919699033155" onClick={() => trackPhoneClick('+919699033155', 'footer')}>+91 96990-33155</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@phoolkaridecorstudio.in">info@phoolkaridecorstudio.in</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Amritsar, Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Phoolkari Decor Studio. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <span className={styles.bottomDot} />
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <p>
            Crafted with <span className={styles.heart}>♥</span> in Amritsar
          </p>
        </div>
      </div>
    </footer>
  );
}
