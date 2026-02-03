
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';

const CareersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <Reveal>
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4 whitespace-nowrap">Talent Acquisition</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter mb-8 whitespace-nowrap">Build Your <span className="text-emerald-600 italic">Future.</span></h3>
            <p className="text-emerald-900/60 dark:text-emerald-100/40 text-lg md:text-xl font-medium leading-relaxed italic max-w-4xl mx-auto">Join a visionary team reshaping the landscape of North Indian real estate.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
           {[
             { title: "Ethical Standards", desc: "We prioritize transparency and legal integrity in every handshake." },
             { title: "Innovative Growth", desc: "Be part of the rapid expansion in India's industrial corridors." },
             { title: "Collaborative Spirit", desc: "Work alongside the visionaries who built Grih Lakshmi." }
           ].map((v, i) => (
             <Reveal key={i} delay={i * 200} className="p-10 bg-emerald-50 dark:bg-neutral-900/50 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 text-center">
               <h3 className="text-xl font-black text-emerald-950 dark:text-white uppercase mb-4 whitespace-nowrap">{v.title}</h3>
               <p className="text-emerald-900/60 dark:text-emerald-100/40 text-sm font-medium leading-relaxed">{v.desc}</p>
             </Reveal>
           ))}
        </div>

        <Reveal className="bg-emerald-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">Current Openings</h3>
           <p className="text-emerald-100/40 text-sm uppercase tracking-widest mb-12">Submit your credentials for our executive talent pool.</p>
           <button onClick={() => window.location.hash = '#/contact'} className="green-gradient text-white px-16 py-6 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl whitespace-nowrap">Submit CV / Portfolio</button>
        </Reveal>
      </div>
    </div>
  );
};

export default CareersPage;
