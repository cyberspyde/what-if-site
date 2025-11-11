import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | What-If';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold text-brand-primary animate-pulse">404</h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-brand-muted">
              Looks like this page took a different path. Let's get you back on track.
            </p>
          </div>

          {/* Suggestions */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Where would you like to go?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                Go Home
              </Link>
              <Link
                to="/why-what-if"
                className="inline-block bg-white text-brand-dark border-2 border-purple-300 font-bold py-3 px-6 rounded-full hover:bg-purple-50 transition-all transform hover:scale-105"
              >
                Learn About What-If
              </Link>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="bg-purple-500 rounded-2xl p-6 border-2 border-purple-400">
            <p className="text-white text-sm">
              <span className="font-bold">💡 Fun Fact:</span> What-If could have predicted you'd end up here... if we knew you were coming! 😄
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <p className="text-brand-muted mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/faq" className="text-brand-primary hover:underline">FAQ</Link>
              <span className="text-brand-muted">•</span>
              <Link to="/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
              <span className="text-brand-muted">•</span>
              <Link to="/#cta" className="text-brand-primary hover:underline">Download App</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
