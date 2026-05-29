'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Do you provide decor services outside of Amritsar?",
    answer: "Yes, we proudly serve clients across Punjab including Jalandhar, Ludhiana, Chandigarh, and even handle destination weddings in Rajasthan upon request."
  },
  {
    question: "How far in advance should we book your services?",
    answer: "For large scale weddings, we recommend booking at least 3-6 months in advance to secure your dates and allow ample time for custom fabrication and design planning."
  },
  {
    question: "Do you offer custom themes or only pre-designed packages?",
    answer: "Everything we do is bespoke. While we have signature themes, our Creative Director works directly with you to craft a 100% unique design tailored to your vision and venue."
  },
  {
    question: "What is your starting price for wedding decor?",
    answer: "Our luxury wedding decor services are fully customized based on venue size, floral choices, and structural requirements. Please contact us for a detailed, personalized quote."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={styles.faqSection} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <motion.div 
          ref={headerRef}
          className={styles.faqHeader}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Frequently Asked <em>Questions</em></h2>
          <div className="gold-divider">
            <span className="line" /><span className="dot" /><span className="line" />
          </div>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
