"use client";

import { useEffect, useState, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
    };

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover], input, select');
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const ring = ringRef.current;
    if (!ring) return;
    gsap.to(ring, {
      width: hovered ? 50 : 36,
      height: hovered ? 50 : 36,
      borderColor: hovered ? '#D94F8E' : 'rgba(217, 79, 142, 0.4)',
      duration: 0.3,
    });
  }, [hovered, mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#D94F8E',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(217, 79, 142, 0.4)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
