'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch-capable
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    // Re-check on resize in case of hybrid devices
    window.addEventListener('resize', checkTouch);
    
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setHasMoved(true);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      initial={{ opacity: 0 }}
      animate={{
        x: mousePosition.x - (isHovering ? 25 : 12),
        y: mousePosition.y - (isHovering ? 25 : 12),
        opacity: hasMoved && isVisible ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.2 },
        x: { type: 'tween', ease: 'backOut', duration: 0.1 },
        y: { type: 'tween', ease: 'backOut', duration: 0.1 },
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 50 : 24,
          height: isHovering ? 50 : 24,
          backgroundColor: isHovering ? 'rgba(197, 151, 62, 0.1)' : 'transparent',
          border: '1.5px solid var(--gold)',
          borderRadius: isHovering ? '50%' : '12px 0 12px 0', // Petal shape to circle
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 15px rgba(197, 151, 62, 0.3)',
        }}
      />
      {/* Center dot */}
      <motion.div
        style={{
          position: 'absolute',
          width: 4,
          height: 4,
          backgroundColor: 'var(--gold)',
          borderRadius: '50%',
        }}
        animate={{ opacity: isHovering ? 0 : 1 }}
      />
    </motion.div>
  );
}
