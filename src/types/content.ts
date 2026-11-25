import type { ImageMetadata } from 'astro';

/** Contratos compartidos. Los datos se renderizan en Astro, no en el navegador. */
export interface PageMetadata {
  title: string;
  description: string;
}
export interface ContentCard {
  title: string;
  image: string;
  description: string;
  href?: string;
}
export interface ServiceDefinition extends ContentCard {
  id: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface WorkflowStep {
  title: string;
  description: string;
}
export interface HeroSlide {
  image: string;
  label: string;
  position?: string;
  mobilePosition?: string;
}
export interface ServiceHeroData {
  image: string | ImageMetadata;
  alt: string;
  width: number;
  height: number;
  eyebrow: string;
  line1: string;
  line2: string;
  intro: string;
  service?: string;
  exploreHref: string;
  exploreLabel: string;
  exploreIcon: string;
  signature: string;
}
export interface Specialty extends ContentCard {
  alt: string;
  service: string;
}
export interface Brand {
  name: string;
  image: string;
  white: boolean;
  width?: number;
  height?: number;
}
