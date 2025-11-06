import { useState, useEffect, RefObject } from 'react';

// FIX: Changed RefObject<HTMLElement> to RefObject<Element> to allow observing SVG elements.
export function useOnScreen(ref: RefObject<Element>, threshold: number = 0.1): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
}
