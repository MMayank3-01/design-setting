import React from 'react';

export const StoryCallout: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto rounded-[32px] bg-[#151515] border border-[#D4AF37]/25 p-8 sm:p-12 md:p-16 text-center shadow-xl">
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 font-medium leading-relaxed tracking-tight">
          First launched in 2017, Designjoy{' '}
          <span className="font-serif-italic font-normal text-[#D4AF37]">
            revolutionized
          </span>{' '}
          the design industry with its subscription-based model. To this day, Designjoy is run entirely by{' '}
          <a
            href="https://x.com/BrettFromDJ"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline text-[#D4AF37] hover:text-[#f3d36b] transition-colors"
          >
            Brett
          </a>
          . Designjoy doesn’t hire extra designers or outsource work—instead, it focuses on delivering top-notch quality to a limited roster of clients at a time.
        </p>
      </div>
    </section>
  );
};
