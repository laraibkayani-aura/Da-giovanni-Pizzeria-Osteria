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
          <span className="text-primary font-serif italic text-xl md:text-2xl mb-6 block">
            Authentic Austria Heritage
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-cream mb-8 leading-[0.9] tracking-tight">
            The Art of <br/>Slow Dining.
          </h1>
          <p className="text-cream/60 text-lg md:text-xl font-light italic max-w-2xl mx-auto mb-12 leading-relaxed">
            "{t('hero.subtitle')}"
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-5 rounded-full font-serif text-lg flex items-center gap-3 transition-all shadow-xl w-full md:w-auto"
            >
              {t('hero.cta_reserve')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden md:block">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 text-cream px-10 py-5 rounded-full font-serif text-lg transition-all hover:bg-white/10 w-full md:w-auto"
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
