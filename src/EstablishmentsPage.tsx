
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';
import { ESTABLISHMENTS } from './constants';

const EstablishmentsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-24">
          <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">Corporate Portfolio</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter">Our <span className="text-emerald-600 italic lowercase">Establishments.</span></h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ESTABLISHMENTS.map((est, idx) => (
            <Reveal key={est.name} delay={idx * 150}>
              <div className="bg-emerald-50/30 dark:bg-neutral-900/40 border border-emerald-100 dark:border-neutral-800 p-12 rounded-[3.5rem] flex flex-col justify-between hover:border-emerald-500 transition-all group">
                <div>
                   <span className="text-emerald-600 text-5xl font-black tracking-tighter mb-4 block">{est.year}</span>
                   <h3 className="text-2xl md:text-3xl font-black text-emerald-950 dark:text-white uppercase tracking-tight mb-4">{est.name}</h3>
                </div>
                <div className="pt-10 border-t border-emerald-100/30 dark:border-neutral-800 flex justify-between items-center">
                   <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 dark:text-white/30">{est.location}</p>
                   <div className="w-10 h-10 rounded-xl bg-white dark:bg-black border border-emerald-100 dark:border-neutral-800 flex items-center justify-center text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstablishmentsPage;
