'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Word({ word, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <motion.span style={{ opacity, color: 'inherit', display: 'inline-block' }}>
      {word}
    </motion.span>
  );
}

export default function ScrollTextReveal({ text, className = '' }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em' }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />;
      })}
    </p>
  );
}
