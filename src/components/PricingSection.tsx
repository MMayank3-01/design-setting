import React from 'react';
import { CLIENT_LOGOS } from '../data/content';
import { Check, PauseCircle, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenCheckout: () => void;
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout, onOpenBooking }) => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <div className="inline-block text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-3">
          PRICING
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
          One subscription,{' '}
          <span className="font-serif-italic font-normal text-[#D4AF37]">
            endless possibilities
          </span>
        </h2>
      </div>

      {/* Main Pricing Flex Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Brand Splash Card */}
        <div className="lg:col-span-5 rounded-[36px] bg-gradient-to-br from-[#1C180E] via-[#14120C] to-[#0A0A0A] text-white p-8 sm:p-12 flex flex-col justify-between shadow-2xl border border-[#D4AF37]/30 relative overflow-hidden">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
              <span>Start today</span>
            </div>

            <h3 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
              Join <br />
              Designjoy
            </h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-medium leading-relaxed">
              Experience the unmatched speed, craft, and flexibility of senior-level product design on demand.
            </p>
          </div>

          <div className="mt-12 relative flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a8_Group%201171274554.png"
              alt="Designjoy Club member"
              className="w-full max-w-[280px] object-contain drop-shadow-2xl animate-float"
              loading="lazy"
            />
          </div>

        </div>

        {/* Right Side: The Monthly Club Plan Card */}
        <div className="lg:col-span-7 rounded-[36px] bg-[#151515] text-white p-8 sm:p-12 flex flex-col justify-between shadow-2xl border border-[#D4AF37]/40 relative overflow-hidden">
          
          {/* Subtle warm ambient glow behind */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Top Plan Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F5]">
                Monthly Club
              </h3>
              <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] uppercase">
                PAUSE OR CANCEL ANYTIME
              </span>
            </div>

            {/* Discount Banner */}
            <div className="mt-2 text-xs font-semibold text-[#D4AF37] tracking-wide">
              Lifetime Discount - Limited Time
            </div>

            {/* Price Row */}
            <div className="mt-6 flex items-baseline gap-4">
              <div className="flex items-baseline">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
                  $4,995
                </span>
                <span className="ml-1 text-base sm:text-lg text-neutral-400 font-medium">
                  /month
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-neutral-600 line-through">
                $5,995
              </span>
            </div>

            {/* Included Features Grid */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
                What's included
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>One request at a time</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Avg. 48 hour delivery</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Unlimited brands</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Webflow development</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Unlimited stock photos</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Up to 2 users</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-neutral-300 sm:col-span-2">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Pause or cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <button
              onClick={onOpenCheckout}
              className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-extrabold text-base hover:bg-[#c29e28] transition-all shadow-2xl active:scale-98 group"
            >
              <div className="w-6 h-6 rounded-full bg-[#0A0A0A] text-[#D4AF37] flex items-center justify-center text-xs">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-[#D4AF37]" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M7 13c1 2.5 3 4 5 4s4-1.5 5-4" />
                </svg>
              </div>
              <span>Join today</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>

      {/* 2 Feature / Guarantee Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pause anytime */}
        <div className="rounded-[28px] bg-[#151515] border border-white/5 hover:border-[#D4AF37]/30 p-6 sm:p-8 flex items-start gap-4 shadow-lg transition-all">
          <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0">
            <PauseCircle className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
              Pause anytime
            </h4>
            <p className="mt-1.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              Temporarily pause your subscription anytime, no sweat.
            </p>
          </div>
        </div>

        {/* Try it for a week */}
        <div className="rounded-[28px] bg-[#151515] border border-white/5 hover:border-[#D4AF37]/30 p-6 sm:p-8 flex items-start gap-4 shadow-lg transition-all">
          <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
              Try it for a week
            </h4>
            <p className="mt-1.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              Not loving it after a week? Get 75% back, no questions asked.
            </p>
          </div>
        </div>

      </div>

      {/* Logos Row Repeat */}
      <div className="mt-16 pt-10 border-t border-white/5">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20 opacity-50 hover:opacity-80 transition-all duration-300 invert">
          {CLIENT_LOGOS.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-8">
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-7 max-w-[120px] object-contain transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
