import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { AndroidIcon } from './icons/AndroidIcon';
import { AppleIcon } from './icons/AppleIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { useDetectPlatform } from '../hooks/useDetectPlatform';
import { DOWNLOAD_URLS } from '../config';

export const CTA: React.FC = () => {
  const userPlatform = useDetectPlatform();

  const handleDownload = (platform: 'android' | 'ios') => {
    const url = DOWNLOAD_URLS[platform];
    window.open(url, '_blank');
  };

  const getButtonClasses = (platform: 'android' | 'ios') => {
    const baseClasses = "inline-flex items-center justify-center w-full sm:w-auto font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg";
    const isRecommended = userPlatform === platform;
    
    if (isRecommended) {
      return `${baseClasses} bg-white text-brand-dark shadow-white/30 hover:shadow-white/50`;
    }
    return `${baseClasses} bg-purple-600 text-white border-2 border-purple-400 hover:bg-purple-700 shadow-purple-900/50`;
  };

  return (
    <section id="cta" className="py-20 sm:py-32 bg-purple-500">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Start Predicting Your Day
            </h2>
            <p className="mt-4 text-xl text-purple-100 mb-12">
              Download What-If now and discover the patterns in your daily life. Available for Android and iOS.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="relative w-full sm:w-auto">
                {userPlatform === 'android' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                    Recommended for You
                  </span>
                )}
                <button
                  onClick={() => handleDownload('android')}
                  className={getButtonClasses('android')}
                >
                  <AndroidIcon className="w-7 h-7 mr-3" />
                  <span className="flex flex-col items-start">
                    <span className="text-sm font-normal opacity-90">Download for</span>
                    <span className="font-bold">Android</span>
                  </span>
                  <DownloadIcon className="w-6 h-6 ml-3" />
                </button>
              </div>
              
              <div className="relative w-full sm:w-auto">
                {userPlatform === 'ios' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                    Recommended for You
                  </span>
                )}
                <button
                  onClick={() => handleDownload('ios')}
                  className={getButtonClasses('ios')}
                >
                  <AppleIcon className="w-7 h-7 mr-3" />
                  <span className="flex flex-col items-start">
                    <span className="text-sm font-normal opacity-90">Download for</span>
                    <span className="font-bold">iOS</span>
                  </span>
                  <DownloadIcon className="w-6 h-6 ml-3" />
                </button>
              </div>
            </div>

            {/* Info Text */}
            <div className="mt-10">
              <p className="text-purple-100 text-base">
                Join thousands of users already using What-If to understand their daily patterns
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};