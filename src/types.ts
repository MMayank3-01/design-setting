export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  image: string;
  awards?: string;
  client: string;
  description: string;
}

export interface BookingSlot {
  time: string;
  period: 'am' | 'pm';
  available: boolean;
}
