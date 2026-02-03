
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';
import { DETAILED_FOUNDERS, ESTABLISHMENTS } from './constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500 pt-28 md:pt-40">
      {/* 1. CORPORATE HERO SECTION - Standardized */}
      <section className="relative pb-24 md:pb-32 overflow-hidden border-b border-emerald-100 dark:border-emerald-900/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-emerald-50/10 dark:from-black dark:via-black/95 dark:to-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10 dark:opacity-20 grayscale"
            alt="Grih Lakshmi Corporate"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <Reveal direction="down" className="max-w-5xl mx-auto text-center">
            <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.6em] text-[10px] md:text-[11px] font-black block mb-6">Corporate Overview</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-[0.9] mb-8 whitespace-nowrap">
              Legacy of <span className="text-emerald-600 dark:text-emerald-500 italic lowercase">Trust & Quality.</span>
            </h3>
            <p className="text-emerald-800/70 dark:text-emerald-200/50 text-base md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              Empowering global investors through institutional-grade real estate assets across India's most strategic industrial corridors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. OUR STORY - Standardized */}
      <section className="py-24 md:py-40 bg-white dark:bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <Reveal direction="right" className="order-2 lg:order-1">
              <div className="space-y-8 md:space-y-12">
                <div className="space-y-4">
                  <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] text-[10px] font-black block">Our Journey</span>
                  <h3 className="text-4xl md:text-5xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tight leading-[1.1] max-w-xl">
                    Building the Future <span className="text-emerald-600 dark:text-emerald-500 italic lowercase">Since Inception.</span>
                  </h3>
                </div>
                <div className="space-y-6 text-emerald-800/80 dark:text-emerald-200/60 text-base md:text-lg leading-relaxed font-medium">
                  <p>
                    Grih Lakshmi Residency traces its roots back to 2013 with the establishment of <strong>Investors Inn Realty Services Pvt Ltd</strong>. Our journey began with a clear mission: to bring institutional-grade professionalism to the Indian real estate market.
                  </p>
                  <p>
                    As a leading name in North India's real estate sector, we specialize in high-potential investment zones, particularly along the Delhi-Mumbai Industrial Corridor (DMIC). Our focus remains on transparency, quality, and long-term asset appreciation.
                  </p>
                  <div className="pt-6 border-t border-emerald-100 dark:border-neutral-800">
                    <p className="text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase tracking-widest mb-2">Key Milestone: 2022</p>
                    <p className="text-sm">Launch of <strong>Grih Lakshmi Residency</strong> specifically for premium residential townships.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200} className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-emerald-100 dark:border-neutral-900 group">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                    alt="Corporate Heritage" 
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl hidden md:block">
                  <p className="text-5xl font-black tracking-tighter">10+</p>
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mt-1">Years of Excellence</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - Standardized */}
      <section className="py-24 md:py-32 bg-emerald-50/20 dark:bg-neutral-950 border-y border-emerald-100 dark:border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <Reveal direction="up">
              <div className="bg-white dark:bg-neutral-900 p-10 md:p-14 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 shadow-sm h-full hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-neutral-800 text-emerald-600 rounded-2xl flex items-center justify-center mb-10 border border-emerald-100 dark:border-neutral-700">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-emerald-950 dark:text-white mb-6 uppercase tracking-tight">Our Mission</h3>
                <p className="text-emerald-800/70 dark:text-emerald-200/50 text-base md:text-lg leading-relaxed">
                  To provide premium residential and commercial infrastructure that maximizes long-term wealth creation through absolute transparency.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <div className="bg-emerald-950 p-10 md:p-14 rounded-[3rem] text-white shadow-2xl h-full border border-white/5">
                <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-10 border border-emerald-400/20">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-emerald-400 mb-6 uppercase tracking-tight">Our Vision</h3>
                <p className="text-emerald-100/60 text-base md:text-lg leading-relaxed">
                  To be North India's most trusted developer, recognized for innovative smart-city projects and ethical business practices.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE LEADERSHIP - Standardized */}
      <section className="py-24 md:py-40 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] text-[10px] font-black block mb-4">Board of Directors</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter">The <span className="text-emerald-600 italic lowercase">Visionaries.</span></h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {DETAILED_FOUNDERS.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 150}>
                <div className="group h-full flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden mb-8 rounded-[2.5rem] shadow-xl relative border border-emerald-100 dark:border-neutral-800">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="px-4">
                    <h3 className="text-2xl font-black text-emerald-950 dark:text-white mb-1 uppercase tracking-tight">{founder.name}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6">{founder.designation}</p>
                    <p className="text-emerald-800/60 dark:text-emerald-200/50 text-base leading-relaxed italic">"{founder.shortDesc}"</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GROUP ENTITIES - Standardized */}
      <section className="py-24 bg-emerald-50/20 dark:bg-neutral-950 border-t border-emerald-100 dark:border-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <Reveal className="mb-16 md:mb-24">
            <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] text-[10px] font-black block mb-4">Portfolio Ecosystem</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tight">Our <span className="text-emerald-600 italic">Establishments.</span></h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {ESTABLISHMENTS.map((est, index) => (
              <Reveal key={est.name} delay={index * 100}>
                <div className="bg-white dark:bg-neutral-900 p-8 border border-emerald-100 dark:border-neutral-800 rounded-[2.5rem] h-full flex flex-col items-center justify-center hover:border-emerald-500 hover:shadow-xl transition-all">
                  <span className="text-emerald-600 font-black text-4xl mb-4 tracking-tighter">{est.year}</span>
                  <h4 className="text-emerald-950 dark:text-white font-black text-base md:text-lg mb-4 uppercase tracking-tight leading-tight">{est.name}</h4>
                  <p className="text-emerald-800/40 dark:text-white/30 text-[9px] font-black uppercase tracking-widest">{est.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
