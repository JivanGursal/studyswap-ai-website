import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  const toc = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'data-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Information' },
    { id: 'payments-razorpay', title: '4. Payments & Razorpay Processing' },
    { id: 'ai-processing', title: '5. AI Study Assistant & Data Flow' },
    { id: 'data-security', title: '6. Data Protection & Security' },
    { id: 'retention', title: '7. Data Retention' },
    { id: 'user-rights', title: '8. Your Rights & Choices' },
    { id: 'updates', title: '9. Changes to This Privacy Policy' },
    { id: 'contact', title: '10. Contact Information' },
  ];

  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How StudySwap AI collects, protects, and handles your information when you use our Android application and website."
      lastUpdated="August 15, 2026"
      category="Privacy & Data Protection"
      toc={toc}
    >
      <section id="introduction" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">1. Introduction</h2>
        <p>
          At <strong>StudySwap AI</strong> ("we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains our data practices for users of the StudySwap AI Android Application and this official website.
        </p>
      </section>

      <section id="data-collected" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">2. Information We Collect</h2>
        <p>We collect only the minimum necessary information required to provide our educational services:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Account Information:</strong> When you register on the Android app, we collect your name and email address via Firebase Authentication.
          </li>
          <li>
            <strong>Purchase & Transaction History:</strong> When you purchase study notes, transaction records (Order ID, Payment ID, item name, and transaction timestamp) are maintained to ensure your lifetime re-download access in the Buyer Dashboard.
          </li>
          <li>
            <strong>AI Study Queries:</strong> Study topics, questions, and revision prompts entered into the AI study assistant are transmitted securely to generate academic explanations and summaries.
          </li>
          <li>
            <strong>Technical & Device Data:</strong> Minimal device diagnostics (Android OS version, app version) to ensure compatibility and troubleshoot technical issues.
          </li>
        </ul>
      </section>

      <section id="how-we-use" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">3. How We Use Your Information</h2>
        <p>We use your data solely for the following legitimate purposes:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>To authenticate your user session and maintain your personal study notes library.</li>
          <li>To unlock digital downloads and verify purchase entitlements.</li>
          <li>To process AI study queries and return formatted learning aids.</li>
          <li>To provide customer support and respond to inquiries via email or WhatsApp.</li>
          <li>To detect and prevent fraudulent transactions or security violations.</li>
        </ul>
      </section>

      <section id="payments-razorpay" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">4. Payments & Razorpay Processing</h2>
        <p>
          Purchases of premium study notes within the Android app are processed securely through <strong>Razorpay</strong>.
        </p>
        <p>
          StudySwap AI <strong>never stores or has access to your full credit card numbers, debit card numbers, UPI PINs, or net banking credentials</strong>. All payment processing occurs directly within Razorpay's PCI-DSS compliant checkout environment.
        </p>
      </section>

      <section id="ai-processing" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">5. AI Study Assistant & Data Flow</h2>
        <p>
          AI features inside StudySwap AI are powered by Google Gemini models via our backend proxy service.
        </p>
        <p>
          We do not sell your study queries or personal data to third-party data brokers or advertisers. API secrets remain strictly protected on our server.
        </p>
      </section>

      <section id="data-security" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">6. Data Protection & Security</h2>
        <p>
          We implement industry-standard administrative and technical security measures, including HTTPS encryption in transit, secure Firebase security rules, and access-controlled backend environments.
        </p>
      </section>

      <section id="retention" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">7. Data Retention</h2>
        <p>
          We retain account and purchase records for as long as your account remains active to guarantee your ongoing access to purchased digital study notes. You may request account deletion or data removal by contacting our support team.
        </p>
      </section>

      <section id="user-rights" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">8. Your Rights & Choices</h2>
        <p>
          You have the right to access, update, or request the deletion of your account information. You may also request details regarding your purchase history or report data discrepancies by emailing our support desk.
        </p>
      </section>

      <section id="updates" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect modifications in our features, distribution channels, or legal obligations. The revised version will be published on this website with an updated revision date.
        </p>
      </section>

      <section id="contact" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">10. Contact Information</h2>
        <p>
          For questions or privacy concerns regarding this policy, contact our support team at:
        </p>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
          <p><strong>Brand:</strong> {siteConfig.brandName}</p>
          <p><strong>Support Email:</strong> {siteConfig.supportEmail}</p>
          <p><strong>Location:</strong> {siteConfig.locationDescription}</p>
        </div>
      </section>
    </PolicyLayout>
  );
};
