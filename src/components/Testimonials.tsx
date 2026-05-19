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
    text: "A hidden gem in Berlin. The gluten-free pizza is indistinguishable from the traditional one. Truly impressed.",
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40 bg-bg-dark flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6">
        <Quote className="text-primary/10 mx-auto mb-12" size={100} />
        
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-10">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-3xl md:text-5xl font-serif text-cream mb-12 leading-[1.2] tracking-tight italic">
                "{testimonials[index].text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-cream text-xs uppercase tracking-[0.4em] font-bold mb-2">
                  {testimonials[index].author}
                </span>
                <span className="text-primary font-serif italic text-lg opacity-60">
                  {testimonials[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-24">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-16 h-[2px] bg-white/5 transition-all rounded-full overflow-hidden relative`}
            >
              {index === i && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-0 bg-primary" 
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
