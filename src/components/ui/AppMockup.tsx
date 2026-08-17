import React, { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  Calendar, 
  Zap, 
  Search, 
  ShieldCheck,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Lock
} from 'lucide-react';

export const AppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'ai' | 'purchases' | 'downloads'>('ai');
  const [selectedAiMode, setSelectedAiMode] = useState<'explain' | 'summarize' | 'quiz' | 'flashcards'>('explain');

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Mockup Frame Header / Mode Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl max-w-2xl mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'ai'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Gemini AI Assistant</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('marketplace')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'marketplace'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Notes Marketplace</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('purchases')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'purchases'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Buyer Dashboard</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('downloads')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'downloads'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Secure Downloads</span>
        </button>
      </div>

      {/* Vector Phone Mockup Container */}
      <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] bg-slate-950 border-[6px] border-slate-800 rounded-[42px] p-3 shadow-2xl shadow-blue-950/40 ring-1 ring-slate-700/50">
        {/* Android Camera Notch & Speaker */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          <div className="w-12 h-1 bg-slate-800 rounded-full" />
          <div className="w-3 h-3 bg-slate-900 border border-slate-700 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="bg-slate-900 rounded-[34px] overflow-hidden border border-slate-800/80 min-h-[580px] flex flex-col pt-7 pb-4 px-3.5 text-left select-none">
          {/* In-App Status Bar */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 pb-2 mb-2 border-b border-slate-800/50">
            <span className="font-mono">StudySwap AI</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Online</span>
            </div>
          </div>

          {/* TAB 1: GEMINI AI ASSISTANT */}
          {activeTab === 'ai' && (
            <div className="flex-1 flex flex-col space-y-3">
              {/* App Bar */}
              <div className="flex items-center justify-between bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-600/20 text-blue-400 rounded-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">AI Study Assistant</h4>
                    <p className="text-[10px] text-slate-400">Powered by Gemini AI Backend</p>
                  </div>
                </div>
                <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded-full border border-blue-800">
                  Ready
                </span>
              </div>

              {/* Mode Pills */}
              <div className="grid grid-cols-4 gap-1 text-[10px]">
                {[
                  { id: 'explain', label: 'Explain' },
                  { id: 'summarize', label: 'Summary' },
                  { id: 'quiz', label: 'Quiz/MCQ' },
                  { id: 'flashcards', label: 'Flashcards' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setSelectedAiMode(mode.id as any)}
                    className={`py-1.5 px-1 rounded-lg text-center font-medium transition-all ${
                      selectedAiMode === mode.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Chat Simulation Area */}
              <div className="flex-1 bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 space-y-2.5 text-xs overflow-hidden flex flex-col justify-between">
                {/* User Prompt */}
                <div className="flex justify-end">
                  <div className="bg-blue-600/30 border border-blue-500/30 text-blue-100 rounded-xl rounded-tr-sm p-2.5 max-w-[85%] text-[11px]">
                    {selectedAiMode === 'explain' && 'Explain Dijkstra algorithm with step-by-step intuition'}
                    {selectedAiMode === 'summarize' && 'Summarize Photosynthesis light & dark reactions into revision points'}
                    {selectedAiMode === 'quiz' && 'Generate 2 MCQs on Thermodynamics 2nd Law for exam practice'}
                    {selectedAiMode === 'flashcards' && 'Create 2 active recall flashcards for Operating System Semaphores'}
                  </div>
                </div>

                {/* AI Response Card */}
                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-slate-700/80 text-slate-200 rounded-xl rounded-tl-sm p-2.5 max-w-[95%] space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-[10px]">
                      <Sparkles className="w-3 h-3" />
                      <span>Gemini Assistant</span>
                    </div>

                    {selectedAiMode === 'explain' && (
                      <div className="space-y-1 text-slate-300">
                        <p className="font-medium text-white">Dijkstra Shortest Path Intuition:</p>
                        <p>1. Start at source vertex with distance = 0.</p>
                        <p>2. Greedily pick unvisited vertex with minimum tentative distance.</p>
                        <p>3. Relax all adjacent edges and repeat until target reached.</p>
                      </div>
                    )}

                    {selectedAiMode === 'summarize' && (
                      <div className="space-y-1 text-slate-300">
                        <p className="font-medium text-white">Photosynthesis Summary:</p>
                        <p>• <strong>Light Reaction (Thylakoids):</strong> Splits H2O, produces ATP + NADPH, releases O2.</p>
                        <p>• <strong>Calvin Cycle (Stroma):</strong> Uses ATP + NADPH to fix CO2 into Glucose.</p>
                      </div>
                    )}

                    {selectedAiMode === 'quiz' && (
                      <div className="space-y-1.5 text-slate-300">
                        <p className="font-medium text-white">Q1. Entropy in an isolated system:</p>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1 rounded bg-slate-950 border border-slate-800">A) Always decreases</div>
                          <div className="p-1 rounded bg-blue-950/60 border border-blue-700 text-blue-200">B) Never decreases (Increases or constant) ✓</div>
                        </div>
                      </div>
                    )}

                    {selectedAiMode === 'flashcards' && (
                      <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 space-y-1">
                        <span className="text-[9px] text-blue-400 font-semibold uppercase">Flashcard 1</span>
                        <p className="font-medium text-white text-[10px]">Q: What is a Counting Semaphore?</p>
                        <p className="text-slate-400 text-[10px]">A: A synchronization tool initialized to an integer value representing resource instances.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* In-App Prompt Input Bar */}
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center gap-2">
                  <input
                    type="text"
                    disabled
                    placeholder="Ask study topic or concept..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-400 cursor-default"
                  />
                  <button type="button" disabled className="p-1.5 bg-blue-600 text-white rounded-lg opacity-80">
                    <Zap className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NOTES MARKETPLACE */}
          {activeTab === 'marketplace' && (
            <div className="flex-1 flex flex-col space-y-3">
              <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Study Notes Hub</h4>
                  <p className="text-[10px] text-slate-400">Discover verified curated materials</p>
                </div>
                <div className="p-1.5 bg-slate-800 text-slate-300 rounded-lg">
                  <Search className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Sample Notes Cards */}
              <div className="space-y-2 text-xs">
                {/* Note 1 - Free */}
                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-semibold border border-emerald-800/60">
                      Free Resource
                    </span>
                    <span className="text-[10px] text-slate-400">PDF • 18 Pages</span>
                  </div>
                  <h5 className="font-semibold text-white text-xs">Engineering Mathematics: Linear Algebra & Matrices</h5>
                  <p className="text-[10px] text-slate-400">Comprehensive formulas, eigenvalues, and solved practice problems.</p>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[10px]">
                    <span className="text-slate-400">Subject: Math</span>
                    <span className="text-blue-400 font-medium flex items-center gap-1">
                      <Download className="w-3 h-3" /> Free Download
                    </span>
                  </div>
                </div>

                {/* Note 2 - Paid */}
                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-blue-900/40 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded font-semibold border border-blue-800/60">
                      Curated Premium Notes
                    </span>
                    <span className="text-[10px] text-slate-400">PDF • 54 Pages</span>
                  </div>
                  <h5 className="font-semibold text-white text-xs">Data Structures & Algorithms: Complete Revision Guide</h5>
                  <p className="text-[10px] text-slate-400">Handcrafted visual diagrams, time complexities, and interview questions.</p>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[10px]">
                    <span className="text-slate-400">Price in app</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Secure Razorpay Checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BUYER DASHBOARD */}
          {activeTab === 'purchases' && (
            <div className="flex-1 flex flex-col space-y-3">
              <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-white">Buyer Dashboard</h4>
                <p className="text-[10px] text-slate-400">Manage orders and download history</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">Order #ORD-84920</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/50">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Successful
                    </span>
                  </div>
                  <h5 className="font-semibold text-white text-xs">Full Stack Web Architecture Cheat Sheet</h5>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px] text-slate-400">
                    <span>Razorpay In-App Order</span>
                    <span className="text-blue-400 font-medium">Re-download anytime</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">Order #ORD-84112</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/50">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Delivered
                    </span>
                  </div>
                  <h5 className="font-semibold text-white text-xs">Organic Chemistry Mechanism Handouts</h5>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px] text-slate-400">
                    <span>Digital delivery active</span>
                    <span className="text-blue-400 font-medium">PDF available</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SECURE DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div className="flex-1 flex flex-col space-y-3">
              <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-white">Downloaded Files</h4>
                <p className="text-[10px] text-slate-400">Private & offline-ready digital files</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-blue-950 text-blue-400 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">DBMS_Concurrency_Control.pdf</h5>
                      <p className="text-[10px] text-slate-400">3.4 MB • Stored locally</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">Offline Ready</span>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-950 text-indigo-400 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">Physics_Mechanics_Formulas.pdf</h5>
                      <p className="text-[10px] text-slate-400">1.8 MB • Stored locally</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">Offline Ready</span>
                </div>
              </div>
            </div>
          )}

          {/* Android In-App Navigation Bar Simulation */}
          <div className="mt-auto pt-2 border-t border-slate-800 grid grid-cols-4 gap-1 text-[9px] text-center text-slate-400">
            <button 
              type="button"
              onClick={() => setActiveTab('marketplace')} 
              className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'marketplace' ? 'text-blue-400 font-semibold' : ''}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Notes</span>
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('ai')} 
              className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'ai' ? 'text-blue-400 font-semibold' : ''}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI</span>
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('purchases')} 
              className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'purchases' ? 'text-blue-400 font-semibold' : ''}`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Orders</span>
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('downloads')} 
              className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'downloads' ? 'text-blue-400 font-semibold' : ''}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Files</span>
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-4">
        Interactive UI illustration of the StudySwap AI Android Application. Real purchases and AI requests execute inside the Android app.
      </p>
    </div>
  );
};
