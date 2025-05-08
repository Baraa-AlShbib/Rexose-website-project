export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'app' | 'marketing' | 'branding';
  images: string[];
  outcomes: string[];
  services: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  comment: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

export interface FAQ {
  question: string;
  answer: string;
}