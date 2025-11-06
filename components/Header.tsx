import React, { useState, useEffect } from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = (page: Page) => 
    `cursor-pointer transition-colors text-lg ${
      currentPage === page 
      ? 'text-brand-primary font-semibold' 
      : 'text-brand-muted hover:text-brand-primary'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-surface/80 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('home')} className="flex items-center space-x-2">
          <SparklesIcon className="w-8 h-8 text-brand-primary" />
          <span className="text-2xl font-bold text-white tracking-wider">What-If</span>
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigate('how')} className={navLinkClasses('how')}>How It Works</button>
          <button onClick={() => navigate('features')} className={navLinkClasses('features')}>Features</button>
          <button onClick={() => navigate('roadmap')} className={navLinkClasses('roadmap')}>Roadmap</button>
        </nav>
        <button 
          onClick={() => navigate('home')} 
          className="hidden md:inline-block bg-brand-primary text-brand-background font-bold py-2 px-6 rounded-full hover:bg-brand-secondary transition-transform transform hover:scale-105"
        >
          Join Beta
        </button>
      </div>
    </header>
  );
};