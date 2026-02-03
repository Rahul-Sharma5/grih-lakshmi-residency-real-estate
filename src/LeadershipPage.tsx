
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';
import { DETAILED_FOUNDERS } from './constants';

const LeadershipPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-24">
          <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">The Steering Committee</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter">Corporate <span className="text-emerald-600 italic lowercase">Leadership.</span></h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {DETAILED_FOUNDERS.map((founder, idx) => (
            <Reveal key={founder.name} delay={idx * 150} className="h-full">
              <div className="bg-emerald-50/50 dark:bg-neutral-900/50 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group flex flex-col h-full">
                <div className="aspect-square overflow-hidden relative">
                   <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-emerald-950 dark:text-white uppercase tracking-tight mb-1">{founder.name}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{founder.designation}</p>
                  <p className="text-emerald-900/60 dark:text-emerald-100/40 text-sm font-medium leading-relaxed italic mb-10 line-clamp-3">"{founder.shortDesc}"</p>
                  <button onClick={() => window.location.hash = `#/founder/${founder.slug}`} className="mt-auto w-full py-4 rounded-2xl bg-white dark:bg-black border border-emerald-100 dark:border-neutral-800 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">View Full Profile</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
