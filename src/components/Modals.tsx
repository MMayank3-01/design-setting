import React, { useState } from 'react';
import { X, Check, Lock, ExternalLink, Sparkles, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { ShowcaseProject } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Login Modal (Customer / Trello Portal)
export const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#151515] text-[#F5F5F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] text-sm font-black">
            DJ
          </div>
          <span className="font-extrabold text-xl text-white">Member Portal</span>
        </div>

        {sent ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Magic Link Sent</h3>
            <p className="mt-2 text-sm text-neutral-400">
              We’ve sent a direct access link to <strong className="text-white">{email}</strong> to access your active Trello design queue and Stripe customer billing portal.
            </p>
            <button
              onClick={() => { setSent(false); onClose(); }}
              className="mt-6 w-full py-3 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-xs hover:bg-[#c29e28] transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-neutral-400 font-medium leading-relaxed">
              Enter the email address registered with your Designjoy subscription to manage billing, pause status, or access your active design board.
            </p>

            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                Account Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm hover:bg-[#c29e28] transition-all shadow-md active:scale-98"
            >
              Continue to Portal
            </button>

            <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Secured by Stripe Customer Portal</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 2. Checkout / Join Modal
interface CheckoutModalProps extends ModalProps {
  onSuccess?: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'review' | 'success'>('review');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', card: '•••• •••• •••• 4242' });

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#151515] text-[#F5F5F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/30 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'success' ? (
          <div className="py-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
              🎉
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome to Designjoy!</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Your subscription is active. Brett is preparing your dedicated Trello board and you'll receive your workspace invite at <strong>{formData.email || 'your email'}</strong> within the next hour.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 text-left text-xs space-y-2 text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Monthly Club Plan ($4,995/mo)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>75% refund guarantee active for 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Unlimited design requests queue ready</span>
              </div>
            </div>
            <button
              onClick={() => { setStep('review'); onClose(); }}
              className="mt-6 w-full py-3.5 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm hover:bg-[#c29e28]"
            >
              Close &amp; View Portfolio
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Join Designjoy</div>
                <h3 className="text-2xl font-extrabold text-white">Monthly Club</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-[#D4AF37]">$4,995</div>
                <div className="text-xs text-neutral-400">per month (cancel anytime)</div>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Studio"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@acme.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                  <span>Stripe Secure Payment</span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono">{formData.card}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-extrabold text-sm hover:bg-[#c29e28] transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Start Subscription • $4,995/mo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pause anytime • 75% refund policy during the first week</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Project Lightbox Modal
interface ProjectLightboxProps {
  project: ShowcaseProject | null;
  onClose: () => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#151515] text-[#F5F5F5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37] text-[#0A0A0A] uppercase">
                {project.category}
              </span>
              {project.awards && (
                <span className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {project.awards}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold mt-1 text-white">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-6 overflow-y-auto">
          <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[420px]"
            />
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed font-normal">
            {project.description}
          </p>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Delivered directly via Designjoy's single-subscription model.
            </div>

            <a
              href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>View in Figma</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
