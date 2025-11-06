import React from 'react';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="opacity-0 animate-fade-in-down">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                Predict Your Day. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Master Your Life.
                </span>
              </h1>
            </div>
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <p className="mt-6 max-w-xl text-lg md:text-xl text-brand-muted mx-auto md:mx-0">
                What-If learns your unique routines to predict your next move, helping you build better habits and uncover the hidden patterns of your daily life.
              </p>
            </div>
            <div className="mt-10 opacity-0 animate-fade-in-up animation-delay-500">
              <a
                href="#cta"
                className="inline-flex items-center justify-center bg-brand-primary text-brand-background font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg shadow-brand-primary/20"
              >
                Get Early Access
                <ChevronRightIcon className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Animated Phone Mockup */}
          <div className="relative flex justify-center items-center opacity-0 animate-fade-in-up animation-delay-700">
            <div className="w-full max-w-xs sm:max-w-sm">
                <div className="relative aspect-[9/19.5] bg-brand-surface border-4 border-slate-700 rounded-[2.5rem] p-4 shadow-2xl shadow-black/50">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full"></div>
                <div className="bg-brand-background rounded-[1.5rem] w-full h-full flex flex-col items-center justify-center p-4 space-y-4">
                    <p className="text-brand-muted text-sm">CURRENT ACTIVITY</p>
                    <p className="text-white text-lg font-semibold">Morning Gym Session</p>
                    <div className="w-full h-px bg-slate-700 my-2"></div>
                    <p className="text-brand-muted text-sm">WHAT'S NEXT?</p>
                    <div className="w-full bg-slate-800 p-4 rounded-lg text-center animate-slow-pulse">
                        <p className="text-brand-primary text-xl font-bold">Breakfast at Home</p>
                        <p className="text-xs text-brand-muted">82% Probability</p>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};