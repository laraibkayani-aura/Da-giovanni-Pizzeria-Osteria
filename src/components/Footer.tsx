import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, ArrowUpRight, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex flex-col items-start group mb-8">
              <span className="text-4xl font-serif tracking-tighter italic text-cream group-hover:text-primary transition-colors">
                da Giovanni Vienna
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40 mt-1">Sigmundsgasse 14, 1070 Vienna</span>
            </a>
            <p className="text-cream/40 font-light text-lg max-w-sm mb-10 leading-relaxed italic">
              "Building memories through flavors since 1982. A corner of Italy in the heart of Vienna."
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/da_giovanni1070" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-white/5 rounded-full text-cream/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/people/Pizzeria-Osteria-da-Giovanni/100054216771476/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-white/5 rounded-full text-cream/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all group"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g190454-d1903227-Reviews-Pizzeria_Osteria_Da_Giovanni-Vienna.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-white/5 rounded-full text-cream/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </a>
            </div>
            <div className="mt-8">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Pizzeria+Osteria+da+Giovanni+Sigmundsgasse+14+1070+Vienna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full text-cream text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-xl group"
              >
                <MapPin size={16} className="text-primary group-hover:text-white transition-colors" />
                Find Us on Google Maps
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-cream text-[10px] uppercase tracking-[0.4em] font-bold mb-10">Contact</h4>
            <ul className="space-y-4 text-xs font-light text-cream/60">
              <li className="flex flex-col gap-1 border-b border-white/5 pb-4 italic">
                <span className="text-[8px] uppercase tracking-[0.2em] text-primary">Phone</span>
                <span className="text-cream/80">+43 1 523 77 78</span>
                <span className="text-cream/80">+43 676 407 82 88</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-white/5 pb-4 italic">
                <span className="text-[8px] uppercase tracking-[0.2em] text-primary">Email</span>
                <span className="text-cream/80 lowercase">dagiovanni@gmx.at</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-[10px] uppercase tracking-[0.4em] font-bold mb-10">Hours</h4>
            <ul className="space-y-6 text-sm font-light text-cream/60">
              <li className="flex justify-between border-b border-white/5 pb-6 italic">
                <span>Tue — Sun</span>
                <span className="text-cream/80">18:00 – 23:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-6 italic">
                <span>Monday</span>
                <span className="text-cream/30">CLOSED</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Newsletter</h4>
            <div className="relative group/input">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white/[0.01] border border-white/10 p-5 pr-14 text-[10px] tracking-widest text-cream focus:outline-none focus:border-primary focus:bg-white/[0.03] transition-all uppercase rounded-xl"
              />
              <button 
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg text-cream/40 hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
            <p className="mt-5 text-cream/30 text-[9px] uppercase tracking-widest italic leading-relaxed">
              {t('footer.newsletter')}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] opacity-40">
          <p>
            © 2026 DA GIOVANNI GROUP. {t('footer.rights')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-10">
            <a 
              href="https://www.tripadvisor.com/Restaurant_Review-g190454-d1903227-Reviews-Pizzeria_Osteria_Da_Giovanni-Vienna.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              TripAdvisor
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="https://www.facebook.com/people/Pizzeria-Osteria-da-Giovanni/100054216771476/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Facebook
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="https://www.instagram.com/da_giovanni1070" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
