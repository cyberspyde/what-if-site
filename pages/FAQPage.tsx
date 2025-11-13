import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import { AnimatedSection } from '../components/AnimatedSection';
import { LockIcon } from '../components/icons/LockIcon';
import { TargetIcon } from '../components/icons/TargetIcon';
import { BatteryIcon } from '../components/icons/BatteryIcon';
import { DatabaseIcon } from '../components/icons/DatabaseIcon';
import { BrainIcon } from '../components/icons/BrainIcon';
import { TrashIcon } from '../components/icons/TrashIcon';
import { WifiIcon } from '../components/icons/WifiIcon';
import { CalendarIcon } from '../components/icons/CalendarIcon';
import { BellIcon } from '../components/icons/BellIcon';
import { DollarIcon } from '../components/icons/DollarIcon';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  style?: 'purple' | 'white';
  width?: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. All your activity data stays on your device and is encrypted. We use on-device machine learning—your patterns never leave your phone. We don't sell or share your data with anyone.",
    icon: LockIcon,
    style: 'white',
    width: '95%'
  },
  {
    question: "How accurate are the predictions?",
    answer: "After learning your patterns for 1-2 weeks, What-If typically achieves 80-90% accuracy. The more you use it, the smarter it gets. Your unique routines make you predictable—in a good way!",
    icon: TargetIcon,
    style: 'purple',
    width: '100%'
  },
  {
    question: "Does it drain my battery?",
    answer: "Nope! What-If uses efficient on-device AI that runs in the background without impacting battery life. Most users report less than 2% additional battery usage per day.",
    icon: BatteryIcon,
    style: 'white',
    width: '92%'
  },
  {
    question: "What data do you collect?",
    answer: "By default, all your activity data stays private on your device. However, if you choose to activate data sharing in your settings, we may collect anonymized activity patterns to improve our prediction model with better pre-trained labels and templates. This shared data is never associated with your identity and is never shared with other users or made public.",
    icon: DatabaseIcon,
    style: 'purple',
    width: '100%'
  },
  {
    question: "How does the AI learn my patterns?",
    answer: "What-If uses a text classification model combined with Markov Chains to predict your next activity based on your historical patterns. The model also incorporates context awareness—like the time of day, day of the week, and activity sequences—to make more accurate predictions that adapt to your lifestyle.",
    icon: BrainIcon,
    style: 'white',
    width: '95%'
  },
  {
    question: "Can I delete my data?",
    answer: "Yes! You can clear all your activity history anytime in the app settings. Since everything is stored locally, deletion is instant and permanent.",
    icon: TrashIcon,
    style: 'purple',
    width: '100%'
  },
  {
    question: "Do I need to be online?",
    answer: "No! What-If works completely offline. All predictions happen on your device. You only need internet for the initial download.",
    icon: WifiIcon,
    style: 'white',
    width: '92%'
  },
  {
    question: "What if I have an irregular schedule?",
    answer: "That's okay! What-If adapts to your patterns, whether you're a 9-to-5 worker, a shift worker, or someone with a completely spontaneous lifestyle. It learns YOUR normal, not a generic routine.",
    icon: CalendarIcon,
    style: 'purple',
    width: '100%'
  },
  {
    question: "Can I turn off notifications?",
    answer: "Absolutely. You control when and how What-If nudges you. Want just predictions? Done. Want gentle reminders? Set them up. Want silence? We respect that too.",
    icon: BellIcon,
    style: 'white',
    width: '95%'
  },
  {
    question: "Is there a cost?",
    answer: "What-If is currently free to download and use. We believe everyone deserves self-awareness. We may introduce optional premium features in the future, but core functionality will always be free.",
    icon: DollarIcon,
    style: 'purple',
    width: '100%'
  }
];

const FAQAccordion: React.FC<{ faq: FAQItem; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = faq.icon;
  const isPurple = faq.style === 'purple';

  return (
    <AnimatedSection delay={`delay-${index * 100}`}>
      <div 
        className="mx-auto transition-all duration-300"
        style={{ width: faq.width || '100%' }}
      >
        <div 
          className={`
            rounded-[20px] overflow-hidden transition-all duration-300
            ${isPurple 
              ? 'bg-purple-500 border border-purple-400' 
              : 'bg-white border-2 border-purple-400'
            }
            ${isOpen && !isPurple ? 'border-l-[6px] border-l-purple-700' : ''}
            hover:shadow-lg hover:-translate-y-1
          `}
          style={{
            boxShadow: '0 4px 16px rgba(124, 58, 237, 0.12)'
          }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full px-8 py-6 text-left flex items-center gap-4 transition-all duration-300
              ${isPurple 
                ? 'hover:bg-purple-600 text-white' 
                : 'hover:bg-purple-50 text-brand-dark'
              }
            `}
          >
            <Icon 
              className={`w-7 h-7 flex-shrink-0 transition-colors duration-300 ${
                isPurple ? 'text-purple-100' : 'text-purple-600'
              }`}
            />
            <span className="text-xl font-bold flex-1 pr-4">{faq.question}</span>
            <span 
              className={`
                text-2xl flex-shrink-0 transition-transform duration-300
                ${isOpen ? 'rotate-180' : 'rotate-0'}
                ${isPurple ? 'text-white' : 'text-purple-600'}
              `}
            >
              {isOpen ? '−' : '+'}
            </span>
          </button>
          <div 
            className={`
              transition-all duration-300 overflow-hidden
              ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div 
              className={`
                px-8 pb-6 pt-2
                ${isPurple ? 'bg-white' : 'bg-white'}
              `}
              style={{
                boxShadow: isPurple ? 'inset 0 4px 6px rgba(124, 58, 237, 0.08)' : 'none'
              }}
            >
              <p className="text-[#2D1B4E] leading-relaxed text-lg">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const FAQPage: React.FC = () => {
  // Prepare FAQ data for structured data (without icons and styling)
  const faqStructuredData = faqs.map(({ question, answer }) => ({
    question,
    answer
  }));

  return (
    <div className="pt-24">
      <SEO
        title="FAQ | What-If - Your Questions Answered"
        description="Find answers to common questions about What-If. Learn how our AI predicts your habits, protects your privacy, and helps you build better routines. 100% free app."
        keywords="What-If FAQ, AI habit tracker questions, privacy policy, data security, battery usage, offline AI app"
        canonicalUrl="https://what-if.uz/faq"
      />
      <StructuredData type="faq" data={faqStructuredData} />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-6">
                Everything you need to know about What-If
              </p>
              <p className="text-xl text-brand-muted">
                Have a question we didn't cover? <a href="#" className="text-brand-primary hover:underline font-semibold">Contact us</a>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={index % 2 === 0 ? 'mb-6' : 'mb-4'}
              >
                <FAQAccordion faq={faq} index={index} />
              </div>
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
