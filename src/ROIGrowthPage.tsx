
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';

const ROIGrowthPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">Investment Portal</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter mb-8">Yield & <span className="text-emerald-600 italic">Analysis.</span></h3>
            <p className="text-emerald-900/60 dark:text-emerald-100/40 text-lg md:text-xl font-medium leading-relaxed italic">Visualizing the 48% historical growth across Jaipur's rapid smart-city corridor.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
           <div className="lg:col-span-5 space-y-12">
              <Reveal direction="right">
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-tight">Projected Financial <span className="text-emerald-600">Trajectory.</span></h3>
                 <p className="text-emerald-900/70 dark:text-emerald-100/40 text-lg font-medium leading-relaxed">Our projects sit at the intersection of cultural heritage and industrial modernization, a combination that historically yields exponential appreciation.</p>
                 <div className="space-y-6">
                    {["Gated township premium", "Institutional liaison infrastructure", "Corridor-proximate location highlights"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4">
                         <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 dark:text-white/60">{item}</span>
                      </div>
                    ))}
                 </div>
              </Reveal>
           </div>
           <div className="lg:col-span-7">
              <Reveal direction="left" delay={200}>
                 {/* ROICalculator was here */}
              </Reveal>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ROIGrowthPage;
