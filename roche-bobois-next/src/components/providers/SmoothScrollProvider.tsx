"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import { ScrollTrigger } from '@/lib/gsap-config';

function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
