/**
 * StudySwap AI - Official Public Website Configuration
 * 
 * Central configuration for brand identity, contact information,
 * APK distribution path, and legal compliance disclosures.
 */

export interface SiteConfig {
  brandName: string;
  siteName: string;
  siteTagline: string;
  sitePositioning: string;
  siteDescription: string;
  apkDownloadUrl: string;
  apkVersion: string;
  apkReleaseDate: string;
  apkFileSize: string;
  minimumAndroidVersion: string;
  packageId: string;
  supportEmail: string;
  supportPhone: string;
  supportWhatsApp: string;
  whatsappNumber: string;
  whatsappUrl: string;
  location: string;
  locationDescription: string;
  businessHours: string;
  refundSupportWindow: string;
  paymentGatewayProvider: string;
  aiProvider: string;
  currentDistributionChannel: string;
}

export const siteConfig: SiteConfig = {
  brandName: "StudySwap AI",
  siteName: "StudySwap AI",
  siteTagline: "Study Smarter. Learn Faster.",
  sitePositioning: "Your smarter study companion.",
  siteDescription: "StudySwap AI brings study notes, AI-powered learning tools, quizzes, revision assistance, study planning, and secure digital resources together in one student-focused Android app.",
  
  // APK Download Configuration (Centralized static public asset path)
  // Prefer an explicit release URL via Vite env var `VITE_APK_DOWNLOAD_URL`.
  // If not provided, default to the official GitHub Release asset URL so
  // production deployments do not depend on a local `public/downloads/` copy.
  // Example: https://github.com/<owner>/<repo>/releases/download/<tag>/StudySwap-AI.apk
  apkDownloadUrl:
    (import.meta.env as any).VITE_APK_DOWNLOAD_URL ||
    'https://github.com/JivanGursal/studyswap-ai-website/releases/download/v1.0.0/StudySwap-AI.apk',
  apkVersion: "v1.0.0",
  apkReleaseDate: "August 2026",
  apkFileSize: "24.8 MB",
  minimumAndroidVersion: "Android 8.0 (Oreo) or higher",
  packageId: "com.studyswap.ai",

  // Public Support Channels (Confirmed contact information)
  supportEmail: "priyanshus9368@gmail.com",
  supportPhone: "+91 63973 53920",
  supportWhatsApp: "+91 63973 53920",
  whatsappNumber: "916397353920",
  whatsappUrl: "https://wa.me/916397353920",
  location: "Bijnor, Uttar Pradesh, India",
  locationDescription: "Based in Bijnor, Uttar Pradesh, India.",
  businessHours: "Monday to Saturday, 10:00 AM to 6:00 PM IST",
  refundSupportWindow: "7 days from the transaction date",

  // Architecture Reference
  paymentGatewayProvider: "Razorpay (Secured In-App Integration)",
  aiProvider: "Google Gemini AI (via App Backend Service)",
  currentDistributionChannel: "Direct Android APK (Official Website)",
};

/**
 * Global constant for direct APK link access
 */
export const APK_DOWNLOAD_URL = siteConfig.apkDownloadUrl;

