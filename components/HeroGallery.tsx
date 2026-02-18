
import React from 'react';
import { HEROES } from '../constants';
import { Hero } from '../types';

interface Props {
  onSelectHero: (hero: Hero) => void;
}

const HeroGallery: React.FC<Props> = ({ onSelectHero }) => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-fantasy text-5xl font-bold text-amber-400 mb-4 glow-gold">THE LEGION</h2>
        <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-xl mx-auto">
          From the fiery pits of volcanic vents to the dark abyss of the deep, assemble your perfect squad of crustacean commanders.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {HEROES.map((hero) => (
          <div 
            key={hero.id}
            onClick={() => onSelectHero(hero)}
            className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-4"
          >
            {/* Card Background with Glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} style={{ backgroundColor: hero.color }} />
            
            <div className="relative bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-amber-500/50">
              {/* Hero Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hero.image} 
                  alt={hero.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                {/* Rarity Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg`} style={{ backgroundColor: hero.color }}>
                    {hero.rarity}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-fantasy text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {hero.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-slate-400 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hero.color }} />
                  <span>{hero.role}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-amber-400 font-bold">PL: {hero.powerLevel}</span>
                </div>

                <button className="w-full py-2 bg-slate-800 text-slate-300 font-bold rounded-lg border border-slate-700 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:border-transparent transition-all">
                  VIEW STATS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;
