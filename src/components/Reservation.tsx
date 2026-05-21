import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Calendar, Users, Clock, Send, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Reservation() {
  const { t } = useTranslation();
  
  // Form States
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // UI Flow States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!date) {
      setErrorMessage('Please select a preferred date.');
      return;
    }
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 1200);
  };

  const handleReset = () => {
    setDate('');
    setName('');
    setEmail('');
    setGuests('2');
    setTime('19:00');
    setShowConfirmation(false);
  };

  return (
    <section id="reservation" className="py-24 md:py-36 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-primary/2 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-serif italic text-xl tracking-wider">Tavolo</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-cream mb-6 leading-[1.1] tracking-tight">
            Secure your table
          </h2>
          <p className="text-cream/40 font-light italic max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Experience the art of timeless hospitality. For groups larger than 8, please contact us directly.
          </p>
        </div>

        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-16 rounded-[32px] shadow-3xl relative overflow-hidden group/form">
          <AnimatePresence mode="wait">
            {!showConfirmation ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-10"
              >
                <div className="grid sm:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40 flex items-center gap-2">
                      <Users size={12} className="text-primary" /> Guests
                    </label>
                    <div className="relative">
                      <select 
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-cream font-light focus:outline-none focus:border-primary focus:bg-bg-dark transition-all appearance-none cursor-pointer text-sm"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                          <option key={n} value={n} className="bg-bg-dark text-cream">
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-white/10 pl-3">
                        <span className="text-[9px] text-cream/30">▼</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40 flex items-center gap-2">
                      <Calendar size={12} className="text-primary" /> Date
                    </label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-cream font-light focus:outline-none focus:border-primary focus:bg-bg-dark transition-all text-sm block"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40 flex items-center gap-2">
                      <Clock size={12} className="text-primary" /> Time
                    </label>
                    <div className="relative">
                      <select 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-cream font-light focus:outline-none focus:border-primary focus:bg-bg-dark transition-all appearance-none cursor-pointer text-sm"
                      >
                        {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(t => (
                          <option key={t} value={t} className="bg-bg-dark text-cream">{t}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-white/10 pl-3">
                        <span className="text-[9px] text-cream/30">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-cream/40">Details</label>
                  <div className="grid md:grid-cols-2 gap-8">
                    <input 
                      type="text" 
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-cream font-light focus:outline-none focus:border-primary focus:bg-bg-dark transition-all placeholder:text-cream/20 text-sm"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-cream font-light focus:outline-none focus:border-primary focus:bg-bg-dark transition-all placeholder:text-cream/20 text-sm"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-200 rounded-xl text-xs flex items-center gap-3"
                  >
                    <XCircle size={16} className="text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="pt-6 flex flex-col sm:flex-row items-center gap-8 justify-between border-t border-white/5">
                  <p className="text-cream/30 text-[10px] uppercase tracking-wider max-w-xs leading-relaxed italic text-center sm:text-left">
                    By clicking "Reserve Now" you agree to our allergen management & booking policy.
                  </p>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white px-12 py-5 rounded-full font-serif text-base flex items-center justify-center gap-3 transition-all shadow-2xl hover:brightness-110 w-full sm:w-auto hover:shadow-primary/25 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white animate-slow-zoom" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Secured Connection...
                      </>
                    ) : (
                      <>
                        Reserve Now
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="text-center py-8 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(192,94,61,0.3)]">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                
                <span className="text-primary font-serif italic text-xl mb-2 block">Benvenuto / Welcome</span>
                <h3 className="text-3xl md:text-4xl font-serif text-cream mb-4">Prenotazione Confermata!</h3>
                
                <div className="max-w-md bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 my-6 space-y-4 text-left font-light tracking-wide text-[11px] w-full relative overflow-hidden shadow-2xl">
                  {/* Decorative boarding ticket side hollow notches */}
                  <div className="absolute left-[-10px] top-[40%] w-5 h-5 bg-[#0a0502] rounded-full border-r border-white/5 z-20 pointer-events-none" />
                  <div className="absolute right-[-10px] top-[40%] w-5 h-5 bg-[#0a0502] rounded-full border-l border-white/5 z-20 pointer-events-none" />
                  
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-cream/45 uppercase tracking-widest font-mono text-[9px]">RESV NUMBER</span>
                    <span className="text-primary font-mono tracking-wide font-bold">#DG-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>

                  <div className="space-y-3.5 pt-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-cream/40 uppercase tracking-widest text-[9px]">GUEST NAME</span>
                      <span className="text-cream font-medium tracking-tight text-right">{name}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-cream/40 uppercase tracking-widest text-[9px]">PARTY SIZE</span>
                      <span className="text-cream font-medium tracking-tight text-right">{guests} {guests === '1' ? 'Person' : 'People'}</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-white/15 my-4 pt-4" />

                  <div className="space-y-3.5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-cream/40 uppercase tracking-widest text-[9px]">ARRIVING ON</span>
                      <span className="text-primary font-serif italic text-sm text-right font-medium">{date}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-cream/40 uppercase tracking-widest text-[9px]">SERVICE TIME</span>
                      <span className="text-primary font-serif italic text-sm text-right font-medium">{time}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-cream/40 uppercase tracking-widest text-[9px]">EMAIL RECEIPTS</span>
                      <span className="text-cream/70 font-mono lowercase max-w-[190px] break-all text-right select-all">{email}</span>
                    </div>
                  </div>
                </div>

                <p className="text-cream/60 max-w-md text-sm leading-relaxed mb-8">
                  Grazie mille! A confirmation email has been dispatched. If your status has changed, please call our hosts at least 1 hour beforehand.
                </p>

                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-cream text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  Book Another Table
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
            <div className="flex items-center gap-4 border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex-1">
              <div className="p-3.5 rounded-full border border-white/10 text-primary bg-primary/5 shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-cream/40 block mb-0.5">Direct Line</span>
                <span className="text-cream text-sm font-serif">+43 1 523 77 78</span>
              </div>
            </div>
             
            <div className="flex items-center gap-4 border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex-1">
              <div className="p-3.5 rounded-full border border-white/10 text-primary bg-primary/5 shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.5-4.5 2-4.5 2.5 0 3.125 2.375 2 4.5-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5"></path></svg>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-cream/40 block mb-0.5">Mobile Contact</span>
                <span className="text-cream text-sm font-serif">+43 676 407 82 88</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl relative overflow-hidden flex items-center">
            <div className="relative z-10">
              <h4 className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Events & Private bookings</h4>
              <p className="text-cream/70 text-[11px] leading-relaxed italic">
                As we are a small and intimate restaurant, our seating capacity for large groups is limited. If you would like to book for a group larger than 8, please give us a call!
              </p>
            </div>
            <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
              <Users size={48} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
