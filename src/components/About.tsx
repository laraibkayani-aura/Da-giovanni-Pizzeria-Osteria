import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 md:py-36 bg-bg-dark overflow-hidden relative" ref={ref}>
      {/* Soft elegant glowing ambient blob in background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 shadow-3xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop" 
              alt="da Giovanni Vienna Interior Ambiance"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden lg:block bg-[#0a0502]/85 backdrop-blur-2xl border border-white/10 p-8 max-w-sm rounded-[24px] transition-all hover:translate-y-[-4px] hover:border-primary/40 duration-500 z-20 shadow-2xl">
            <span className="text-primary font-serif italic text-lg block mb-3">La Filosofia</span>
            <p className="text-cream font-serif italic text-base leading-relaxed text-cream/90">
              "L'ingrediente segreto? È sempre stato l'amore per la terra di Vienna."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-primary animate-pulse" />
            <span className="text-primary font-serif italic text-lg tracking-wider">Legacy</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream mb-8 leading-[1.1] tracking-tight">
            {t('about.title')}
          </h2>
          <div className="space-y-6">
            <p className="text-cream/80 text-lg leading-relaxed font-light">
              {t('about.story')}
            </p>
            <p className="text-cream/50 text-base leading-relaxed font-light italic border-l border-primary/20 pl-6 my-6">
              Dalle colline della Toscana alle strade di Vienna, abbiamo conservato la stessa dedizione per le materie prime. Ogni mattina, il nostro fornaio prepara il lievito madre, mentre i nostri fornitori ci consegnano il meglio del raccolto locale.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-6 pt-10 border-t border-white/5">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            </div>
            <div>
              <span className="block text-cream/90 font-serif italic text-xl">Giovanni Bellucci</span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-cream/30 mt-0.5">Founder & Chef De Cuisine</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
