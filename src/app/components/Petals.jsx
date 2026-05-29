'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generates random petals
export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate 15 petals with random starting positions, sizes, and animations
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random start horizontal %
      size: Math.random() * 10 + 10, // 10px to 20px
      delay: Math.random() * 10, // random start delay
      duration: Math.random() * 5 + 10, // fall duration 10-15s
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 360 + 360,
      color: Math.random() > 0.5 ? '#eab308' : '#c5973e', // Marigold yellow and Gold
    }));
    setPetals(generated);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            background: petal.color,
            borderRadius: '15px 0 15px 0',
            opacity: 0.6,
            boxShadow: `0 0 10px ${petal.color}40`,
            willChange: 'transform',
          }}
          initial={{ y: -100 }}
          animate={{
            y: '120vh',
            rotate: [petal.rotationStart, petal.rotationEnd],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0], // slight horizontal sway
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
