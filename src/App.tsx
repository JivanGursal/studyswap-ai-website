import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { DownloadPage } from './pages/DownloadPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { ShippingPolicyPage } from './pages/ShippingPolicyPage';
import { PricingPolicyPage } from './pages/PricingPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const PageContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path
  const path = currentPath.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';

  // Dynamic document title updater based on current page
  useEffect(() => {
    let title = 'StudySwap AI — AI-Powered Study Assistant & Digital Study Notes';
    switch (path) {
      case '/features':
        title = 'Features & AI Study Assistant — StudySwap AI';
        break;
      case '/how-it-works':
        title = 'How It Works & Payment Flow — StudySwap AI';
        break;
      case '/pricing':
        title = 'Pricing & Study Resources — StudySwap AI';
        break;
      case '/download':
        title = 'Download Android APK — StudySwap AI';
        break;
      case '/about':
        title = 'About Us & Mission — StudySwap AI';
        break;
      case '/contact':
        title = 'Official Customer Support & Inquiries — StudySwap AI';
        break;
      case '/privacy-policy':
        title = 'Privacy Policy — StudySwap AI';
        break;
      case '/terms-and-conditions':
        title = 'Terms and Conditions — StudySwap AI';
        break;
      case '/refund-and-cancellation':
        title = 'Refund and Cancellation Policy — StudySwap AI';
        break;
      case '/shipping-policy':
        title = 'Shipping and Delivery Policy — StudySwap AI';
        break;
      case '/pricing-policy':
        title = 'Pricing and Payment Policy — StudySwap AI';
        break;
      default:
        if (path !== '/') {
          title = 'Page Not Found — StudySwap AI';
        }
    }
    document.title = title;
  }, [path]);

  const renderCurrentPage = () => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/features':
        return <FeaturesPage />;
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/pricing':
        return <PricingPage />;
      case '/download':
        return <DownloadPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-and-conditions':
        return <TermsPage />;
      case '/refund-and-cancellation':
        return <RefundPolicyPage />;
      case '/shipping-policy':
        return <ShippingPolicyPage />;
      case '/pricing-policy':
        return <PricingPolicyPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <PageContent />
    </RouterProvider>
  );
}
