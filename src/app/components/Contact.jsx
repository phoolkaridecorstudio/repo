'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Contact.module.css';
import Spotlight from './Spotlight';
import { trackLeadSubmit, trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

export default function Contact() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const event = formData.get('event');
    const date = formData.get('date');
    const message = formData.get('message');

    // Track lead generation and WhatsApp conversion
    trackLeadSubmit({ event, name, phone });
    trackWhatsAppClick('contact_form');
    
    const text = `Hello Phoolkari Decor Studio,

I would like to inquire about your decor services. Please find my event details below:

*👤 Contact Details*
• Name: ${name}
• Phone: ${phone}
• Email: ${email}

*🎉 Event Information*
• Type: ${event}
• Date: ${date || 'Not specified'}

*✨ Our Vision / Requirements*
${message}

Looking forward to discussing this further!`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919155703155?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSending(false);
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Spotlight className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <motion.div
          ref={headerRef}
          className={styles.sectionHeaderLeft}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionWatermark}>05</div>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let&apos;s Create <em>Magic</em></h2>
          <div className="gold-divider" style={{ justifyContent: 'flex-start' }}>
            <span className="line" /><span className="dot" /><span className="line" />
          </div>
          <p className="section-desc" style={{ margin: 0, textAlign: 'left' }}>Tell us about your vision and we&apos;ll craft a quote tailored to your celebration</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Info Card */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.infoTitle}>Reach Out to Us</h3>
            <p className={styles.infoText}>
              Whether it&apos;s a grand wedding or an intimate celebration, we&apos;d love to hear about your vision. Get in touch and let&apos;s start planning.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919155703155" onClick={() => trackPhoneClick('+919155703155', 'contact_card')}>+91 91557-03155</a>
                  <a href="tel:+919699033155" onClick={() => trackPhoneClick('+919699033155', 'contact_card')}>+91 96990-33155</a>
                </div>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@phoolkaridecorstudio.in">info@phoolkaridecorstudio.in</a>
                </div>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Studio Location</strong>
                  <span>Amritsar, Punjab, India</span>
                  <a
                    href="https://maps.google.com/?q=Amritsar+Punjab+Phoolkari+Decor+Studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <a href="https://www.instagram.com/phoolkaridecorstudio/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
              <a href="https://www.facebook.com/phoolkaridecorstudio/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://in.pinterest.com/phoolkaridecorstudio/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Pinterest"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.18c-.03-.96-.06-2.45.05-3.51.1-.96.65-5.55.65-5.55s-.17-.33-.17-.82c0-.77.45-1.34 1-1.34.48 0 .7.36.7.79 0 .48-.31 1.2-.47 1.86-.13.56.28 1.01.83 1.01 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.29-2.35-2.29-1.6 0-2.54 1.2-2.54 2.44 0 .48.19.99.42 1.27.05.06.05.11.04.17-.04.18-.14.58-.16.66-.03.11-.09.13-.21.08-.79-.37-1.28-1.52-1.28-2.45 0-1.99 1.45-3.83 4.18-3.83 2.19 0 3.9 1.56 3.9 3.65 0 2.18-1.37 3.93-3.28 3.93-.64 0-1.24-.33-1.45-.72l-.39 1.5c-.14.55-.53 1.24-.79 1.66A12 12 0 1 0 12 0z"/></svg></a>
            </div>

            <a
              href="https://wa.me/919155703155?text=Hi%2C%20I%27m%20interested%20in%20your%20decor%20services"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--whatsapp btn--full`}
              style={{ marginTop: '24px' }}
              onClick={() => trackWhatsAppClick('contact_direct_button')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.336 0-4.512-.743-6.289-2.007l-.356-.264-3.688 1.237 1.237-3.688-.264-.356A9.953 9.953 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input id="contact-name" type="text" name="name" placeholder=" " autoComplete="name" required />
                <label htmlFor="contact-name">Your Name</label>
              </div>
              <div className={styles.formGroup}>
                <input id="contact-phone" type="tel" name="phone" placeholder=" " autoComplete="tel" required />
                <label htmlFor="contact-phone">Phone Number</label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <input id="contact-email" type="email" name="email" placeholder=" " autoComplete="email" required />
              <label htmlFor="contact-email">Email Address</label>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <select id="contact-event" name="event" defaultValue="" required>
                  <option value="" disabled>Select event type</option>
                  <option>Wedding</option>
                  <option>Birthday / Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Festival / Cultural</option>
                  <option>Theme Party</option>
                  <option>Other</option>
                </select>
                <label htmlFor="contact-event">Event Type</label>
              </div>
              <div className={styles.formGroup}>
                <input id="contact-date" type="date" name="date" placeholder=" " />
                <label htmlFor="contact-date">Event Date</label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <textarea id="contact-message" name="message" rows="4" placeholder=" " required></textarea>
              <label htmlFor="contact-message">Tell Us About Your Vision</label>
            </div>

            <button type="submit" className="btn btn--gold btn--full" disabled={sending}>
              {sending ? 'Redirecting...' : submitted ? '✓ Sent to WhatsApp!' : 'Send Enquiry via WhatsApp'}
              {!sending && !submitted && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
              )}
            </button>

            {submitted && (
              <motion.p
                className={styles.successMsg}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! We&apos;ll get back to you within 24 hours.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </Spotlight>
  );
}
