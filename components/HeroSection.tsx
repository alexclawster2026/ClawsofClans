
import React, { useEffect, useState, useRef } from 'react';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Multi-layer transformation values
  const bgTransform = `translate3d(0, ${scrollY * 0.2}px, 0) scale(1.15)`;
  const midTransform = `translate3d(${mousePos.x * 15}px, ${scrollY * 0.45 + mousePos.y * 15}px, 0)`;
  const contentTransform = `translate3d(${mousePos.x * -20}px, ${mousePos.y * -15}px, 0)`;
  const lightRayTransform = `translate3d(${mousePos.x * 40}px, ${scrollY * 0.7}px, 0) rotate(${mousePos.x * 5}deg)`;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Layer 1: Deep Background Image (Slowest Parallax) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
        style={{ 
          backgroundImage: 'url("https://69910958681c79fa0bcd324c.imgix.net/banner.jpg")',
          transform: bgTransform,
        }}
      >
        {/* Darker Overlays for improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </div>

      {/* Layer 2: God Rays / Light Refraction - Lowered opacity for visibility */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none opacity-25 will-change-transform"
        style={{ transform: lightRayTransform }}
      >
        <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl rotate-12" />
      </div>

      {/* Layer 3: Floating Ocean Particles & Bubbles */}
      <div 
        className="absolute inset-0 z-2 pointer-events-none will-change-transform"
        style={{ transform: midTransform }}
      >
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-200/10 blur-[1px] animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Layer 4: Interactive Foreground Content */}
      <div 
        className="relative z-10 container mx-auto px-4 text-center will-change-transform transition-transform duration-200 ease-out"
        style={{ transform: contentTransform }}
      >
        {/* Subtle dark wash specifically behind content for readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-slate-950/40 blur-[80px] -z-10 rounded-full" />

        <div className="inline-block px-5 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full mb-8 animate-[bounce_3s_infinite] shadow-[0_0_20px_rgba(251,191,36,0.15)]">
          <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">The Tides Are Calling</span>
        </div>
        
        <div className="relative mb-6">
          <h1 className="font-fantasy text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-white drop-shadow-[0_10px_40px_rgba(0,0,0,1)] leading-none select-none">
            <span className="text-amber-400 glow-gold">CLAWS</span> 
            <span className="block md:inline mx-2 text-slate-200 font-light opacity-60 text-5xl md:text-7xl lg:text-8xl align-middle">OF</span> 
            <span className="text-cyan-400 glow-cyan">CLAN</span>
          </h1>
          {/* Subtle Glow Behind Text */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] -z-10 rounded-full scale-75" />
        </div>
        
        <p className="text-lg md:text-2xl text-slate-100 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] opacity-100 italic">
          "The ocean doesn't forgive. Neither do the Claws."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8">
          <a href="#heroes" className="group relative px-10 py-5 bg-amber-500 text-slate-950 font-black text-xl rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(251,191,36,0.4)] transition-all hover:scale-110 active:scale-95 hover:-translate-y-1">
            <span className="relative z-10 flex items-center">
              <span className="mr-3">⚔</span> CHOOSE HERO
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          </a>
          
          <a href="#tokenomics" className="group px-10 py-5 bg-slate-900/90 text-white font-bold text-xl border border-slate-700 rounded-xl hover:bg-slate-800 transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center hover:-translate-y-1">
            <span className="mr-3 text-amber-500 group-hover:rotate-12 transition-transform">💰</span> VAULT
          </a>
        </div>
      </div>

      {/* Deep Sea Vignette Overlay - Darker edges for focus */}
      <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_250px_rgba(2,6,23,1)]" />

      {/* Decorative Wave Divider */}
      <div 
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none transition-transform duration-100"
        style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
      >
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,103.49,122,112,184.4,113.3,235.41,114.38,285.34,80.1,321.39,56.44Z" className="fill-slate-950"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
