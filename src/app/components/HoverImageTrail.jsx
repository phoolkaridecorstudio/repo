'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HoverImageTrail({ children, images = [], maxItems = 12 }) {
  const [trail, setTrail] = useState([]);
  const indexRef = useRef(0);
  const isEnabled = useRef(true);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isEnabled.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const id = Date.now() + Math.random();
    const imageSrc = images[indexRef.current % images.length];
    
    setTrail((prev) => {
      const newTrail = [...prev, { id, x, y, src: imageSrc }];
      if (newTrail.length > maxItems) {
        return newTrail.slice(newTrail.length - maxItems);
      }
      return newTrail;
    });

    indexRef.current += 1;
    isEnabled.current = false;
    setTimeout(() => { isEnabled.current = true; }, 70);

    setTimeout(() => {
      setTrail((prev) => prev.filter(t => t.id !== id));
    }, 800);
  };

  if (!images || images.length === 0) return <>{children}</>;

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {children}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 5 }}>
        <AnimatePresence>
          {trail.map((item) => (
            <motion.img
              key={item.id}
              src={item.src}
              initial={{ opacity: 0, scale: 0.5, x: item.x - 70, y: item.y - 90, rotate: Math.random() * 30 - 15 }}
              animate={{ opacity: 0.7, scale: 1, x: item.x - 70, y: item.y - 90, rotate: Math.random() * 10 - 5 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                width: '140px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(197, 151, 62, 0.4)',
                pointerEvents: 'none'
              }}
              alt=""
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
