import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="py-16 border-t border-purple-200/30">
            <div className="container mx-auto px-6">
                {/* Logo and Name */}
                <div className="flex items-center justify-center space-x-3 mb-8">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img src="/final-transparent.png" alt="What-If Logo" className="w-10 h-10 object-contain transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">What-If</span>
                    </Link>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                    <a href="https://t.me/whatif_uz" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                        Telegram
                    </a>
                    <a href="https://discord.gg/r3GCqFZuZy" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                        Discord
                    </a>
                    <Link to="/why-what-if" className="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                        Why What-If?
                    </Link>
                    <Link to="/faq" className="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                        FAQ
                    </Link>
                    <Link to="/privacy-policy" className="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                        Privacy Policy
                    </Link>
                </div>
                
                {/* Copyright */}
                <div className="text-center">
                    <p className="text-brand-muted text-sm">
                        &copy; {new Date().getFullYear()} What-If Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};