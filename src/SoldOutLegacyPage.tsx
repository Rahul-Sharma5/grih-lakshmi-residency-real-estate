
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';
import { SOLD_OUT_PROJECTS } from './constants';

const SoldOutLegacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-24">
          <span className="text-emerald-900/30 dark:text-white/20 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">The Track Record</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter">Sold Out <span className="text-emerald-600 italic lowercase">Legacy.</span></h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SOLD_OUT_PROJECTS.map((project, idx) => (
            <Reveal key={`${project.title}-${idx}`} delay={idx * 100} className="h-full">
              <div className="bg-emerald-50/30 dark:bg-neutral-950 rounded-[2.5rem] border border-emerald-100/50 dark:border-neutral-900 p-8 opacity-80 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 h-full flex flex-col group hover:shadow-2xl">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-black text-emerald-950 dark:text-white mb-4 uppercase tracking-tighter leading-none">{project.title}</h3>
                  <p className="text-emerald-900/60 dark:text-emerald-100/40 text-sm leading-relaxed mb-8 font-medium line-clamp-3">{project.description}</p>
                  <div className="mt-auto inline-block px-4 py-2 bg-emerald-100/50 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 text-[8px] font-black uppercase tracking-widest rounded-lg w-fit">100% SUCCESSFUL DELIVERY</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoldOutLegacyPage;
