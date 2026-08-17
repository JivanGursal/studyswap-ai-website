import React from 'react';
import { BookOpen, Sparkles, Shield, Smartphone, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '../router/Link';
import { DownloadButton } from '../components/ui/DownloadButton';
import { siteConfig } from '../config/siteConfig';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About StudySwap AI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Focused on Smarter Student Learning
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            StudySwap AI is an education technology platform focused on helping students discover study resources and use AI-assisted tools for learning.
          </p>
        </div>

        {/* Mission & Purpose */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Our Educational Mission</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Academic preparation is often fragmented across disorganized lecture PDFs, scattered group chats, and one-size-fits-all textbooks. StudySwap AI was designed to unify digital study notes with adaptive AI study modes inside a single, high-performance Android mobile application.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether a student needs curated exam summaries, step-by-step topic explanations, or instant active-recall flashcards, our platform provides a structured environment that enhances daily revision and exam readiness.
          </p>
        </div>

        {/* What We Provide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Curated Study Notes Marketplace</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We provide access to verified student study materials, course handouts, and free foundational notes with instant digital delivery and offline reading support.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/60 text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Gemini AI Study Assistant</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              An intelligent learning companion offering 7 dedicated modes: Explain, Summarize, Quiz, MCQ, Flashcards, Revision, and Study Planning.
            </p>
          </div>
        </div>

        {/* Technology & Security Integrity */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-blue-400" />
            <span>Architecture & Security Standards</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            StudySwap AI prioritizes user data protection and secure transactions across every component:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Authentication & Account Management:</strong> Managed securely using industry-standard Firebase Authentication.
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Payments & Razorpay Integration:</strong> Paid study note purchases are processed directly inside the Android application via Razorpay with encrypted payment verification.
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Backend Proxy & Secret Protection:</strong> AI queries and transaction records are routed through our secure Railway backend service. API secrets and keys are never stored on client devices.
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-blue-950/20 border border-slate-800 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Experience StudySwap AI on Android</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Download our direct APK and start exploring notes and AI study modes today.
          </p>
          <div className="flex justify-center pt-2">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
};
