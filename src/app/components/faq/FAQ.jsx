'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Who is the best event planner and decor company in Amritsar?",
    answer: "Phoolkari Decor Studio is widely recognized as the premier luxury event planner and best decor company in Amritsar. We specialize in transforming venues into breathtaking experiences for weddings, corporate events, and grand celebrations across Punjab."
  },
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
    question: "What is your starting price for wedding decor in Punjab?",
    answer: "Our luxury wedding decor services are fully customized based on venue size, floral choices, and structural requirements. Mandap and stage setups typically range from ₹1.5 Lakhs to ₹6 Lakhs, with grand 5-star ballroom and German hanger productions customized from ₹5 Lakhs onwards."
  },
  {
    question: "Which luxury hotels and venues in Amritsar do you decorate?",
    answer: "We have extensive on-site experience decorating premier venues in Amritsar, including Radisson Blu Hotel (Grand Ballroom), Taj Swarna (Trinity Hall), Hyatt Regency, Welcomhotel by ITC, and exclusive private farmhouses along Airport Road and GT Road Bypass."
  },
  {
    question: "What does your Haldi and Mehndi decoration service include?",
    answer: "Our Haldi and Mehndi setups feature fresh marigold (genda phool) cascades, brass urulis with floating lotuses, traditional Punjabi phulkari canopies, floral jhulas (swings), and dedicated flower shower zones."
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
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {faq.question}
                <span className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`} aria-hidden="true">+</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
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
