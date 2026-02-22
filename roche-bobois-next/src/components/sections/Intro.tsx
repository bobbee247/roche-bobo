"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import ImageReveal from '@/components/ui/ImageReveal';
import SectionReveal from '@/components/ui/SectionReveal';

export default function Intro() {
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax on image
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <section className="grain-section py-[120px] px-10 max-md:py-[70px] max-md:px-4 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-[80px] items-center">
        {/* Left: Image */}
        <div ref={imageRef} className="relative">
          <ImageReveal>
            <Image
              src="https://clinicboom.co/wp-content/uploads/arty-version-roche.png"
              alt="Roche Bobois Residences artistic rendering"
              width={700}
              height={500}
              className="w-full h-auto contrast-[1.05]"
            />
          </ImageReveal>
          <div className="absolute -top-5 -right-5 w-[120px] h-[120px] border border-magenta opacity-30 -z-10 max-md:hidden" />
        </div>

        {/* Right: Text */}
        <div>
          <SectionReveal>
            <div className="inline-block font-dm-sans text-[0.7rem] tracking-[0.25em] uppercase text-warm-gray border border-cream-dark py-2 px-[18px] mb-[30px]">
              344 4th Street South &nbsp;&middot;&nbsp; DTSP
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="font-caveat text-[1.8rem] text-magenta leading-none mb-[15px]">
              St. Pete&apos;s First Designer-Branded Tower
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] text-black leading-[1.15] tracking-tight mb-[30px]">
              Welcome to the Vanguard of Coastal <em className="italic text-magenta">Sophistication</em>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className="text-[1.05rem] leading-[1.85] text-warm-gray max-w-[680px]">
              Rising 29 stories above the vibrant heart of Downtown St. Petersburg, the Roche Bobois
              Residences redefine the Florida luxury skyline. Here, at the premier intersection of 4th
              Street South and 4th Avenue South, uncompromising modern architecture meets the avant-garde
              elegance of Paris&apos;s most iconic design house.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="font-cormorant font-normal italic text-[1.6rem] text-charcoal leading-normal mt-[35px] pl-[25px] border-l-2 border-magenta">
              This is not merely a residence; it is a profound statement of arrival.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
