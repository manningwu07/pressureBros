// Main content types

import { type HeroSection } from "./components";

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type CTASection = {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
};

export type MainContent = {
  components: {
    hero: HeroSection;
  };
  pages: {
    features: {
      title: string;
      items: Feature[];
    };
    stats: {
      title: string;
      items: Array<{ paragraph: string }>;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Testimonial[];
    };
    cta: CTASection;
  };
};
