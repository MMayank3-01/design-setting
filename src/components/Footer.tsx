import React from 'react';
import { BookingCalendar } from './BookingCalendar';

export const Footer: React.FC = () => {
  return (
    <footer id="book" className="mt-20 bg-[#0A0A0A] border-t border-white/10 text-white pt-16 md:pt-24 pb-12 rounded-t-[40px] md:rounded-t-[54px] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main 2-Column Call / Schedule Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start mb-16 md:mb-24">
          
          {/* Left: Headline and description */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#0A0A0A]" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M7 13c1 2.5 3 4 5 4s4-1.5 5-4" />
                  </svg>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-[#F5F5F5]">Designjoy</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08]">
                See if Designjoy is the right fit for you{' '}
                <span className="font-serif-italic font-normal text-[#D4AF37]">
                  (it totally is)
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-neutral-400 font-medium leading-relaxed">
                Schedule a quick, 15 minute guided tour through Designjoy.
              </p>
            </div>

            {/* Smiles illustration banner for desktop */}
            <div className="hidden lg:block mt-16 pt-8 border-t border-white/5">
              <img
                src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d8_Smiley%20faces.svg"
                alt="Smiley faces"
                className="h-10 opacity-70 object-contain invert"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Embedded Interactive Booking Cal */}
          <div className="lg:col-span-7">
            <BookingCalendar />
          </div>

        </div>

        {/* Mobile Smiley Faces */}
        <div className="lg:hidden mb-10 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d8_Smiley%20faces.svg"
            alt="Smiley faces"
            className="h-9 opacity-70 invert"
            loading="lazy"
          />
        </div>

        {/* Bottom Legal / Location Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <div>
            Headquartered in Phoenix, Arizona
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms of service
            </a>
            <a
              href="https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
