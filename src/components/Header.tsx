import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogin, onOpenBooking }) => {
  return (
    <header className="w-full pt-8 pb-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]">
          <div className="w-8 h-8 rounded-full bg-[#151515] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-sm transition-transform group-hover:rotate-12 group-hover:border-[#D4AF37]">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#D4AF37]" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 13c1 2.5 3 4 5 4s4-1.5 5-4" />
            </svg>
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-[#F5F5F5]">Designjoy</span>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenLogin}
            className="px-4 py-2 text-sm font-medium text-neutral-300 bg-[#151515] hover:bg-[#202020] hover:text-white border border-white/10 rounded-full transition-all shadow-sm active:scale-95"
          >
            Login
          </button>

          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-neutral-300 bg-[#151515] hover:bg-[#202020] hover:text-white border border-white/10 hover:border-[#D4AF37]/40 rounded-full transition-all shadow-sm active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Book a call</span>
          </button>

          <a
            href="#pricing"
            className="px-5 py-2 text-sm font-semibold text-[#0A0A0A] bg-[#D4AF37] hover:bg-[#c29e28] rounded-full transition-all shadow-sm active:scale-95"
          >
            See pricing
          </a>
        </div>
      </div>
    </header>
  );
};
