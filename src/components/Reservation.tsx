import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, Users, Clock, Send } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Reservation() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  return (
    <section id="reservation" className="py-24 md:py-40 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-serif italic text-xl mb-4 block">Reservation</span>
          <h2 className="text-6xl md:text-8xl font-serif text-cream mb-8 leading-[0.9] tracking-tight">
            Secure your table
          </h2>
          <p className="text-cream/40 font-light italic max-w-lg mx-auto text-lg leading-relaxed">
            Experience the art of Italian hospitality. For groups larger than 8, please contact us directly.
          </p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <form className="relative z-10 space-y-12">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40 flex items-center gap-2">
                  <Users size={12} /> Guests
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 text-cream font-light focus:outline-none focus:border-primary transition-colors appearance-none">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-bg-dark">{n} Persone</option>)}
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40 flex items-center gap-2">
                  <Calendar size={12} /> Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-cream font-light focus:outline-none focus:border-primary transition-colors block"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40 flex items-center gap-2">
                  <Clock size={12} /> Time
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 text-cream font-light focus:outline-none focus:border-primary transition-colors appearance-none">
                  {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(t => <option key={t} value={t} className="bg-bg-dark">{t}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40">Details</label>
              <div className="grid md:grid-cols-2 gap-12">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-cream font-light focus:outline-none focus:border-primary transition-colors placeholder:text-cream/20"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-cream font-light focus:outline-none focus:border-primary transition-colors placeholder:text-cream/20"
                />
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row items-center gap-12 justify-between">
              <p className="text-cream/20 text-[11px] max-w-xs leading-relaxed italic">
                By clicking "Reserve Now" you agree to our booking terms and notification policy.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-16 py-6 rounded-full font-serif text-lg flex items-center gap-4 transition-all shadow-2xl hover:brightness-110"
              >
                Reserve Now
                <Send size={18} />
              </motion.button>
            </div>
          </form>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="flex flex-wrap justify-between items-center gap-12 text-white/40">
             <div className="flex items-center gap-4">
               <div className="p-4 rounded-full border border-white/10">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               </div>
               <div>
                 <span className="text-[10px] uppercase tracking-widest block mb-1">Direct Line</span>
                 <span className="text-white font-serif">+43 1 523 77 78</span>
               </div>
             </div>
             
             <div className="flex items-center gap-4">
               <div className="p-4 rounded-full border border-white/10">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.5-4.5 2-4.5 2.5 0 3.125 2.375 2 4.5-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5"></path></svg>
               </div>
               <div>
                 <span className="text-[10px] uppercase tracking-widest block mb-1">Mobile</span>
                 <span className="text-white font-serif">+43 676 407 82 88</span>
               </div>
             </div>
          </div>

          <div className="p-8 bg-primary/5 border border-primary/20 rounded-[32px] relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4">Events & Groups</h4>
              <p className="text-cream/70 text-[11px] italic leading-relaxed">
                As we are a small and intimate restaurant, our seating capacity for large groups is limited. If you would like to book for a larger group, please give us a call!
              </p>
            </div>
            <div className="absolute top-0 right-0 p-6 opacity-5">
               <Users size={60} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
