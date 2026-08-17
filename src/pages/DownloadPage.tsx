import React from 'react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Lock, 
  HardDrive, 
  Layers, 
  ArrowDown
} from 'lucide-react';
import { DownloadButton } from '../components/ui/DownloadButton';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { siteConfig } from '../config/siteConfig';

export const DownloadPage: React.FC = () => {
  const installSteps = [
    {
      step: '1',
      title: 'Download the APK',
      desc: 'Tap the Download APK button on this page to download the latest authentic StudySwap AI package directly onto your Android device.',
    },
    {
      step: '2',
      title: 'Open the Downloaded APK',
      desc: 'Once the download finishes, pull down your notification shade or open your device Files/Downloads folder and tap StudySwapAI.apk.',
    },
    {
      step: '3',
      title: 'Allow Installation From This Source',
      desc: 'If Android displays a security dialog asking to allow installations from your browser or file manager, tap "Settings" and toggle "Allow from this source".',
    },
    {
      step: '4',
      title: 'Install StudySwap AI',
      desc: 'Return to the installation prompt and tap "Install". Android will complete the package verification and install the app.',
    },
    {
      step: '5',
      title: 'Open the Application and Sign In',
      desc: 'Launch StudySwap AI from your home screen or app drawer. Sign in with your email to start exploring notes and AI tools.',
    },
  ];

  const downloadFaqs = [
    {
      question: "Why isn't StudySwap AI on Google Play?",
      answer: "StudySwap AI is currently distributed directly while the product continues through its release and distribution process. Google Play availability may be added in the future. You can safely download and update the official APK directly from this website.",
      category: 'download' as const,
    },
    {
      question: "Is it safe to install the APK directly?",
      answer: "Yes, provided you download only from the official StudySwap AI website. Our APK is built directly from our production repository with encrypted Firebase authentication and verified backend integration.",
      category: 'download' as const,
    },
    {
      question: "What Android version do I need?",
      answer: `StudySwap AI requires ${siteConfig.minimumAndroidVersion}. It is optimized for both modern Android smartphones and tablets running standard Android versions.`,
      category: 'download' as const,
    },
    {
      question: "How do I update the app in the future?",
      answer: "When a new update is released, visit this download page and download the updated APK. Installing it over your existing app will preserve all your saved notes and login history.",
      category: 'download' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Download Card */}
        <div className="bg-slate-900 border border-blue-600/30 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-950/40 text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Distribution Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-xs font-semibold text-blue-300 mb-6">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Current distribution: Direct Android APK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Download StudySwap AI for Android
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Get the complete StudySwap AI experience on your Android device. Browse notes, access offline files, and study with Gemini AI.
          </p>

          {/* Large Primary Download CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <DownloadButton variant="primary" className="text-base px-8 py-4" />
            <a
              href="#installation-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <span>How to Install</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-3xl mx-auto text-left text-xs">
            <div>
              <span className="text-slate-500 block">Version</span>
              <span className="font-semibold text-slate-200">{siteConfig.apkVersion}</span>
            </div>
            <div>
              <span className="text-slate-500 block">File Size</span>
              <span className="font-semibold text-slate-200">{siteConfig.apkFileSize}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Required OS</span>
              <span className="font-semibold text-slate-200">Android 8.0+</span>
            </div>
            <div>
              <span className="text-slate-500 block">Package ID</span>
              <code className="font-mono text-blue-400 text-[11px] break-all">{siteConfig.packageId}</code>
            </div>
          </div>

          {/* Security & Official Source Notice */}
          <div className="mt-8 p-3.5 bg-blue-950/40 border border-blue-900/60 rounded-xl text-xs text-slate-300 flex items-center justify-center gap-2 max-w-xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Security Notice:</strong> Only download StudySwap AI from the official StudySwap AI website.
            </span>
          </div>
        </div>

        {/* Step-by-Step Installation Instructions */}
        <div id="installation-guide" className="mb-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Installation Instructions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Follow these simple steps to install the APK directly on any compatible Android smartphone or tablet.
            </p>
          </div>

          <div className="space-y-4">
            {installSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-blue-600/20">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Permission Transparency Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 mb-16 space-y-4">
          <div className="flex items-center gap-2.5 text-blue-400 font-bold text-base">
            <Lock className="w-5 h-5" />
            <span>Why does Android ask for "Unknown Sources" or "Install Unknown Apps" permission?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Android labels any app downloaded outside of the Google Play Store as an "unknown source." Because StudySwap AI is distributed directly as an APK from our official web portal, you simply need to grant your browser or file manager permission once to proceed with installation.
          </p>
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
            <strong>Verification Checklist:</strong> Verify that the package identifier during install displays <code className="text-blue-300">{siteConfig.packageId}</code>.
          </div>
        </div>

        {/* Download FAQ */}
        <FAQAccordion items={downloadFaqs} title="Download & Distribution FAQ" />
      </div>
    </div>
  );
};
