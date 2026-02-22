"use client";

import { useRef, useEffect, ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

interface SectionRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    };

    if (direction === 'up') fromVars.y = 30;
    if (direction === 'left') fromVars.x = -40;
    if (direction === 'right') fromVars.x = 40;

    const tween = gsap.from(el, fromVars);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
