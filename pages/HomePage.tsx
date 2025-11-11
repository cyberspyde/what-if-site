import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { BeforeAfter } from '../components/BeforeAfter';
import { NotificationExamples } from '../components/NotificationExamples';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'What-If | Know Yourself. Change Your Future.';
  }, []);

  return (
    <>
      <Hero />
      <BeforeAfter />
      <NotificationExamples />
      <HowItWorks />
      <Features />
      <CTA />
    </>
  );
};
