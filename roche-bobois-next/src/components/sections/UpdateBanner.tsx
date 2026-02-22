"use client";

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import { splitTextIntoWords } from '@/lib/split-text';

export default function UpdateBanner() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const { words, revert } = splitTextIntoWords(el);

    const tween = gsap.from(words, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      tween.kill();
      revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <section className="bg-black text-white py-20 px-10 max-md:py-[50px] max-md:px-4 text-center">
      <div className="max-w-[800px] mx-auto">
        <div className="inline-block font-dm-sans text-[0.65rem] tracking-[0.3em] uppercase text-magenta-light border border-magenta py-2 px-5 mb-[30px]">
          Important Update
        </div>
        <h2
          ref={headingRef}
          className="font-cormorant font-light text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight mb-[25px]"
        >
          100% Traditional Luxury Condominiums
        </h2>
        <p className="text-base text-white/60 leading-[1.8] max-w-[600px] mx-auto">
          For the sophisticated buyer, privacy and permanence are paramount. The previously proposed
          rooftop public bar and short-term hotel rental allowances have been entirely eliminated —
          guaranteeing a quiet, highly secure, and private residential enclave for owners. No condotel.
          Pure ownership.
        </p>
      </div>
    </section>
  );
}
