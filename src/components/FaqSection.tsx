import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, Mail, Phone, Search, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
        
        {/* Left Side: Accordion Questions */}
        <div className="lg:col-span-8">
          
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
              <span className="font-serif-italic font-normal text-[#D4AF37]">
                Frequently
              </span>{' '}
              asked questions
            </h2>

            {/* Quick Search */}
            <div className="mt-6 relative max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#151515] border border-white/10 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-neutral-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#D4AF37] hover:text-white font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div key={faq.id} className="py-5 transition-colors">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg sm:text-xl font-bold text-[#F5F5F5] pr-6 group-hover:text-[#D4AF37] transition-colors">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#D4AF37]/20 border-[#D4AF37]/40' : 'rotate-0'
                        }`}
                      >
                        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pr-6 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal whitespace-pre-line animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-8 text-center text-neutral-500">
                No matching questions found for "{searchQuery}".
              </div>
            )}
          </div>

        </div>

        {/* Right Side: Book a Call Sticky Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-8 rounded-[32px] overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-[#1C180E] via-[#14120C] to-[#0A0A0A] border border-[#D4AF37]/35 text-white shadow-2xl flex flex-col justify-between min-h-[380px]">
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center mb-6 text-2xl">
                ☕
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                Book a 15-min intro call
              </h3>
              <p className="mt-3 text-sm text-neutral-400 font-medium leading-relaxed">
                Have questions before subscribing? Let's hop on a casual 15-minute tour to see if Designjoy fits your team.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm hover:bg-[#c29e28] transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Book a call</span>
              </button>

              <a
                href="mailto:hello@designjoy.co?subject=Designjoy%20Inquiry"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#0A0A0A]/70 hover:bg-black backdrop-blur-md border border-white/10 text-white transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-200">Prefer to email?</div>
                    <div className="text-neutral-400">hello@designjoy.co</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
