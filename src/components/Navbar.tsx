import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Instagram, Facebook } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'de', name: 'DE' },
  { code: 'it', name: 'IT' },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code: string) => {
    // Current path without the language prefix
    const pathParts = location.pathname.split('/').filter(p => p);
    const supportedLangs = ['en', 'de', 'it'];
    
    let newPath = '';
    if (supportedLangs.includes(pathParts[0])) {
      pathParts[0] = code;
      newPath = '/' + pathParts.join('/');
    } else {
      newPath = '/' + code + location.pathname;
    }
    
    navigate(newPath);
    i18n.changeLanguage(code);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.reservation'), href: '#reservation' },
    { name: t('nav.contact'), href: '#location' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'bg-[#0a0502]/85 backdrop-blur-2xl border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent border-transparent py-7'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group select-none">
          <span className="text-xl md:text-2xl font-serif tracking-tight text-cream transition-all group-hover:text-primary">
            da Giovanni <span className="font-serif italic text-primary group-hover:text-cream transition-all">Vienna</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cream/70 hover:text-cream transition-all duration-300 relative py-2 group/link"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-1.5 bg-white/[0.03] rounded-full p-1 border border-white/5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  'px-3 py-1 text-[9px] font-bold tracking-[0.1em] transition-all rounded-full cursor-pointer',
                  i18n.language.startsWith(lang.code) 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-cream/40 hover:text-cream/85'
                )}
              >
                {lang.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 hidden xl:flex">
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g190454-d1903227-Reviews-Pizzeria_Osteria_Da_Giovanni-Vienna.html"
                target="_blank"
                rel="noopener noreferrer"
                title="TripAdvisor"
                className="p-2 text-cream/40 hover:text-primary transition-all hover:scale-110 group cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:drop-shadow-[0_0_8px_rgba(192,94,61,0.5)]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/da_giovanni1070"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-2 text-cream/40 hover:text-primary transition-all hover:scale-110 group cursor-pointer"
              >
                <Instagram size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(192,94,61,0.5)]" />
              </a>
              <a 
                href="https://www.facebook.com/people/Pizzeria-Osteria-da-Giovanni/100054216771476/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="p-2 text-cream/40 hover:text-primary transition-all hover:scale-110 group cursor-pointer"
              >
                <Facebook size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(192,94,61,0.5)]" />
              </a>
            </div>
            
            <a 
              href="#interactive-map"
              className="flex items-center gap-2 px-4.5 py-2.5 bg-white/[0.02] border border-white/10 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all group/find cursor-pointer"
            >
              <MapPin size={11} className="text-primary transition-transform group-hover/find:scale-120" />
              <span>{t('nav.findUs', 'Find Us')}</span>
            </a>
            
            <a 
              href="#reservation"
              className="px-5 py-2.5 bg-primary text-white border border-transparent rounded-full text-[9px] uppercase tracking-[0.16em] font-bold hover:brightness-115 transition-all shadow-md hover:shadow-primary/20 cursor-pointer"
            >
              {t('nav.reservation')}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-all cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0502]/98 backdrop-blur-2xl border-b border-white/10 py-10 lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest text-white"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-lg uppercase tracking-widest text-cream/70 hover:text-primary transition-colors"
              >
                {t('nav.gallery')}
              </a>
              <a
                href="#interactive-map"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-lg uppercase tracking-widest text-primary font-bold"
              >
                <MapPin size={18} />
                Find Us
              </a>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g190454-d1903227-Reviews-Pizzeria_Osteria_Da_Giovanni-Vienna.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg uppercase tracking-widest text-primary font-bold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  TripAdvisor
                </a>
                <a
                  href="https://www.instagram.com/da_giovanni1070"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg uppercase tracking-widest text-primary font-bold"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/Pizzeria-Osteria-da-Giovanni/100054216771476/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg uppercase tracking-widest text-primary font-bold"
                >
                  <Facebook size={20} />
                  Facebook
                </a>
              </div>
              <div className="flex space-x-6 pt-6">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      'text-sm font-medium',
                      i18n.language === lang.code ? 'text-white' : 'text-white/40'
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
