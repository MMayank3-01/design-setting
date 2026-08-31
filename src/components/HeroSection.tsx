import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenJoin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenJoin }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Headline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-[#F5F5F5] leading-[1.05]">
            Design subscriptions for{' '}
            <span className="font-serif-italic font-normal text-[#D4AF37]">
              everyone
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-400 font-medium">
            Pause or cancel anytime.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-[#0A0A0A] bg-[#D4AF37] hover:bg-[#c29e28] rounded-full transition-all shadow-md active:scale-95"
            >
              See pricing
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-[#F5F5F5] bg-[#151515] hover:bg-[#202020] border border-white/10 hover:border-[#D4AF37]/40 rounded-full transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Book a 15-min intro call</span>
            </button>
          </div>
        </div>

        {/* Right Column: Signature Gradient Member Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] rounded-[32px] overflow-hidden p-6 sm:p-8 text-white shadow-2xl transition-transform duration-300 hover:scale-[1.01] hero-mesh-gradient border border-[#D4AF37]/30">
            
            {/* Top Badge: "Start today" */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span>Start today</span>
            </div>

            {/* Middle Title */}
            <div className="mt-12 sm:mt-16">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white drop-shadow-sm">
                Join <br />
                Designjoy
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 font-medium">
                One subscription to rule them all.
              </p>

              <div className="mt-6">
                <a
                  href="#pricing"
                  className="inline-block w-full text-center py-3.5 px-6 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm tracking-wide shadow-lg hover:bg-[#c29e28] transition-all active:scale-98"
                >
                  See pricing
                </a>
              </div>
            </div>

            {/* Bottom Call Card Box */}
            <button
              onClick={onOpenBooking}
              className="w-full mt-4 flex items-center justify-between p-3.5 rounded-2xl bg-[#0A0A0A]/85 hover:bg-black backdrop-blur-md border border-[#D4AF37]/30 text-left transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] font-bold text-xl shrink-0 shadow-sm">
                  😊
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F5F5F5]">
                    Book a 15-min intro call
                  </div>
                  <div className="text-[11px] text-neutral-400 font-medium">
                    Schedule now
                  </div>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#D4AF37] transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            {/* Overlapping Smiling Graphic Badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 pointer-events-none opacity-80 animate-float">
              <img
                src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec196c_card.png"
                alt="Member card preview"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
