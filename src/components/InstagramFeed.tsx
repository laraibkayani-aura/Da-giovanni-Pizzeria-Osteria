import { motion } from 'motion/react';
import { Instagram, Facebook, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const instaPosts = [
  {
    image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=2670&auto=format&fit=crop",
    likes: "1.2k",
    comments: "48"
  },
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop",
    likes: "856",
    comments: "32"
  },
  {
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2670&auto=format&fit=crop",
    likes: "2.1k",
    comments: "94"
  },
  {
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2670&auto=format&fit=crop",
    likes: "1.5k",
    comments: "56"
  }
];

export function InstagramFeed() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 md:py-36 bg-bg-dark overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-serif italic text-lg tracking-wider">Social Life</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-cream leading-[1.1] tracking-tight">
              Stay <span className="text-primary italic">Connected</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 lg:justify-end w-full lg:w-auto">
            <motion.a
              href="https://www.instagram.com/da_giovanni1070"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3.5 px-8 py-4 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full text-cream text-[10px] font-bold tracking-[0.18em] uppercase hover:bg-white/10 transition-all group cursor-pointer"
            >
              <Instagram size={16} className="text-primary group-hover:rotate-12 transition-transform" />
              Follow @da_giovanni1070
              <ExternalLink size={12} className="opacity-30" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/people/Pizzeria-Osteria-da-Giovanni/100054216771476/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3.5 px-8 py-4 bg-[#1877F2]/5 backdrop-blur-xl border border-[#1877F2]/20 rounded-full text-cream text-[10px] font-bold tracking-[0.18em] uppercase hover:bg-[#1877F2]/10 transition-all group cursor-pointer"
            >
              <Facebook size={16} className="text-[#1877F2] group-hover:rotate-12 transition-transform" />
              Follow on Facebook
              <ExternalLink size={12} className="opacity-30" />
            </motion.a>
            <motion.a
              href="https://www.tripadvisor.com/Restaurant_Review-g190454-d1903227-Reviews-Pizzeria_Osteria_Da_Giovanni-Vienna.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3.5 px-8 py-4 bg-[#34E0A1]/5 backdrop-blur-xl border border-[#34E0A1]/20 rounded-full text-cream text-[10px] font-bold tracking-[0.18em] uppercase hover:bg-[#34E0A1]/10 transition-all group cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#34E0A1] group-hover:rotate-12 transition-transform"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              Rate on TripAdvisor
              <ExternalLink size={12} className="opacity-30" />
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-white/[0.01] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-3xl"
          >
            <div>
              <div className="flex gap-1.5 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#34E0A1] drop-shadow-[0_0_4px_rgba(52,224,161,0.4)]"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-cream italic mb-8 leading-relaxed">
                "The best gluten-free pizza in Vienna. A true gem for celiacs and food lovers alike."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold font-serif italic">SM</div>
                <div>
                  <span className="block text-cream/90 text-[10px] uppercase tracking-widest font-bold">Sarah M.</span>
                  <span className="block text-cream/40 text-[8px] uppercase tracking-widest mt-0.5">TripAdvisor Elite Reviewer</span>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-8">
              <div className="flex flex-col">
                <span className="text-cream text-2xl font-serif">4.8 / 5</span>
                <span className="text-cream/30 text-[8px] uppercase tracking-widest mt-1">Average Rating</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-cream text-2xl font-serif text-primary">850+</span>
                <span className="text-cream/30 text-[8px] uppercase tracking-widest mt-1">Reviews</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-6 md:gap-8">
            {instaPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative aspect-square group rounded-[32px] overflow-hidden border border-white/5 cursor-pointer shadow-2xl"
              >
                <img 
                  src={post.image} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <Heart size={24} className="text-primary fill-primary" />
                    <span className="text-white text-xs font-bold tracking-widest">{post.likes}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MessageCircle size={24} className="text-white" />
                    <span className="text-white text-xs font-bold tracking-widest">{post.comments}</span>
                  </div>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all">
                   <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                     <Instagram size={16} className="text-white" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Subtle decorative placeholder for 'As seen in' branding */}
           <span className="text-[10px] uppercase tracking-[0.4em] font-bold">#daGiovanniVienna</span>
           <span className="text-[10px] uppercase tracking-[0.4em] font-bold">#ItalianHeritage</span>
           <span className="text-[10px] uppercase tracking-[0.4em] font-bold">#ViennaFineDining</span>
        </div>
      </div>
    </section>
  );
}
