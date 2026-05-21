import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Leaf, Flame, Waves, Utensils } from 'lucide-react';

const menuItems = {
  pizza: [
    { name: 'Margherita D.O.P', price: '14€', desc: 'San Marzano tomatoes, Buffalo mozzarella, Fresh basil', tags: ['Classic'] },
    { name: 'Diavola', price: '16€', desc: 'Spicy Salami, Gorgonzola, Black olives', tags: ['Hot'] },
    { name: 'Tartufo', price: '22€', desc: 'Fresh black truffle, Mozzarella, Porcini mushrooms', tags: ['Signature'] },
  ],
  pasta: [
    { name: 'Carbonara Authentica', price: '18€', desc: 'Guanciale, Pecorino Romano, Egg yolk, Black pepper', tags: ['Traditional'] },
    { name: 'Pappardelle al Cinghiale', price: '24€', desc: 'Hand-cut pappardelle with wild boar ragù', tags: ['Rich'] },
  ],
  seafood: [
    { name: 'Branzino in Crosta', price: '32€', desc: 'Sea bass in salt crust with garden herbs', tags: ['Fresh'] },
    { name: 'Gratinata di Capesante', price: '28€', desc: 'King scallops with herb breadcrumbs', tags: ['Delicate'] },
  ],
  vegan: [
    { name: 'Gnocchi di Zucca', price: '19€', desc: 'Pumpkin gnocchi, sage butter, toasted walnuts', tags: ['Organic'] },
    { name: 'Risotto ai Funghi', price: '21€', desc: 'Acquerello rice, forest mushrooms, truffle oil', tags: ['Vegan'] },
  ]
};

const categories = [
  { id: 'pizza', label: 'menu.pizza', icon: <Flame size={14} /> },
  { id: 'pasta', label: 'menu.pasta', icon: <Utensils size={14} /> },
  { id: 'seafood', label: 'menu.seafood', icon: <Waves size={14} /> },
  { id: 'vegan', label: 'menu.vegan', icon: <Leaf size={14} /> },
];

export function Menu() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('pizza');

  return (
    <section id="menu" className="py-24 md:py-40 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-serif italic text-xl mb-4 block">Selection</span>
          <h2 className="text-6xl md:text-8xl font-serif text-cream mb-8 leading-[0.9] tracking-tight">
            {t('menu.title')}
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-2 rounded-full inline-flex mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-widest transition-all rounded-full',
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-xl' 
                    : 'text-cream/40 hover:text-cream/70'
                )}
              >
                {cat.icon}
                {t(cat.label)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12">
          <AnimatePresence mode="wait">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group cursor-pointer relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-serif text-cream group-hover:text-primary transition-colors pr-2 shrink-0">
                      {item.name}
                    </h3>
                    {/* Premium dotted leader line */}
                    <div className="flex-1 border-b border-dotted border-white/10 group-hover:border-primary/30 transition-colors mx-2 relative top-[-4px]" />
                    <span className="text-lg md:text-xl font-light text-cream/90 font-mono tracking-tight shrink-0">{item.price}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-cream/50 font-light text-sm italic leading-relaxed max-w-[85%]">{item.desc}</p>
                    <div className="flex gap-1.5 shrink-0 select-none">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[8px] tracking-wider uppercase bg-white/[0.02] border border-white/10 text-cream/40 px-2.5 py-1 rounded-md group-hover:border-primary/30 group-hover:text-primary transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {item.tags.includes('Signature') && (
                    <span className="absolute -top-7 left-0 bg-primary/10 text-primary text-[8px] uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">
                      Chef's Recommendation
                    </span>
                  )}
                </div>
                <div className="h-px w-full bg-white/5 group-hover:bg-primary/20 transition-all duration-500 mt-5" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-[11px] leading-relaxed italic text-center md:text-left max-w-md">
            All ingredients are premium grade & locally curated. All prices include VAT. Please inform our hosts of any allergen, dietary restriction, or cross-contact concern.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all rounded-full text-cream text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Full Dinner Menu (PDF)
          </motion.a>
        </div>
      </div>
    </section>
  );
}
