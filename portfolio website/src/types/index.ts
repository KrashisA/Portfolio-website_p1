export type ChannelId = 'overview' | 'about' | 'projects' | 'contact';

export interface ChannelMeta {
  index: number;
  id: ChannelId;
  code: string;       // e.g. "CH 01"
  label: string;      // e.g. "About"
  subtitle: string;   // e.g. "( CH 01 — About )"
  title: string;      // e.g. "About"
  baselineMeter: number;
}

export interface TrackItem {
  id: string;
  title: string;
  artist: string;
  label: string;
  bpm: string;
  key: string;
  lufs: string;
}

export interface CatalogRelease {
  catNo: string;
  title: string;
  format: string;
  status: string;
}

export interface StudioSpec {
  category: string;
  headline: string;
  items: string[];
}

export interface PricingTier {
  id: string;
  category: string;
  price: string;
  unit: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
