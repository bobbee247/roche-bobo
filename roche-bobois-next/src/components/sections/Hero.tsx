"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/gsap-config';
import { splitTextIntoWords } from '@/lib/split-text';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // SplitText on title
  useEffect(() => {
    if (!titleRef.current) return;

    const { words, revert } = splitTextIntoWords(titleRef.current);

    gsap.from(words, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.5,
    });

    return () => revert();
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        autoPlay
        muted
        loop
        playsInline
        poster="https://clinicboom.co/wp-content/uploads/maxresdefault.jpg"
      >
        <source
          src="https://clinicboom.co/wp-content/uploads/roche-bobois-residences-st-petersburg-florida.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,23,20,0.3) 0%, rgba(26,23,20,0.15) 40%, rgba(26,23,20,0.5) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[3] text-center px-5">
        <motion.div
          className="font-caveat text-[clamp(1.5rem,3vw,2rem)] text-magenta-light tracking-[0.15em] leading-none mb-5"
          {...fadeUp(0.3)}
        >
          The Art of Living — St. Petersburg, Florida
        </motion.div>

        <h1
          ref={titleRef}
          className="font-cormorant font-light text-[clamp(2.5rem,7vw,6rem)] text-white leading-[1.05] tracking-tight mb-2.5"
        >
          L&apos;Art de Vivre
        </h1>

        <motion.div
          className="font-dm-sans text-[clamp(0.7rem,1.2vw,0.85rem)] text-white/70 tracking-[0.35em] uppercase mt-[25px]"
          {...fadeUp(0.8)}
        >
          29 Stories &nbsp;&middot;&nbsp; 164 Residences &nbsp;&middot;&nbsp; Completion 2029
        </motion.div>

        <motion.div
          className="w-px h-[60px] bg-magenta mx-auto mt-[30px]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 60 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] font-dm-sans text-[0.65rem] tracking-[0.3em] uppercase text-white/50"
        style={{ writingMode: 'vertical-rl' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Discover
      </motion.div>
    </section>
  );
}
