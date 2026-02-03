
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';

const GrihLakshmiResidencyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40">
      {/* 1. PROJECT HERO - Standardized */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Grih Lakshmi Residency"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-20">
          <Reveal direction="up" className="max-w-7xl">
            <span className="inline-block px-5 py-2 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Flagship Destination</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Grih Lakshmi <span className="text-emerald-400 italic lowercase">Residency.</span>
            </h3>
            <p className="text-emerald-100/70 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
              Affordable, govt.-approved plots near Sambhar Lake, close to DMIC & Film City—ideal for secure investment with high ROI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. CORE VALUE PROPOSITION - Standardized */}
      <section className="py-24 md:py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="right">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter mb-8 leading-tight whitespace-nowrap">
                Smart City <span className="text-emerald-600">Growth Axis.</span>
              </h3>
              <div className="space-y-10">
                <div className="p-8 bg-emerald-50 dark:bg-neutral-900 rounded-[2.5rem] border border-emerald-100 dark:border-neutral-800">
                  <h3 className="text-xl font-black text-emerald-950 dark:text-white uppercase mb-4 tracking-tight whitespace-nowrap">Prime Connectivity</h3>
                  <p className="text-emerald-900/60 dark:text-emerald-100/40 leading-relaxed">Strategically situated within the Jaipur-Sambhar corridor, offering seamless access to the Dedicated Freight Corridor and future high-speed rail nodes.</p>
                </div>
                <div className="p-8 bg-emerald-600 text-white rounded-[2.5rem] shadow-xl">
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tight whitespace-nowrap">48% Appreciation</h3>
                  <p className="opacity-80 leading-relaxed">Proven track record of growth over the last 18 months, outperforming traditional market benchmarks in the region.</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={200} className="relative">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Modern Infrastructure" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white dark:bg-neutral-900 rounded-full border-8 border-emerald-50 dark:border-black flex items-center justify-center shadow-2xl">
                <div className="text-center">
                   <p className="text-emerald-600 text-4xl font-black italic tracking-tighter whitespace-nowrap">GLR</p>
                   <p className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 whitespace-nowrap">Registered</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. AMENITIES & LIFESTYLE - Standardized */}
      <section className="py-24 bg-emerald-50/30 dark:bg-neutral-950">
        <div className="container mx-auto px-6 text-center">
          <Reveal className="mb-20">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4 whitespace-nowrap">Quality Living</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter whitespace-nowrap">Township Features</h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Gated Security", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { title: "Wide Roads", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { title: "Green Zones", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" },
              { title: "Registry Ready", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
            ].map((feat, idx) => (
              <Reveal key={feat.title} delay={idx * 150} className="bg-white dark:bg-neutral-900 p-10 rounded-[2.5rem] border border-emerald-100 dark:border-neutral-800 shadow-sm hover:border-emerald-500 transition-all">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={feat.icon}/></svg>
                </div>
                <h3 className="text-xl font-black text-emerald-950 dark:text-white uppercase tracking-tight whitespace-nowrap">{feat.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONCIERGE CTA - Standardized */}
      <section className="py-24 md:py-40 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-emerald-950 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <Reveal className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 whitespace-nowrap">Secure Your <span className="text-emerald-400 italic">Legacy.</span></h3>
              <p className="text-emerald-100/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">Limited units available at pre-launch pricing. Schedule an on-ground site visit with our experts today.</p>
              <button 
                onClick={() => window.location.hash = '#/contact'} 
                className="green-gradient text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl transition-all active:scale-95 whitespace-nowrap"
              >
                Request Allotment
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrihLakshmiResidencyPage;
