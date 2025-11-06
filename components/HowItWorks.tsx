import React from 'react';
import { PencilIcon } from './icons/PencilIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { AnimatedSection } from './AnimatedSection';

const steps = [
  {
    icon: PencilIcon,
    title: '1. Log Your Activity',
    description: 'Simply tell the app what you\'re doing in plain language. "Just finished my morning run" is all it takes.',
  },
  {
    icon: LightBulbIcon,
    title: '2. Get a Prediction',
    description: 'Our AI analyzes your current state and predicts your most likely next activity based on your personal history.',
  },
  {
    icon: CheckCircleIcon,
    title: '3. Confirm & Improve',
    description: 'Confirm the prediction or correct it. Every interaction makes the app smarter and more attuned to your life.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Simple Steps to Self-Discovery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-muted">
              Understanding your day is easier than you think.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={`delay-${index * 200}`}>
              <div className="text-center p-8 bg-brand-background rounded-2xl border border-slate-800 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-surface rounded-full mb-6 border-2 border-brand-primary/50">
                  <step.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-brand-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};