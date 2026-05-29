'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BlurText({
  text,
  delay = 0,
  className = '',
  as: Component = 'span'
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20,
    },
  };

  return (
    <Component ref={ref} className={className}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: 'inline-block', marginRight: '0.2em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
