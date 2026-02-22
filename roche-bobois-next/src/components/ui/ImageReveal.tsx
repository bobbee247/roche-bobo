"use client";

import { useRef, useEffect, ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

export default function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    if (!container || !mask) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        once: true,
      },
    });

    tl.to(mask, {
      scaleX: 0,
      transformOrigin: 'right center',
      duration: 1,
      ease: 'power3.inOut',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className || ''}`}>
      {children}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-magenta z-10"
        style={{ transformOrigin: 'right center' }}
      />
    </div>
  );
}
