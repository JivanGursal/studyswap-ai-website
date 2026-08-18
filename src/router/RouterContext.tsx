import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppRoute } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, replace?: boolean) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const base = import.meta.env.BASE_URL || '/';
      const fullPath = window.location.pathname;
      // Handle hash-based sub-routing if present
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        return window.location.hash.slice(1);
      }
      // If the app is served from a sub-path (BASE_URL), strip that prefix
      if (base !== '/' && fullPath.startsWith(base)) {
        // slice at base.length - 1 to retain leading '/'
        return fullPath.slice(base.length - 1) || '/';
      }
      return fullPath || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const base = import.meta.env.BASE_URL || '/';
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        const full = window.location.pathname || '/';
        if (base !== '/' && full.startsWith(base)) {
          setCurrentPath(full.slice(base.length - 1) || '/');
        } else {
          setCurrentPath(full);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, replace = false) => {
    if (typeof window === 'undefined') return;
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const target = `${base}${to}`;
    if (replace) {
      window.history.replaceState({}, '', target);
    } else {
      window.history.pushState({}, '', target);
    }
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
