"use client";

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface AmenityData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Amenities({ data }: { data: AmenityData[] }) {
  return (
    <section className="grain-section relative py-[120px] px-10 max-md:py-[70px] max-md:px-4 max-w-[1400px] mx-auto">
      {/* Large background number */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 font-cormorant font-light text-[clamp(4rem,10vw,8rem)] text-magenta opacity-[0.15] leading-none">
        <AnimatedCounter target={24000} suffix="+" />
      </div>

      {/* Header */}
      <div className="text-center mb-20 relative z-[1]">
        <SectionReveal>
          <div className="font-caveat text-[1.8rem] text-magenta leading-none mb-[15px]">
            Curated Amenities at 4th &amp; 4th
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] text-black leading-[1.15] tracking-tight mb-[30px]">
            24,000+ Square Feet of <em className="italic text-magenta">Private</em> Resort Living
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <p className="text-[1.05rem] leading-[1.85] text-warm-gray max-w-[680px] mx-auto text-center">
            True luxury is defined by a life without friction. Every amenity has been designed to
            anticipate your every desire.
          </p>
        </SectionReveal>
      </div>

      {/* Amenity Blocks */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-[1]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={blockVariants}
            className="p-[50px] max-md:p-[35px_20px] bg-white border border-cream-dark transition-all duration-500 hover:shadow-amenity-hover hover:-translate-y-[3px]"
          >
            <div className="font-caveat text-[2.6rem] text-magenta leading-none mb-5">
              {item.icon}
            </div>
            <h3 className="font-cormorant font-normal text-[1.6rem] text-black mb-[15px]">
              {item.title}
            </h3>
            <p className="text-[0.95rem] text-warm-gray leading-[1.75]">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
