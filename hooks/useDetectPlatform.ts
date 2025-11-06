import { useEffect, useState } from 'react';

type Platform = 'android' | 'ios' | 'desktop' | 'unknown';

export const useDetectPlatform = (): Platform => {
  const [platform, setPlatform] = useState<Platform>('unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Detect Android
    if (/android/i.test(userAgent)) {
      setPlatform('android');
      return;
    }

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setPlatform('ios');
      return;
    }

    // Desktop/Other
    setPlatform('desktop');
  }, []);

  return platform;
};
