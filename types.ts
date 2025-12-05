import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string; // For grid span control
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}