import React from 'react';
import { Home, Smartphone, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from '../router/Link';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-950 text-slate-100 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-blue-950/80 border border-blue-800/60 text-blue-400 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Error 404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The page you are looking for does not exist or has been moved. Please navigate back to our home portal or download the Android application.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          <Link
            to="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            <span>Download App</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
