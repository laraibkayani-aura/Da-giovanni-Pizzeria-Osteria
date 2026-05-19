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
    <section id="about" className="py-24 md:py-40 bg-bg-dark overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
              alt="Chef Giovanni's Corner"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden lg:block bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 max-w-xs rounded-[32px] transition-transform hover:scale-105 duration-500 z-20 shadow-2xl">
            <span className="text-primary font-serif italic text-xl block mb-4">La Filosofia</span>
            <p className="text-cream font-serif italic text-lg leading-relaxed">
              "L'ingrediente segreto? È sempre stato l'amore per la terra di Vienna."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-primary font-serif italic text-xl mb-4 block">Legacy</span>
          <h2 className="text-5xl md:text-7xl font-serif text-cream mb-8 leading-[0.9] tracking-tight">
            {t('about.title')}
          </h2>
          <div className="space-y-6">
            <p className="text-cream/60 text-lg leading-relaxed font-light">
              {t('about.story')}
            </p>
            <p className="text-cream/40 text-base leading-relaxed font-light italic">
              Dalle colline della Toscana alle strade di Vienna, abbiamo conservato la stessa dedizione per le materie prime. Ogni mattina, il nostro fornaio prepara il lievito madre, mentre i nostri fornitori ci consegnano il meglio del raccolto locale.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6 pt-12 border-t border-white/10">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="text-cream/80 font-serif italic text-2xl">Giovanni Bellucci</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
