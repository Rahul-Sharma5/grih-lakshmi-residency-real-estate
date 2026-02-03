
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';

const GrihLakshmiGreensPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-emerald-50/30 dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40">
      {/* 1. PROJECT HERO - Standardized */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Grih Lakshmi Greens"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-20">
          <Reveal direction="up" className="max-w-7xl">
            <span className="inline-block px-5 py-2 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">New Launch</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Grih Lakshmi <span className="text-emerald-400 italic lowercase">Greens.</span>
            </h3>
            <p className="text-emerald-100/70 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
              Discover Govt. Approved Plots Near Sambhar Lake! Invest Smartly in Jaipur’s Rapid Growth Corridor with Premium Amenities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. OVERVIEW & GROWTH - Standardized */}
      <section className="py-24 md:py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
           <Reveal className="max-w-7xl mx-auto text-center mb-24">
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter mb-8 md:whitespace-nowrap">Rapid <span className="text-emerald-600 italic lowercase">Growth</span> Corridor.</h3>
             <p className="text-emerald-800/60 dark:text-emerald-200/40 text-lg md:text-xl font-medium leading-relaxed italic">"A fusion of cultural heritage and smart city infrastructure, designed for the modern investor."</p>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reveal delay={100} className="p-12 bg-emerald-50 dark:bg-neutral-900 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 text-center">
                 <p className="text-emerald-600 text-5xl font-black mb-4 tracking-tighter md:whitespace-nowrap">₹ 6.4L+</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-950 dark:text-white/60 md:whitespace-nowrap">Starting Value</p>
              </Reveal>
              <Reveal delay={200} className="p-12 bg-emerald-600 text-white rounded-[3rem] shadow-xl text-center">
                 <p className="text-5xl font-black mb-4 tracking-tighter md:whitespace-nowrap">100%</p>
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-80 md:whitespace-nowrap">Govt Approved</p>
              </Reveal>
              <Reveal delay={300} className="p-12 bg-emerald-50 dark:bg-neutral-900 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 text-center">
                 <p className="text-emerald-600 text-5xl font-black mb-4 tracking-tighter md:whitespace-nowrap">15 Min</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-950 dark:text-white/60 md:whitespace-nowrap">To Smart City Hub</p>
              </Reveal>
           </div>
        </div>
      </section>

      {/* 3. KEY HIGHLIGHTS SECTION - Standardized */}
      <section className="py-24 bg-emerald-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="right">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-12 md:whitespace-nowrap">Institutional Grade <span className="text-emerald-400 italic">Infrastructure.</span></h3>
              <ul className="space-y-8">
                {[
                  "Planned Eco-Friendly Street Lighting",
                  "Underground Utilities & Drainage Systems",
                  "Proximity to Phulera Multimodal Logistics Park",
                  "Dedicated Site Visits & Documentation Support",
                  "Rapid Appreciation Zone near Sambhar Tourism Hub"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-6">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-lg md:text-xl font-medium tracking-tight text-emerald-100/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="left" delay={200} className="relative">
              <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-60" alt="Construction Progress" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - Standardized */}
      <section className="py-24 md:py-40 bg-white dark:bg-black">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter mb-12 md:whitespace-nowrap">Ready to <span className="text-emerald-600">Invest?</span></h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => window.location.hash = '#/contact'} 
                className="green-gradient text-white px-20 py-7 rounded-full font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl transition-all active:scale-95 md:whitespace-nowrap"
              >
                Book Your Plot
              </button>
              <button 
                onClick={() => window.location.hash = '#/about'} 
                className="px-20 py-7 rounded-full bg-emerald-50 dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 font-black uppercase tracking-[0.4em] text-[11px] border border-emerald-100 dark:border-neutral-800 transition-all md:whitespace-nowrap"
              >
                View History
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default GrihLakshmiGreensPage;
