import React, { useEffect } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | What-If';
  }, []);

  return (
    <div className="pt-24 pb-20">
      <section className="py-12">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-6">
                Privacy Policy
              </h1>
              <p className="text-brand-muted mb-8">
                <strong>Effective Date:</strong> November 11, 2025
              </p>

              <div className="prose prose-lg max-w-none space-y-8 text-brand-muted">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
                  <p>
                    Welcome to What-If ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">2.1 Information You Provide</h3>
                  <p>
                    When you use What-If, you may provide us with activity logs, predictions, and feedback. This data is processed locally on your device by default.
                  </p>

                  <h3 className="text-xl font-semibold text-brand-dark mb-3 mt-4">2.2 Optional Data Sharing</h3>
                  <p>
                    If you choose to enable data sharing in your app settings, we may collect anonymized activity patterns to improve our prediction models. This data is:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Fully anonymized and cannot be linked to your identity</li>
                    <li>Used solely to improve prediction accuracy</li>
                    <li>Never shared with third parties</li>
                    <li>Can be disabled at any time in your app settings</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-brand-dark mb-3 mt-4">2.3 Automatically Collected Information</h3>
                  <p>
                    We may automatically collect certain technical information, including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Device type and operating system version</li>
                    <li>App version and crash reports (to improve stability)</li>
                    <li>Anonymous usage statistics (if you opt-in)</li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Provide and improve our prediction algorithms</li>
                    <li>Personalize your experience within the app</li>
                    <li>Analyze app performance and fix bugs</li>
                    <li>Develop new features based on usage patterns</li>
                    <li>Communicate with you about updates (if you opt-in)</li>
                  </ul>
                </section>

                {/* Data Storage and Security */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Data Storage and Security</h2>
                  <p>
                    All your activity data is stored locally on your device and encrypted. We use industry-standard security measures to protect any data that is transmitted to our servers (only if you enable data sharing).
                  </p>
                  <p className="mt-4">
                    Your data is never sold, rented, or shared with third parties for marketing purposes.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your data</li>
                    <li><strong>Delete:</strong> Clear all your activity history in-app</li>
                    <li><strong>Opt-Out:</strong> Disable data sharing at any time</li>
                    <li><strong>Portability:</strong> Export your data in a readable format</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at <a href="mailto:privacy@what-if.uz" className="text-brand-primary hover:underline">privacy@what-if.uz</a>
                  </p>
                </section>

                {/* Third-Party Services */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Third-Party Services</h2>
                  <p>
                    What-If may use third-party services for analytics and crash reporting (e.g., Google Analytics, Firebase Crashlytics). These services have their own privacy policies governing the use of your information.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Children's Privacy</h2>
                  <p>
                    Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it immediately.
                  </p>
                </section>

                {/* International Users */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">8. International Users</h2>
                  <p>
                    If you are accessing What-If from outside Uzbekistan, please note that your information may be transferred to, stored, and processed in Uzbekistan or other countries where our servers are located.
                  </p>
                </section>

                {/* Changes to This Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">9. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
                  </p>
                </section>

                {/* Contact Us */}
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">10. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>Email:</strong> <a href="mailto:privacy@what-if.uz" className="text-brand-primary hover:underline">privacy@what-if.uz</a></li>
                    <li><strong>Telegram:</strong> <a href="https://t.me/whatif_uz" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">@whatif_uz</a></li>
                    <li><strong>Discord:</strong> <a href="https://discord.gg/r3GCqFZuZy" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">What-If Community</a></li>
                  </ul>
                </section>

                {/* GDPR Compliance */}
                <section className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">GDPR Compliance</h2>
                  <p>
                    For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). You have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.
                  </p>
                </section>

                {/* CCPA Compliance */}
                <section className="bg-purple-50 p-6 rounded-lg border border-purple-200 mt-4">
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">CCPA Compliance</h2>
                  <p>
                    For California residents, you have the right to request disclosure of the categories and specific pieces of personal information we have collected about you. We do not sell personal information.
                  </p>
                </section>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
