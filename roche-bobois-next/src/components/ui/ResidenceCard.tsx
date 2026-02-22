"use client";

import { motion } from 'framer-motion';

interface ResidenceCardProps {
  number: string;
  type: string;
  description: string;
}

export default function ResidenceCard({ number, type, description }: ResidenceCardProps) {
  return (
    <motion.div
      className="text-center p-[50px_30px] border border-cream-dark transition-all duration-500"
      whileHover={{
        y: -5,
        boxShadow: '0 20px 60px rgba(217, 79, 142, 0.08)',
        borderColor: '#D94F8E',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <div className="font-cormorant font-light text-[3.5rem] text-magenta leading-none mb-[5px]">
        {number}
      </div>
      <div className="font-dm-sans text-[0.7rem] tracking-[0.25em] uppercase text-warm-gray mb-5">
        {type}
      </div>
      <p className="font-cormorant text-[1.15rem] text-charcoal leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
