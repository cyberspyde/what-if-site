import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { RoadmapPage } from './pages/RoadmapPage';

export type Page = 'home' | 'how' | 'features' | 'roadmap';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'how':
        return <HowItWorksPage />;
      case 'features':
        return <FeaturesPage />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background Gradient & Shape Elements for Parallax-like effect */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-full filter blur-3xl animate-slow-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-gradient-to-l from-teal-400/20 to-green-400/10 rounded-full filter blur-3xl animate-slow-pulse animation-delay-2000"></div>
      </div>

      <Header currentPage={page} navigate={setPage} />
      <main className="relative">
        {renderPage()}
      </main>
      <Footer navigate={setPage} />
    </div>
  );
};

export default App;