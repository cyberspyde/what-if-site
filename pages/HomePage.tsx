import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { BeforeAfter } from '../components/BeforeAfter';
import { NotificationExamples } from '../components/NotificationExamples';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="What-If | Know Yourself. Change Your Future."
        description="Discover hidden patterns in your life with AI-powered predictions. What-If tracks your activities and predicts your next move with 90% accuracy. Free for Android & iOS."
        keywords="habit tracking, AI predictions, self-awareness, behavior patterns, activity prediction, personal growth, life optimization, habit formation"
        canonicalUrl="https://what-if.uz/"
      />
      <Hero />
      <BeforeAfter />
      <NotificationExamples />
      <HowItWorks />
      <Features />
      <CTA />
    </>
  );
};
