import React from 'react';
import { Sparkles, BookOpen, DownloadCloud, CreditCard, GraduationCap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Sparkles,
      title: 'AI-Powered Studying',
      desc: '7 structured study modes powered by Gemini AI via secure backend.',
    },
    {
      icon: BookOpen,
      title: 'Free & Premium Notes',
      desc: 'Handpicked subject guides and curriculum notes for focused revision.',
    },
    {
      icon: DownloadCloud,
      title: 'Secure Digital Downloads',
      desc: 'Protected PDF downloads and permanent access in your Buyer Dashboard.',
    },
    {
      icon: CreditCard,
      title: 'Razorpay-Powered Payments',
      desc: 'Safe, encrypted in-app payments with instant verification.',
    },
    {
      icon: GraduationCap,
      title: 'Student-Focused Experience',
      desc: 'Clean, distraction-free environment built for practical exam prep.',
    },
  ];

  return (
    <section className="w-full border-y border-slate-800/80 bg-slate-900/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/70"
              >
                <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
