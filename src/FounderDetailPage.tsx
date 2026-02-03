
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Reveal from './components/Reveal';
import { DETAILED_FOUNDERS } from './constants';

const FounderDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const founder = DETAILED_FOUNDERS.find(f => f.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!founder) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <p className="text-emerald-950 dark:text-white text-xl font-black uppercase tracking-widest">Founder Profile Not Found</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left: Sticky Image & Socials */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <Reveal direction="right">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3.5rem] md:rounded-[4.5rem] overflow-hidden shadow-2xl border-8 border-emerald-50 dark:border-neutral-900 group-hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-600 rounded-full border-8 border-white dark:border-black flex items-center justify-center shadow-2xl">
                  <span className="text-white text-3xl font-black tracking-tighter">GLR</span>
                </div>
              </div>

              <div className="mt-20 flex items-center space-x-8 justify-center lg:justify-start">
                {['LinkedIn', 'Twitter', 'Personal Site'].map((social) => (
                  <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 dark:text-white/30 hover:text-emerald-600 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-7 space-y-16 md:space-y-20">
            <Reveal direction="up">
              <div>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.5em] block mb-4">Board of Directors</span>
                <h1 className="text-5xl md:text-8xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-[0.9] mb-4">
                  {founder.name}
                </h1>
                <p className="text-xl md:text-2xl italic text-emerald-600 dark:text-emerald-500">{founder.designation}</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="space-y-8">
                <h2 className="text-2xl font-black text-emerald-950 dark:text-white uppercase tracking-tight pb-4 border-b border-emerald-50 dark:border-neutral-800">Biography</h2>
                <p className="text-emerald-900/80 dark:text-emerald-100/60 text-lg md:text-xl font-medium leading-relaxed italic">
                  "{founder.bio}"
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <Reveal direction="up" delay={300} className="p-10 bg-emerald-50 dark:bg-neutral-900/50 rounded-[3rem] border border-emerald-100 dark:border-neutral-800">
                  <h3 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-6">Current Role</h3>
                  <p className="text-emerald-950 dark:text-white font-black text-xl leading-snug">{founder.role}</p>
               </Reveal>
               <Reveal direction="up" delay={400} className="p-10 bg-emerald-600 text-white rounded-[3rem] shadow-xl">
                  <h3 className="text-xs font-black uppercase tracking-widest mb-6 opacity-70">Strategic Vision</h3>
                  <p className="font-black text-xl leading-snug">"{founder.vision}"</p>
               </Reveal>
            </div>

            <Reveal direction="up" delay={500}>
               <div className="space-y-8">
                <h2 className="text-2xl font-black text-emerald-950 dark:text-white uppercase tracking-tight pb-4 border-b border-emerald-50 dark:border-neutral-800">Key Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {founder.achievements.map((item, i) => (
                     <div key={i} className="flex items-start space-x-4 group">
                        <div className="w-6 h-6 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <span className="text-emerald-900/60 dark:text-emerald-100/40 font-bold uppercase text-[11px] tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
               </div>
            </Reveal>

            <Reveal direction="up" delay={600}>
              <Link
                to="/"
                className="inline-flex items-center space-x-4 text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] hover:translate-x-4 transition-transform group"
              >
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                <span>Back to Executive Board</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDetailPage;
