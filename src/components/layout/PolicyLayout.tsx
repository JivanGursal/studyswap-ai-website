import React, { ReactNode } from 'react';
import { ShieldCheck, Calendar, FileText, ArrowLeft, Mail, MapPin } from 'lucide-react';
import { Link } from '../../router/Link';
import { siteConfig } from '../../config/siteConfig';

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  category: string;
  children: ReactNode;
  toc?: { id: string; title: string }[];
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  category,
  children,
  toc,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300">
              <FileText className="w-3.5 h-3.5" />
              <span>{category}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Last Revised: {lastUpdated}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>

          {/* Compliance Notice Badge */}
          <div className="mt-5 p-3.5 bg-blue-950/40 border border-blue-900/60 rounded-xl text-xs text-blue-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong>Official Compliance Document:</strong> This policy applies to users of the StudySwap AI Android Application and visitors of this official website. Payments in the Android app are processed securely via Razorpay.
            </div>
          </div>
        </div>

        {/* Table of Contents if available */}
        {toc && toc.length > 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 mb-8 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Table of Contents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {toc.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-xs py-1"
                >
                  <span className="text-slate-400 font-mono">{idx + 1}.</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Policy Content */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-lg space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          {children}
        </div>

        {/* Policy Footer & Business Verification Box */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Official Inquiries & Support</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            For questions, clarifications, or support requests regarding this policy or transactions within StudySwap AI, please reach out through our official channels:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-400 font-medium">Support Email</span>
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-slate-200 hover:underline break-all">
                  {siteConfig.supportEmail}
                </a>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-400 font-medium">Brand & Location</span>
                <span className="text-slate-200">
                  {siteConfig.brandName} • {siteConfig.locationDescription}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/refund-and-cancellation" className="hover:text-white">Refund & Cancellation</Link>
            <span>•</span>
            <Link to="/shipping-policy" className="hover:text-white">Digital Delivery</Link>
            <span>•</span>
            <Link to="/pricing-policy" className="hover:text-white">Pricing Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
