import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Smartphone,
  Phone
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    orderId: '',
    message: '',
  });

  const [submittedEmailClient, setSubmittedEmailClient] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subjectLine = encodeURIComponent(
      `[StudySwap AI Support] ${formData.subject || 'Inquiry'}${formData.orderId ? ` (Order: ${formData.orderId})` : ''}`
    );

    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n${formData.orderId ? `Order / Transaction ID: ${formData.orderId}\n` : ''}\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subjectLine}&body=${bodyContent}`;
    setSubmittedEmailClient(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Official Support & Contact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about StudySwap AI, APK downloads, in-app note purchases, or payment assistance? Reach out directly to our team.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Channel */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white">Email Support</h2>
              <p className="text-xs text-slate-400">
                For order inquiries, download issues, or app feedback.
              </p>
              <div className="pt-1">
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 underline break-all font-semibold"
                >
                  {siteConfig.supportEmail}
                </a>
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Email Support</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp / Phone Support */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white">WhatsApp & Phone</h2>
              <p className="text-xs text-slate-400">
                Direct phone and WhatsApp messaging for quick assistance.
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${siteConfig.supportPhone}`}
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  {siteConfig.supportPhone}
                </a>
              </div>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Location Details */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white">Location & Hours</h2>
              <p className="text-xs text-slate-400">
                Operational presence & active customer support timings.
              </p>
              <div className="space-y-1 text-xs text-slate-300 pt-1">
                <p className="font-semibold text-white">{siteConfig.locationDescription}</p>
                <p className="text-slate-400 text-[11px] flex items-center gap-1 mt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{siteConfig.businessHours}</span>
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 text-center">
              Brand: {siteConfig.brandName}
            </div>
          </div>
        </div>

        {/* Contact Form & App Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Send a Message</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill out the details below to email our support team directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-slate-300 font-medium mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-slate-300 font-medium mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="subject-input" className="block text-slate-300 font-medium mb-1.5">
                    Subject / Topic *
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Note download, Payment question"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="order-input" className="block text-slate-300 font-medium mb-1.5">
                    Order / Razorpay ID (Optional)
                  </label>
                  <input
                    id="order-input"
                    type="text"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    placeholder="e.g. #ORD-12345 or pay_xyz"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message-input" className="block text-slate-300 font-medium mb-1.5">
                  Message Details *
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, device model, or any error you encountered..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                id="submit-contact-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email Client</span>
              </button>
            </form>

            {submittedEmailClient && (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>
                  Your email client has been prepared. You can also message us directly at <code className="text-emerald-100">{siteConfig.supportEmail}</code>.
                </span>
              </div>
            )}
          </div>

          {/* Right Information Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span>In-App Assistance Note</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you are contacting support about an in-app note purchase, you can find your Order ID inside the Android app under <strong>Buyer Dashboard &gt; Order History</strong>.
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p>• Fast response during business hours</p>
                <p>• Direct support via verified email and WhatsApp</p>
                <p>• No automated bot walls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
