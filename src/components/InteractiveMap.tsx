import { Navigation } from 'lucide-react';

export function InteractiveMap() {
  const RESTAURANT_LOCATION = { lat: 48.2045, lng: 16.3533 };

  return (
    <div className="w-full h-full relative group">
      <div className="absolute inset-0 bg-bg-dark">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.9168453444983!2d16.35077297686884!3d48.20436497125313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079496666667%3A0xffe7b5b5c92c8155!2sPizzeria%20Osteria%20da%20Giovanni!5e0!3m2!1sen!2sat!4v1703080000000!5m2!1sen!2sat"
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            filter: 'grayscale(1) invert(0.92) contrast(1.2) brightness(0.9)',
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"
        ></iframe>
      </div>

      {/* Overlay info card - Luxury Glassmorphism */}
      <div className="absolute top-8 left-8 right-8 md:right-auto md:w-80 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl pointer-events-auto transition-all hover:bg-black/80 group/card">
          <div className="flex items-center justify-between mb-6">
            <span className="text-primary font-serif italic text-lg">Details</span>
            <div className="px-2 py-1 bg-green-500/20 text-green-500 text-[8px] font-bold tracking-tighter uppercase rounded-full border border-green-500/30">
               Open Now
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="text-cream text-[10px] uppercase tracking-[0.3em] font-bold mb-3 opacity-40 text-primary">Opening Hours</h5>
              <div className="space-y-2 text-cream/70 text-xs font-light italic">
                <div className="flex justify-between">
                  <span>Tue - Sun</span>
                  <span className="text-cream">18:00 - 23:30</span>
                </div>
                <div className="flex justify-between text-cream/40">
                  <span>Monday</span>
                  <span>CLOSED</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <h5 className="text-cream text-[10px] uppercase tracking-[0.3em] font-bold mb-3 opacity-40 text-primary">Location</h5>
              <p className="text-cream/50 text-[11px] leading-relaxed italic mb-6">
                Located in the heart of Vienna's 7th district. A short walk from Volkstheater and MuseumsQuartier.
              </p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${RESTAURANT_LOCATION.lat},${RESTAURANT_LOCATION.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white hover:bg-white hover:text-black transition-all rounded-full text-[10px] font-bold tracking-widest shadow-xl pointer-events-auto group-hover/card:scale-105"
              >
                <Navigation size={14} className="group-hover:rotate-12 transition-transform" />
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic map pins placeholder for visual depth */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-bg-dark/20 rounded-[40px]" />
    </div>
  );
}
