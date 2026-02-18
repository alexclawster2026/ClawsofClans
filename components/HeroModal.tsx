
import React, { useEffect, useState } from 'react';
import { Hero } from '../types';

interface Props {
  hero: Hero;
  onClose: () => void;
}

const StatBar: React.FC<{ label: string; value: number; color: string; delay: number }> = ({ label, value, color, delay }) => {
  const [width, setWidth] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), delay);
    // Pulse effect starts after the width animation (1000ms transition duration)
    const pulseTimer = setTimeout(() => setIsPulsing(true), delay + 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, [value, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs font-bold text-slate-400 mb-1 uppercase tracking-tighter">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 relative shadow-inner">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.2)] ${isPulsing ? 'animate-stat-pulse' : ''}`}
          style={{ width: `${width}%`, backgroundColor: color }}
        />
        {/* Subtle glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const HeroModal: React.FC<Props> = ({ hero, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={handleClose} />
      
      <div className={`relative w-full max-w-5xl bg-slate-900 border-2 border-slate-800 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        {/* Animated Background Aura */}
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 blur-[100px] pointer-events-none" style={{ backgroundColor: hero.color }} />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left: Hero Image (Full Side) */}
          <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative overflow-hidden bg-slate-950">
            <img 
              src={hero.image} 
              alt={hero.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-slate-900" />
            
            {/* Summoning Aura Effect */}
            <div className="absolute inset-0 animate-pulse opacity-30" style={{ border: `4px solid ${hero.color}`, boxShadow: `inset 0 0 50px ${hero.color}` }} />
          </div>

          {/* Right: Hero Content */}
          <div className="w-full lg:w-[55%] p-8 lg:p-12 overflow-y-auto max-h-[70vh] lg:max-h-none">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-2 block">{hero.rarity} {hero.role}</span>
                <h2 className="font-fantasy text-5xl font-bold text-white mb-2 tracking-tight leading-none glow-gold">{hero.name}</h2>
                <div className="flex items-center space-x-2">
                  <div className="h-1 w-12 bg-amber-500 rounded-full" />
                  <span className="text-slate-400 text-sm font-semibold uppercase tracking-widest">Power Level {hero.powerLevel}</span>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <span className="text-slate-400 text-2xl">&times;</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Battle Attributes</h4>
                <StatBar label="Health" value={hero.stats.hp} color="#ef4444" delay={200} />
                <StatBar label="Attack" value={hero.stats.attack} color="#fbbf24" delay={400} />
                <StatBar label="Defense" value={hero.stats.defense} color="#3b82f6" delay={600} />
                <StatBar label="Speed" value={hero.stats.speed} color="#10b981" delay={800} />
              </div>
              
              <div>
                <h4 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Special Ability</h4>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-6">
                  <p className="text-white font-semibold text-sm leading-relaxed">
                    {hero.ability}
                  </p>
                </div>
                
                <h4 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Origin Story</h4>
                <p className="text-slate-400 text-sm italic leading-relaxed">
                  "{hero.backstory}"
                </p>
              </div>
            </div>

            <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-lg rounded-xl shadow-lg transition-transform active:scale-95">
              DEPLOY TO BATTLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroModal;