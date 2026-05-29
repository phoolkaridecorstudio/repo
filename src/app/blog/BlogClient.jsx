'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { blogsData } from '../data/blogs';
import styles from './blogPage.module.css';

export default function BlogClient() {
  return (
    <>
      <Navbar />
      <main className={styles.blogPage}>
        <div className="container">
          <div className={styles.header}>
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Phoolkari Insights
            </motion.span>
            <motion.h1 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Event Decor <em>Journal</em>
            </motion.h1>
            <motion.div 
              className="gold-divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="line" /><span className="dot" /><span className="line" />
            </motion.div>
            <motion.p 
              className="section-desc" 
              style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover the latest trends, expert advice, and behind-the-scenes looks at luxury event planning and decoration in Punjab.
            </motion.p>
          </div>

          <div className={styles.grid}>
            {blogsData.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <Link href={`/blog/${blog.slug}`} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span className={styles.category}>{blog.category}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                    <h2 className={styles.title}>{blog.title}</h2>
                    <p className={styles.excerpt}>{blog.excerpt}</p>
                    <div className={styles.readMore}>
                      Read Article <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
