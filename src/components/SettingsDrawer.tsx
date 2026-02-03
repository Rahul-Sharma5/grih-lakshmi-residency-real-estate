
import React, { useEffect } from 'react';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const fonts = [
  { id: 'Poppins', name: 'Poppins (Default)' },
  { id: 'Inter', name: 'Inter' },
  { id: 'DM Sans', name: 'DM Sans' },
  { id: 'Nunito Sans', name: 'Nunito Sans' },
];

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ isOpen, onClose }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [selectedFont, setSelectedFont] = React.useState('Poppins');
  const [fontSize, setFontSize] = React.useState(16);

  // Sync state with actual document status on open
  useEffect(() => {
    if (isOpen) {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
      const rootStyle = getComputedStyle(document.documentElement);
      const currentSize = parseInt(rootStyle.getPropertyValue('--base-font-size')) || 16;
      setFontSize(currentSize);
    }
  }, [isOpen]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    document.documentElement.style.setProperty('--main-font', font);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = Number(e.target.value);
    setFontSize(size);
    document.documentElement.style.setProperty('--base-font-size', `${size}px`);
  };

  const resetSettings = () => {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
    setSelectedFont('Poppins');
    document.documentElement.style.setProperty('--main-font', 'Poppins');
    setFontSize(16);
    document.documentElement.style.setProperty('--base-font-size', '16px');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[250] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#f8fafc] dark:bg-black z-[260] shadow-2xl transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto font-sans border-l dark:border-neutral-800`}>
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#f8fafc]/90 dark:bg-black/90 backdrop-blur-md z-10 px-8 py-6 md:px-10 md:py-8 border-b dark:border-neutral-800 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Interface</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Personalize Experience</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={resetSettings} 
              title="Reset Settings"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-xl text-slate-400 hover:text-emerald-600 transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button 
              onClick={onClose} 
              title="Close Settings"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-xl text-slate-600 dark:text-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-md group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8 md:p-10 pt-6">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-7 border border-slate-100 dark:border-neutral-800 mb-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <div className="text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Dark Theme</span>
              </div>
              <button 
                onClick={toggleDarkMode}
                className={`w-14 h-7 rounded-full transition-all duration-300 relative ${isDarkMode ? 'bg-emerald-600 shadow-inner' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isDarkMode ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-neutral-800 shadow-sm relative pt-12">
            <div className="absolute -top-4 left-8 px-5 py-2 bg-[#1e293b] text-white text-[11px] font-black rounded-full uppercase tracking-widest shadow-xl">
              Typography
            </div>
            
            <div className="mb-10">
              <h3 className="text-xs font-black text-slate-400 dark:text-neutral-500 uppercase tracking-widest mb-8">Family Selection</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {fonts.map((f) => (
                  <button 
                    key={f.id}
                    onClick={() => handleFontChange(f.id)}
                    className={`group p-6 rounded-3xl border transition-all flex flex-col items-center justify-center space-y-3 ${selectedFont === f.id ? 'bg-[#f8fafc] dark:bg-black border-emerald-100 dark:border-emerald-900 shadow-sm ring-2 ring-emerald-500/5' : 'border-transparent bg-transparent hover:bg-slate-50 dark:hover:bg-black'}`}
                  >
                    <span className={`text-4xl font-bold transition-colors ${selectedFont === f.id ? 'text-emerald-600' : 'text-slate-400 dark:text-neutral-600 group-hover:text-slate-500'}`} style={{ fontFamily: f.id }}>Aa</span>
                    <span className={`text-[11px] font-black text-center leading-tight transition-colors ${selectedFont === f.id ? 'text-slate-800 dark:text-neutral-200' : 'text-slate-400 dark:text-neutral-600'}`}>
                      {f.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pb-4">
              <h3 className="text-xs font-black text-slate-400 dark:text-neutral-500 uppercase tracking-widest mb-10">Interface Scale</h3>
              <div className="px-2 relative pt-12 pb-6">
                <div 
                  className="absolute top-0 px-4 py-2 bg-[#475569] text-white text-xs font-black rounded-lg shadow-xl transform -translate-x-1/2 transition-all"
                  style={{ left: `${((fontSize - 12) / (24 - 12)) * 100}%` }}
                >
                  {fontSize}px
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#475569] rotate-45 rounded-sm" />
                </div>
                
                <div className="relative h-2.5 bg-emerald-100 dark:bg-neutral-800 rounded-full flex items-center justify-between px-1">
                   {[1,2,3,4,5,6,7,8].map(i => (
                     <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-40" />
                   ))}
                   <div 
                    className="absolute left-0 top-0 h-full bg-emerald-500 rounded-full" 
                    style={{ width: `${((fontSize - 12) / (24 - 12)) * 100}%` }} 
                   />
                   
                   <input 
                    type="range" 
                    min="12" 
                    max="24" 
                    step="1"
                    value={fontSize} 
                    onChange={handleFontSizeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div 
                    className="absolute w-6 h-6 bg-emerald-500 rounded-full border-[5px] border-white dark:border-neutral-900 shadow-lg pointer-events-none transition-all duration-75"
                    style={{ left: `calc(${((fontSize - 12) / (24 - 12)) * 100}% - 12px)` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center pb-12">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grih & Lakshmi Residency v3.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsDrawer;
