/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useNavigate, 
  useParams, 
  useLocation 
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';
import './i18n/config';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { GlutenFree } from './components/GlutenFree';
import { Gallery } from './components/Gallery';
import { InstagramFeed } from './components/InstagramFeed';
import { Testimonials } from './components/Testimonials';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function LanguageHandler() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const supportedLangs = ['en', 'de', 'it'];
    
    if (!lang || !supportedLangs.includes(lang)) {
      // Get preferred language or fallback
      const detectedLang = i18n.language.split('-')[0];
      const targetLang = supportedLangs.includes(detectedLang) ? detectedLang : 'en';
      navigate(`/${targetLang}`, { replace: true });
    } else if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <GlutenFree />
        <Gallery />
        <InstagramFeed />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-bg-dark min-h-screen text-cream font-sans selection:bg-primary selection:text-white relative overflow-hidden">
        {/* Atmospheric Background Layers */}
        <div className="fixed inset-0 opacity-40 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-olive rounded-full filter blur-[100px]"></div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
          <Routes>
            <Route path="/:lang" element={<LanguageHandler />} />
            <Route path="*" element={<LanguageHandler />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  </Router>
);
}
