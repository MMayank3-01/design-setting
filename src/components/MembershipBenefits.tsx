import React, { useState } from 'react';
import { BENEFITS } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const MembershipBenefits: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % BENEFITS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + BENEFITS.length) % BENEFITS.length);
  };

  return (
    <section id="benefits" className="py-16 md:py-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <div className="inline-block text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-3">
          MEMBERSHIP BENEFITS
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
          It’s{' '}
          <span className="font-serif-italic font-normal text-[#D4AF37]">
            “you’ll never go back”
          </span>{' '}
          better
        </h2>
        <p className="mt-5 text-base sm:text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl mx-auto">
          Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won’t want to go anywhere else.
        </p>
      </div>

      {/* Desktop Grid Layout (3 columns on md/lg) */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.id}
            className="group relative rounded-[28px] bg-[#151515] p-7 md:p-8 border border-white/5 hover:border-[#D4AF37]/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Top Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center p-2.5 mb-6 group-hover:scale-105 group-hover:border-[#D4AF37]/50 transition-all">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Interactive Slider */}
      <div className="sm:hidden">
        <div className="relative rounded-[28px] bg-[#151515] p-7 border border-white/10 shadow-xl min-h-[220px] flex flex-col justify-between">
          <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center p-2.5 mb-4">
            <img
              src={BENEFITS[activeSlide].icon}
              alt={BENEFITS[activeSlide].title}
              className="w-full h-full object-contain filter invert opacity-90"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F5F5F5]">
              {BENEFITS[activeSlide].title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              {BENEFITS[activeSlide].description}
            </p>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="mt-4 flex items-center justify-between px-2">
          <div className="flex gap-1.5">
            {BENEFITS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === idx ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-neutral-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center shadow-sm active:scale-95 text-neutral-300"
              aria-label="Previous benefit"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-300" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center shadow-sm active:scale-95 text-neutral-300"
              aria-label="Next benefit"
            >
              <ChevronRight className="w-4 h-4 text-neutral-300" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
