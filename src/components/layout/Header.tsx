import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Smartphone, Sparkles, ChevronRight, Shield } from 'lucide-react';
import { Link } from '../../router/Link';
import { useRouter } from '../../router/RouterContext';
import { siteConfig } from '../../config/siteConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'AI Assistant', href: '/ai-assistant' },
    { label: 'Notes', href: '/notes' },
    { label: 'Download', href: '/download' },
  ];

  return (
    <header
      id="main-site-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/50 py-3'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="StudySwap AI Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200 border border-blue-400/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                StudySwap
              </span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-blue-950 text-blue-300 font-bold border border-blue-800 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" /> AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                exact={link.href === '/'}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
                activeClassName="!text-blue-400 !bg-blue-950/60 !font-semibold border border-blue-800/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/download"
              id="header-download-cta"
              className="inline-flex items-center gap-2 px-4.5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200 border border-blue-500/30 active:scale-[0.98]"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download App</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/download"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Download</span>
            </Link>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-x-0 top-[60px] bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl space-y-3 z-50 animate-fade-in"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                exact={link.href === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-300 hover:text-white rounded-xl hover:bg-slate-900 transition-colors"
                activeClassName="!text-blue-400 !bg-blue-950/60 !font-semibold border border-blue-800/40"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Link
              to="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download Android App</span>
            </Link>
            <div className="text-center">
              <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                Direct APK download from official website
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
