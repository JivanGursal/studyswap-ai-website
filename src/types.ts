export type AppRoute =
  | '/'
  | '/features'
  | '/ai-assistant'
  | '/notes'
  | '/how-it-works'
  | '/pricing'
  | '/download'
  | '/about'
  | '/contact'
  | '/privacy-policy'
  | '/terms-and-conditions'
  | '/refund-and-cancellation'
  | '/shipping-policy'
  | '/pricing-policy';

export interface NavItem {
  label: string;
  href: AppRoute;
  isSpecialCTA?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  category: 'marketplace' | 'ai' | 'dashboard' | 'security';
  description: string;
  iconName: string;
  badge?: string;
  details: string[];
}

export interface AIModeItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  examplePrompt: string;
  exampleOutput: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'download' | 'general' | 'payment' | 'ai';
}

export interface PolicySection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    paragraphs: string[];
  }[];
}
