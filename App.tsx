
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroGallery from './components/HeroGallery';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import HeroModal from './components/HeroModal';
import AdvisorChat from './components/AdvisorChat';
import { Hero } from './types';

const App: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectHero = (hero: Hero) => {
    setSelectedHero(hero);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden stone-texture">
      {/* Dynamic Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-amber-900/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        
        <div id="heroes" className="py-20 px-4">
          <HeroGallery onSelectHero={handleSelectHero} />
        </div>

        <div id="tokenomics" className="py-20 px-4 bg-slate-900/50">
          <TokenomicsSection />
        </div>

        <div id="roadmap" className="py-20 px-4">
          <RoadmapSection />
        </div>

        <section id="strategist" className="py-20 px-4 bg-slate-900/30">
          <AdvisorChat />
        </section>

        <footer className="py-10 border-t border-slate-800 bg-slate-950 text-center text-slate-500">
          <div className="container mx-auto px-4">
            <h2 className="font-fantasy text-2xl text-amber-400 mb-4 tracking-wider">CLAWS OF CLAN</h2>
            <p className="max-w-md mx-auto mb-6 text-sm">
              The tides are rising. Join the most epic crab-warfare strategy game in the deep sea realm.
            </p>
            <div className="flex justify-center space-x-6 mb-8 text-xl">
              <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-discord"></i></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-telegram"></i></a>
            </div>
            <p className="text-xs">&copy; 2024 Claws Of Clan. All Rights Reserved.</p>
          </div>
        </footer>
      </main>

      {isModalOpen && selectedHero && (
        <HeroModal hero={selectedHero} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
