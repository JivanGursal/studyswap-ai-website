import React from 'react';
import { 
  BookOpen, 
  Download, 
  ShieldCheck, 
  CreditCard, 
  FileText, 
  GraduationCap, 
  Smartphone, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from '../router/Link';
import { DownloadButton } from '../components/ui/DownloadButton';

export const NotesPage: React.FC = () => {
  const categories = [
    {
      title: 'Engineering',
      desc: 'Branch-specific subjects, formula handbooks, circuit diagrams, and mechanics derivations.',
      topics: ['Thermodynamics', 'Digital Electronics', 'Fluid Mechanics', 'Control Systems'],
    },
    {
      title: 'Computer Science',
      desc: 'Algorithm walkthroughs, data structure diagrams, DBMS queries, and operating system notes.',
      topics: ['Data Structures & Algorithms', 'Database Systems', 'Computer Networks', 'OS Concepts'],
    },
    {
      title: 'Science',
      desc: 'Physics mechanics, chemical reaction mechanisms, and biological taxonomy summaries.',
      topics: ['Organic Chemistry', 'Electromagnetism', 'Cell Biology', 'Optics & Waves'],
    },
    {
      title: 'Mathematics',
      desc: 'Step-by-step calculus proofs, linear algebra matrices, probability theory, and discrete math.',
      topics: ['Linear Algebra', 'Multivariable Calculus', 'Probability & Stats', 'Differential Equations'],
    },
    {
      title: 'Exam Preparation',
      desc: 'High-yield question banks, last-minute formula sheets, and solved question sets.',
      topics: ['Semester Revision Kits', 'Formula Handbooks', 'High-Yield Summaries', 'Concept Maps'],
    },
    {
      title: 'General Study Material',
      desc: 'Foundational academic guides, technical writing references, and aptitude revision.',
      topics: ['Quantitative Aptitude', 'Verbal Reasoning', 'Research Methods', 'Technical Writing'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Study Notes Library</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Study resources, without the hassle.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover curriculum-aligned study materials, course handouts, and subject guides created to help you master challenging academic topics.
          </p>
        </div>

        {/* Free vs Premium Notes Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Free Notes */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Start with free study resources</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                StudySwap AI includes a collection of free study notes so you can explore curriculum materials, test the in-app PDF reader, and evaluate the platform before purchasing premium resources.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available to all registered accounts at ₹0</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant offline PDF reading on your Android phone</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link
                to="/download"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Download App & Access Free Notes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Premium Notes */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-blue-600/30 flex flex-col justify-between shadow-xl shadow-blue-950/20">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Curated Premium Materials</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlock comprehensive subject packs, exam formula guides, and structured handwritten revision notes through secure in-app payments powered by Razorpay.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Transparent upfront pricing in INR before checkout</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Permanent re-download access in your Buyer Dashboard</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <DownloadButton variant="primary" className="w-full" />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Academic Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore diverse subject domains designed for higher education and university prep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{category.desc}</p>
                  
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-2">Key Topics:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {category.topics.map((topic, tidx) => (
                        <span
                          key={tidx}
                          className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[11px]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Step In-App Workflow */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 mb-16">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            How to Access Notes in the Android App
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-xs">
            {[
              { step: '1', title: 'Browse Notes', desc: 'Search by subject, semester, or course code.' },
              { step: '2', title: 'View Details', desc: 'Check preview, author, and page count.' },
              { step: '3', title: 'Free Resources', desc: 'Tap Download directly for free notes.' },
              { step: '4', title: 'Premium Notes', desc: 'Select paid materials with transparent prices.' },
              { step: '5', title: 'Secure Payment', desc: 'Complete checkout safely via Razorpay.' },
              { step: '6', title: 'Download & Read', desc: 'Access offline files anytime in your dashboard.' },
            ].map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 font-bold inline-flex items-center justify-center mb-2">
                    {s.step}
                  </span>
                  <h4 className="font-bold text-white text-xs mb-1">{s.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
