import React, { useState, useEffect } from 'react';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface Prediction {
  current: string;
  next: string;
  emoji: string;
  confidence: number;
  time: string;
  streak: string;
}

const predictions: Prediction[] = [
  { 
    current: "Morning Gym Session", 
    next: "Breakfast at Home", 
    emoji: "🔮",
    confidence: 89, 
    time: "8:30 AM",
    streak: "🔥 7 day streak"
  },
  { 
    current: "Lunch Break", 
    next: "Afternoon Coffee", 
    emoji: "☕",
    confidence: 92, 
    time: "1:45 PM",
    streak: "⚡ 94% accurate"
  },
  { 
    current: "Evening Work", 
    next: "Dinner with Friends", 
    emoji: "🍽️",
    confidence: 76, 
    time: "6:00 PM",
    streak: "🎯 12 predictions today"
  },
  { 
    current: "Night Reading", 
    next: "Sleep Time", 
    emoji: "😴",
    confidence: 95, 
    time: "10:30 PM",
    streak: "💤 Perfect sleep schedule"
  },
];

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % predictions.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const activePrediction = predictions[activeIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="opacity-0 animate-fade-in-down">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tight">
                Know Yourself. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end">
                  Change Your Future.
                </span>
              </h1>
            </div>
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <p className="mt-6 max-w-xl text-lg md:text-xl text-brand-muted mx-auto md:mx-0">
                What-If uses AI to reveal your hidden patterns and gently nudge you toward the life you want—one choice at a time.
              </p>
            </div>
            <div className="mt-10 opacity-0 animate-fade-in-up animation-delay-500">
              <a
                href="#cta"
                className="inline-flex items-center justify-center bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Download Now
                <ChevronRightIcon className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Animated Phone Mockup */}
          <div className="relative flex justify-center items-center opacity-0 animate-fade-in-up animation-delay-700">
            <div className="w-full max-w-xs sm:max-w-sm">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Time indicator dots */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {predictions.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? 'bg-purple-500 w-6' 
                          : 'bg-purple-300'
                      }`}
                    ></div>
                  ))}
                </div>
                
                <div className="relative aspect-[9/19.5] bg-gradient-to-br from-slate-900 to-slate-800 border-4 border-slate-700 rounded-[2.5rem] p-4 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow duration-500">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-full border border-slate-700"></div>
                
                {/* Screen content with gradient background */}
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-[1.5rem] w-full h-full flex flex-col items-center justify-center p-6 space-y-6 relative overflow-hidden">
                    {/* Animated background circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse animation-delay-500"></div>
                    
                    <p className="text-purple-200 text-xs font-semibold tracking-wider uppercase">CURRENT ACTIVITY</p>
                    <div className="bg-white/25 px-6 py-3 rounded-2xl border border-white/40 transition-all duration-500 transform" key={`current-${activeIndex}`}>
                        <p className="text-white text-lg font-bold animate-fade-in">{activePrediction.current}</p>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-2"></div>
                    
                    <p className="text-purple-200 text-xs font-semibold tracking-wider uppercase">WHAT'S NEXT?</p>
                    
                    {/* Prediction card with animation */}
                    <div className="w-full p-5 rounded-2xl text-center shadow-2xl animate-slow-pulse border-2 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, #2DD4BF, #14B8A6)', borderColor: '#2DD4BF' }} key={`prediction-${activeIndex}`}>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-3xl animate-bounce">{activePrediction.emoji}</span>
                            <p className="text-white text-xl font-extrabold animate-fade-in">{activePrediction.next}</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-white/30 px-3 py-1 rounded-full">
                                <p className="text-xs text-white font-bold">{activePrediction.confidence}% Confidence</p>
                            </div>
                            <div className="bg-white/30 px-3 py-1 rounded-full">
                                <p className="text-xs text-white font-bold">in 15 min</p>
                            </div>
                        </div>
                        
                        {/* Confidence bar */}
                        <div className="mt-3 h-2 bg-white/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white transition-all duration-1000 ease-out rounded-full"
                            style={{ width: `${activePrediction.confidence}%` }}
                          ></div>
                        </div>
                    </div>
                    
                    {/* Bottom stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                        <div className="bg-white/25 px-4 py-2 rounded-full border border-white/40 transition-all duration-500" key={`streak-${activeIndex}`}>
                            <p className="text-white font-semibold text-sm animate-fade-in">{activePrediction.streak}</p>
                        </div>
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