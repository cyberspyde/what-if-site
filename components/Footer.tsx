import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { Page } from '../App';

interface FooterProps {
    navigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
    return (
        <footer className="py-12 bg-brand-surface border-t border-slate-800">
            <div className="container mx-auto px-6 text-center text-brand-muted">
                <div className="flex items-center justify-center space-x-2 mb-4">
                     <button onClick={() => navigate('home')} className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                        <SparklesIcon className="w-6 h-6" />
                        <span className="text-xl font-bold">What-If</span>
                    </button>
                </div>
                <p>&copy; {new Date().getFullYear()} What-If Inc. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};