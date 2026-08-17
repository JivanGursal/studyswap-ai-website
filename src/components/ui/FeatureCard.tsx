import React from 'react';
import { 
  BookOpen, 
  Gift, 
  Download, 
  CreditCard, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  CheckSquare, 
  Layers, 
  RotateCcw, 
  Calendar,
  LucideIcon
} from 'lucide-react';
import { FeatureItem } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  marketplace: BookOpen,
  free: Gift,
  download: Download,
  dashboard: CreditCard,
  ai: Sparkles,
  explain: HelpCircle,
  summarize: FileText,
  quiz: CheckSquare,
  flashcards: Layers,
  revision: RotateCcw,
  planner: Calendar,
};

interface FeatureCardProps {
  feature: FeatureItem;
  highlight?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, highlight = false }) => {
  const IconComponent = iconMap[feature.iconName] || BookOpen;

  return (
    <div
      id={`feature-card-${feature.id}`}
      className={`group p-6 rounded-2xl transition-all duration-300 ease-out flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-1 cursor-default ${
        highlight
          ? 'bg-gradient-to-b from-blue-950/40 to-slate-900 border border-blue-600/40 shadow-lg shadow-blue-950/30 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/50'
          : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-slate-950/50'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400 group-hover:scale-105 group-hover:border-blue-700/80 group-hover:text-blue-300 transition-all duration-300">
            <IconComponent className="w-5 h-5" />
          </div>
          {feature.badge && (
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-900/60 text-blue-300 border border-blue-700/50 group-hover:border-blue-600/70 transition-colors duration-300">
              {feature.badge}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {feature.details && feature.details.length > 0 && (
        <ul className="space-y-1.5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 shrink-0 transition-colors duration-300" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
