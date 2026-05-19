import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';

export function Location() {
  const RESTAURANT_LOCATION = { lat: 48.2045, lng: 16.3533 };
  return (
    <section id="location" className="py-24 md:py-40 bg-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-20 items-start">
          <div className="md:col-span-1 space-y-12">
            <div>
              <span className="text-primary font-serif italic text-xl mb-4 block">Visit Us</span>
              <h2 className="text-5xl md:text-6xl font-serif text-cream mb-10 leading-[0.9] tracking-tight">Vienna</h2>
              <div className="space-y-8 text-cream/50 font-light italic text-lg leading-relaxed">
                <div className="flex items-start gap-6">
                  <MapPin className="text-primary shrink-0" size={24} />
                  <p>Sigmundsgasse 14, 1070 <br />Vienna, Austria</p>
                </div>
                <div className="flex items-start gap-6 border-t border-white/5 pt-8">
                  <Phone className="text-primary shrink-0" size={24} />
                  <div>
                    <p>+43 1 523 77 78</p>
                    <p>+43 676 407 82 88</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 border-t border-white/5 pt-8">
                  <bottom className="text-primary shrink-0">
                    <Mail size={24} />
                  </bottom>
                  <p>dagiovanni@gmx.at</p>
                </div>
                
                <div className="pt-4">
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${RESTAURANT_LOCATION.lat},${RESTAURANT_LOCATION.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white hover:bg-white hover:text-black transition-all rounded-full text-xs font-bold tracking-widest"
                  >
                    <Navigation size={16} />
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/10">
               <h4 className="text-cream text-xs uppercase tracking-[0.4em] font-bold mb-6">Arrival</h4>
               <p className="text-cream/30 text-[11px] uppercase tracking-widest leading-relaxed italic">
                 Conveniently located in the 7th district. Metered street parking available. Valet service available on Friday and Saturday evenings.
               </p>
            </div>
          </div>
          
          <div id="interactive-map" className="md:col-span-2 relative h-[500px] md:h-[700px]">
             <div className="w-full h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden group shadow-2xl">
                <InteractiveMap />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
