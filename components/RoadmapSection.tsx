
import React from 'react';
import { ROADMAP } from '../constants';

const RoadmapSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-fantasy text-5xl font-bold text-amber-400 mb-4 glow-gold uppercase">THE CAMPAIGN MAP</h2>
        <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-xl mx-auto">
          Our journey from the shallow sands to the deep ocean mastery. Every milestone is a step toward ultimate ocean dominance.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-cyan-500 to-slate-800 transform -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {ROADMAP.map((item, index) => (
            <div key={item.phase} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Desktop Marker */}
              <div className="absolute left-1/2 w-8 h-8 bg-slate-900 border-4 border-amber-500 rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center z-10 shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                {item.completed && <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center`}>
                <div className={`p-8 bg-slate-900/80 border-2 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl ${item.completed ? 'border-amber-500/50 shadow-amber-900/20' : 'border-slate-800'}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${item.completed ? 'text-amber-400' : 'text-slate-500'}`}>
                    {item.phase} {item.completed ? '• COMPLETED' : '• UPCOMING'}
                  </span>
                  <h3 className="font-fantasy text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Spacer for mobile */}
              <div className="md:w-2/12 h-8 md:h-0" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Sea Map Elements */}
      <div className="mt-20 flex justify-center space-x-12 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
         <img src="https://picsum.photos/seed/map1/100/100" className="w-16 h-16 rounded-full border border-slate-700" alt="Island" title="Tortuga Bay" />
         <img src="https://picsum.photos/seed/map2/100/100" className="w-16 h-16 rounded-full border border-slate-700" alt="Ruins" title="Abyssal Ruins" />
         <img src="https://picsum.photos/seed/map3/100/100" className="w-16 h-16 rounded-full border border-slate-700" alt="Shipwreck" title="The Sunken Galleon" />
      </div>
    </div>
  );
};

export default RoadmapSection;
