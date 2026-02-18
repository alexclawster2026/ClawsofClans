
import React from 'react';

const TokenomicsSection: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="font-fantasy text-5xl font-bold text-amber-400 mb-4 glow-gold uppercase">THE TREASURE VAULT</h2>
        <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-xl mx-auto">
          Powering the Claws Clan ecosystem. The $CLAW token fuels the battlefield economy through sustainable mechanics.
        </p>
      </div>

      <div className="bg-slate-900/40 p-1 md:p-8 rounded-[2.5rem] border border-slate-800/50 backdrop-blur-sm shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-950/80 p-6 rounded-3xl border border-amber-900/20 group hover:border-amber-500/30 transition-all duration-300 shadow-lg">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block">Token Name</span>
            <p className="text-xl font-fantasy font-bold text-amber-400 glow-gold">CLAW TOKEN</p>
          </div>
          
          <div className="bg-slate-950/80 p-6 rounded-3xl border border-cyan-900/20 group hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block">Ticker Symbol</span>
            <p className="text-xl font-fantasy font-bold text-cyan-400 glow-cyan">$CLAW</p>
          </div>
          
          <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 group hover:border-slate-600 transition-all duration-300 shadow-lg">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block">Total Supply</span>
            <p className="text-xl font-fantasy font-bold text-white">1,000,000,000</p>
          </div>
          
          <div className="bg-slate-950/80 p-6 rounded-3xl border border-red-900/20 group hover:border-red-500/30 transition-all duration-300 shadow-lg">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block">CONTRACT</span>
            <p className="text-xl font-fantasy font-bold text-red-400">REVOKED</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
             {/* Center Piece / Decorative element since chart is removed */}
             <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-950 rounded-full border-4 border-amber-500 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] group cursor-default">
                <span className="text-amber-400 font-bold text-2xl group-hover:scale-110 transition-transform">$CLAW</span>
                <span className="text-slate-500 text-[10px] uppercase">Official</span>
              </div>
            </div>
            <div className="absolute inset-[-10px] rounded-full border border-amber-500/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-25px] rounded-full border border-cyan-500/10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
          
          <p className="text-slate-500 text-xs mt-12 italic max-w-md text-center">
            Distributed for the prosperity of the ocean clan. All rewards and incentives are subject to the Great Tide Council's governance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
