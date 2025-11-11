import React, { useEffect } from 'react';
import { HowItWorks } from '../components/HowItWorks';

export const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    document.title = 'How It Works | What-If - Predictive Activity App';
  }, []);

  return (
    <div className="pt-24">
      <HowItWorks />
    </div>
  );
};
