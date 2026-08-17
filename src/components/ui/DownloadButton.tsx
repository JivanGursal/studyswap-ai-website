import React from 'react';
import { Download, Smartphone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface DownloadButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'compact';
  className?: string;
  showDetails?: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  variant = 'primary',
  className = '',
  showDetails = false,
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 active:scale-[0.98] border border-blue-500/30';
      case 'secondary':
        return 'bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-700 active:scale-[0.98]';
      case 'outline':
        return 'bg-transparent hover:bg-blue-950/40 text-blue-400 border border-blue-500/40 font-semibold active:scale-[0.98]';
      case 'compact':
        return 'bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl';
    }
  };

  const basePadding = variant === 'compact' ? '' : 'px-6 py-3.5 rounded-xl';

  return (
    <div className="inline-flex flex-col items-center">
      <a
        id="apk-download-cta-btn"
        href={siteConfig.apkDownloadUrl}
        download="StudySwap-AI.apk"
        className={`inline-flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer ${getButtonStyles()} ${basePadding} ${className}`}
        aria-label="Download StudySwap AI Android APK"
      >
        <Smartphone className="w-5 h-5 shrink-0" />
        <span>Download StudySwap AI</span>
        <Download className="w-4 h-4 opacity-80 shrink-0" />
      </a>

      {showDetails && (
        <p className="text-xs text-slate-400 mt-2.5 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Android app • APK download • {siteConfig.apkFileSize}</span>
        </p>
      )}
    </div>
  );
};
