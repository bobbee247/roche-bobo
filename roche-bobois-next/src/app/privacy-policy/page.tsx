import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy | Roche Bobois Residences St. Petersburg',
  description:
    'Privacy Policy for the Roche Bobois Residences St. Petersburg promotional website operated by HomeScene Property Partners International LLC.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Hero header */}
      <section className="pt-[160px] pb-[60px] md:pb-[80px] bg-cream">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <p className="font-caveat text-magenta text-[1.1rem] md:text-[1.25rem] mb-4">
            Legal
          </p>
          <h1 className="font-cormorant text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] font-light text-charcoal leading-[1.1] mb-6">
            Privacy Policy
          </h1>
          <p className="font-dm-sans text-warm-gray text-[0.85rem] tracking-[0.15em] uppercase">
            Last Updated: February 17, 2026
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <div className="h-px bg-cream-dark" />
      </div>

      {/* Content */}
      <section className="py-[60px] md:py-[80px] bg-cream">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 font-dm-sans text-charcoal text-[0.95rem] md:text-[1rem] leading-[1.85]">

          {/* Introduction */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Introduction
            </h2>
            <p className="mb-5">
              This Privacy Policy applies to visitors of the Roche Bobois Residences St. Petersburg
              promotional website operated by HomeScene Property Partners International LLC (dba
              HomeScene Realty) (&ldquo;HomeScene&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;). HomeScene is a licensed real estate brokerage serving as a
              buyer-representative for the Roche Bobois Residences development in St. Petersburg,
              Florida.
            </p>
            <div className="border-l-[3px] border-magenta pl-6 py-3 my-6 bg-cream-dark/50 rounded-r">
              <p className="text-[0.9rem] text-warm-gray leading-relaxed">
                <strong className="text-charcoal">Important Notice:</strong> This is not the official
                website of the Roche Bobois Residences developer (Valor Capital Real Estate
                Development). HomeScene acts as an independent real estate brokerage and
                buyer-representative. This Privacy Policy describes how we collect, use, and protect
                your personal information when you interact with our promotional site for this
                ultra-luxury condominium development.
              </p>
            </div>
          </div>

          {/* About */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              About Roche Bobois Residences St.&nbsp;Petersburg
            </h2>
            <p className="mb-5">
              Roche Bobois Residences St. Petersburg is an ultra-luxury 29-story condominium
              development located at 344 4th Street South in downtown St. Petersburg, within an
              emerging luxury corridor of the city&rsquo;s vibrant urban core. Developed by Valor
              Capital in an exclusive partnership with the iconic Parisian furniture brand Roche
              Bobois, the project features:
            </p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                '165 luxury condominium units, ranging from studios and New York-style one-bedroom lofts to spacious two- and three-bedroom residences and exclusive penthouses',
                'Interior design curation by Roche Bobois Paris with signature high-end furnishings',
                'Architecture by Gomez Vazquez International (GVA)',
                'Fifth-floor amenity deck with resort-style pool and terrace',
                'A 5,000-square-foot public arts plaza with sculptures and landscaping',
                'Over 4,100 square feet of ground-floor restaurant and retail space',
                'Prices starting just over $500,000',
                'Expected completion in 2028',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Information We Collect */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Personal Information We Collect
            </h2>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Information You Provide
            </h3>
            <p className="mb-5">
              When you express interest in Roche Bobois Residences through our website, we may
              collect:
            </p>
            <ul className="list-none space-y-3 mb-8 pl-1">
              {[
                { label: 'Contact Information', desc: 'Name, email address, phone number, mailing address' },
                { label: 'Purchase Information', desc: 'Budget range, financing preferences, timeline for purchase' },
                { label: 'Property Preferences', desc: 'Unit type preferences (studio, loft, 1-bedroom, 2-bedroom, 3-bedroom, penthouse), floor preferences, view preferences, amenity interests' },
                { label: 'Communication Preferences', desc: 'How you prefer to be contacted (email, phone, text)' },
                { label: 'Background Information', desc: 'Current residence location, real estate ownership experience, design and lifestyle preferences' },
                { label: 'Appointment Requests', desc: 'Preferred times for virtual or in-person consultations' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>
                    <strong>{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Information We Collect Automatically
            </h3>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                { label: 'Website Analytics', desc: 'Pages viewed, time spent on site, referring websites' },
                { label: 'Device Information', desc: 'IP address, browser type, device type, general location (city/state)' },
                { label: 'Interaction Data', desc: 'Which Roche Bobois Residences amenities, floor plans, or unit information you view' },
                { label: 'Marketing Engagement', desc: 'Whether you open our emails or click on Roche Bobois Residences promotional content' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>
                    <strong>{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              How We Use Your Information
            </h2>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Primary Uses
            </h3>
            <ul className="list-none space-y-3 mb-8 pl-1">
              {[
                { label: 'Property Information', desc: 'Provide detailed information about Roche Bobois Residences units, pricing, floor plans, and amenities' },
                { label: 'Purchase Consultation', desc: 'Schedule and conduct consultations about purchasing opportunities at Roche Bobois Residences' },
                { label: 'Market Updates', desc: 'Send updates about development progress, pricing changes, and available inventory' },
                { label: 'Buyer Representation', desc: 'Represent you in negotiations with the Roche Bobois Residences developer if you choose to purchase' },
                { label: 'Educational Content', desc: 'Provide information about luxury condominium ownership and the St. Petersburg real estate market' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>
                    <strong>{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Communication Methods
            </h3>
            <p className="mb-5">
              With your consent, we may contact you about Roche Bobois Residences through:
            </p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                'Email updates about development progress and available units',
                'Phone calls to discuss purchase opportunities and answer questions',
                'Text messages for appointment confirmations and urgent updates',
                'Printed materials about Roche Bobois Residences amenities, design features, and unit availability',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Information Sharing Specific to Roche Bobois Residences
            </h2>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Developer Coordination
            </h3>
            <p className="mb-5">
              If you express serious interest in purchasing a Roche Bobois Residences unit, we may
              share your contact information with:
            </p>
            <ul className="list-none space-y-3 mb-8 pl-1">
              {[
                'Valor Capital Real Estate Development (the Roche Bobois Residences developer) for direct sales coordination',
                'The Roche Bobois Residences sales team for unit selection and contract processing',
                'Approved financing partners for pre-construction loan options',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Purchase Partners
            </h3>
            <p className="mb-5">We may share your information with:</p>
            <ul className="list-none space-y-3 mb-8 pl-1">
              {[
                'Qualified mortgage brokers familiar with luxury condominium financing',
                'Real estate attorneys experienced with pre-construction purchases',
                'Social media advertising platforms for targeted ads (unless you specifically opt-in)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              We Will NOT Share Your Information With
            </h3>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                'Competing condominium developments or their sales teams',
                'General marketing lists or lead generation companies',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Rights */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Roche Bobois Residences-Specific Privacy Rights
            </h2>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Access and Control
            </h3>
            <p className="mb-5">You have the right to:</p>
            <ul className="list-none space-y-3 mb-8 pl-1">
              {[
                'Request all information we have collected about your Roche Bobois Residences interest',
                'Update your unit preferences, budget, or timeline',
                'Opt out of specific types of Roche Bobois Residences communications while remaining on others',
                'Request deletion of your information if you are no longer interested',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-cormorant text-[1.35rem] md:text-[1.5rem] font-medium text-charcoal mb-4">
              Marketing Preferences
            </h3>
            <p className="mb-5">You can control:</p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                'Frequency of Roche Bobois Residences development updates (weekly, monthly, major milestones only)',
                'Types of content (design features, unit availability, construction progress)',
                'Communication channels (email only, phone only, or both)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Data Security for Purchase Information
            </h2>
            <p className="mb-5">
              Given the high-value nature of Roche Bobois Residences purchases, we implement enhanced
              security measures:
            </p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                { label: 'Financial Information Protection', desc: 'Any financial or purchase details are encrypted and stored securely' },
                { label: 'Limited Access', desc: 'Only authorized HomeScene agents working on Roche Bobois Residences have access to your information' },
                { label: 'Secure Communication', desc: 'All purchase discussions use secure email and phone systems' },
                { label: 'Document Protection', desc: 'Any contracts or financial documents are transmitted through secure portals' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>
                    <strong>{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Data Retention for Roche Bobois Residences Prospects
            </h2>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                { label: 'Active Prospects', desc: 'Information retained throughout Roche Bobois Residences development and sales period' },
                { label: 'Purchase Completed', desc: 'Information retained for 7 years post-closing for ongoing client services' },
                { label: 'No Longer Interested', desc: 'Information deleted within 60 days of opt-out request' },
                { label: 'Development Completion', desc: 'Marketing information purged 2 years after Roche Bobois Residences sells out' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>
                    <strong>{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* St. Petersburg-Specific */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              St. Petersburg-Specific Considerations
            </h2>
            <p className="mb-5">
              As Roche Bobois Residences is located in St. Petersburg, Florida, you should know:
            </p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                'Florida real estate regulations govern our buyer-representation services',
                'We comply with Florida Fair Housing laws in all Roche Bobois Residences marketing',
                'St. Petersburg market conditions may affect Roche Bobois Residences pricing and availability',
                'Local St. Petersburg regulations may impact Roche Bobois Residences amenities or completion timeline',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cookies */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Cookies and Website Tracking
            </h2>
            <p className="mb-5">Our Roche Bobois Residences promotional site uses:</p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                { label: 'Essential Cookies', desc: 'For basic website functionality and form submissions' },
                { label: 'Analytics Cookies', desc: 'To understand which Roche Bobois Residences information is most valuable to visitors' },
                { label: 'Marketing Cookies', desc: 'To track effectiveness of Roche Bobois Residences advertising campaigns' },
                { label: 'Preference Cookies', desc: 'To remember your unit size, layout, and amenity preferences' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>
                    <strong>{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CCPA */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Your Rights Under California Law (CCPA)
            </h2>
            <p className="mb-5">
              California residents have specific rights regarding Roche Bobois Residences marketing:
            </p>
            <ul className="list-none space-y-3 mb-5 pl-1">
              {[
                'Right to know what Roche Bobois Residences prospect information we collect',
                'Right to delete your Roche Bobois Residences prospect profile',
                'Right to opt-out of any sharing with Roche Bobois Residences partners',
                'Right to non-discrimination if you exercise these rights',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-cream-dark/60 rounded-lg p-6 md:p-8">
                <h3 className="font-cormorant text-[1.25rem] font-medium text-charcoal mb-3">
                  For Privacy Questions
                </h3>
                <p className="text-[0.9rem] mb-1">
                  Email:{' '}
                  <a
                    href="mailto:hello@homescene.com"
                    className="text-magenta hover:text-magenta-dark transition-colors"
                  >
                    hello@homescene.com
                  </a>
                </p>
                <p className="text-[0.9rem] text-warm-gray">
                  Subject Line: &ldquo;Roche Bobois Residences Privacy Inquiry&rdquo;
                </p>
              </div>

              <div className="bg-cream-dark/60 rounded-lg p-6 md:p-8">
                <h3 className="font-cormorant text-[1.25rem] font-medium text-charcoal mb-3">
                  For Purchase Questions
                </h3>
                <p className="text-[0.9rem]">
                  Contact your assigned HomeScene agent or our Roche Bobois Residences specialists
                </p>
              </div>
            </div>

            <div className="bg-cream-dark/60 rounded-lg p-6 md:p-8">
              <h3 className="font-cormorant text-[1.25rem] font-medium text-charcoal mb-3">
                Mailing Address
              </h3>
              <p className="text-[0.9rem] leading-relaxed">
                HomeScene Property Partners International LLC
                <br />
                600 Cleveland Street, Ste 312
                <br />
                Clearwater, FL 33755
                <br />
                <span className="text-warm-gray">Re: Roche Bobois Residences Privacy Policy</span>
              </p>
            </div>
          </div>

          {/* Changes to This Policy */}
          <div className="mb-14">
            <h2 className="font-cormorant text-[1.8rem] md:text-[2.2rem] font-light text-charcoal mb-6">
              Changes to This Policy
            </h2>
            <p className="mb-5">We will update this Privacy Policy if:</p>
            <ul className="list-none space-y-3 mb-6 pl-1">
              {[
                'Roche Bobois Residences development plans or timeline change significantly',
                'Our relationship with the Roche Bobois Residences developer changes',
                'Florida real estate regulations require updates',
                'We add new services related to Roche Bobois Residences purchases',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-[10px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-5">
              You will be notified of material changes via email with &ldquo;Roche Bobois Residences
              Privacy Update&rdquo; in the subject line.
            </p>
          </div>

          {/* Closing */}
          <div className="border-t border-cream-dark pt-10">
            <p className="text-warm-gray text-[0.9rem] italic">
              This privacy policy is specific to Roche Bobois Residences St. Petersburg promotional
              activities. For other HomeScene Realty services, please refer to our general privacy
              policy.
            </p>
          </div>

          {/* Back to home */}
          <div className="mt-14 text-center">
            <Link
              href="/"
              className="inline-block font-dm-sans text-[0.8rem] tracking-[0.2em] uppercase text-magenta border border-magenta px-8 py-4 hover:bg-magenta hover:text-white transition-all duration-500 ease-luxury"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
