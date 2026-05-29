'use client';
import { useState, useEffect } from 'react';
import styles from './Ripple.module.css';

export default function Ripple({ color = 'rgba(255, 255, 255, 0.25)', duration = 600 }) {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const timeouts = ripples.map((ripple) =>
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, duration)
    );
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [ripples, duration]);

  const addRipple = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    
    let clientX, clientY;
    if (e.type === 'touchstart') {
       clientX = e.touches[0].clientX;
       clientY = e.touches[0].clientY;
    } else {
       clientX = e.clientX;
       clientY = e.clientY;
    }

    const x = clientX - rect.left - size / 2;
    const y = clientY - rect.top - size / 2;

    setRipples((prev) => [...prev, { x, y, size, id: Date.now() + Math.random() }]);
  };

  return (
    <div
      className={styles.rippleContainer}
      onMouseDown={addRipple}
      onTouchStart={addRipple}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={styles.ripple}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
            animationDuration: `${duration}ms`,
          }}
        />
      ))}
    </div>
  );
}
