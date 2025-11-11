import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClasses = (path: string) => 
    `cursor-pointer transition-colors text-lg ${
      isActive(path)
      ? 'text-brand-primary font-semibold' 
      : 'text-brand-muted hover:text-brand-primary'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-surface/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/final-transparent.png" alt="What-If Logo" className="w-14 h-14 object-contain" />
          <span className="text-2xl font-bold text-brand-light tracking-wider">What-If</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/why-what-if" className={navLinkClasses('/why-what-if')}>Why What-If?</Link>
          <Link to="/faq" className={navLinkClasses('/faq')}>FAQ</Link>
        </nav>
        
        {/* Desktop CTA */}
        <a 
          href="/#cta"
          className="hidden md:inline-block bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white font-bold py-2 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
        >
          Download App
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brand-dark p-2 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-surface/95 backdrop-blur-lg border-t border-slate-700/50">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/why-what-if" 
              className={navLinkClasses('/why-what-if')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why What-If?
            </Link>
            <Link 
              to="/faq" 
              className={navLinkClasses('/faq')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <a 
              href="/#cta"
              className="inline-block text-center bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};