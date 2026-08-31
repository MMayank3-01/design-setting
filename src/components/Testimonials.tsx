import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Testimonial 1: Webflow */}
        <div className="rounded-[32px] bg-[#151515] border border-white/5 hover:border-[#D4AF37]/30 p-8 sm:p-10 flex flex-col justify-between shadow-xl transition-all">
          <blockquote className="text-2xl sm:text-3xl md:text-[32px] font-serif-italic text-[#F5F5F5] leading-snug">
            “Designjoy shows that they know the art of subtlety.”
          </blockquote>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center">
            <img
              src="https://cdn.prod.website-files.com/678005a5d025f688a34957f1/678199f71b779683c0d14a8f_65dd4dae1c85fee7c339650a_Webflow_logo_2023%20(1)%201.svg"
              alt="Webflow"
              className="h-6 object-contain filter invert opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        {/* Testimonial 2: Kevin O'Leary */}
        <div className="rounded-[32px] bg-[#151515] border border-white/5 hover:border-[#D4AF37]/30 p-8 sm:p-10 flex flex-col justify-between shadow-xl transition-all">
          <blockquote className="text-2xl sm:text-3xl md:text-[32px] font-serif-italic text-[#F5F5F5] leading-snug">
            “Design is everything, and these guys have nailed it.”
          </blockquote>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3.5">
            <img
              src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19bd_Group%201171274555.png"
              alt="Kevin O'Leary"
              className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/40"
              loading="lazy"
            />
            <div>
              <div className="text-base font-bold text-[#F5F5F5]">
                Kevin O’Leary
              </div>
              <div className="text-xs text-[#D4AF37] font-semibold tracking-wide uppercase">
                Shark Tank
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
