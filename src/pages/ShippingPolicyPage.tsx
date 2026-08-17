import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';
import { siteConfig } from '../config/siteConfig';

export const ShippingPolicyPage: React.FC = () => {
  const toc = [
    { id: 'no-physical', title: '1. No Physical Shipping' },
    { id: 'electronic-delivery', title: '2. Electronic Digital Delivery' },
    { id: 'delivery-timeline', title: '3. Delivery Timeline & Instant Access' },
    { id: 'access-troubleshooting', title: '4. Troubleshooting Digital Access' },
    { id: 'shipping-charges', title: '5. Shipping Charges' },
    { id: 'support-contact', title: '6. Support Inquiries' },
  ];

  return (
    <PolicyLayout
      title="Shipping and Delivery Policy"
      subtitle="Details regarding electronic delivery and digital resource fulfillment for StudySwap AI."
      lastUpdated="August 15, 2026"
      category="Fulfillment & Delivery"
      toc={toc}
    >
      <section id="no-physical" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">1. No Physical Shipping</h2>
        <div className="p-4 bg-blue-950/40 border border-blue-800/60 rounded-xl text-blue-200 text-sm font-semibold">
          StudySwap AI does not ship physical products.
        </div>
        <p>
          All educational study materials, lecture summaries, formula sheets, and AI learning tools offered by StudySwap AI are 100% digital assets. No physical parcels, printed books, or hard copies are dispatched by courier, postal mail, or freight.
        </p>
      </section>

      <section id="electronic-delivery" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">2. Electronic Digital Delivery</h2>
        <p>
          Delivery of all purchased and free study resources is fulfilled electronically and directly within the <strong>StudySwap AI Android Application</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li><strong>Free Notes:</strong> Instantly available for download directly to your Android device upon tapping the download button in the app.</li>
          <li><strong>Paid Digital Notes:</strong> Automatically unlocked in your <strong>Buyer Dashboard</strong> immediately following verified payment authorization via Razorpay.</li>
        </ul>
      </section>

      <section id="delivery-timeline" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">3. Delivery Timeline & Instant Access</h2>
        <p>
          Because our fulfillment system is fully automated via cloud backend infrastructure, digital delivery is typically instantaneous (under 60 seconds). Once authorized:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>Files are bound to your authenticated Firebase user ID.</li>
          <li>You can download files for offline reading directly onto your local device storage.</li>
          <li>You retain persistent re-download access through your account order history.</li>
        </ul>
      </section>

      <section id="access-troubleshooting" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">4. Troubleshooting Digital Access</h2>
        <p>
          If your transaction succeeded in the Android app but your note does not appear in your Buyer Dashboard within 5 minutes, please:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-slate-300">
          <li>Check your internet connection and pull down to refresh the Buyer Dashboard.</li>
          <li>Ensure you are signed in with the same account used during checkout.</li>
          <li>If the issue persists, email our support team with your Razorpay Payment ID.</li>
        </ol>
      </section>

      <section id="shipping-charges" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">5. Shipping & Handling Charges</h2>
        <p>
          Since all deliveries occur electronically over the internet, there are <strong>zero shipping, handling, or packaging fees</strong> associated with any product on StudySwap AI.
        </p>
      </section>

      <section id="support-contact" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">6. Support Inquiries</h2>
        <p>
          For digital delivery assistance, write to our fulfillment team at <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-400 underline">{siteConfig.supportEmail}</a>.
        </p>
      </section>
    </PolicyLayout>
  );
};
