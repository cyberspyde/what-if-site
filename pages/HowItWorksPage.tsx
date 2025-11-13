import React from 'react';
import { SEO } from '../components/SEO';
import { HowItWorks } from '../components/HowItWorks';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-24">
      <SEO
        title="How It Works | What-If - AI-Powered Habit Prediction"
        description="Discover how What-If uses on-device AI to learn your patterns and predict your next move. Track activities, get intelligent insights, and build better habits effortlessly."
        keywords="how What-If works, AI prediction, habit tracking process, activity prediction, machine learning app, behavioral patterns"
        canonicalUrl="https://what-if.uz/how-it-works"
      />
      <HowItWorks />
    </div>
  );
};
