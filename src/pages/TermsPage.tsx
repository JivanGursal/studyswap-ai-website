import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  const toc = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'accounts', title: '2. User Accounts & Security' },
    { id: 'marketplace', title: '3. Digital Notes Marketplace' },
    { id: 'ai-assistant', title: '4. AI Study Assistant & Limitations' },
    { id: 'payments', title: '5. Payments & In-App Transactions' },
    { id: 'ip-rights', title: '6. Intellectual Property' },
    { id: 'prohibited', title: '7. Prohibited Conduct' },
    { id: 'suspension', title: '8. Account Termination & Suspension' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'governing-law', title: '10. Governing Law & Jurisdiction' },
    { id: 'modifications', title: '11. Changes to Terms' },
  ];

  return (
    <PolicyLayout
      title="Terms and Conditions"
      subtitle="Standard terms of service governing access to the StudySwap AI Android Application and website."
      lastUpdated="August 15, 2026"
      category="Terms of Service"
      toc={toc}
    >
      <section id="acceptance" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, accessing, or using the <strong>StudySwap AI</strong> Android Application or this official website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not use or install StudySwap AI.
        </p>
      </section>

      <section id="accounts" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">2. User Accounts & Security</h2>
        <p>
          To access certain features, including purchasing paid notes, downloading resources, and tracking study history, you must create an account. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.
        </p>
      </section>

      <section id="marketplace" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">3. Digital Notes Marketplace & License</h2>
        <p>
          StudySwap AI grants you a personal, non-exclusive, non-transferable, revocable license to access and view digital study notes for personal educational purposes.
        </p>
        <p>
          You may not resell, redistribute, sub-license, publicly broadcast, or commercially exploit any study notes or digital content obtained through StudySwap AI without prior written consent.
        </p>
      </section>

      <section id="ai-assistant" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">4. AI Study Assistant & Academic Limitations</h2>
        <p>
          StudySwap AI includes an AI study assistant powered by Google Gemini AI models. You acknowledge and agree that:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>AI-generated answers, explanations, quizzes, and summaries are provided solely for study assistance and conceptual guidance.</li>
          <li>AI responses may occasionally contain errors or factual inaccuracies. You are solely responsible for verifying critical academic, mathematical, or scientific material against authorized textbooks and institutional syllabi.</li>
          <li>The AI assistant does not provide certified legal, medical, or financial counsel.</li>
        </ul>
      </section>

      <section id="payments" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">5. Payments & In-App Transactions</h2>
        <p>
          All purchases of paid digital study notes are initiated and completed directly inside the StudySwap AI Android application. Payments are processed securely via <strong>Razorpay</strong>.
        </p>
        <p>
          Item prices are clearly displayed in the app before checkout. You agree to pay all charges incurred under your account at the prices in effect at the time of purchase.
        </p>
      </section>

      <section id="ip-rights" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">6. Intellectual Property Rights</h2>
        <p>
          All software code, user interface designs, graphics, branding, and proprietary assets of StudySwap AI are the property of {siteConfig.brandName} and its licensors, protected under applicable copyright and intellectual property laws.
        </p>
      </section>

      <section id="prohibited" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">7. Prohibited Activities</h2>
        <p>When using StudySwap AI, you agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>Reverse-engineer, decompile, or extract source code from the Android APK or backend APIs.</li>
          <li>Use automated scrapers or bots to harvest notes, digital resources, or user listings.</li>
          <li>Bypass security controls, authentication tokens, or digital delivery mechanisms.</li>
          <li>Submit unlawful, defamatory, infringing, or harmful content into AI prompts or platform forms.</li>
        </ul>
      </section>

      <section id="suspension" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">8. Account Termination & Suspension</h2>
        <p>
          We reserve the right to suspend or terminate your account access if you breach any provision of these Terms or engage in fraudulent or abusive activities.
        </p>
      </section>

      <section id="liability" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, StudySwap AI and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the application, digital notes, or AI study assistant.
        </p>
      </section>

      <section id="governing-law" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">10. Governing Law & Jurisdiction</h2>
        <p>
          These Terms and any dispute arising from the use of StudySwap AI shall be governed by and construed in accordance with the laws applicable in <strong>India</strong>, without regard to its conflict of law principles.
        </p>
      </section>

      <section id="modifications" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">11. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>
    </PolicyLayout>
  );
};
