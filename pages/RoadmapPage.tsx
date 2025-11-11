import React, { useEffect } from 'react';
import { FutureRoadmap } from '../components/FutureRoadmap';

export const RoadmapPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Roadmap | What-If - Predictive Activity App';
  }, []);

  return (
    <div className="pt-24">
      <FutureRoadmap />
    </div>
  );
};
