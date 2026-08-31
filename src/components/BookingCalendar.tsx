import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Globe, CheckCircle2, ChevronLeft, ChevronRight, User, Mail, MessageSquare } from 'lucide-react';

interface BookingCalendarProps {
  onSuccess?: () => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ onSuccess }) => {
  const [selectedDay, setSelectedDay] = useState<number>(28);
  const [selectedMonth, setSelectedMonth] = useState<'Aug' | 'Sep'>('Aug');
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  const [selectedTime, setSelectedTime] = useState<string | null>('9:30pm');
  const [isConfirming, setIsConfirming] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', notes: '' });

  const timeSlots = [
    { slot12: '9:30pm', slot24: '21:30' },
    { slot12: '9:45pm', slot24: '21:45' },
    { slot12: '10:00pm', slot24: '22:00' },
    { slot12: '10:15pm', slot24: '22:15' },
    { slot12: '10:30pm', slot24: '22:30' },
    { slot12: '10:45pm', slot24: '22:45' },
    { slot12: '11:00pm', slot24: '23:00' },
    { slot12: '11:15pm', slot24: '23:15' },
    { slot12: '11:30pm', slot24: '23:30' },
    { slot12: '11:45pm', slot24: '23:45' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsBooked(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div className="w-full rounded-[32px] bg-[#151515] text-[#F5F5F5] p-6 sm:p-8 md:p-10 border border-[#D4AF37]/30 shadow-2xl">
      
      {isBooked ? (
        <div className="py-12 text-center flex flex-col items-center justify-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Call Scheduled!</h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-md">
            We’ve sent a calendar invite to <strong className="text-white">{formData.email}</strong> for {selectedMonth} {selectedDay}, 2026 at {selectedTime}.
          </p>
          <div className="mt-6 p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>15 min Google Meet • Direct with Brett</span>
          </div>
          <button
            onClick={() => {
              setIsBooked(false);
              setIsConfirming(false);
            }}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#0A0A0A] text-xs font-bold hover:bg-[#c29e28] transition-all shadow-md"
          >
            Schedule another time
          </button>
        </div>
      ) : isConfirming ? (
        /* Form Confirmation Step */
        <form onSubmit={handleBookingSubmit} className="max-w-md mx-auto py-4 animate-fadeIn">
          <button
            type="button"
            onClick={() => setIsConfirming(false)}
            className="mb-4 text-xs font-semibold text-neutral-400 hover:text-[#D4AF37] flex items-center gap-1"
          >
            ← Back to calendar
          </button>

          <div className="mb-6 p-4 rounded-2xl bg-[#0A0A0A] border border-[#D4AF37]/30">
            <div className="text-xs font-bold uppercase text-[#D4AF37]">15-min Intro Tour</div>
            <div className="text-lg font-bold text-white mt-0.5">
              Friday, {selectedMonth} {selectedDay}, 2026 @ {selectedTime}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                What would you like to discuss? (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your product or design needs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#0A0A0A] border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37]/60 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm hover:bg-[#c29e28] transition-all shadow-lg active:scale-98"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      ) : (
        /* Calendar & Time Slots View */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Calendar Month View (Left 7 Cols) */}
          <div className="md:col-span-7 pr-0 md:pr-4 md:border-r border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-lg font-bold text-white">August 2026</h4>
                <p className="text-xs text-neutral-400">Timezone: America/Phoenix (MST)</p>
              </div>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded-lg bg-[#222] hover:bg-[#333] flex items-center justify-center text-neutral-300">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#222] hover:bg-[#333] flex items-center justify-center text-neutral-300">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-neutral-500 mb-2">
              <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
              {/* Offset days */}
              <span className="p-2 text-neutral-700"></span>
              <span className="p-2 text-neutral-700"></span>
              <span className="p-2 text-neutral-700"></span>
              <span className="p-2 text-neutral-700"></span>
              <span className="p-2 text-neutral-700"></span>
              <span className="p-2 text-neutral-700"></span>
              <span className="p-2 text-neutral-500">8</span>
              
              <span className="p-2 text-neutral-500">9</span>
              <span className="p-2 text-neutral-500">10</span>
              <span className="p-2 text-neutral-500">11</span>
              <span className="p-2 text-neutral-500">12</span>
              <span className="p-2 text-neutral-500">13</span>
              <span className="p-2 text-neutral-500">14</span>
              <span className="p-2 text-neutral-500">15</span>

              <span className="p-2 text-neutral-500">16</span>
              <span className="p-2 text-neutral-500">17</span>
              <span className="p-2 text-neutral-500">18</span>
              <span className="p-2 text-neutral-500">19</span>
              <span className="p-2 text-neutral-500">20</span>
              <span className="p-2 text-neutral-500">21</span>
              <span className="p-2 text-neutral-500">22</span>

              <span className="p-2 text-neutral-500">23</span>
              <span className="p-2 text-neutral-500">24</span>
              <span className="p-2 text-neutral-500">25</span>
              <span className="p-2 text-neutral-500">26</span>
              <span className="p-2 text-neutral-500">27</span>
              
              {/* Highlight Active Days */}
              <button
                onClick={() => { setSelectedDay(28); setSelectedMonth('Aug'); }}
                className={`p-2 rounded-xl font-bold transition-all ${
                  selectedDay === 28 && selectedMonth === 'Aug'
                    ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-md'
                    : 'bg-[#222] hover:bg-[#333] text-white'
                }`}
              >
                28
              </button>
              <span className="p-2 text-neutral-500">29</span>

              <span className="p-2 text-neutral-500">30</span>
              <span className="p-2 text-neutral-500">31</span>
              
              <button
                onClick={() => { setSelectedDay(1); setSelectedMonth('Sep'); }}
                className={`p-2 rounded-xl font-bold transition-all ${
                  selectedDay === 1 && selectedMonth === 'Sep'
                    ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-md'
                    : 'bg-[#222] hover:bg-[#333] text-white'
                }`}
              >
                1
              </button>
              <button
                onClick={() => { setSelectedDay(2); setSelectedMonth('Sep'); }}
                className={`p-2 rounded-xl font-bold transition-all ${
                  selectedDay === 2 && selectedMonth === 'Sep'
                    ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-md'
                    : 'bg-[#222] hover:bg-[#333] text-white'
                }`}
              >
                2
              </button>
              <button
                onClick={() => { setSelectedDay(3); setSelectedMonth('Sep'); }}
                className={`p-2 rounded-xl font-bold transition-all ${
                  selectedDay === 3 && selectedMonth === 'Sep'
                    ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-md'
                    : 'bg-[#222] hover:bg-[#333] text-white'
                }`}
              >
                3
              </button>
              <button
                onClick={() => { setSelectedDay(4); setSelectedMonth('Sep'); }}
                className={`p-2 rounded-xl font-bold transition-all ${
                  selectedDay === 4 && selectedMonth === 'Sep'
                    ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-md'
                    : 'bg-[#222] hover:bg-[#333] text-white'
                }`}
              >
                4
              </button>
              <span className="p-2 text-neutral-500">5</span>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>America/Phoenix</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>15m meeting</span>
              </div>
            </div>
          </div>

          {/* Time Slots Selector (Right 5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-bold text-white">
                  Fri {selectedDay}th
                </div>
                <div className="flex bg-[#0A0A0A] p-0.5 rounded-lg border border-white/10 text-[10px] font-bold">
                  <button
                    onClick={() => setTimeFormat('12h')}
                    className={`px-2 py-0.5 rounded ${timeFormat === '12h' ? 'bg-[#D4AF37] text-[#0A0A0A]' : 'text-neutral-400'}`}
                  >
                    12h
                  </button>
                  <button
                    onClick={() => setTimeFormat('24h')}
                    className={`px-2 py-0.5 rounded ${timeFormat === '24h' ? 'bg-[#D4AF37] text-[#0A0A0A]' : 'text-neutral-400'}`}
                  >
                    24h
                  </button>
                </div>
              </div>

              {/* Time Slot List with scroll */}
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {timeSlots.map((slot, index) => {
                  const displayTime = timeFormat === '12h' ? slot.slot12 : slot.slot24;
                  const isSelected = selectedTime === slot.slot12;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(slot.slot12)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] shadow-md font-bold'
                          : 'bg-[#0A0A0A] hover:bg-[#1f1f1f] text-neutral-300 border-white/10'
                      }`}
                    >
                      <span>{displayTime}</span>
                      {isSelected && <span className="text-xs font-bold">Selected</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next / Proceed Button */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => setIsConfirming(true)}
                className="w-full py-3 px-6 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-xs hover:bg-[#c29e28] transition-all shadow-md active:scale-98"
              >
                Next → Confirm {selectedTime}
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
