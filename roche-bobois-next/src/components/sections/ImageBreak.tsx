"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import { splitTextIntoWords } from '@/lib/split-text';

export default function ImageBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageRef.current;
    const text = textRef.current;
    if (!section || !imageContainer || !text) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=50%',
        pin: true,
        scrub: true,
      });

      // Zoom image while pinned
      gsap.to(imageContainer, {
        scale: 1.1,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=50%',
          scrub: true,
        },
      });

      // SplitText on quote
      const { words, revert } = splitTextIntoWords(text);
      gsap.from(words, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          once: true,
        },
      });

      return () => revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[75vh] min-h-[500px] max-md:h-[50vh] overflow-hidden">
      <div ref={imageRef} className="w-full h-full">
        <Image
          src="/images/gallery/RBSPT_Plaza and Porte Cochère.jpg"
          alt="Roche Bobois Plaza and Porte Cochère"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 flex items-end p-[60px] max-md:p-5"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,23,20,0.1) 0%, rgba(26,23,20,0.4) 100%)',
        }}
      >
        <div
          ref={textRef}
          className="font-cormorant font-light italic text-[clamp(1.5rem,3vw,2.5rem)] text-white max-w-[600px] leading-snug"
        >
          Where Parisian elegance meets the warmth of Florida&apos;s Gulf Coast
        </div>
      </div>
    </section>
  );
}
