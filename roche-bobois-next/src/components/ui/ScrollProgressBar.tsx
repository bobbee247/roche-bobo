"use client";

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-magenta z-[9998]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
