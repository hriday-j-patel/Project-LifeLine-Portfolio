'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function StaggeredFadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`staggered-fade-in ${className}`}
      data-component-list="StaggeredFadeIn"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            opacity: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
            y: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            delay: index * 0.15,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
