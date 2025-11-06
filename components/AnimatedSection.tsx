import React, { useRef, ReactNode } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 'delay-0' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${className} ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};