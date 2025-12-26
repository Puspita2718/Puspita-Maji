
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Blog', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-slate-950 font-mono transition-transform group-hover:rotate-12">
            P
          </div>
          <span>PUSPITA<span className="text-emerald-500">.</span>DEV</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#contact" 
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
