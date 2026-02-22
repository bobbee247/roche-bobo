"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center gap-2.5 transition-all duration-500 ease-luxury ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-[20px] py-3.5 px-4 md:px-10 shadow-nav'
          : 'py-3.5 px-4 md:py-5 md:px-10'
      }`}
    >
      <div className="nav-logo">
        <Image
          src="https://clinicboom.co/wp-content/uploads/roche-bobois-white-trans.png"
          alt="Roche Bobois Residences"
          width={180}
          height={48}
          className={`h-9 md:h-12 w-auto transition-all duration-500 ${
            scrolled ? 'brightness-0 saturate-100 !h-[26px] md:!h-9' : ''
          }`}
          priority
        />
      </div>
      <MagneticButton>
        <a
          href="#reserve"
          className={`font-dm-sans text-[0.65rem] md:text-[0.75rem] tracking-[0.12em] md:tracking-[0.2em] uppercase py-2.5 px-4 md:py-3 md:px-7 border whitespace-nowrap transition-all duration-400 hover:bg-magenta hover:border-magenta hover:text-white ${
            scrolled
              ? 'border-magenta text-magenta'
              : 'border-white/40 text-white'
          }`}
        >
          Request Pricing
        </a>
      </MagneticButton>
    </nav>
  );
}
