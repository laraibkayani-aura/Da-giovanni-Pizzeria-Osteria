import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The most authentic carbonara I've ever had outside of Rome. The atmosphere is purely cinematic.",
    author: "Elena Rossi",
    role: "Food Critic",
    rating: 5
  },
  {
    text: "A hidden gem in Vienna. The gluten-free pizza is indistinguishable from the traditional one. Truly impressed.",
    author: "Marc Schmidt",
    role: "Local Guide",
    rating: 5
  },
  {
    text: "Elegant music, warm lighting, and flavors that take you straight to Tuscany. da Giovanni is a masterpiece.",
    author: "Isabella Moretti",
    role: "Regular Guest",
    rating: 5
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-36 bg-[#060301] flex items-center justify-center text-center relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/2 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="flex justify-center mb-8">
          <Quote className="text-primary/20 animate-pulse" size={64} />
        </div>
        
        <div className="relative min-h-[280px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full flex flex-col items-center"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary drop-shadow-[0_0_6px_rgba(192,94,61,0.5)]" />
                ))}
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-cream mb-8 leading-[1.3] md:leading-snug tracking-tight italic max-w-4xl">
                "{testimonials[index].text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-cream text-[10px] uppercase tracking-[0.4em] font-semibold mb-1">
                  {testimonials[index].author}
                </span>
                <span className="text-primary font-serif italic text-base opacity-80">
                  {testimonials[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-12 md:w-16 h-[3px] bg-white/5 transition-all rounded-full overflow-hidden relative cursor-pointer hover:bg-white/10"
              aria-label={`Go to slide ${i + 1}`}
            >
              {index === i ? (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-primary" 
                />
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
