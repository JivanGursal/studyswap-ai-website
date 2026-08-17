import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';
import { siteConfig } from '../config/siteConfig';

export const PricingPolicyPage: React.FC = () => {
  const toc = [
    { id: 'pricing-philosophy', title: '1. Transparent Pricing Philosophy' },
    { id: 'price-display', title: '2. In-App Price Display Before Checkout' },
    { id: 'currency', title: '3. Currency & Payment Methods' },
    { id: 'taxes-fees', title: '4. Applicable Taxes & Platform Charges' },
    { id: 'no-hidden-costs', title: '5. Zero Hidden Charges' },
    { id: 'price-changes', title: '6. Price Adjustments & Promotions' },
    { id: 'contact', title: '7. Billing Support' },
  ];

  return (
    <PolicyLayout
      title="Pricing & Payment Policy"
      subtitle="Complete disclosure of pricing mechanisms, payment processing, and checkout transparency for StudySwap AI."
      lastUpdated="August 15, 2026"
      category="Commercial Policy"
      toc={toc}
    >
      <section id="pricing-philosophy" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">1. Transparent Pricing Philosophy</h2>
        <p>
          StudySwap AI is committed to fair, student-first pricing transparency. All study note pricing is determined by educational value, length, and subject complexity, with free foundation notes provided where possible.
        </p>
      </section>

      <section id="price-display" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">2. In-App Price Display Before Checkout</h2>
        <p>
          The final payable price for any paid digital study note or resource is always displayed clearly inside the StudySwap AI Android Application prior to payment initiation.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>Item price is explicitly shown on the note details card.</li>
          <li>The final payable sum is presented on the Razorpay payment checkout modal before you authorize the charge.</li>
          <li>No transaction can occur without your explicit confirmation.</li>
        </ul>
      </section>

      <section id="currency" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">3. Currency & Payment Methods</h2>
        <p>
          All product prices on StudySwap AI are denominated in <strong>Indian Rupees (INR - ₹)</strong> unless explicitly stated otherwise.
        </p>
        <p>
          Payments are handled via Razorpay, supporting major domestic Indian payment options including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs sm:text-sm">
          <li>Unified Payments Interface (UPI) — Google Pay, PhonePe, Paytm, BHIM, etc.</li>
          <li>Credit and Debit Cards (Visa, Mastercard, RuPay)</li>
          <li>Net Banking across major Indian banks</li>
          <li>Authorized mobile wallets supported by Razorpay</li>
        </ul>
      </section>

      <section id="taxes-fees" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">4. Applicable Taxes & Charges</h2>
        <p>
          Any applicable statutory taxes or payment gateway processing surcharges, if applicable, will be clearly presented in the order summary breakdown before payment authorization.
        </p>
      </section>

      <section id="no-hidden-costs" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">5. Zero Hidden Charges</h2>
        <p>
          StudySwap AI enforces a strict zero-hidden-fee guarantee. Note purchases are single, one-time transactions for perpetual access on your registered account. There are no surprise monthly subscription auto-debits without explicit consent.
        </p>
      </section>

      <section id="price-changes" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">6. Price Adjustments & Promotional Offers</h2>
        <p>
          Prices for digital study notes may vary periodically based on seasonal revisions, promotions, or author updates. The price charged will always be the price visible at the moment of checkout.
        </p>
      </section>

      <section id="contact" className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white">7. Billing & Payment Inquiries</h2>
        <p>
          If you have questions regarding an in-app receipt or payment charge, reach out to our billing desk at <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-400 underline">{siteConfig.supportEmail}</a>.
        </p>
      </section>
    </PolicyLayout>
  );
};
