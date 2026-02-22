"use client";

import { useState, FormEvent } from 'react';
import SectionReveal from '@/components/ui/SectionReveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    formData.append('formID', process.env.NEXT_PUBLIC_JOTFORM_ID || '260516548739972');

    try {
      await fetch(
        `https://submit.jotform.com/submit/${process.env.NEXT_PUBLIC_JOTFORM_ID || '260516548739972'}`,
        { method: 'POST', body: formData, mode: 'no-cors' }
      );
    } catch {
      // no-cors mode doesn't return readable response
    }

    setSending(false);
    setSubmitted(true);

    // Fire Google conversion event (sent to both Ads + GA4 tags)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Lead',
        event_label: 'Contact Form Submission',
      });
    }
  };

  return (
    <section
      id="reserve"
      className="grain-section relative overflow-hidden py-[120px] px-10 max-md:py-[70px] max-md:px-4 text-center"
      style={{
        background: 'linear-gradient(135deg, #FAF7F0 0%, #F0EBE0 100%)',
      }}
    >
      {/* Ghost text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none font-cormorant font-light text-[clamp(5rem,15vw,12rem)] text-magenta opacity-[0.04]">
        L&apos;ART DE VIVRE
      </div>

      <div className="max-w-[600px] mx-auto relative z-[1]">
        <SectionReveal>
          <div className="font-caveat text-[1.8rem] text-magenta leading-none mb-[15px]">
            Pre-Construction Acquisition
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3rem)] text-black leading-[1.15] mb-[15px]">
            Secure Your Place
            <br />
            in the Skyline
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <p className="text-[0.95rem] text-warm-gray mb-[50px] leading-[1.7]">
            With an expected completion in 2029, the window for pre-construction pricing is highly
            time-sensitive. Request exclusive floorplans, VIP pricing, and pre-construction inventory
            access.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <div className="flex flex-col">
                <label className="font-dm-sans text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="q1_fullName[first]"
                  placeholder="First name"
                  required
                  className="font-dm-sans text-[0.95rem] py-3.5 px-[18px] border border-cream-dark bg-white text-charcoal outline-none transition-colors focus:border-magenta placeholder:text-[#c5bfb5]"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-dm-sans text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="q1_fullName[last]"
                  placeholder="Last name"
                  required
                  className="font-dm-sans text-[0.95rem] py-3.5 px-[18px] border border-cream-dark bg-white text-charcoal outline-none transition-colors focus:border-magenta placeholder:text-[#c5bfb5]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-dm-sans text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray mb-2">
                Email
              </label>
              <input
                type="email"
                name="q2_email"
                placeholder="you@email.com"
                required
                className="font-dm-sans text-[0.95rem] py-3.5 px-[18px] border border-cream-dark bg-white text-charcoal outline-none transition-colors focus:border-magenta placeholder:text-[#c5bfb5]"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-dm-sans text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="q3_phone[full]"
                placeholder="(555) 000-0000"
                className="font-dm-sans text-[0.95rem] py-3.5 px-[18px] border border-cream-dark bg-white text-charcoal outline-none transition-colors focus:border-magenta placeholder:text-[#c5bfb5]"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-dm-sans text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray mb-2">
                Interested In
              </label>
              <select
                name="q4_interestedIn"
                className="font-dm-sans text-[0.95rem] py-3.5 px-[18px] border border-cream-dark bg-white text-charcoal outline-none transition-colors focus:border-magenta"
              >
                <option value="">Select residence type...</option>
                <option value="Studio">Studio</option>
                <option value="1-Bedroom">1-Bedroom</option>
                <option value="2-Bedroom">2-Bedroom</option>
                <option value="3-Bedroom">3-Bedroom</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            <MagneticButton className="mt-2.5">
              <button
                type="submit"
                disabled={submitted || sending}
                className={`w-full font-dm-sans text-[0.8rem] tracking-[0.25em] uppercase py-[18px] px-10 border-none text-white transition-all duration-400 ${
                  submitted
                    ? 'bg-charcoal pointer-events-none'
                    : 'bg-magenta hover:bg-magenta-dark hover:-translate-y-0.5 hover:shadow-btn-hover'
                }`}
              >
                {sending
                  ? 'Sending...'
                  : submitted
                  ? "Request Received \u2014 We'll Be in Touch"
                  : 'Request VIP Pricing & Floorplans'}
              </button>
            </MagneticButton>

            <p className="text-[0.75rem] text-[#b5afa5] text-center mt-[15px] leading-relaxed">
              By submitting, you agree to receive communications regarding Roche Bobois Residences.
              Your information is kept strictly confidential and will never be shared.
            </p>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
