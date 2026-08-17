import React from 'react';
import { BookOpen, Sparkles, Smartphone, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Link } from '../../router/Link';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'AI Assistant', href: '/ai-assistant' },
    { label: 'Notes', href: '/notes' },
    { label: 'Download', href: '/download' },
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Refund & Cancellation', href: '/refund-and-cancellation' },
    { label: 'Digital Delivery', href: '/shipping-policy' },
    { label: 'Pricing & Payments', href: '/pricing-policy' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer id="main-site-footer" className="bg-slate-950 border-t border-slate-800/80 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/20 border border-blue-400/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white">{siteConfig.brandName}</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-blue-950 text-blue-300 font-bold border border-blue-800 flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5" /> AI
                </span>
              </div>
            </Link>

            <p className="text-sm font-medium text-slate-300">
              "{siteConfig.sitePositioning}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              StudySwap AI is an Android student study platform combining curriculum study notes, Gemini AI learning tools, and secure digital delivery.
            </p>

            <div className="inline-flex items-center gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300">
              <Smartphone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Android Application</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Legal & Policies</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Information */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Support & Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Email Support:</span>
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-slate-200 hover:text-blue-300 font-medium break-all"
                  >
                    {siteConfig.supportEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Phone / WhatsApp:</span>
                  <a
                    href={`tel:${siteConfig.supportPhone}`}
                    className="text-slate-200 hover:text-emerald-300 font-medium"
                  >
                    {siteConfig.supportPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Location:</span>
                  <span className="text-slate-300">
                    {siteConfig.locationDescription}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <Link to="/terms-and-conditions" className="hover:text-slate-200">Terms</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-slate-200">Privacy</Link>
            <span>•</span>
            <Link to="/refund-and-cancellation" className="hover:text-slate-200">Refunds</Link>
            <span>•</span>
            <Link to="/shipping-policy" className="hover:text-slate-200">Digital Delivery</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-200">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
