import React from 'react';
import { CLIENT_LOGOS, SERVICE_TAGS_ROW_1, SERVICE_TAGS_ROW_2, SERVICE_TAGS_ROW_3 } from '../data/content';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      
      {/* Section Headline */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#F5F5F5] leading-[1.1]">
          The way design{' '}
          <span className="font-serif-italic font-normal text-[#D4AF37]">
            should’ve
          </span>{' '}
          been done in the first place
        </h2>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Card 1: Subscribe */}
        <div className="group relative rounded-[32px] overflow-hidden p-8 flex flex-col justify-between min-h-[460px] shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#1C180E] via-[#14120C] to-[#0D0B07] text-[#F5F5F5] border border-[#D4AF37]/35">
          <div>
            <div className="inline-block text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mb-2">Step 01</div>
            <h3 className="text-3xl font-extrabold tracking-tight text-[#F5F5F5]">Subscribe</h3>
            <p className="mt-2 text-base font-medium text-neutral-400 leading-relaxed">
              Subscribe to a plan &amp; request as many designs as you’d like.
            </p>
          </div>

          {/* Card Mockup Graphic */}
          <div className="relative mt-8 flex justify-center items-center">
            <div className="w-full max-w-[260px] bg-[#0A0A0A] rounded-2xl p-4 text-[#F5F5F5] shadow-2xl border border-[#D4AF37]/30 transform transition-transform duration-500 group-hover:scale-105">
              <div className="text-[10px] font-bold tracking-wider text-[#D4AF37] uppercase">Monthly club</div>
              <div className="text-2xl font-black mt-1 text-white">$4,995<span className="text-xs text-neutral-400 font-normal">/mo</span></div>
              <div className="mt-3 space-y-1 text-[11px] text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">✓</span> One request at a time
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">✓</span> Avg. 48 hour delivery
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">✓</span> Unlimited brands
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#D4AF37]">Join today</span>
                <span className="text-[10px] text-neutral-400">Book a call</span>
              </div>
            </div>
            
            {/* Playful mini smiley */}
            <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] text-sm shadow-md animate-bounce">
              😊
            </div>
          </div>
        </div>

        {/* Card 2: Request */}
        <div className="group relative rounded-[32px] overflow-hidden p-8 flex flex-col justify-between min-h-[460px] shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#0F1424] via-[#0B0E1B] to-[#070912] text-[#F5F5F5] border border-blue-500/25">
          <div>
            <div className="inline-block text-[11px] font-bold tracking-widest text-blue-400 uppercase mb-2">Step 02</div>
            <h3 className="text-3xl font-extrabold tracking-tight text-[#F5F5F5]">Request</h3>
            <p className="mt-2 text-base font-medium text-neutral-400 leading-relaxed">
              Request whatever you'd like, from mobile apps to logos.
            </p>
          </div>

          {/* Interactive Dynamic Scrolling Marquee Pills */}
          <div className="relative my-auto py-4 overflow-hidden mask-fade-edges">
            
            {/* Row 1 */}
            <div className="animate-marquee-left flex gap-2 py-1">
              {[...SERVICE_TAGS_ROW_1, ...SERVICE_TAGS_ROW_1].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md text-neutral-200 border border-white/10 whitespace-nowrap shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="animate-marquee-right flex gap-2 py-1">
              {[...SERVICE_TAGS_ROW_2, ...SERVICE_TAGS_ROW_2].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md text-neutral-200 border border-white/10 whitespace-nowrap shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Row 3 */}
            <div className="animate-marquee-left flex gap-2 py-1">
              {[...SERVICE_TAGS_ROW_3, ...SERVICE_TAGS_ROW_3].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md text-neutral-200 border border-white/10 whitespace-nowrap shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Floating Black Smiley Icon in center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl flex items-center justify-center text-[#D4AF37]">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-[#D4AF37]" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M7 13c1 2.5 3 4 5 4s4-1.5 5-4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-400 font-medium">Over 20+ design specialties supported</div>
        </div>

        {/* Card 3: Receive */}
        <div className="group relative rounded-[32px] overflow-hidden p-8 flex flex-col justify-between min-h-[460px] shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#23120E] via-[#170B09] to-[#0C0504] text-[#F5F5F5] border border-amber-600/30">
          <div>
            <div className="inline-block text-[11px] font-bold tracking-widest text-amber-500 uppercase mb-2">Step 03</div>
            <h3 className="text-3xl font-extrabold tracking-tight text-[#F5F5F5]">Receive</h3>
            <p className="mt-2 text-base font-medium text-neutral-400 leading-relaxed">
              Receive your design within two business days on average.
            </p>
          </div>

          {/* Tilted Graphic Stack Mocks */}
          <div className="relative mt-8 h-48 flex items-center justify-center">
            
            {/* Back Card */}
            <div className="absolute w-40 h-44 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl transform -rotate-12 -translate-x-6 translate-y-2 transition-transform group-hover:-rotate-16 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-amber-600/40 to-yellow-600/30 p-2 flex flex-col justify-end text-[9px] font-bold text-white">
                <span>E-commerce</span>
              </div>
            </div>

            {/* Middle Card */}
            <div className="absolute w-40 h-44 rounded-2xl bg-white/15 backdrop-blur-md border border-white/15 shadow-xl transform rotate-6 translate-x-6 translate-y-1 transition-transform group-hover:rotate-12 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-[#D4AF37]/30 to-amber-700/30 p-2 flex flex-col justify-end text-[9px] font-bold text-white">
                <span>SaaS App</span>
              </div>
            </div>

            {/* Front Card */}
            <div className="relative w-44 h-48 rounded-2xl bg-[#151515] text-[#F5F5F5] p-2.5 shadow-2xl border border-white/15 transform transition-transform group-hover:scale-105">
              <div className="w-full h-28 rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ea_Group%201171274558.png"
                  alt="Design delivery"
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-[#F5F5F5]">Checkout flow</div>
                  <div className="text-[9px] text-[#D4AF37] font-bold">✓ Delivered in 48h</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A0A0A] flex items-center justify-center text-[10px]">
                  ✨
                </div>
              </div>
            </div>

          </div>

          <div className="text-xs text-neutral-400 font-medium">Lightning fast turnarounds &amp; revisions</div>
        </div>

      </div>

      {/* Client Logos Row */}
      <div className="mt-16 md:mt-24 pt-10 border-t border-white/5">
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
