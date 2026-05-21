import { ShieldCheck, Info, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function GlutenFree() {
  return (
    <section className="py-24 md:py-36 bg-bg-dark border-y border-white/5 relative overflow-hidden">
      {/* Decorative background visual ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/3 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3.5 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full">
              <ShieldCheck className="text-primary" size={18} />
              <span className="text-primary text-[9px] uppercase tracking-[0.2em] font-bold">100% Certified Safety</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-cream leading-[1.1] tracking-tight">
              Enjoy Italian cuisine, <br />
              <span className="italic text-cream/40">worry-free.</span>
            </h2>
            
            <p className="text-cream/80 text-base md:text-lg leading-relaxed font-light">
              We understand the paramount importance of safety. Our dedicated gluten-free kitchen environment in Vienna follows severe state-sanctioned protocols to ensure zero cross-contamination, allowing you to indulge in your favorite classic Italian dishes with absolute peace of mind.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary group-hover/item:border-primary/40 transition-all duration-300">
                  <Leaf size={18} />
                </div>
                <h4 className="text-cream text-xs uppercase tracking-widest font-bold">Natural Ingredients</h4>
                <p className="text-cream/40 text-xs leading-relaxed italic">Locally sourced, organic grain substitutes, clean and fully traceable produce.</p>
              </div>
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary group-hover/item:border-primary/40 transition-all duration-300">
                  <Info size={18} />
                </div>
                <h4 className="text-cream text-xs uppercase tracking-widest font-bold">Expert Staff</h4>
                <p className="text-cream/40 text-xs leading-relaxed italic">Our team members are comprehensively and recursively certified in allergen protocol.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[350px] sm:h-[450px] md:h-[550px] group/gallery pt-4 lg:pt-0">
             <div className="pt-8 transition-transform duration-700 hover:translate-y-[-8px]">
               <img 
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=2677&auto=format&fit=crop" 
                alt="Gluten free ingredients"
                className="w-full h-full object-cover rounded-3xl grayscale brightness-90 border border-white/5 shadow-2xl transition-all duration-700 hover:grayscale-0"
                loading="lazy"
               />
             </div>
             <div className="pb-8 transition-transform duration-700 hover:translate-y-[8px]">
               <img 
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2670&auto=format&fit=crop" 
                alt="Gluten free pizza"
                className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl transition-all duration-700 hover:brightness-105"
                loading="lazy"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
