"use client";

import { useState } from 'react';
import { useLenis } from 'lenis/react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useLenis((lenis) => {
    setProgress(lenis.progress);
  });

  return progress;
}
