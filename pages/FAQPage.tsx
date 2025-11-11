import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. All your activity data stays on your device and is encrypted. We use on-device machine learning—your patterns never leave your phone. We don't sell or share your data with anyone."
  },
  {
    question: "How accurate are the predictions?",
    answer: "After learning your patterns for 1-2 weeks, What-If typically achieves 80-90% accuracy. The more you use it, the smarter it gets. Your unique routines make you predictable—in a good way!"
  },
  {
    question: "Does it drain my battery?",
    answer: "Nope! What-If uses efficient on-device AI that runs in the background without impacting battery life. Most users report less than 2% additional battery usage per day."
  },
  {
    question: "What data do you collect?",
    answer: "By default, all your activity data stays private on your device. However, if you choose to activate data sharing in your settings, we may collect anonymized activity patterns to improve our prediction model with better pre-trained labels and templates. This shared data is never associated with your identity and is never shared with other users or made public."
  },
  {
    question: "How does the AI learn my patterns?",
    answer: "What-If uses a text classification model combined with Markov Chains to predict your next activity based on your historical patterns. The model also incorporates context awareness—like the time of day, day of the week, and activity sequences—to make more accurate predictions that adapt to your lifestyle."
  },
  {
    question: "Can I delete my data?",
    answer: "Yes! You can clear all your activity history anytime in the app settings. Since everything is stored locally, deletion is instant and permanent."
  },
  {
    question: "Do I need to be online?",
    answer: "No! What-If works completely offline. All predictions happen on your device. You only need internet for the initial download."
  },
  {
    question: "What if I have an irregular schedule?",
    answer: "That's okay! What-If adapts to your patterns, whether you're a 9-to-5 worker, a shift worker, or someone with a completely spontaneous lifestyle. It learns YOUR normal, not a generic routine."
  },
  {
    question: "Can I turn off notifications?",
    answer: "Absolutely. You control when and how What-If nudges you. Want just predictions? Done. Want gentle reminders? Set them up. Want silence? We respect that too."
  },
  {
    question: "Is there a cost?",
    answer: "What-If is currently free to download and use. We believe everyone deserves self-awareness. We may introduce optional premium features in the future, but core functionality will always be free."
  }
];

const FAQAccordion: React.FC<{ faq: FAQItem; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={`delay-${index * 100}`}>
      <div className="bg-purple-500 rounded-xl border border-purple-400 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-600 transition-colors"
        >
          <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
          <span className="text-white text-2xl flex-shrink-0">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className="px-8 pb-6">
            <p className="text-purple-50 leading-relaxed">{faq.answer}</p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = 'FAQ | What-If';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-brand-muted">
                Everything you need to know about What-If. Have a question we didn't cover? <a href="#" className="text-brand-primary hover:underline">Contact us</a>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end p-12 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-extrabold text-white mb-4">Still have questions?</h2>
              <p className="text-purple-100 mb-8">
                We're here to help! Reach out to our team anytime.
              </p>
              <a
                href="/#cta"
                className="inline-block bg-white text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-all transform hover:scale-105"
              >
                Download & Try It Free
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
