"use client";

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';

interface VisionaryData {
  id: string;
  role: string;
  name: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Visionaries({ data }: { data: VisionaryData[] }) {
  return (
    <section className="py-[120px] px-10 max-md:py-[70px] max-md:px-4 max-w-[1400px] mx-auto">
      <SectionReveal>
        <div className="font-caveat text-[1.8rem] text-magenta leading-none mb-[15px]">
          The Creative Alliance
        </div>
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] text-black leading-[1.15] tracking-tight mb-[30px]">
          The <em className="italic text-magenta">Visionaries</em>
        </h2>
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <p className="text-[1.05rem] leading-[1.85] text-warm-gray max-w-[680px]">
          A landmark of this magnitude requires a symphony of elite talent.
        </p>
      </SectionReveal>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-[50px] max-lg:gap-10 mt-[60px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="relative pt-[30px]"
          >
            <div className="absolute top-0 left-0 w-10 h-0.5 bg-magenta" />
            <div className="font-caveat text-[1.5rem] text-magenta leading-none mb-2">
              {item.role}
            </div>
            <h3 className="font-cormorant font-medium text-[1.8rem] text-black mb-[15px]">
              {item.name}
            </h3>
            <p className="text-[0.95rem] text-warm-gray leading-[1.75]">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
