import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-brand-secondary to-brand-primary p-8 sm:p-12 rounded-2xl text-center shadow-2xl shadow-brand-secondary/20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-background">Ready to Understand Your Day?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-800">
              Be the first to experience the future of personal analytics. Join our beta and start your journey of self-discovery today.
            </p>
            <div className="mt-8">
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-5 py-3 rounded-full text-brand-background placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-background/30"
                  required
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center shrink-0 bg-brand-background text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
                >
                  Join Beta
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};