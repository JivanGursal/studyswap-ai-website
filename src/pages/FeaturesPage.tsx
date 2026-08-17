import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Download, 
  CreditCard, 
  HelpCircle, 
  FileText, 
  CheckSquare, 
  Layers, 
  RotateCcw, 
  Calendar,
  Gift,
  Shield,
  Smartphone,
  Lock,
  ArrowRight
} from 'lucide-react';
import { Link } from '../router/Link';
import { FeatureCard } from '../components/ui/FeatureCard';
import { FeatureItem } from '../types';
import { DownloadButton } from '../components/ui/DownloadButton';

export const FeaturesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'marketplace' | 'ai' | 'dashboard' | 'security'>('all');

  const allFeatures: FeatureItem[] = [
    {
      id: 'marketplace',
      title: '1. Study Notes Marketplace',
      category: 'marketplace',
      iconName: 'marketplace',
      badge: 'Core Feature',
      description: 'A curated digital catalog where students can explore study notes, lecture summaries, and formula sheets across academic disciplines.',
      details: [
        'Organized by subject, topic, and academic level',
        'Direct in-app note preview before downloading',
        'Clean digital PDF reading experience',
      ],
    },
    {
      id: 'free-notes',
      title: '2. Free Study Notes',
      category: 'marketplace',
      iconName: 'free',
      badge: '₹0 Resources',
      description: 'Access a selection of foundational study materials and revision guides at zero cost to support open learning.',
      details: [
        'Instant download with no purchase required',
        'Saved to personal download history',
        'Accessible anytime offline on Android',
      ],
    },
    {
      id: 'digital-downloads',
      title: '3. Secure Digital Downloads',
      category: 'security',
      iconName: 'download',
      badge: 'Private & Encrypted',
      description: 'Purchased digital resources are delivered securely via private server channels directly to your Android device.',
      details: [
        'Encrypted file storage and distribution',
        'Protected against unauthenticated access',
        'Stored locally for uninterrupted offline reading',
      ],
    },
    {
      id: 'buyer-dashboard',
      title: '4. Buyer Dashboard & Order History',
      category: 'dashboard',
      iconName: 'dashboard',
      badge: 'Account Management',
      description: 'A dedicated hub inside the Android app to track all orders, access past transactions, and re-download purchased materials.',
      details: [
        'Complete chronological purchase records',
        'Instant re-download capability for owned files',
        'Transaction receipt tracking with Razorpay IDs',
      ],
    },
    {
      id: 'gemini-assistant',
      title: '5. Gemini AI Study Assistant',
      category: 'ai',
      iconName: 'ai',
      badge: 'Google Gemini Powered',
      description: 'An AI-powered academic learning companion integrated through our secure backend to answer study queries and clarify tough concepts.',
      details: [
        'Secure backend proxy architecture',
        'Context-aware study explanations',
        'Custom-tuned educational learning prompts',
      ],
    },
    {
      id: 'explain',
      title: '6. Explain Mode',
      category: 'ai',
      iconName: 'explain',
      badge: 'Concept Breakdown',
      description: 'Get deep, structured, step-by-step explanations of difficult academic concepts, mathematical theorems, or engineering principles.',
      details: [
        'Intuitive breakdown for beginners to advanced',
        'Analogy and practical example generation',
        'Step-by-step algorithm and derivation proofs',
      ],
    },
    {
      id: 'summarize',
      title: '7. Summarize Mode',
      category: 'ai',
      iconName: 'summarize',
      badge: 'Concise Notes',
      description: 'Convert lengthy textbook paragraphs, research papers, or syllabus units into clean, scannable bullet points.',
      details: [
        'High-yield key takeaway extraction',
        'Definition and formula highlights',
        'Quick pre-exam reference summaries',
      ],
    },
    {
      id: 'quiz',
      title: '8. Quiz & MCQ Practice',
      category: 'ai',
      iconName: 'quiz',
      badge: 'Active Testing',
      description: 'Generate customized practice questions and multiple-choice quizzes on any requested topic to evaluate exam preparedness.',
      details: [
        'Instant correct answer reveals with explanations',
        'Adjustable difficulty levels',
        'Targeted question sets for weak areas',
      ],
    },
    {
      id: 'flashcards',
      title: '9. Active Recall Flashcards',
      category: 'ai',
      iconName: 'flashcards',
      badge: 'Memory Retention',
      description: 'Create concise Q&A flashcards designed around active recall and spaced repetition principles for long-term memorization.',
      details: [
        'Term-and-definition pairing',
        'Key formula active recall sets',
        'Quick review cards for on-the-go study',
      ],
    },
    {
      id: 'revision',
      title: '10. Revision Assistance',
      category: 'ai',
      iconName: 'revision',
      badge: 'Exam Cramming',
      description: 'Generate high-impact revision checklists and last-minute recap guides focusing strictly on high-probability exam topics.',
      details: [
        'Rapid formula and theorem cheat-sheets',
        'Common pitfall and mistake warnings',
        'Comprehensive unit recap overviews',
      ],
    },
    {
      id: 'planner',
      title: '11. Study Planner',
      category: 'ai',
      iconName: 'planner',
      badge: 'Schedule Helper',
      description: 'Create structured study timelines, syllabus division schedules, and daily milestones leading up to your examination date.',
      details: [
        'Custom timeline distribution by topic weight',
        'Daily achievable study goals',
        'Balanced buffer days for mock testing',
      ],
    },
  ];

  const filteredFeatures = activeCategory === 'all'
    ? allFeatures
    : allFeatures.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Feature Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Powerful Features for Modern Students
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover the 11 integrated tools and AI study modes built directly into the StudySwap AI Android Application.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Features (11)' },
            { id: 'marketplace', label: 'Notes Marketplace' },
            { id: 'ai', label: 'Gemini AI Modes' },
            { id: 'dashboard', label: 'Buyer Dashboard' },
            { id: 'security', label: 'Security & Delivery' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFeatures.map((feat) => (
            <FeatureCard
              key={feat.id}
              feature={feat}
              highlight={feat.category === 'ai' || feat.id === 'marketplace'}
            />
          ))}
        </div>

        {/* AI Disclaimer Box */}
        <div className="max-w-4xl mx-auto p-5 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400 leading-relaxed mb-16 space-y-2">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Responsible AI Study Guidance</span>
          </div>
          <p>
            StudySwap AI utilizes Google Gemini models via our backend services for study assistance. AI-generated responses are intended to aid conceptual understanding and test preparation. They do not constitute certified professional, medical, legal, or financial advice. Always verify crucial syllabus materials against your institution's certified curriculum.
          </p>
        </div>

        {/* Download CTA */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Experience All Features on Android
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Get the full StudySwap AI suite on your device with our verified Android APK package.
          </p>
          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
};
