import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

type Category = 'All' | 'Pizza' | 'Pasta' | 'Desserts' | 'Drinks' | 'Interior';

interface GalleryImage {
  url: string;
  category: Category;
  title: string;
}

const images: GalleryImage[] = [
  { 
    url: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2670&auto=format&fit=crop", 
    category: 'Pizza',
    title: 'Margherita D.O.P'
  },
  { 
    url: "https://images.unsplash.com/photo-1550966841-3ee4ad003744?q=80&w=2670&auto=format&fit=crop", 
    category: 'Interior',
    title: 'Warm Ambiance'
  },
  { 
    url: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=2574&auto=format&fit=crop", 
    category: 'Pasta',
    title: 'Handmade Linguine'
  },
  { 
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2664&auto=format&fit=crop", 
    category: 'Desserts',
    title: 'Signature Tiramisu'
  },
  { 
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop", 
    category: 'Drinks',
    title: 'Classic Negroni'
  },
  { 
    url: "https://images.unsplash.com/photo-1563245372-f21724e3a16d?q=80&w=2729&auto=format&fit=crop", 
    category: 'Interior',
    title: 'Intimate Dining'
  },
  { 
    url: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop", 
    category: 'Pizza',
    title: 'Tartufo Pizza'
  },
  { 
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop", 
    category: 'Interior',
    title: 'Bar Lounge'
  },
  { 
    url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2588&auto=format&fit=crop", 
    category: 'Pasta',
    title: 'Seafood Fettuccine'
  },
  { 
    url: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2670&auto=format&fit=crop", 
    category: 'Pizza',
    title: 'Quattro Formaggi'
  },
  { 
    url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2670&auto=format&fit=crop", 
    category: 'Desserts',
    title: 'Panna Cotta'
  },
  { 
    url: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=2574&auto=format&fit=crop", 
    category: 'Interior',
    title: 'Table Details'
  },
  { 
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop", 
    category: 'Interior',
    title: 'Pizza Oven'
  },
  { 
    url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2670&auto=format&fit=crop", 
    category: 'Pasta',
    title: 'Tagliatelle al Ragu'
  },
  { 
    url: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=2574&auto=format&fit=crop", 
    category: 'Drinks',
    title: 'Aperol Spritz'
  },
  { 
    url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2670&auto=format&fit=crop", 
    category: 'Pasta',
    title: 'Ravioli del Plin'
  }
];

const categories: Category[] = ['All', 'Pizza', 'Pasta', 'Desserts', 'Drinks', 'Interior'];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-40 bg-bg-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-serif italic text-xl mb-4 block">Visual Journey</span>
          <h2 className="text-6xl md:text-8xl font-serif text-cream mb-12 leading-[0.9] tracking-tight">
            Cinematic Gallery
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-6 py-2 text-[10px] uppercase tracking-widest transition-all rounded-full border',
                  activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-xl' 
                    : 'text-cream/40 border-white/5 hover:border-white/20'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "relative overflow-hidden group rounded-[40px] border border-white/5 shadow-xl cursor-pointer aspect-[4/5]",
                  idx % 4 === 0 ? "md:col-span-1 md:row-span-1" : ""
                )}
                onClick={() => setSelectedImage(idx)}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="mb-4">
                    <span className="bg-primary/20 text-primary text-[8px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-primary/30 mb-2 inline-block">
                      {img.category}
                    </span>
                    <h4 className="text-xl font-serif text-cream">{img.title}</h4>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-cream/40 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white z-[110] transition-all hover:scale-110"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white z-[110] transition-all hover:scale-110"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] md:h-[80vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredImages[selectedImage].url}
                    src={filteredImages[selectedImage].url}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-12 left-12 right-12 z-20">
                  <motion.div
                    key={filteredImages[selectedImage].title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-primary font-serif italic text-xl mb-4 block">
                      {filteredImages[selectedImage].category}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
                      {filteredImages[selectedImage].title}
                    </h2>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 flex gap-2">
                {filteredImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      selectedImage === idx ? "w-8 bg-primary" : "bg-white/20"
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
