// Types pour l'application SilverNote
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
}

export interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: Record<string, any>;
}

export interface FeatureItem {
  img: string;
  subject: string;
  title: string;
  description: string;
  btn?: {
    href: string;
    content: string;
  };
  features: Feature[];
}

export interface RouteMetadata {
  title: string;
  description?: string;
  image?: string;
}

export interface AppConfig {
  app: {
    name: string;
    description: string;
    version: string;
    author: string;
  };
  colors: Record<string, string>;
  urls: Record<string, string>;
  contact: Record<string, string>;
  features: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  stats: Record<string, string>;
}
