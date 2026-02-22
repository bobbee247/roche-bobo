"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap-config';

/*
 * ──────────────────────────────────────────────────
 *  ADD YOUR IMAGES HERE
 *  Just add objects with src + alt to this array.
 *  The gallery auto-adapts to any number of images.
 * ──────────────────────────────────────────────────
 */
const allImages = [
  { src: '/images/gallery/RBSPT_Pool Toward Hot Tub.jpg', alt: 'Pool toward hot tub' },
  { src: '/images/gallery/RBSPT_Penthouse Crown.jpg', alt: 'Penthouse crown' },
  { src: '/images/gallery/RBSPT_Residence Living Space.jpg', alt: 'Residence living space' },
  { src: '/images/gallery/RBSPT_Garden Arrival.jpg', alt: 'Garden arrival' },
  { src: '/images/gallery/RBSPT_Pool from South East.jpg', alt: 'Pool from south east' },
  { src: '/images/gallery/RBSPT_Lobby Entrance.jpg', alt: 'Lobby entrance' },
  { src: '/images/gallery/RBSPT_Fireside Lounge.jpg', alt: 'Fireside lounge' },
  { src: '/images/gallery/RBSPT_Residence Owner\'s Suite.jpg', alt: "Owner's suite" },
  { src: '/images/gallery/RBSPT_Poolside Cabanas.jpg', alt: 'Poolside cabanas' },
  { src: '/images/gallery/RBSPT_Owner\'s Bathroom.jpg', alt: "Owner's bathroom" },
  { src: '/images/gallery/RBSPT_Fitness Center.jpg', alt: 'Fitness center' },
  { src: '/images/gallery/RBSPT_Plaza and Porte Cochère.jpg', alt: 'Plaza and porte cochère' },
  { src: '/images/gallery/RBSPT_2nd Bedroom.jpg', alt: 'Second bedroom' },
  { src: '/images/gallery/RBSPT_Owner\'s Lounge.jpg', alt: "Owner's lounge" },
  { src: '/images/gallery/RBSPT_Summer Kitchen, Al Fresco Dining.jpg', alt: 'Summer kitchen and al fresco dining' },
];

// Split images into two rows
const topRow = allImages.filter((_, i) => i % 2 === 0); // 8 images
const bottomRow = allImages.filter((_, i) => i % 2 === 1); // 7 images

export default function GalleryStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topTrack = topRowRef.current;
    const bottomTrack = bottomRowRef.current;
    if (!section || !topTrack || !bottomTrack) return;

    const ctx = gsap.context(() => {
      const topDistance = topTrack.scrollWidth - window.innerWidth;
      const bottomDistance = bottomTrack.scrollWidth - window.innerWidth;

      // Top row scrolls LEFT (normal direction)
      gsap.to(topTrack, {
        x: -topDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          end: () => `+=${Math.max(topDistance, bottomDistance)}`,
          invalidateOnRefresh: true,
        },
      });

      // Bottom row scrolls RIGHT (opposite direction — starts offset left)
      gsap.fromTo(
        bottomTrack,
        { x: -bottomDistance },
        {
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: 0.8,
            end: () => `+=${Math.max(topDistance, bottomDistance)}`,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#E6A8C7' }}
    >
      {/* Section heading */}
      <div className="absolute top-10 left-10 z-10 max-md:top-6 max-md:left-4">
        <div className="font-caveat text-[1.4rem] text-white leading-none mb-1">
          The Gallery
        </div>
        <div className="font-dm-sans text-[0.65rem] tracking-[0.3em] uppercase text-white/60">
          Scroll to explore
        </div>
      </div>

      {/* Two-row gallery */}
      <div className="flex flex-col justify-center h-full gap-4">
        {/* Top row — scrolls left */}
        <div
          ref={topRowRef}
          className="flex gap-4 flex-shrink-0"
          style={{ width: 'max-content' }}
        >
          {topRow.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{ width: 520, height: 'calc(50vh - 2rem)' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
                sizes="520px"
              />
              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom row — scrolls right */}
        <div
          ref={bottomRowRef}
          className="flex gap-4 flex-shrink-0"
          style={{ width: 'max-content' }}
        >
          {bottomRow.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{ width: 520, height: 'calc(50vh - 2rem)' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
                sizes="520px"
              />
              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
