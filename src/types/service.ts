export type ServiceCategory = 
  | 'Preventive Care'
  | 'Aesthetic & Smile'
  | 'Restorative & Surgical'
  | 'Comfort & Specialized';

export interface TreatmentStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface DetailedPhase {
  phase: string;
  title: string;
  narrative: string;
}

export interface SymptomSign {
  badge: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ServiceCategory;
  emoji: string;
  shortDesc: string;
  intro: string;
  h1Html?: string;
  artLabel: string;
  imageUrl?: string;
  badgeLabel?: string;
  features: TreatmentStep[];
  procedures: string[];
  duration: string;
  specialistId: string;
  specialistName: string;
  specialistTitle: string;
  idealFor: string;
  note: string;
  questionsTitle?: string;
  questionsDesc?: string;
  // Rich elaborated content
  overviewParagraphs: string[];
  symptomsAndSigns?: {
    heading: string;
    intro: string;
    items: SymptomSign[];
  };
  detailedPhases?: DetailedPhase[];
  recoveryAndCare?: {
    heading: string;
    paragraphs: string[];
    tips: string[];
  };
  faqs?: ServiceFaq[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  badge: string;
  avatarEmoji: string;
  bio: string;
  education: string;
  specialties: string[];
}

export interface BookingPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string;
  service: string;
  preferredDate: string;
  notes: string;
}
