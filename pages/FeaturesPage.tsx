import React from 'react';
import { SEO } from '../components/SEO';
import { Features } from '../components/Features';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Features | What-If - Smart Habit Tracking & AI Predictions"
        description="Explore What-If's powerful features: AI-powered predictions, private on-device tracking, smart notifications, and insightful analytics. Build better habits with 90% accuracy."
        keywords="What-If features, AI predictions, habit tracking features, activity analytics, smart notifications, on-device AI, offline tracking"
        canonicalUrl="https://what-if.uz/features"
      />
      <Features />
    </div>
  );
};
