import React, { useState, useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface Prediction {
  current: string;
  next: string;
  confidence: number;
  time: string;
}

const predictions: Prediction[] = [
  { current: "Morning Gym Session", next: "Breakfast at Home", confidence: 89, time: "8:30 AM" },
  { current: "Lunch Break", next: "Afternoon Coffee", confidence: 92, time: "1:45 PM" },
  { current: "Evening Work", next: "Dinner with Friends", confidence: 76, time: "6:00 PM" },
];

export const PredictionCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % predictions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              See Predictions in <span className="text-brand-primary">Real-Time</span>
            </h2>
            <p className="text-lg text-brand-muted">Watch What-If predict your next move with stunning accuracy</p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {predictions.map((pred, index) => (
              <AnimatedSection key={index} delay={`delay-${index * 200}`}>
                <div 
                  className={`relative bg-purple-500 rounded-2xl border-2 p-6 transition-all duration-500 ${
                    activeIndex === index 
                      ? 'border-yellow-400 shadow-2xl shadow-yellow-400/50 scale-105' 
                      : 'border-purple-400 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {activeIndex === index && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  )}
                  
                  <div className="text-xs text-purple-200 mb-3 font-semibold">{pred.time}</div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-purple-300 mb-1">CURRENT</div>
                    <div className="text-white font-bold">{pred.current}</div>
                  </div>

                  <div className="h-px bg-purple-400 my-4"></div>

                  <div className="mb-4">
                    <div className="text-xs text-purple-300 mb-1">PREDICTED NEXT</div>
                    <div className="text-white font-bold">{pred.next}</div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-purple-300">CONFIDENCE</span>
                      <span className="text-white font-bold">{pred.confidence}%</span>
                    </div>
                    <div className="h-2 bg-purple-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000 ${
                          activeIndex === index ? 'w-full' : 'w-0'
                        }`}
                        style={{ width: activeIndex === index ? `${pred.confidence}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
