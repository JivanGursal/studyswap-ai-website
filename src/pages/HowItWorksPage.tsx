import React from 'react';
import { 
  Download, 
  UserCheck, 
  Search, 
  CreditCard, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Server, 
  Lock, 
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { Link } from '../router/Link';
import { DownloadButton } from '../components/ui/DownloadButton';

export const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Download StudySwap AI for Android',
      desc: 'Download the official direct APK file from our website onto your Android smartphone (compatible with Android 8.0 Oreo and above). Allow installation from this source when prompted by Android security settings.',
      icon: Smartphone,
      details: [
        'Direct APK download with no third-party bundle bloat',
        'Official cryptographic package ID: com.studyswap.ai',
        'Quick installation in under a minute',
      ],
    },
    {
      num: '02',
      title: 'Create or Sign In to Your Account',
      desc: 'Authenticate securely inside the app using your email address. Authentication is managed through Firebase Auth to safeguard your profile, purchase records, and AI session context.',
      icon: UserCheck,
      details: [
        'Encrypted token management',
        'Cross-session persistence for your notes',
        'Protected profile settings',
      ],
    },
    {
      num: '03',
      title: 'Explore Notes & Interactive Tools',
      desc: 'Browse through free study guides, categorized academic summaries, and curated premium study notes. Preview sample contents and syllabus outlines prior to checkout.',
      icon: Search,
      details: [
        'Free materials accessible at ₹0',
        'Transparent price tags displayed before checkout',
        'Curated subjects and revision sheets',
      ],
    },
    {
      num: '04',
      title: 'Purchase, Download & Learn with AI',
      desc: 'Complete paid note orders securely via Razorpay directly inside the Android application. Access instant digital downloads and interact with Gemini AI across 7 learning modes.',
      icon: CreditCard,
      details: [
        'Secured in-app payment transactions via Razorpay',
        'Immediate digital file unlocking into your dashboard',
        'Gemini-powered summaries, quizzes, and explanations',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow & Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How StudySwap AI Works
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A seamless bridge between digital notes distribution, encrypted transactions, and AI study companion tools.
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="space-y-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center font-mono font-bold text-xl shrink-0">
                    {step.num}
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hidden md:block">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>{step.title}</span>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment & Security Deep Dive Box */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-blue-900/40 mb-16 space-y-6">
          <div className="flex items-center gap-3 text-blue-400">
            <ShieldCheck className="w-7 h-7" />
            <div>
              <h3 className="text-lg font-bold text-white">Payment & Security Notice</h3>
              <p className="text-xs text-slate-400">Razorpay In-App Payment Architecture</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-blue-400" />
                <span>In-App Razorpay Checkout</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Payments are initiated and authorized strictly inside the Android application using Razorpay's native SDK. This website does not process credit cards or merchant payments directly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>Secure Backend Proxy</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                AI interactions and order verifications are managed through our secure Railway backend service. API secrets and private credentials are never bundled in client code.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                <span>Instant Digital Unlocking</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Upon verified payment callback from Razorpay, access tokens are cryptographically issued to unlock your notes inside the Buyer Dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <DownloadButton showDetails />
        </div>
      </div>
    </div>
  );
};
