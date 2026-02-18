
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heroes', href: '#heroes' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Strategist', href: '#strategist' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-900/30 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-12 transition-transform shadow-lg shadow-amber-500/20">
            <span className="text-slate-900 font-bold text-xl">C</span>
          </div>
          <h1 className="font-fantasy text-2xl font-bold tracking-tighter text-amber-400 glow-gold">
            CLAWS <span className="text-cyan-400 font-normal">OF</span> CLAN
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-amber-400 transition-colors font-semibold tracking-wide text-sm uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-2 px-6 rounded-md shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all transform hover:scale-105 active:scale-95">
          PLAY NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
