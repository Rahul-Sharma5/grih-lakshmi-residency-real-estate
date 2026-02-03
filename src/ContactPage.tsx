
import React, { useEffect } from 'react';
import Reveal from './components/Reveal';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Grih Lakshmi Residency. Our team will get back to you shortly.');
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-28 md:pt-40">
      {/* 1. MINIMALIST HERO - Standardized */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <Reveal direction="down" className="max-w-4xl">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.6em] block mb-6">Inquiry Concierge</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-[0.85] mb-8 text-balance">
              Let's Map Your <br/>
              <span className="text-emerald-600 italic lowercase">Financial Legacy.</span>
            </h3>
            <p className="text-emerald-900/50 dark:text-emerald-100/30 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
              Connect with our institutional advisors to secure high-yield assets in North India's premier smart corridors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. BENTO CONTACT HUB */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <BentoCard 
              span="md:col-span-2 lg:col-span-3"
              icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              label="HQ Presence"
              value="H-86, Sector 63, Noida, UP - 201301"
            />
            <BentoCard 
              span="md:col-span-2 lg:col-span-3"
              icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              label="Direct Liaison"
              value="info@grihlakshmiresidency.com"
              isSmall
            />
            <BentoCard 
              span="md:col-span-2 lg:col-span-2"
              icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              label="Global Line"
              value="+91 97112 63000"
            />
            <BentoCard 
              span="md:col-span-2 lg:col-span-4"
              icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              label="Liaison Hours"
              value="Monday — Sunday | 10:00 AM — 07:00 PM IST"
            />
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH INVESTOR ONBOARDING (RE-DESIGNED) - Standardized */}
      <section className="py-24 md:py-40 bg-emerald-50/20 dark:bg-neutral-950 border-y border-emerald-100 dark:border-neutral-900">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">Investment Portal</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none mb-8">
                Investor <span className="text-emerald-600 italic">Onboarding.</span>
              </h3>
              <div className="w-24 h-1.5 bg-emerald-600 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-20 md:space-y-32">
              {/* Part 1: Identity */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 dark:border-neutral-800 pb-6">
                  <h3 className="text-2xl font-black text-emerald-950 dark:text-white uppercase tracking-tight">01. Identity Details</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/30 dark:text-white/20">All fields marked with * are mandatory for KYC</p>
                </div>
                <div className="grid grid-cols-1 md:flex-row md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                  <FloatingInput label="Full Name *" type="text" placeholder="Legal full name" required />
                  <FloatingInput label="Email Address *" type="email" placeholder="corporate@domain.com" required />
                  <FloatingInput label="Contact Number *" type="tel" placeholder="+91" required />
                </div>
              </div>

              {/* Part 2: Preference */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 dark:border-neutral-800 pb-6">
                  <h3 className="text-2xl font-black text-emerald-950 dark:text-white uppercase tracking-tight">02. Asset Configuration</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/30 dark:text-white/20">Select your preferred parcel size</p>
                </div>
                <div className="p-10 md:p-16 bg-white dark:bg-neutral-900 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-10">
                   <div className="max-w-md">
                     <p className="text-emerald-950 dark:text-white font-bold text-lg leading-tight mb-2">Plot Preference *</p>
                     <p className="text-emerald-900/40 dark:text-white/20 text-sm">Our typical allotment sizes range from 80 to 200 Sq Yds.</p>
                   </div>
                   <div className="flex flex-wrap gap-10">
                    {['<100 Sq YD', '=100 Sq YD', '>100 Sq YD'].map((opt) => (
                      <label key={opt} className="flex items-center space-x-4 cursor-pointer group">
                        <input type="radio" name="plot_pref_mod" className="w-6 h-6 accent-emerald-600 border-2 border-emerald-100 dark:border-neutral-800" />
                        <span className="text-sm font-black text-emerald-950 dark:text-white group-hover:text-emerald-600 transition-colors uppercase tracking-[0.2em]">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Part 3: Documents */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 dark:border-neutral-800 pb-6">
                  <h3 className="text-2xl font-black text-emerald-950 dark:text-white uppercase tracking-tight">03. Verification Documents</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/30 dark:text-white/20">Upload secure copies for verification</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <ModernUploadBox label="Pan Card *" />
                  <ModernUploadBox label="Aadhar Front *" />
                  <ModernUploadBox label="Aadhar Back *" />
                  <ModernUploadBox label="Applicant Photo" />
                </div>
              </div>

              {/* Final Submit */}
              <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-emerald-100 dark:border-neutral-800">
                <p className="text-emerald-900/40 dark:text-white/20 text-xs font-medium max-w-sm">
                  By submitting this form, you acknowledge that our verification team will initiate contact within 12 business hours.
                </p>
                <button type="submit" className="green-gradient w-full md:w-auto px-20 py-8 text-white rounded-2xl md:rounded-3xl text-[12px] font-black uppercase tracking-[0.6em] shadow-2xl hover:shadow-emerald-500/40 active:scale-95 transition-all">
                  Initiate Onboarding
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 4. IMMERSIVE MAP ANCHOR (STATIC / NO HOVER) */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-t border-emerald-100 dark:border-neutral-900">
        <div className="absolute top-0 left-0 w-full h-full">
           <iframe 
              title="Geospatial Hub"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.564571408845!2d77.38848777610636!3d28.61283258498871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce562373fb78b%3A0x600375496660f789!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715424000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 contrast-[1.1] brightness-[0.95] dark:brightness-[0.7] dark:contrast-[1.2]"
              allowFullScreen loading="lazy"
            ></iframe>
        </div>
        
        {/* Fixed Map Overlay Label - Standardized */}
        <div className="absolute top-12 left-6 md:left-12 pointer-events-none">
           <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-emerald-100 dark:border-neutral-800 px-8 py-6 rounded-[2.5rem] shadow-2xl">
              <span className="text-emerald-600 font-black text-[9px] uppercase tracking-[0.4em] block mb-2">Regional Presence</span>
              <h3 className="text-emerald-950 dark:text-white font-black text-xl md:text-2xl uppercase tracking-tighter">Sector 63 Command Center</h3>
              <p className="text-[10px] text-emerald-900/40 dark:text-white/20 mt-2 font-bold uppercase tracking-widest">Noida headquarters</p>
           </div>
        </div>

        {/* Bottom Fade to Footer */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
      </section>
    </div>
  );
};

const BentoCard = ({ span, icon, label, value, isSmall }: { span: string, icon: string, label: string, value: string, isSmall?: boolean }) => (
  <Reveal direction="up" className={span}>
    <div className="bg-emerald-50/50 dark:bg-neutral-900 p-8 md:p-10 rounded-[2.5rem] border border-emerald-100/50 dark:border-neutral-800 shadow-sm hover:shadow-2xl hover:border-emerald-500/50 transition-all group h-full">
      <div className="w-12 h-12 bg-white dark:bg-black text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900/30 dark:text-white/20 mb-2 block">{label}</span>
      <p className={`font-black text-emerald-950 dark:text-white tracking-tight leading-tight ${isSmall ? 'text-sm md:text-base break-all' : 'text-lg md:text-xl'}`}>
        {value}
      </p>
    </div>
  </Reveal>
);

const FloatingInput = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="group relative">
    <label className="text-[10px] font-black text-emerald-900/40 dark:text-white/30 uppercase tracking-[0.3em] block mb-2 group-focus-within:text-emerald-600 transition-colors">
      {label}
    </label>
    <input 
      {...props}
      className="w-full bg-transparent border-b-2 border-emerald-100 dark:border-neutral-800 py-4 outline-none focus:border-emerald-600 transition-all dark:text-white text-base md:text-xl font-bold placeholder:text-emerald-950/10 dark:placeholder:text-white/5"
    />
  </div>
);

const ModernUploadBox = ({ label }: { label: string }) => (
  <div className="p-8 bg-white dark:bg-neutral-900 border border-emerald-100 dark:border-neutral-800 rounded-[2.5rem] shadow-sm hover:border-emerald-600/40 transition-all group">
    <span className="text-[10px] font-black text-emerald-900/40 dark:text-white/20 uppercase tracking-widest block mb-6 group-hover:text-emerald-600 transition-colors">{label}</span>
    <div className="flex items-center justify-between">
      <label className="cursor-pointer bg-emerald-50 dark:bg-black border border-emerald-100 dark:border-neutral-800 px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
        Attach File
        <input type="file" className="hidden" />
      </label>
      <div className="w-5 h-5 rounded-full border-2 border-emerald-500/20 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  </div>
);

export default ContactPage;
