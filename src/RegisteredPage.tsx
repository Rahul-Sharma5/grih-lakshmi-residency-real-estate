
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';

const RegisteredPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration request received. Our verification team will contact you shortly.');
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40">
      {/* 1. HERO SECTION - Standardized */}
      <section className="py-16 md:py-24 bg-emerald-50/50 dark:bg-neutral-900/20 border-b border-emerald-100 dark:border-neutral-800/50 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal direction="down">
            <h3 className="text-emerald-950 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-center lg:text-left">
              Registration
            </h3>
          </Reveal>
        </div>
      </section>

      {/* 2. FORM & VISUAL SECTION - Standardized Titles */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left Column: The Form */}
            <div className="lg:col-span-7">
              <Reveal className="mb-12 text-center lg:text-left">
                <span className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.4em] block mb-4">Onboarding Portal</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-tight">
                  Investment Profile Certification
                </h3>
              </Reveal>

              <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
                <div className="grid grid-cols-1 gap-10">
                  <div className="space-y-8">
                    <div className="group">
                      <label className="text-[11px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-2 group-focus-within:text-emerald-600 transition-colors">Full Name *</label>
                      <input required type="text" className="w-full border-b-2 border-emerald-100 dark:border-neutral-800 bg-transparent py-3 outline-none focus:border-emerald-600 transition-all dark:text-white text-lg font-medium" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group">
                        <label className="text-[11px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-2 group-focus-within:text-emerald-600 transition-colors">Email *</label>
                        <input required type="email" className="w-full border-b-2 border-emerald-100 dark:border-neutral-800 bg-transparent py-3 outline-none focus:border-emerald-600 transition-all dark:text-white text-lg font-medium" />
                      </div>
                      <div className="group">
                        <label className="text-[11px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-2 group-focus-within:text-emerald-600 transition-colors">Phone *</label>
                        <input required type="tel" className="w-full border-b-2 border-emerald-100 dark:border-neutral-800 bg-transparent py-3 outline-none focus:border-emerald-600 transition-all dark:text-white text-lg font-medium" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group">
                        <label className="text-[11px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-2 group-focus-within:text-emerald-600 transition-colors">Aadhar No. *</label>
                        <input required type="text" className="w-full border-b-2 border-emerald-100 dark:border-neutral-800 bg-transparent py-3 outline-none focus:border-emerald-600 transition-all dark:text-white text-lg font-medium" />
                      </div>
                      <div className="group">
                        <label className="text-[11px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-2 group-focus-within:text-emerald-600 transition-colors">PAN No. *</label>
                        <input required type="text" className="w-full border-b-2 border-emerald-100 dark:border-neutral-800 bg-transparent py-3 outline-none focus:border-emerald-600 transition-all dark:text-white text-lg font-medium" />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-[11px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-2 group-focus-within:text-emerald-600 transition-colors">📅 Date Of Birth *</label>
                    <input required type="date" className="w-full border-b-2 border-emerald-100 dark:border-neutral-800 bg-transparent py-3 outline-none focus:border-emerald-600 transition-all dark:text-white text-lg font-medium" />
                  </div>

                  <div className="p-8 md:p-10 bg-emerald-50/30 dark:bg-neutral-900 rounded-[2rem] md:rounded-[2.5rem] border border-emerald-100 dark:border-neutral-800 shadow-sm">
                    <label className="text-[11px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-6 md:mb-8">Plot Preference *</label>
                    <div className="flex flex-wrap gap-6 md:space-x-12">
                      {['<100 Sq YD', '=100 Sq YD', '>100 Sq YD'].map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                          <input type="radio" name="plot_pref" className="w-5 h-5 accent-emerald-600 border-2 border-emerald-100" />
                          <span className="text-sm font-bold text-emerald-950 dark:text-white group-hover:text-emerald-600 transition-colors">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <UploadField label="PAN Card *" />
                    <UploadField label="Aadhar Front *" />
                    <UploadField label="Aadhar Back *" />
                    <UploadField label="Passport Photo" />
                  </div>

                  <div className="pt-8 text-center lg:text-left">
                    <button type="submit" className="green-gradient w-full md:w-auto text-white px-16 md:px-20 py-6 md:py-7 text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl transition-all active:scale-95 rounded-full whitespace-nowrap">
                      Submit Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Visual Elements */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="sticky top-32">
                <div className="relative">
                  <Reveal direction="left" delay={200}>
                    <div className="relative z-10 group overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-2xl border-8 border-white dark:border-neutral-900">
                      <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
                        alt="Aerial Masterplan" 
                        className="w-full aspect-[4/5] object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-10 left-10 right-10">
                        <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-1 whitespace-nowrap">Institutional Hub</h3>
                        <p className="text-emerald-100/70 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Growth Zone Active</p>
                      </div>
                    </div>
                  </Reveal>

                  <div className="absolute top-20 -right-4 md:-right-8 z-30 flex items-center justify-center">
                    <div className="bg-emerald-600 text-white w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <div className="text-center">
                        <span className="block text-[7px] md:text-[8px] font-black uppercase tracking-widest leading-none">Yield</span>
                        <span className="text-lg md:text-xl font-black leading-none">18%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-20 md:mt-24 p-8 md:p-10 bg-emerald-50 dark:bg-neutral-900 rounded-[2.5rem] md:rounded-[3rem] border border-emerald-100 dark:border-neutral-800 shadow-xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter whitespace-nowrap">Fast-Track Audit</h3>
                  </div>
                  <p className="text-emerald-800/60 dark:text-emerald-100/40 text-sm mb-8 leading-relaxed font-medium">
                    Most certifications are verified within 4-6 business hours for priority investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const UploadField = ({ label }: { label: string }) => (
  <div className="p-6 bg-white dark:bg-neutral-900 border border-emerald-100 dark:border-neutral-800 rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:border-emerald-500/40 transition-all group">
    <label className="text-[10px] font-black text-emerald-900/40 dark:text-white/40 uppercase tracking-widest block mb-4 group-hover:text-emerald-600">{label}</label>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <label className="w-full sm:w-auto bg-emerald-50 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 px-6 py-3 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-emerald-600 hover:text-white transition-all rounded-xl border border-emerald-100 dark:border-neutral-700 shadow-sm text-center">
        Attach
        <input type="file" className="hidden" />
      </label>
      <span className="text-[9px] text-slate-400 italic font-medium">Pending...</span>
    </div>
  </div>
);

export default RegisteredPage;
