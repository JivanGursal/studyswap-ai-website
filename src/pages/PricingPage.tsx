import React from 'react';
import { 
  CreditCard, 
  Gift, 
  Sparkles, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  Smartphone, 
  FileText,
  Info
} from 'lucide-react';
import { Link } from '../router/Link';
import { DownloadButton } from '../components/ui/DownloadButton';
import { siteConfig } from '../config/siteConfig';

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Transparent Pricing & Resources</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Clear, Transparent Student Pricing
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            StudySwap AI provides both open educational resources and curated premium notes with zero hidden charges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: FREE */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Open Tier</span>
                <span className="p-2 rounded-xl bg-slate-800 text-slate-300">
                  <Gift className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-1">Free Resources</h3>
              <p className="text-xs text-slate-400 mb-6">Foundational study guides and open materials</p>

              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                <span className="text-4xl font-black text-white">₹0</span>
                <span className="text-xs text-slate-400">/ forever free</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Access to selected free community notes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Standard PDF download & offline viewing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Basic in-app topic exploration</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/download"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Download Android App
              </Link>
            </div>
          </div>

          {/* Card 2: PAID NOTES */}
          <div className="p-8 rounded-3xl bg-slate-900 border-2 border-blue-500/80 shadow-xl shadow-blue-950/40 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Digital Marketplace
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Curated Notes</span>
                <span className="p-2 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/60">
                  <FileText className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-1">Paid Digital Notes</h3>
              <p className="text-xs text-slate-300 mb-6">Subject notes, exam guides, and revision sheets</p>

              <div className="mb-6 pb-6 border-b border-slate-800">
                <div className="text-sm font-semibold text-blue-300 bg-blue-950/70 p-3 rounded-xl border border-blue-800/60">
                  Prices displayed inside the app before checkout
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Individual item pricing shown clearly on each note preview.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>High-yield handwritten & typed study materials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Instant delivery directly to Buyer Dashboard</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Lifetime re-download privileges on your account</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Encrypted Razorpay checkout inside Android app</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <DownloadButton className="w-full" />
            </div>
          </div>

          {/* Card 3: AI ASSISTANT */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Gemini AI</span>
                <span className="p-2 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-1">AI Study Assistant</h3>
              <p className="text-xs text-slate-400 mb-6">Interactive study companion & smart modes</p>

              <div className="mb-6 pb-6 border-b border-slate-800">
                <div className="text-sm font-semibold text-slate-200 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  Available according to the current app experience
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Integrated with Google Gemini AI models on the backend.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>7 dedicated study modes (Explain, Summarize, etc.)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Custom practice quizzes & flashcards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Revision schedules & study plan generator</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/features"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Explore AI Modes
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing Disclosure Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12 space-y-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5 text-base font-bold text-white">
            <Info className="w-5 h-5 text-blue-400" />
            <span>Pricing Policy Disclosures & Terms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <h4 className="font-semibold text-white">1. Final Checkout Display</h4>
              <p className="text-slate-400 text-xs">
                Final prices are displayed before checkout. Applicable taxes, service fees, or charges, if any, will be shown transparently before payment authorization.
              </p>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <h4 className="font-semibold text-white">2. Currency & Payment Processing</h4>
              <p className="text-slate-400 text-xs">
                All prices are denominated in Indian Rupees (INR) unless otherwise specified. Transactions are processed through Razorpay directly within the Android mobile application.
              </p>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <h4 className="font-semibold text-white">3. Zero Hidden Costs</h4>
              <p className="text-slate-400 text-xs">
                There are no hidden subscription charges or recurring auto-debits without explicit opt-in. Individual note purchases are one-time transactions granting persistent digital access.
              </p>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <h4 className="font-semibold text-white">4. Refund Reference</h4>
              <p className="text-slate-400 text-xs">
                For complete cancellation terms, failed payment resolutions, or defective file reporting, please review our official{' '}
                <Link to="/refund-and-cancellation" className="text-blue-400 underline">Refund & Cancellation Policy</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Link */}
        <div className="text-center text-xs text-slate-400">
          <span>Need more details on pricing and transactions? Read our full </span>
          <Link to="/pricing-policy" className="text-blue-400 hover:underline font-semibold">
            Official Pricing Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
