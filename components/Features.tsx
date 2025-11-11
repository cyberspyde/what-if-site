import React, { useRef } from 'react';
import { UsersIcon } from './icons/UsersIcon';
import { ClockIcon } from './icons/ClockIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { AnimatedSection } from './AnimatedSection';
import { useOnScreen } from '../hooks/useOnScreen';

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
}> = ({ icon: Icon, title, description, children, reverse = false }) => {
  return (
    <AnimatedSection>
      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-3">
            <div className="p-2 bg-brand-card rounded-lg border border-slate-600 shadow-sm">
              <Icon className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-2xl font-bold text-brand-light">{title}</h3>
          </div>
          <p className="mt-4 text-lg text-brand-muted">{description}</p>
        </div>
        <div className="lg:w-1/2 w-full">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
};

const HabitChart: React.FC = () => {
    const ref = useRef<SVGSVGElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div className="bg-brand-card p-6 rounded-2xl border border-slate-600 shadow-lg shadow-purple-500/20">
             <p className="font-bold text-brand-light">Habit Formation: "Gym After Work"</p>
             <p className="text-sm text-brand-muted mb-4">Probability over 8 Weeks</p>
            <svg ref={ref} viewBox="0 0 400 200" className="w-full h-auto">
                {/* Grid Lines */}
                {[25, 50, 75, 100].map(y => (
                     <line key={y} x1="30" y1={200 - (y*1.8)} x2="390" y2={200- (y*1.8)} stroke="#334155" strokeWidth="1" strokeDasharray="3"/>
                ))}
                {/* Axes */}
                <line x1="30" y1="20" x2="30" y2="180" stroke="#7C3AED" strokeWidth="2" />
                <line x1="30" y1="180" x2="390" y2="180" stroke="#7C3AED" strokeWidth="2" />
                
                {/* Labels */}
                <text x="10" y="184" textAnchor="middle" fill="#94A3B8" fontSize="12">0%</text>
                <text x="10" y="24" textAnchor="middle" fill="#94A3B8" fontSize="12">100%</text>
                <text x="50" y="195" textAnchor="middle" fill="#94A3B8" fontSize="12">W1</text>
                <text x="370" y="195" textAnchor="middle" fill="#94A3B8" fontSize="12">W8</text>

                {/* Data line */}
                <polyline 
                    points="50,144 100,135 150,117 200,90 250,72 300,54 350,45" 
                    fill="none" 
                    stroke="#7C3AED"
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={isVisible ? 'animate-draw-line' : ''}
                    style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                />
            </svg>
        </div>
    )
}


export const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-transparent to-purple-100/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Where This Creates <span className="text-brand-primary">Real Value</span>
            </h2>
            <p className="text-lg text-brand-muted">
              It's not just about prediction. It's about insight that drives real change.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mt-20 space-y-24">
            <FeatureCard
                icon={UsersIcon}
                title="Uncover Your Self-Awareness"
                description="See your actual patterns versus what you think you do. The app provides an honest mirror to your daily routines, revealing truths that can lead to powerful changes."
            >
                <div className="bg-purple-500 p-6 rounded-2xl border-2 border-purple-400 shadow-xl">
                    <p className="font-bold text-white text-lg mb-1">Your Perception vs. Reality</p>
                    <p className="text-sm text-purple-200 mb-4">"I exercise 4x per week"</p>
                    <div className="space-y-3">
                        <div className="text-white">Reality: <span className="font-bold text-yellow-300 text-2xl">1.8x</span> per week</div>
                        <div className="text-sm bg-purple-600 border border-purple-400 p-4 rounded-lg">
                           <span className="font-semibold text-yellow-300">💡 Insight:</span>
                           <span className="text-purple-100"> You primarily exercise after getting more than 7 hours of sleep.</span>
                        </div>
                    </div>
                </div>
            </FeatureCard>

            <FeatureCard
                icon={ClockIcon}
                title="Discover Hidden Patterns"
                description="What-If reveals correlations you might never notice. Understand the subtle triggers and consequences of your actions, empowering you to optimize your day."
                reverse={true}
            >
                 <div className="bg-purple-500 p-6 rounded-2xl border-2 border-purple-400 shadow-xl">
                    <p className="font-bold text-white text-lg mb-1">Pattern Discovery</p>
                    <p className="text-sm text-purple-200 mb-4">Correlation found in your data</p>
                    <div className="text-center bg-purple-600 border border-purple-400 p-6 rounded-lg">
                        <p className="text-lg text-white">"When you <span className="text-yellow-300 font-bold">work from home</span>, you skip lunch <span className="text-yellow-300 font-bold">70%</span> of the time."</p>
                    </div>
                </div>
            </FeatureCard>
            
            <FeatureCard
                icon={TrendingUpIcon}
                title="Build Habits That Stick"
                description="Quantify your progress as new routines become automatic. Watch the probability of your desired habits increase week by week, giving you tangible proof of your hard work."
            >
                <HabitChart />
            </FeatureCard>
        </div>

      </div>
    </section>
  );
};