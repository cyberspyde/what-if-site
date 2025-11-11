import React, { useEffect } from 'react';
import { Features } from '../components/Features';

export const FeaturesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Features | What-If - Predictive Activity App';
  }, []);

  return (
    <div className="pt-24">
      <Features />
    </div>
  );
};
