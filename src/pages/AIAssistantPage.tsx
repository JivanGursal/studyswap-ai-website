import React from 'react';
import { 
  Sparkles, 
  FileText, 
  CheckSquare, 
  Layers, 
  RotateCcw, 
  Calendar, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  BookOpen
} from 'lucide-react';
import { Link } from '../router/Link';
import { DownloadButton } from '../components/ui/DownloadButton';
import { siteConfig } from '../config/siteConfig';

export const AIAssistantPage: React.FC = () => {
  const aiModes = [
    {
      id: 'explain',
      title: 'Explain Mode',
      desc: 'Transforms complex concepts and technical formulas into easy-to-understand step-by-step breakdowns.',
      prompt: 'Explain the working principle of Transformer neural networks in simple terms.',
      output: '1. Core Idea: Replaces sequential recurrence with self-attention mechanism.\n2. Self-Attention: Lets the model weight the importance of different words in a sentence simultaneously.\n3. Advantage: Enables massive parallelization during training compared to traditional RNNs.',
      icon: Sparkles,
    },
    {
      id: 'summarize',
      title: 'Summarize Mode',
      desc: 'Condenses lengthy textbook chapters, research papers, and lecture slides into high-yield revision summaries.',
      prompt: 'Summarize the Indian Constitution Fundamental Rights (Articles 12-35).',
      output: '• Right to Equality (Art. 14-18)\n• Right to Freedom (Art. 19-22)\n• Right against Exploitation (Art. 23-24)\n• Right to Freedom of Religion (Art. 25-28)\n• Cultural & Educational Rights (Art. 29-30)\n• Right to Constitutional Remedies (Art. 32)',
      icon: FileText,
    },
    {
      id: 'quiz',
      title: 'Quiz & MCQ Mode',
      desc: 'Generates practice questions and multiple-choice quizzes to test conceptual retention before exams.',
      prompt: 'Generate 2 MCQs on Thermodynamics 1st Law.',
      output: 'Q1: What does the First Law of Thermodynamics state?\nA) Energy cannot be created or destroyed, only transformed (Correct)\nB) Entropy of an isolated system always increases\nC) Absolute zero is unattainable',
      icon: CheckSquare,
    },
    {
      id: 'flashcards',
      title: 'Flashcards Mode',
      desc: 'Creates active recall flashcard pairs to reinforce memorization of definitions, laws, and formulas.',
      prompt: 'Create flashcards for Organic Chemistry SN1 vs SN2 reactions.',
      output: 'Front: What is the rate-determining step in SN1?\nBack: Formation of the carbocation intermediate (unimolecular).\n\nFront: What solvent favors SN2 reactions?\nBack: Polar aprotic solvents (e.g., Acetone, DMSO).',
      icon: Layers,
    },
    {
      id: 'revision',
      title: 'Smart Revision Mode',
      desc: 'Focuses strictly on high-yield exam takeaways, common exam traps, and formula cheat sheets.',
      prompt: 'Give me last-minute revision points for Calculus Integration by Parts.',
      output: '• Formula: ∫u dv = uv - ∫v du\n• Rule of Thumb: Choose u using ILATE (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential)\n• Common Trap: Never forget to integrate dv to find v before applying the subtraction term.',
      icon: RotateCcw,
    },
    {
      id: 'planner',
      title: 'Study Planner Mode',
      desc: 'Generates structured study schedules and daily preparation milestones based on your upcoming exams.',
      prompt: 'Create a 5-day revision schedule for 4 chapters of Data Structures.',
      output: 'Day 1: Arrays, Linked Lists & Stacks (Theory + 5 problems)\nDay 2: Queues, Trees & Binary Search Trees\nDay 3: Graphs (BFS/DFS) & Shortest Path\nDay 4: Sorting algorithms & Time complexity practice\nDay 5: Mock question papers and formula review',
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powered by Google Gemini AI Backend</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Meet your AI Study Assistant
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Inside the StudySwap AI Android application, the AI study assistant acts as your 24/7 personal tutor, providing structured explanations, active recall flashcards, and revision materials.
          </p>
        </div>

        {/* Highlighted Visual Example */}
        <div className="bg-slate-900 border border-blue-600/30 rounded-3xl p-6 sm:p-10 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 text-xs">
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-wider text-[11px] block mb-1">
                Visual Showcase
              </span>
              <h2 className="text-xl font-bold text-white">How the AI Assistant Formats Explanations</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-xs w-fit">
              Example Android Output
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-3.5 bg-blue-950/50 border border-blue-900/60 rounded-xl text-xs text-slate-200">
              <span className="text-slate-400 font-medium block text-[11px] mb-1">Example Prompt:</span>
              <p className="text-sm font-semibold text-white">"Explain the term evolution"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <span className="font-bold text-blue-400 text-xs block">1. Definition</span>
                <p className="text-slate-300 leading-relaxed">
                  Evolution is the process of gradual biological change in inherited traits across successive generations of a population.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <span className="font-bold text-blue-400 text-xs block">2. Simple Explanation</span>
                <p className="text-slate-300 leading-relaxed">
                  Over time, organisms with advantageous survival traits reproduce more effectively, shaping the species' adaptations (natural selection).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <span className="font-bold text-blue-400 text-xs block">3. Key Points</span>
                <p className="text-slate-300 leading-relaxed">
                  • Driven by genetic mutation, drift, gene flow, and selection.<br />
                  • Operates at population scale over generations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-900/40 space-y-1.5">
                <span className="font-bold text-amber-400 text-xs block">4. Exam Tip</span>
                <p className="text-slate-300 leading-relaxed">
                  Always emphasize that evolution acts on populations over generations, not on single individuals during their lifespan.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              *Live AI processing executes on Android through the application's secure backend proxy.
            </p>
            <DownloadButton variant="primary" />
          </div>
        </div>

        {/* 6 AI Modes Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              All 6 Dedicated Study Modes
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Every mode formats responses specifically for exam preparation and conceptual mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <div
                  key={mode.id}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400 w-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{mode.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{mode.desc}</p>
                    
                    <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-300">
                      <span className="text-slate-500 font-semibold block mb-0.5">Sample Query:</span>
                      <p className="italic text-slate-300">"{mode.prompt}"</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security & Architecture Note */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 text-center max-w-3xl mx-auto space-y-2">
          <p className="font-semibold text-slate-200">
            Secure Backend-Proxy Architecture
          </p>
          <p className="leading-relaxed">
            All AI queries are processed through the official StudySwap AI backend service. No Gemini API secrets are stored on the Android client, protecting student privacy and service integrity.
          </p>
        </div>
      </div>
    </div>
  );
};
