
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import { DETAILED_FOUNDERS, STRATEGIC_LOCATIONS } from './constants';
import Reveal from './components/Reveal';
import AboutPage from './AboutPage';
import RegisteredPage from './RegisteredPage';
import ContactPage from './ContactPage';
import GrihLakshmiResidencyPage from './GrihLakshmiResidencyPage';
import GrihLakshmiGreensPage from './GrihLakshmiGreensPage';
import FounderDetailPage from './FounderDetailPage';
import LeadershipPage from './LeadershipPage';
import EstablishmentsPage from './EstablishmentsPage';
import CareersPage from './CareersPage';
import SoldOutLegacyPage from './SoldOutLegacyPage';
import ROIGrowthPage from './ROIGrowthPage';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    badge: "Exclusive Q3 Investor Portfolios Open",
    title: "Forging Legacies.",
    description: "Institutional-grade real estate assets strategically positioned at the nexus of India's multi-modal industrial corridors."
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    badge: "Sustainable Urban Development",
    title: "Modern Living.",
    description: "Ecologically conscious residential townships designed for the next generation of global citizens."
  }
];

const Home: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white dark:bg-black pt-24 md:pt-36">
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide.image} className="w-full h-full object-cover grayscale" alt={`Premium Asset ${idx + 1}`} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 dark:from-black dark:via-black/95 dark:to-black/30 z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 space-y-6 md:space-y-8">
              <div className="min-h-[40px] relative">
                {HERO_SLIDES.map((slide, idx) => (
                  <div key={idx} className={`inline-flex items-center space-x-4 px-5 py-2.5 rounded-full bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/50 backdrop-blur-md shadow-xl transition-opacity duration-700 absolute left-0 top-0 ${idx === heroIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span>
                    <span className="text-emerald-700 dark:text-emerald-400 text-[11px] md:text-sm font-black uppercase tracking-[0.2em]">{slide.badge}</span>
                  </div>
                ))}
              </div>

              <div className="relative min-h-[180px] sm:min-h-[140px] md:min-h-[160px]">
                                {HERO_SLIDES.map((slide, idx) => (
                                  <div key={idx} className={`transition-opacity duration-1000 absolute top-0 left-0 w-full ${idx === heroIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <h3 className="text-emerald-950 dark:text-white text-3xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tighter uppercase mb-6">
                                      {slide.title.split('.')[0]} <span className="text-emerald-600 italic block sm:inline">{slide.title.split('.')[1] || ''}.</span>
                                    </h3>
                                    <p className="max-w-xl text-emerald-900/80 dark:text-emerald-100/60 text-base md:text-xl font-medium leading-relaxed">
                                      {slide.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
              <div className="pt-8">
                <button onClick={() => window.location.hash = '#/contact'} className="green-gradient text-white px-10 py-5 md:py-6 font-black rounded-full shadow-2xl transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs active:scale-95 border border-white/10">
                  Initiate Investment
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 pt-4 lg:pt-0">
              <div className="p-6 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-emerald-100/50 dark:border-white/10 rounded-3xl shadow-xl">
                <p className="text-emerald-600 dark:text-emerald-400 text-3xl md:text-4xl font-black tracking-tighter">48%+</p>
                <h3 className="text-emerald-900 dark:text-white text-[9px] font-black uppercase tracking-widest mt-2 opacity-60">Hist. Growth</h3>
              </div>
              <div className="p-6 bg-emerald-600 text-white rounded-3xl shadow-xl">
                <p className="text-3xl md:text-4xl font-black tracking-tighter">800+</p>
                <h3 className="text-[9px] font-black uppercase tracking-widest mt-2 opacity-80">Deliveries</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section id="welcome" className="py-24 md:py-40 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-7xl mx-auto text-center mb-20 md:mb-32">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-8">Establishment</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-[1.1] mb-12 max-w-5xl mx-auto">
              Welcome to <br className="hidden sm:block"/><span className="text-emerald-600 italic">Grih Lakshmi Residency.</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 text-left items-start">
              <div className="space-y-8">
                <p className="text-emerald-900 dark:text-emerald-100 text-lg md:text-xl font-medium leading-relaxed">
                  Grih Lakshmi Residency is a government-approved residential plotting project located in Sambhar, part of Jaipur’s Smart City corridor. It offers legally verified, registry-ready plots in a gated, planned township with clear ownership and long-term growth.
                </p>
                <p className="text-emerald-900/60 dark:text-emerald-100/40 text-base md:text-lg leading-relaxed">
                  Located near Sambhar Lake, DMIC, and Mahindra World City, this project is ideal for those looking to build a home, buy a second property, or invest in land with high returns.
                </p>
              </div>
              <div className="bg-emerald-50 dark:bg-neutral-900/50 p-10 md:p-14 rounded-[3.5rem] border border-emerald-100 dark:border-neutral-800 shadow-xl h-full flex flex-col justify-center">
                 <p className="text-emerald-900 dark:text-emerald-100 text-xl md:text-2xl font-bold leading-tight mb-8">
                  With 48% price appreciation in just 18 months, Grih Lakshmi Residency stands out as a profitable and secure investment.
                </p>
                <div className="space-y-2 border-t border-emerald-200 dark:border-neutral-800 pt-8">
                  <p className="text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">GV-verified Consultant</p>
                  <p className="text-emerald-900/60 dark:text-white/40 text-sm font-semibold">10+ Years Experience | Dedicated Noida Office</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STRATEGIC LOCATIONS */}
      <section id="strategic-locations" className="py-24 md:py-40 bg-white dark:bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-24 md:mb-32">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-6">Regional Hubs</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none">Location Highlights</h3>
          </Reveal>
          <div className="flex flex-col gap-12 md:gap-20 max-w-7xl mx-auto">
            {STRATEGIC_LOCATIONS.map((loc, idx) => (
              <Reveal key={loc.title} delay={idx * 150} direction={idx % 2 === 0 ? 'right' : 'left'}>
                <div className={`bg-emerald-50/40 dark:bg-neutral-950 rounded-[3.5rem] md:rounded-[4rem] border border-emerald-100/50 dark:border-neutral-900 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[450px]`}>
                  <div className="w-full lg:w-2/5 relative overflow-hidden h-64 md:h-96 lg:h-auto">
                    <img src={loc.image} alt={loc.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"/>
                    <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <div className="p-10 md:p-16 lg:p-20 w-full lg:w-3/5 flex flex-col justify-between bg-white/40 dark:bg-neutral-900/20 backdrop-blur-3xl">
                    <div className="space-y-6 md:space-y-8">
                      <div className="flex items-center space-x-6">
                        <span className="text-emerald-600/30 dark:text-white/10 text-6xl md:text-7xl font-black leading-none tracking-tighter">0{idx + 1}</span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none">{loc.title}</h3>
                      </div>
                      <p className="text-emerald-900/70 dark:text-emerald-100/50 text-lg md:text-xl font-medium leading-relaxed max-w-lg italic">
                        "{loc.description}"
                      </p>
                    </div>
                    <div className="pt-10 mt-10 border-t border-emerald-100/30 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-black uppercase tracking-widest leading-relaxed">{loc.tagline}</p>
                      <button onClick={() => window.location.hash = '#/contact'} className="px-10 py-5 rounded-2xl bg-emerald-950 dark:bg-emerald-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95 whitespace-nowrap">Request Portfolio</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section id="founders" className="py-24 md:py-40 bg-white dark:bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-24 md:mb-32">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">Board of Directors</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none">Meet Our <span className="text-emerald-600 italic">Founders.</span></h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {DETAILED_FOUNDERS.map((founder, idx) => (
              <Reveal key={founder.name} delay={idx * 150} className="h-full">
                <div className="bg-emerald-50/50 dark:bg-neutral-900/50 rounded-[3rem] border border-emerald-100 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group flex flex-col h-full">
                  <div className="aspect-square overflow-hidden relative">
                     <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-80"></div>
                     <div className="absolute bottom-10 left-10 right-10">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">{founder.name}</h3>
                        <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">{founder.designation}</p>
                     </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <p className="text-emerald-900/60 dark:text-emerald-100/40 text-sm font-medium leading-relaxed italic mb-10 line-clamp-3">"{founder.shortDesc}"</p>
                    <Link to={`/founder/${founder.slug}`} className="mt-auto w-full py-4 rounded-2xl bg-white dark:bg-black border border-emerald-100 dark:border-neutral-800 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all text-center">Read More</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { title: 'The Group', mainHref: '/about', links: [{ name: 'Our Legacy', href: '/about' }, { name: 'Leadership', href: '/leadership' }, { name: 'Establishments', href: '/establishments' }, { name: 'Careers', href: '/careers' }] },
    { title: 'Projects', mainHref: '/grih-lakshmi-residency', links: [{ name: 'Lakshmi Residency', href: '/grih-lakshmi-residency' }, { name: 'Lakshmi Greens', href: '/grih-lakshmi-greens' }, { name: 'Sold Out Legacy', href: '/sold-out-legacy' }] },
    { title: 'Investor Hub', mainHref: '/roi-growth', links: [{ name: 'ROI Growth', href: '/roi-growth' }, { name: 'Registration', href: '/registered' }, { name: 'Contact Concierge', href: '/contact' }] },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/people/Grih-Lakshmi-Residency/61558398837483/?_rdr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/grihlakshmiresidency1/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://in.linkedin.com/company/grih-lakshmi-residency',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48L15.5 11.75l-5.75 3.27z" />
        </svg>
      )
    },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden bg-emerald-50/30 dark:bg-black transition-colors duration-500 font-sans text-balance">
      <Navbar currentPath={location.pathname} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/establishments" element={<EstablishmentsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/grih-lakshmi-residency" element={<GrihLakshmiResidencyPage />} />
          <Route path="/grih-lakshmi-greens" element={<GrihLakshmiGreensPage />} />
          <Route path="/sold-out-legacy" element={<SoldOutLegacyPage />} />
          <Route path="/roi-growth" element={<ROIGrowthPage />} />
          <Route path="/registered" element={<RegisteredPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/founder/:slug" element={<FounderDetailPage />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <footer className="relative bg-emerald-950 text-white overflow-hidden pt-20 md:pt-32 pb-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-black text-[20vw] pointer-events-none select-none uppercase tracking-tighter leading-none whitespace-nowrap">
          Grih Lakshmi
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 mb-20 md:mb-32">
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-4 mb-10 group cursor-pointer" onClick={() => window.location.hash = '#home'}>
                <div className="w-16 h-16 green-gradient flex items-center justify-center rounded-2xl shadow-2xl border border-white/20 transition-transform group-hover:scale-105">
                  <span className="text-white font-black text-2xl">GL</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none text-white">Grih & Lakshmi</h3>
                  <p className="text-emerald-400 text-[10px] uppercase tracking-[0.4em] font-black mt-1">Residency</p>
                </div>
              </div>
              <p className="text-emerald-100/60 text-lg leading-relaxed mb-10 max-w-md">
                North India's premier institutional-grade real estate developer, specializing in high-yield smart city corridors and sustainable residential townships.
              </p>
              <div className="flex space-x-5">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 transition-all group shadow-lg" title={social.name}>
                    <span className="sr-only">{social.name}</span>
                    <div className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-white/10 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 leading-tight text-white md:whitespace-nowrap">Join the Elite <span className="text-emerald-400 italic">Investor Circle.</span></h3>
                <p className="text-emerald-100/40 text-sm mb-10 uppercase font-black tracking-widest md:whitespace-nowrap">Receive bi-weekly reports on North Indian growth corridors.</p>
                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Corporate Email Address" className="flex-grow bg-white/10 border border-white/10 rounded-2xl px-8 py-5 text-sm font-medium outline-none focus:border-emerald-500 focus:bg-white/20 transition-all text-white placeholder-white/30"/>
                  <button className="green-gradient px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl active:scale-95 transition-all text-white md:whitespace-nowrap">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 md:gap-16 pb-20 border-b border-white/10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <a href={section.mainHref} onClick={(e) => handleNavigate(e, section.mainHref)} className="block group mb-8">
                  <h3 className="italic text-emerald-400 text-lg transition-colors group-hover:text-white inline-flex items-center md:whitespace-nowrap">
                    {section.title}
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </h3>
                </a>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} onClick={(e) => handleNavigate(e, link.href)} className="text-sm font-black text-white/40 uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center group md:whitespace-nowrap">
                        <span className="w-0 group-hover:w-3 h-[1px] bg-emerald-400 transition-all mr-0 group-hover:mr-3" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="italic text-emerald-400 text-lg mb-8 md:whitespace-nowrap">Headquarters</h3>
              <p className="text-sm font-black text-white/40 uppercase tracking-widest leading-loose mb-8 md:whitespace-nowrap">H-86, Sector 63, Noida, UP - 201301, India</p>
              <div className="space-y-2">
                <a href="tel:+919711263000" className="block text-xl font-black text-white hover:text-emerald-400 transition-colors tracking-tighter md:whitespace-nowrap">+91 97112 63000</a>
                <a href="mailto:info@grihlakshmiresidency.com" className="block text-sm font-black text-emerald-400/60 uppercase tracking-widest break-all">info@grihlakshmiresidency.com</a>
              </div>
            </div>
          </div>
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="px-4 py-2 border border-emerald-500/30 rounded-xl bg-emerald-500/5"><p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 md:whitespace-nowrap">RERA Registered</p></div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 text-center md:text-left md:whitespace-nowrap">© {currentYear} Grih & Lakshmi Residency. All Architectural Renderings are indicative.</p>
            </div>
            <div className="flex space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-white/20 md:whitespace-nowrap">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-10 right-10 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-500 transition-all active:scale-90"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" /></svg></button>
      </footer>
    </div>
  );
};

export default App;
