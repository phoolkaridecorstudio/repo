'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import styles from './blogPost.module.css';

export default function BlogPostClient({ post }) {
  return (
    <>
      <Navbar />
      <main className={styles.articlePage}>
        <div className="container">
          <div className={styles.hero}>
            <Link href="/blog" className={styles.backBtn}>
              ← Back to Journal
            </Link>
            <motion.div 
              className={styles.meta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.category}>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </motion.div>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {post.title}
            </motion.h1>
            <motion.div 
              className={styles.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              By {post.author}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className={styles.heroImageWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ objectFit: 'cover' }} 
            priority
          />
        </motion.div>

        <motion.article 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <div className="gold-divider" style={{ margin: '0 auto 40px' }}>
            <span className="line" /><span className="dot" /><span className="line" />
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '20px' }}>Share this article</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
             {/* Mock share buttons */}
            <a href="#" className="btn btn--outline-light" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Facebook</a>
            <a href="#" className="btn btn--outline-light" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Twitter</a>
            <a href="#" className="btn btn--outline-light" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>LinkedIn</a>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
