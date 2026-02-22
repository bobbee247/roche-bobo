import Image from 'next/image';
import Link from 'next/link';

export default function BrokerFooter() {
  return (
    <section className="bg-[#A09882] text-white/85">
      <div className="max-w-[1400px] mx-auto">
        {/* Top: Broker Info + Map */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col items-center justify-center p-[60px_40px] md:p-[60px_40px] text-center">
            <Image
              src="https://clinicboom.co/wp-content/uploads/HomeScene-logo-2.png"
              alt="HomeScene Property Partners"
              width={220}
              height={60}
              className="max-w-[220px] h-auto mb-[35px]"
            />
            <div className="font-dm-sans text-[0.75rem] tracking-[0.25em] uppercase text-white/60 mb-2">
              NEW BUILD LOCATION:
            </div>
            <div className="font-cormorant text-[1.3rem] font-normal text-white leading-snug">
              344 4th Street South, St. Petersburg, FL 33701
            </div>
          </div>
          <div className="min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4321.355181155373!2d-82.63897606209277!3d27.767740058595027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e184da00eed7%3A0x2d107a9fd28aaf0b!2s360%204th%20St%20S%2C%20St.%20Petersburg%2C%20FL%2033701!5e0!3m2!1sen!2sus!4v1771334653768!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Roche Bobois Residences Map"
              className="block w-full h-full min-h-[300px]"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-[50px_60px] max-md:p-[30px_16px] border-t border-white/15">
          <p className="text-[0.78rem] leading-snug text-white/70 mb-5">
            Disclaimer &ndash; HomeScene Property Partners International LLC (dba HomeScene Realty)
            &nbsp;HomeScene Property Partners International LLC (&ldquo;HomeScene&rdquo;) is a licensed
            real-estate brokerage and proudly adheres to all federal, state, and local Fair Housing and
            Equal Opportunity regulations. HomeScene is not&mdash;and does not represent itself to
            be&mdash;the developer, owner, or affiliate of Roche Bobois Residences or any other project
            shown on this website, its related landing pages, social-media channels or other marketing
            collateral. All content relating to Roche Bobois Residences is provided for informational
            purposes only. While the data has been gathered from sources believed to be reliable, it is
            subject to errors, omissions, and may change in price, availability, condition, or withdrawal
            without prior notice. Renderings, floor plans, square footages, interior finishes, furnishings,
            amenities and any other descriptions are approximate and should not be relied upon as exact
            representations. HomeScene acts as a buyer- or tenant-representative and may present a variety
            of properties or developments beyond the one featured here. All marketing materials displayed
            in connection with Roche Bobois Residences have been supplied by the respective developer;
            HomeScene assumes no responsibility for any inaccuracies or misstatements therein. Pricing,
            incentives, inventory and other details may be updated or discontinued at any time. This
            information is not intended to solicit listings already under signed brokerage agreements, nor
            should anything herein be construed as legal, tax, accounting or other professional advice
            outside the scope of real-estate brokerage services. Prospective purchasers should consult
            their own advisors for such guidance.
          </p>
          <p className="text-[0.78rem] leading-snug text-white/70 mb-5">
            This website is not the official site of the developer of Roche Bobois Residences. &copy;
            HomeScene Property Partners International LLC. All rights reserved. &nbsp;
            <Link
              href="/privacy-policy"
              className="text-white/70 underline underline-offset-2 hover:text-white/90"
            >
              Privacy Policy Here
            </Link>
          </p>
          <p className="text-[0.78rem] leading-snug text-white/70 mb-5 italic">
            ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING REPRESENTATIONS OF THE
            DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THE DOCUMENTS REQUIRED BY{' '}
            <a
              href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.503.html"
              target="_blank"
              rel="noopener"
              className="text-white/70 underline underline-offset-2 hover:text-white/90"
            >
              SECTION 718.503, FLORIDA STATUTES
            </a>
            , TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE. All dimensions, layouts, artist
            renderings, specifications, prices and features are approximations and subject to availability
            and to change without notice, as recommended by the architect, contractor and/or developer,
            and/or as required by law. Stated dimensions are measured to the exterior boundaries of the
            exterior walls and corridor walls and to the centerline of interior demising and common walls,
            and in fact may vary from the dimensions of the actual living space. Oral representations
            cannot be relied upon as correctly stating the representations of the developer. For correct
            representations, make reference to project documents provided by developer to a buyer or
            lessee. All offers are subject to the terms and conditions of any sales or reservation
            agreement with the developer. Not an offer for or solicitation where prior registration is
            required or otherwise prohibited by these statutes.
          </p>
          <div className="flex items-center justify-center gap-[15px] mt-[35px] pt-[30px] border-t border-white/15">
            <Image
              src="https://clinicboom.co/wp-content/uploads/equal-housing.png"
              alt="Equal Housing Opportunity"
              width={40}
              height={40}
              className="!w-10 !h-10 !max-w-[40px] !max-h-[40px] object-contain"
            />
            <span className="font-dm-sans text-[0.85rem] tracking-[0.15em] uppercase text-white/80">
              EQUAL HOUSING OPPORTUNITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
