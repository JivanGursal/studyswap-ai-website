import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';
import { siteConfig } from '../config/siteConfig';

export const RefundPolicyPage: React.FC = () => {
  const toc = [
    { id: 'overview', title: '1. Overview of Digital Products' },
    { id: 'cancellation', title: '2. Cancellation Policy' },
    { id: 'refund-eligibility', title: '3. Refund Eligibility & Genuine Cases' },
    { id: 'ineligible-cases', title: '4. Non-Refundable Scenarios' },
    { id: 'payment-failures', title: '5. Failed & Duplicate Transactions' },
    { id: 'claim-process', title: '6. How to Submit a Refund Claim' },
    { id: 'processing-time', title: '7. Refund Processing & Mode of Settlement' },
  ];

  return (
    <PolicyLayout
      title="Refund and Cancellation Policy"
      subtitle="Transparent refund, cancellation, and transaction dispute guidelines for StudySwap AI digital study resources."
      lastUpdated="August 15, 2026"
      category="Payments & Refunds"
      toc={toc}
    >
      <section id="overview" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">1. Overview of Digital Products</h2>
        <p>
          StudySwap AI operates as an Android educational platform offering digital study notes, academic revision materials, and AI study assistance.
        </p>
        <p>
          Because digital content is delivered electronically and access is provisioned immediately upon successful transaction completion via Razorpay, standard cancellations and refunds are subject to specific digital product conditions.
        </p>
      </section>

      <section id="cancellation" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">2. Cancellation Policy</h2>
        <p>
          Once a digital note purchase is confirmed and digital delivery is initiated to your Android account, orders cannot be cancelled mid-download. You are advised to review note descriptions, sample syllabus previews, and subject tags before finalizing your payment.
        </p>
      </section>

      <section id="refund-eligibility" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">3. Refund Eligibility & Genuine Resolution Cases</h2>
        <p>
          We prioritize student satisfaction and will investigate and resolve genuine defect cases. A purchase may be eligible for a refund or replacement credit in the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Defective or Corrupted Files:</strong> The downloaded file is corrupt, unreadable, blank, or technically inaccessible despite troubleshooting.
          </li>
          <li>
            <strong>Material Misrepresentation:</strong> The file content is substantially different from the displayed note description or title.
          </li>
          <li>
            <strong>Delivery Failure:</strong> Your payment was debited, but digital access was not unlocked in your Buyer Dashboard after system verification.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          Claims must be reported within our official support window: <strong>{siteConfig.refundSupportWindow}</strong> from the transaction date.
        </p>
      </section>

      <section id="ineligible-cases" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">4. Non-Refundable Scenarios</h2>
        <p>Refunds will not be granted in the following scenarios:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>Change of mind after successful file download and access.</li>
          <li>Lack of study time or post-exam purchase regrets.</li>
          <li>Incompatibility resulting from unverified devices running below our minimum system requirement ({siteConfig.minimumAndroidVersion}).</li>
        </ul>
      </section>

      <section id="payment-failures" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">5. Failed & Duplicate Transactions</h2>
        <p>
          In the event of a payment failure where money was debited from your bank account but no order confirmation was generated in StudySwap AI, the amount is typically auto-refunded by Razorpay and your banking partner within standard banking turnaround times (usually 3 to 7 working days).
        </p>
        <p>
          If you experience a duplicate charge for a single note item, please share both transaction IDs with our support desk for immediate reconciliation.
        </p>
      </section>

      <section id="claim-process" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">6. How to Submit a Refund Claim</h2>
        <p>To report an issue with an in-app purchase, please email our support team with:</p>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
          <p>1. <strong>Registered Email Address:</strong> The email linked with your StudySwap AI account.</p>
          <p>2. <strong>Order ID / Razorpay Payment ID:</strong> Found under <em>Buyer Dashboard &gt; Order History</em>.</p>
          <p>3. <strong>Issue Description:</strong> Brief explanation and screenshot of the corrupted/inaccessible file.</p>
          <p>4. <strong>Send to:</strong> <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-400 underline">{siteConfig.supportEmail}</a></p>
        </div>
      </section>

      <section id="processing-time" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">7. Refund Processing & Mode of Settlement</h2>
        <p>
          Once approved, refunds are credited back to the original source payment method (e.g. UPI, Net Banking, Credit/Debit Card) via Razorpay. Settlement timeframes depend on your issuing bank.
        </p>
      </section>
    </PolicyLayout>
  );
};
