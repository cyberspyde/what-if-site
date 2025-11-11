import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { WhyWhatIfPage } from './pages/WhyWhatIfPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
            <div className="min-h-screen bg-brand-background text-brand-dark overflow-x-hidden">
        {/* Fixed background gradients */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/25 rounded-full blur-3xl"></div>
        </div>

        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/why-what-if" element={<WhyWhatIfPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;