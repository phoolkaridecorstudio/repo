'use client';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function NumberCounter({ from = 0, to, duration = 2.5, suffix = '' }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { 
        duration: duration, 
        ease: [0.16, 1, 0.3, 1] // Custom ease out for premium feel
      });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref} style={{ display: 'inline-block' }}>{rounded}</motion.span>;
}
