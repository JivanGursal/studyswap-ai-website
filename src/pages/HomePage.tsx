import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Smartphone, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  FileText, 
  CheckSquare, 
  RotateCcw, 
  Calendar,
  Lock,
  Zap,
  ChevronRight,
  GraduationCap,
  DownloadCloud,
  CreditCard,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from '../router/Link';
import { DownloadButton } from '../components/ui/DownloadButton';
import { TrustStrip } from '../components/ui/TrustStrip';
import { AppMockup } from '../components/ui/AppMockup';
import { siteConfig } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  const featureList = [
    {
      id: 'feature-notes',
      title: 'Study Notes',
      desc: 'Find and access useful study materials in one place.',
      icon: BookOpen,
    },
    {
      id: 'feature-free',
      title: 'Free Notes',
      desc: 'Access selected study resources without paying.',
      icon: GraduationCap,
    },
    {
      id: 'feature-ai',
      title: 'AI Study Assistant',
      desc: 'Understand difficult topics with AI-powered explanations.',
      icon: Sparkles,
    },
    {
      id: 'feature-revision',
      title: 'Smart Revision',
      desc: 'Turn topics into revision-friendly study material.',
      icon: RotateCcw,
    },
    {
      id: 'feature-quizzes',
      title: 'Quizzes & MCQs',
      desc: 'Practice your understanding with interactive AI-generated questions.',
      icon: CheckSquare,
    },
    {
      id: 'feature-planner',
      title: 'Study Planner',
      desc: 'Organize your preparation around your academic goals.',
      icon: Calendar,
    },
    {
      id: 'feature-payments',
      title: 'Secure Payments',
      desc: 'Purchase digital resources through secure payment processing.',
      icon: CreditCard,
    },
    {
      id: 'feature-downloads',
      title: 'Secure Downloads',
      desc: 'Access purchased digital notes through protected download flows.',
      icon: DownloadCloud,
    },
  ];

  const noteCategories = [
    { name: 'Engineering', desc: 'Core fundamentals, diagrams, and branch coursework.' },
    { name: 'Computer Science', desc: 'Data structures, algorithms, DBMS, and system design.' },
    { name: 'Science', desc: 'Physics, chemistry, and biological concepts made clear.' },
    { name: 'Mathematics', desc: 'Calculus, algebra, discrete math formulas & solved sets.' },
    { name: 'Exam Preparation', desc: 'High-yield revision summaries and practice sheets.' },
    { name: 'General Study Material', desc: 'Foundational references and academic handouts.' },
  ];

  const installSteps = [
    {
      step: '01',
      title: 'Download the APK',
      desc: 'Click Download APK to save the authentic StudySwap AI package to your device.',
    },
    {
      step: '02',
      title: 'Open Downloaded File',
      desc: 'Locate StudySwap-AI.apk in your notification drawer or Downloads folder.',
    },
    {
      step: '03',
      title: 'Allow Source Permission',
      desc: 'If Android prompts you, tap Settings and allow installation from this source.',
    },
    {
      step: '04',
      title: 'Install StudySwap AI',
      desc: 'Confirm the prompt and tap Install to complete setup on your device.',
    },
    {
      step: '05',
      title: 'Sign In & Study',
      desc: 'Open the app, sign in with your email, and access notes and AI tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Microcopy Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-semibold text-white">Built for students. Powered by AI.</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Android Application</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Study Smarter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
              Learn Faster.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            StudySwap AI brings study notes, AI-powered learning tools, and secure digital resources together in one student-focused app.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <DownloadButton showDetails />
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all duration-200"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          <p className="text-xs text-slate-400 mb-10">
            Android app • Direct APK download • Package: <code className="text-slate-300 font-mono">{siteConfig.packageId}</code>
          </p>

          {/* Device presentation */}
          <AppMockup />
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. FEATURES SECTION */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Everything you need to study better
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Essential tools designed to streamline preparation, clarify tough concepts, and organize your learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureList.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                id={f.id}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-600/40 hover:bg-slate-900/90 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400 w-fit mb-4 group-hover:scale-105 group-hover:border-blue-700/80 group-hover:text-blue-300 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. GEMINI AI STUDY ASSISTANT SECTION */}
      <section id="ai-assistant" className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Intelligent Learning Assistant</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Meet your AI Study Assistant
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Powered by Google Gemini AI via our secure backend, the assistant provides educational explanations, summaries, interactive quizzes, MCQs, flashcards, revision aids, and study planners.
            </p>
          </div>

          {/* 7 AI Capabilities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12 text-center text-xs">
            {[
              { name: 'Explain', desc: 'Concept intuition' },
              { name: 'Summarize', desc: 'Key summaries' },
              { name: 'Quiz', desc: 'Self testing' },
              { name: 'MCQ', desc: 'Practice questions' },
              { name: 'Flashcards', desc: 'Active recall' },
              { name: 'Revision', desc: 'Formulas & tips' },
              { name: 'Planner', desc: 'Timetables' },
            ].map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-white block mb-1 text-sm">{m.name}</span>
                <span className="text-slate-400 text-[11px]">{m.desc}</span>
              </div>
            ))}
          </div>

          {/* Visual Showcase - Example Prompt and Structured Answer */}
          <div className="max-w-3xl mx-auto bg-slate-950 border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/30 mb-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <Sparkles className="w-4 h-4" />
                Example AI Explanation (Inside Android App)
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px]">
                Structured Mode
              </span>
            </div>

            {/* Example Prompt */}
            <div className="mt-5 mb-5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-slate-200">
              <span className="text-slate-400 font-medium block text-[11px] mb-0.5">User Prompt:</span>
              <p className="font-semibold text-white">"Explain the term evolution"</p>
            </div>

            {/* Example Structured Output */}
            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-blue-400 uppercase tracking-wider text-[10px] block mb-1">
                  1. Definition
                </span>
                <p className="leading-relaxed">
                  Evolution is the process of gradual biological change in inherited characteristics of biological populations over successive generations.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-blue-400 uppercase tracking-wider text-[10px] block mb-1">
                  2. Simple Explanation
                </span>
                <p className="leading-relaxed">
                  Living organisms adapt over long spans of time. Organisms with beneficial traits are more likely to survive and pass those traits to their offspring (natural selection).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-blue-400 uppercase tracking-wider text-[10px] block mb-1">
                  3. Key Points
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Driven by genetic mutation, gene flow, genetic drift, and natural selection.</li>
                  <li>Acts on populations across generations, not on a single individual.</li>
                  <li>Supported by fossil records, molecular biology, and comparative anatomy.</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-blue-900/40">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px] block mb-1">
                  4. Exam Tip
                </span>
                <p className="text-slate-300 leading-relaxed">
                  In exam questions, always distinguish Darwinian natural selection from Lamarckian acquired traits to secure full conceptual marks.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-5">
              *Visual illustration of sample app output. The live Gemini AI assistant is integrated inside the StudySwap AI Android app.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-600/20"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get the StudySwap AI App</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOTES MARKETPLACE SECTION */}
      <section id="notes" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Library</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Study resources, without the hassle.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Browse notes, view note details, access free resources, purchase premium notes securely with Razorpay, and download instantly to your device.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {noteCategories.map((c, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-600/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{c.name}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Marketplace Workflow Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-center">
          {[
            { step: '1', title: 'Browse Notes', desc: 'Explore categories' },
            { step: '2', title: 'View Details', desc: 'Check page count' },
            { step: '3', title: 'Free Resources', desc: 'Instant access' },
            { step: '4', title: 'Premium Notes', desc: 'Curated topics' },
            { step: '5', title: 'Secure Payment', desc: 'Razorpay gateway' },
            { step: '6', title: 'Download & Read', desc: 'Offline storage' },
          ].map((item, index) => (
            <div key={index} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-300 font-bold text-[10px] inline-flex items-center justify-center mb-1.5">
                {item.step}
              </span>
              <h4 className="font-bold text-white text-xs mb-0.5">{item.title}</h4>
              <p className="text-[11px] text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sm font-semibold text-slate-200 transition-colors"
          >
            <span>Explore StudySwap AI</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </section>

      {/* 6. FREE NOTES SECTION */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-semibold text-emerald-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Zero-Cost Exploration</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start with free study resources
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            StudySwap AI includes a selection of free study notes so you can explore curriculum materials, test the reader, and experience the app before purchasing premium resources.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download the App</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SECURE DIGITAL DELIVERY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Your digital resources, delivered securely.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Purchased and free study materials are delivered electronically and directly associated with your verified account.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Digital PDF Delivery',
              desc: 'Materials are delivered electronically straight to your Android application.',
            },
            {
              title: 'Protected Resource Access',
              desc: 'Downloaded notes remain stored securely for offline study on your device.',
            },
            {
              title: 'Secure Download Flow',
              desc: 'Direct in-app download channels prevent link sharing or file tampering.',
            },
            {
              title: 'Purchase-Linked Access',
              desc: 'Re-download your previously purchased notes anytime via the Buyer Dashboard.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. HOW IT WORKS 4-STEP */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Four straightforward steps to level up your study routine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Download the app',
                desc: 'Download the authentic StudySwap AI APK directly from this website.',
              },
              {
                step: '02',
                title: 'Explore study resources',
                desc: 'Browse subject notes, summaries, and curriculum handouts.',
              },
              {
                step: '03',
                title: 'Choose free or premium resources',
                desc: 'Access zero-cost notes or unlock curated premium materials via Razorpay.',
              },
              {
                step: '04',
                title: 'Study, revise and download securely',
                desc: 'Read offline, generate AI quizzes, and review summaries anytime.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-blue-500/50 font-mono mb-2 block">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY STUDYSWAP AI */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Built around the way students actually study.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            StudySwap AI is built to give students a unified, reliable environment for exam preparation without clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'One place for study resources',
              desc: 'Stop scattering files across chat groups and cloud folders. Keep notes organized in one app.',
            },
            {
              title: 'AI-assisted learning',
              desc: 'Get structured explanations, summaries, and MCQs whenever you hit an academic roadblock.',
            },
            {
              title: 'Free resources to get started',
              desc: 'Explore curriculum materials and app features at zero cost before purchasing.',
            },
            {
              title: 'Secure digital purchases',
              desc: 'In-app checkout handled through Razorpay with verified delivery to your account.',
            },
            {
              title: 'Focused on exam preparation',
              desc: 'Tailored for practical revision, high-yield takeaways, and active recall practice.',
            },
            {
              title: 'Private & offline ready',
              desc: 'Downloaded notes stay on your device for uninterrupted revision anytime.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. APP DOWNLOAD SECTION */}
      <section id="download" className="py-20 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-blue-600/30 shadow-2xl text-center space-y-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-600/30">
              <Smartphone className="w-7 h-7" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Download StudySwap AI
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                Get the official StudySwap AI APK directly from our verified website and install it on your Android device.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DownloadButton showDetails />
              <a
                href="#install-guide"
                className="px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
              >
                How to install
              </a>
            </div>

            {/* Installation Instructions */}
            <div id="install-guide" className="pt-8 border-t border-slate-800/80 text-left">
              <h3 className="text-base font-bold text-white mb-6 text-center">
                Installation Instructions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {installSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <span className="font-mono text-blue-400 font-bold block mb-1 text-sm">{step.step}</span>
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 text-center mt-6">
                Need help installing? Reach out to our team at{' '}
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-400 hover:underline">
                  {siteConfig.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SUPPORT SECTION */}
      <section id="support" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Assistance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Need help?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Have questions about notes, payment verification, or APK installation? Contact our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Support */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Email Support</h3>
              <p className="text-xs text-slate-400">
                For order inquiries, download issues, or feedback:
              </p>
              <p className="text-sm font-semibold text-blue-300 break-all">
                {siteConfig.supportEmail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Email Support</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* WhatsApp / Phone Support */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">WhatsApp Support</h3>
              <p className="text-xs text-slate-400">
                Direct phone and WhatsApp assistance:
              </p>
              <p className="text-sm font-semibold text-emerald-300">
                {siteConfig.supportPhone}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location Information */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Location</h3>
              <p className="text-xs text-slate-400">
                Official presence & operation base:
              </p>
              <p className="text-sm font-semibold text-slate-200">
                {siteConfig.locationDescription}
              </p>
              <p className="text-xs text-slate-400">
                Hours: {siteConfig.businessHours}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <span>View Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
