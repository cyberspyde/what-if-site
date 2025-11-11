import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const BeforeAfter: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Life <span className="text-red-500">Without</span> vs <span className="text-brand-primary">With</span> What-If
            </h2>
            <p className="text-lg text-brand-muted">See the transformation from autopilot to intentional living</p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without What-If */}
            <AnimatedSection>
              <div className="bg-gray-100 rounded-2xl border-2 border-gray-300 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  WITHOUT
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Living on Autopilot</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-xl mt-1">✗</div>
                    <div>
                      <div className="font-semibold text-gray-800">No Awareness</div>
                      <div className="text-sm text-gray-600">You don't see your patterns—good or bad</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-xl mt-1">✗</div>
                    <div>
                      <div className="font-semibold text-gray-800">Repeated Mistakes</div>
                      <div className="text-sm text-gray-600">Skip the gym, smoke too much, waste hours scrolling</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-xl mt-1">✗</div>
                    <div>
                      <div className="font-semibold text-gray-800">No Nudges</div>
                      <div className="text-sm text-gray-600">Nobody to remind you when you're falling into bad habits</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-red-500 text-xl mt-1">✗</div>
                    <div>
                      <div className="font-semibold text-gray-800">Slow Progress</div>
                      <div className="text-sm text-gray-600">Change feels impossible without data</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">YOUR TYPICAL WEEK</div>
                  <div className="text-gray-700 text-sm">Same cycles, no insight, no change.</div>
                </div>
              </div>
            </AnimatedSection>

            {/* With What-If */}
            <AnimatedSection delay="delay-200">
              <div className="bg-purple-500 rounded-2xl border-2 border-purple-400 p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-4 right-4 bg-green-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">
                  WITH WHAT-IF
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">Living with Purpose</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 text-xl mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white">Crystal Clear Awareness</div>
                      <div className="text-sm text-purple-100">See every pattern visualized and quantified</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 text-xl mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white">Break Bad Cycles</div>
                      <div className="text-sm text-purple-100">AI catches you before you fall into old habits</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 text-xl mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white">Gentle Nudges</div>
                      <div className="text-sm text-purple-100">"Want to try reading instead of gaming tonight?"</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 text-xl mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-white">Fast Progress</div>
                      <div className="text-sm text-purple-100">Data-driven change that actually sticks</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-600 rounded-lg">
                  <div className="text-xs text-purple-200 mb-1">YOUR TRANSFORMED WEEK</div>
                  <div className="text-white text-sm font-semibold">Intentional choices, visible growth, real change. 🚀</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
