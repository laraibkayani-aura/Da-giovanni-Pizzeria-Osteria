import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder / Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
          alt="Atmospheric restaurant"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold">
              AUTHENTIC ITALIAN HERITAGE IN VIENNA
            </span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8 leading-[1.05] tracking-tight">
            The Art of <br className="hidden sm:block" />Slow Dining.
          </h1>
          <p className="text-cream/80 text-base md:text-lg font-light italic max-w-2xl mx-auto mb-12 leading-relaxed">
            "{t('hero.subtitle')}"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto sm:max-w-none">
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-9 py-4.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-primary/20 w-full sm:w-auto cursor-pointer"
            >
              <span>{t('hero.cta_reserve')}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/15 text-cream hover:text-white hover:border-white/30 px-9 py-4.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all w-full sm:w-auto cursor-pointer"
            >
              {t('hero.cta_menu')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium mb-4 rotate-90 origin-left ml-2">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
