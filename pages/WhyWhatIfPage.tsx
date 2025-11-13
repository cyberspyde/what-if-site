import React from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { SparklesIcon } from '../components/icons/SparklesIcon';

export const WhyWhatIfPage: React.FC = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Why What-If? | Transform Your Life Through Self-Awareness"
        description="What-If isn't just another habit tracker. It's a mirror that reveals your true patterns and helps you create lasting change. Discover why self-awareness matters."
        keywords="why use What-If, self-awareness app, behavior change, habit transformation, personal growth tool, life improvement app"
        canonicalUrl="https://what-if.uz/why-what-if"
      />
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6">
                What If You Could <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end">See Yourself</span> Clearly?
              </h1>
              <p className="text-xl text-brand-muted leading-relaxed">
                We don't just predict your future. We help you <strong>understand yourself</strong> and create the life you actually want.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 text-center">The Invisible Patterns</h2>
              <div className="bg-purple-500 p-8 rounded-2xl border border-purple-400 shadow-xl">
                <p className="text-xl text-white leading-relaxed mb-6">
                  Every day, you follow patterns. Wake up, coffee, gym, work, scroll social media, sleep. Again and again.
                </p>
                <p className="text-xl text-purple-50 leading-relaxed">
                  But you never <em>see</em> them. You're living on autopilot, unaware of the cycles that shape your life—good and bad.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-12 text-center">What-If Makes You <span className="text-brand-primary">Self-Aware</span></h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Prediction */}
                <div className="bg-purple-500 p-8 rounded-2xl border border-purple-400">
                  <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <SparklesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">1. We Learn You</h3>
                  <p className="text-purple-50">
                    Our AI watches your patterns—when you exercise, what you eat, when you work, when you rest. It builds a model of <strong>your unique life</strong>.
                  </p>
                </div>

                {/* Insights */}
                <div className="bg-purple-500 p-8 rounded-2xl border border-purple-400">
                  <div className="bg-green-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <SparklesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">2. We Show You</h3>
                  <p className="text-purple-50">
                    "You game for 4 hours every night." "You skip breakfast 80% of the time." "You haven't exercised in 2 weeks." The truth, visualized.
                  </p>
                </div>

                {/* Intervention */}
                <div className="bg-purple-500 p-8 rounded-2xl border border-purple-400">
                  <div className="bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <SparklesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">3. We Nudge You</h3>
                  <p className="text-purple-50">
                    "Want to break your gaming cycle and learn something today?" "You might want to try eating something sweet instead of smoking?" Gentle interventions at the right moment.
                  </p>
                </div>

                {/* Transformation */}
                <div className="bg-purple-500 p-8 rounded-2xl border border-purple-400">
                  <div className="bg-purple-300 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <SparklesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">4. You Change</h3>
                  <p className="text-purple-50">
                    One small choice leads to another. A new habit forms. Your future changes. You become who you want to be.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8">Infinite Possibilities</h2>
              <p className="text-xl text-brand-muted leading-relaxed mb-6">
                Every action creates countless outcomes. Skip the gym once, and you might skip it again tomorrow. Or you might feel motivated to go twice as hard next time.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed mb-6">
                <strong className="text-brand-dark">What if you knew which path you were on?</strong>
              </p>
              <p className="text-xl text-brand-muted leading-relaxed">
                That's the power of What-If. We show you the patterns. You choose the future.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end p-12 rounded-3xl text-center shadow-2xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-purple-100 leading-relaxed">
                  To help humans understand themselves deeply, break harmful cycles, and build lives they're proud of—one choice at a time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center">
              <a
                href="/#cta"
                className="inline-block bg-purple-500 text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-purple-600 transition-all transform hover:scale-105 shadow-xl"
              >
                Start Your Journey
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
