import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SettingsDrawer from './SettingsDrawer';

interface NavbarProps {
  currentPath?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Registered', href: '/registered' },
    { 
      name: 'Projects', 
      href: '/projects',
      isDropdown: true,
      subLinks: [
        { name: 'Grih Lakshmi Residency', href: '/grih-lakshmi-residency' },
        { name: 'Grih Lakshmi Greens', href: '/grih-lakshmi-greens' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isSubPage = location.pathname !== '/';
  const isSolid = isScrolled || isMobileMenuOpen || isSubPage;

  const contactInfo = (
    <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-16 px-8 py-3 whitespace-nowrap">
        <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-600"><path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" /></svg>
            <span className="font-black text-emerald-950 dark:text-emerald-100 text-[12px] tracking-tight">+91 97112 63000</span>
        </div>
        <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-600"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
            <span className="font-black text-emerald-950 dark:text-emerald-100 text-[12px] tracking-tight">Info@grihlakshmiresidency.com</span>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
            <span className="font-black text-emerald-800 dark:text-emerald-400 text-[10px] uppercase tracking-[0.4em]">Government Approved High-ROI Assets</span>
        </div>
    </div>
  );

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-[200]">
        <div className="w-full bg-gradient-to-r from-emerald-50 via-emerald-100/50 to-emerald-50 dark:from-neutral-900 dark:via-emerald-950/20 dark:to-neutral-900 border-b border-emerald-100 dark:border-emerald-900/30 h-[var(--ticker-height)] flex items-center overflow-hidden">
          <div className="marquee-container">
            {contactInfo}{contactInfo}{contactInfo}
          </div>
        </div>

        <nav className={`w-full transition-all duration-500 ${isSolid ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg py-4 shadow-2xl border-b border-emerald-100 dark:border-neutral-800' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer group z-[220]" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-10 h-10 md:w-12 md:h-12 green-gradient flex items-center justify-center rounded-2xl transition-all group-hover:scale-110 shadow-xl border border-white/20">
                <span className="text-white font-black text-base md:text-xl">GL</span>
              </div>
              <div>
                <h1 className="font-black text-xs md:text-base leading-tight uppercase tracking-tight text-emerald-950 dark:text-white">Grih & Lakshmi</h1>
                <p className="text-emerald-600 dark:text-emerald-400 text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-black">Residency</p>
              </div>
            </Link>
            
            <div className="hidden lg:flex md:space-x-6 lg:space-x-10 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.isDropdown ? (
                    <button className="relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-emerald-600 flex items-center text-emerald-950/40 dark:text-white/30">
                      {link.name}
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  ) : (
                    <Link to={link.href} onClick={handleLinkClick} className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-emerald-600 ${location.pathname === link.href ? 'text-emerald-700 dark:text-emerald-400' : 'text-emerald-950/40 dark:text-white/30'}`}>
                      {link.name}
                      {location.pathname === link.href && <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600"></span>}
                    </Link>
                  )}
                  {link.isDropdown && (
                    <div className="absolute top-full -left-4 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                      <div className="bg-white dark:bg-neutral-900 border border-emerald-100 dark:border-neutral-800 shadow-2xl rounded-2xl py-4 min-w-[240px] backdrop-blur-xl">
                        {link.subLinks?.map(sub => (
                          <Link key={sub.name} to={sub.href} onClick={handleLinkClick} className={`block px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${location.pathname === sub.href ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-white/5' : 'text-emerald-950/60 dark:text-white/40 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-white/5'}`}>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => setIsSettingsOpen(true)} className="p-3 bg-emerald-50 dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-100 dark:border-neutral-800 shadow-sm transition-all hover:bg-emerald-600 hover:text-white" aria-label="Settings">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-4 z-[300]">
               <button onClick={() => setIsSettingsOpen(true)} className="p-3 bg-emerald-50 dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-100 dark:border-neutral-800 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></button>
               <button 
                className={`p-3 rounded-2xl transition-all duration-300 shadow-lg border flex items-center justify-center ${isMobileMenuOpen ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-emerald-50 dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-neutral-800'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
               >
                 <div className="w-6 h-6 relative">
                    <motion.span 
                      className="absolute h-0.5 w-full bg-current"
                      animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? '50%' : '25%' }}
                      style={{ top: '50%', left: 0 }}
                    />
                    <motion.span 
                      className="absolute h-0.5 w-full bg-current"
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                      style={{ top: '50%', left: 0 }}
                    />
                    <motion.span 
                      className="absolute h-0.5 w-full bg-current"
                      animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? '-50%' : '-25%' }}
                      style={{ top: '50%', left: 0 }}
                    />
                 </div>
               </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl z-[150] lg:hidden"
          >
            <motion.div 
              initial={{ y: "-20%" }}
              animate={{ y: 0 }}
              exit={{ y: "-20%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col h-full pt-20"
            >
              <div className="flex-grow flex flex-col items-center justify-center space-y-2 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, type: "spring", stiffness: 100 }}
                    className="w-full text-center"
                  >
                    {link.isDropdown ? (
                      <div className="py-2">
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-950/40 dark:text-white/30">{link.name}</span>
                        <div className="mt-2 space-y-1">
                          {link.subLinks?.map(sub => (
                             <Link key={sub.name} to={sub.href} onClick={handleLinkClick} className={`block text-xl font-bold uppercase tracking-wider py-2 rounded-lg transition-all ${location.pathname === sub.href ? 'text-emerald-600 bg-emerald-100/50 dark:bg-emerald-900/20' : 'text-emerald-900 dark:text-white'}`}>{sub.name}</Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link to={link.href} onClick={handleLinkClick} className={`block text-2xl font-black uppercase tracking-tighter py-2 rounded-lg transition-all ${location.pathname === link.href ? 'text-emerald-600 bg-emerald-100/50 dark:bg-emerald-900/20' : 'text-emerald-900 dark:text-white'}`}>{link.name}</Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="py-8 px-6 border-t border-emerald-100 dark:border-neutral-800"
              >
                <a href="tel:+919711263000" className="block text-center text-2xl font-black text-emerald-700 dark:text-emerald-400">+91 97112 63000</a>
                <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-emerald-950/20 dark:text-white/10 mt-4">© 2024 Grih & Lakshmi Residency</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <SettingsDrawer isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default Navbar;
