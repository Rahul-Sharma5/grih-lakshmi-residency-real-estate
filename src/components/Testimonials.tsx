
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, Testimonial } from '../constants';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const row1 = [...TESTIMONIALS.slice(0, 6), ...TESTIMONIALS.slice(0, 6)];
  const row2 = [...TESTIMONIALS.slice(6, 12), ...TESTIMONIALS.slice(6, 12)];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setScrollPos((prev) => (prev + 0.04) % 100);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-20">
        <Reveal className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-12 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] block mb-6">Social Proof</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-tight">
              A Legacy of <span className="text-emerald-600 italic">Trust.</span>
            </h3>
          </div>
          <div className="pb-4">
            <div className="flex items-center space-x-4 px-5 py-3 bg-emerald-50 dark:bg-neutral-900 rounded-2xl border border-emerald-100 dark:border-neutral-800">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+40}`} alt="Investor" />
                  </div>
                ))}
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-emerald-900/60 dark:text-emerald-400/60 whitespace-nowrap">
                800+ Stakeholders
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div 
        className="space-y-6 md:space-y-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex whitespace-nowrap">
          <div 
            className="flex space-x-6 md:space-x-8 transition-transform duration-0 ease-linear"
            style={{ transform: `translateX(-${scrollPos}%)` }}
          >
            {row1.map((item, i) => (
              <TestimonialCard key={`${item.name}-1-${i}`} item={item} />
            ))}
          </div>
        </div>

        <div className="flex whitespace-nowrap">
          <div 
            className="flex space-x-6 md:space-x-8 transition-transform duration-0 ease-linear"
            style={{ transform: `translateX(calc(-100% + ${scrollPos}%))` }}
          >
            {row2.map((item, i) => (
              <TestimonialCard key={`${item.name}-2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 md:mt-20">
        <Reveal delay={400} className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-emerald-100 dark:border-neutral-900 gap-4 text-center">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 dark:text-white/20">Live Verification Active</span>
          </div>
          <p className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 dark:text-white/20">
            Institutional Audits Completed Yearly
          </p>
        </Reveal>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div className="w-[300px] md:w-[420px] flex-shrink-0 group">
    <div className="bg-emerald-50/40 dark:bg-neutral-900 border border-emerald-100 dark:border-neutral-800 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] h-full flex flex-col justify-between transition-all">
      <div>
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg border-2 border-white dark:border-neutral-700">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-sm md:text-lg font-black text-emerald-950 dark:text-white tracking-tight">{item.name}</h4>
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-emerald-600">{item.location || 'Investor'}</p>
            </div>
          </div>
        </div>
        <p className="text-xs md:text-base leading-relaxed text-emerald-900/80 dark:text-emerald-100/60 font-medium whitespace-normal italic">
          "{item.text.length > 180 ? item.text.substring(0, 180) + '...' : item.text}"
        </p>
      </div>
      <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-emerald-100/50 dark:border-neutral-800/50 flex items-center justify-between">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
