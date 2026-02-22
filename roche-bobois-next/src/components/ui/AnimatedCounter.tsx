"use client";

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ target, suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };
    const el = ref.current;

    const tween = gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      snap: { value: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = obj.value.toLocaleString() + suffix;
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [target, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
