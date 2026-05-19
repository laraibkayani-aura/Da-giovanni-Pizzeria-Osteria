import { ShieldCheck, Info, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function GlutenFree() {
  return (
    <section className="py-24 md:py-40 bg-bg-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-3 rounded-full mb-10">
              <ShieldCheck className="text-primary" size={20} />
              <span className="text-primary text-[10px] uppercase tracking-widest font-bold">100% Certified Safety</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-cream mb-10 leading-[0.9] tracking-tight">
              Enjoy Italian cuisine, <br />
              <span className="italic text-cream/40">worry-free.</span>
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed font-light mb-12">
               "Finding good gluten-free pizza is always a struggle, particularly when I am traveling and have a hankering only pizza can cure."
               <br /><br />
               We heard you. Our dedicated gluten-free kitchen in Vienna follows strict protocols to ensure zero cross-contamination, so you can enjoy your favorite dishes worry-free.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Leaf className="text-cream/40" size={24} />
                <h4 className="text-cream text-xs uppercase tracking-widest font-bold">Natural Ingredients</h4>
                <p className="text-cream/30 text-[11px] leading-relaxed italic">Locally sourced, clean and traceable ingredients only.</p>
              </div>
              <div className="space-y-4">
                <Info className="text-cream/40" size={24} />
                <h4 className="text-cream text-xs uppercase tracking-widest font-bold">Expert Staff</h4>
                <p className="text-cream/30 text-[11px] leading-relaxed italic">Our team is comprehensively trained in allergen management.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 h-[600px]">
             <div className="pt-12">
               <img 
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=2677&auto=format&fit=crop" 
                alt="Gluten free ingredients"
                className="w-full h-full object-cover rounded-[40px] grayscale border border-white/5 shadow-2xl"
               />
             </div>
             <div className="pb-12">
               <img 
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2670&auto=format&fit=crop" 
                alt="Gluten free pizza"
                className="w-full h-full object-cover rounded-[40px] border border-white/10 shadow-2xl"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
