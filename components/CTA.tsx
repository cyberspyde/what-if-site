import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { AndroidIcon } from './icons/AndroidIcon';
import { AppleIcon } from './icons/AppleIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { useDetectPlatform } from '../hooks/useDetectPlatform';

export const CTA: React.FC = () => {
  const userPlatform = useDetectPlatform();

  const handleDownload = (platform: 'android' | 'ios') => {
    const fileName = platform === 'android' ? 'what-if-android.apk' : 'what-if-ios.ipa';
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getButtonClasses = (platform: 'android' | 'ios') => {
    const baseClasses = "inline-flex items-center justify-center w-full sm:w-auto font-bold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg";
    const isRecommended = userPlatform === platform;
    
    if (isRecommended) {
      return `${baseClasses} bg-white text-brand-background ring-4 ring-white/30`;
    }
    return `${baseClasses} bg-brand-background text-white`;
  };

  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-brand-secondary to-brand-primary p-8 sm:p-12 rounded-2xl text-center shadow-2xl shadow-brand-secondary/20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-background">Ready to Understand Your Day?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-800">
              Be the first to experience the future of personal analytics. Join our beta and start your journey of self-discovery today.
            </p>
            
            {/* Download Buttons */}
            <div className="mt-8 mb-8">
              <p className="text-brand-background font-semibold mb-4 text-lg">Download the App</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <div className="relative w-full sm:w-auto">
                  {userPlatform === 'android' && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-brand-background text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      Recommended
                    </span>
                  )}
                  <button
                    onClick={() => handleDownload('android')}
                    className={getButtonClasses('android')}
                  >
                    <AndroidIcon className="w-6 h-6 mr-2" />
                    Download for Android
                    <DownloadIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div className="relative w-full sm:w-auto">
                  {userPlatform === 'ios' && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-brand-background text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      Recommended
                    </span>
                  )}
                  <button
                    onClick={() => handleDownload('ios')}
                    className={getButtonClasses('ios')}
                  >
                    <AppleIcon className="w-6 h-6 mr-2" />
                    Download for iOS
                    <DownloadIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="mt-8 pt-8 border-t border-brand-background/20">
              <p className="text-brand-background font-semibold mb-4">Or join our beta program</p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-5 py-3 rounded-full text-brand-background placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-background/30"
                  required
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center shrink-0 bg-brand-background text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
                >
                  Join Beta
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};