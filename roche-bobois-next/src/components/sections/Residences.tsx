"use client";

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';
import ResidenceCard from '@/components/ui/ResidenceCard';

interface ResidenceData {
  id: string;
  number: string;
  type: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export default function Residences({ data }: { data: ResidenceData[] }) {
  return (
    <section className="grain-section bg-white border-t border-b border-cream-dark py-[120px] px-10 max-md:py-[70px] max-md:px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-5">
          <SectionReveal>
            <div className="font-caveat text-[1.8rem] text-magenta leading-none mb-[15px]">
              Floorplans &amp; Pricing
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] text-black leading-[1.15] tracking-tight mb-[30px] max-w-[700px] mx-auto">
              Studios, 1 to 3 Bedrooms &amp; <em className="italic text-magenta">Penthouses</em>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-[1.05rem] leading-[1.85] text-warm-gray max-w-[650px] mx-auto text-center">
              Comprising just 164 exclusive residences within a $70 million masterwork, every home is a
              canvas of natural light — featuring expansive floor-to-ceiling glass that frames sweeping
              vistas of Tampa Bay and the kinetic energy of downtown.
            </p>
          </SectionReveal>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((item, i) => (
            <motion.div key={item.id} custom={i} variants={cardVariants}>
              <ResidenceCard
                number={item.number}
                type={item.type}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
