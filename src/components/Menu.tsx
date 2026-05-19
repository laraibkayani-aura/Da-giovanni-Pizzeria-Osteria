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

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          <AnimatePresence mode="wait">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-serif text-cream group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-light text-cream/90">{item.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-cream/40 font-light text-base italic leading-relaxed">{item.desc}</p>
                </div>
                {item.tags.includes('Signature') && (
                  <span className="absolute -top-6 left-0 bg-primary/10 text-primary text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">
                    Chef's Recommendation
                  </span>
                )}
                <div className="h-px w-full bg-white/5 group-hover:bg-primary/30 transition-colors mt-6" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-xs italic text-center md:text-left max-w-sm">
            All prices include VAT. Please inform our staff about any allergies or dietary requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white border-b border-white/30 pb-2 hover:border-white transition-all"
          >
            Download Full Dinner Menu (PDF)
          </motion.button>
        </div>
      </div>
    </section>
  );
}
