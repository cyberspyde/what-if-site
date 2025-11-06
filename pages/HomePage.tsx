import React from 'react';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { FutureRoadmap } from '../components/FutureRoadmap';
import { CTA } from '../components/CTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <FutureRoadmap />
      <CTA />
    </>
  );
};
