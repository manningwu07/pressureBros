// src/types/types.ts

export interface NavItem {
  name: string;
  href: string;
}

export interface Button {
  text: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string; // We'll keep this as a string and map to component later
}

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  location?: string;
  service?: string;
  imageSrc: string;
}

export interface BeforeAfterItem {
  title: string;
  before_src: string;
  after_src: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface EquipmentFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceTimeline {
  title: string;
  description: string;
  duration: string;
}

// Modify the datastructure to match the website

// Disclaimers
// DO NOT USE ARRAYS, IF YOU NEED TO, MAKE THE ELEMENTS OBJECTS WITH 1 ATTRBUTES {"paragraph": "insert_text"}[]
// THIS DOES NOT AFFECT NAVBAR/FOOTER ITEMS
// DOES NOT MOBILE DESIGN ADAPT

// Other helpful things
// src, imageSrc will prompt image uploading
// Links are manually made in the pages (set <Link href ={item.link}>content</Link>)
// It may not render for you when u check it out on the main; thats cuz theres caches. Just trust it works C:

export interface PressureBrosData {
  navigation: {
    navbar: {
      logo: string;
      navItems: NavItem[];
      quoteButton: Button;
    };
    footer: {
      title: string;
      description: string;
      contactInfo: {
        phone: string;
        email: string;
        location: string;
      };
      services: { name: string }[];
    };
  };
  homepage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      quoteButton: Button;
      viewWorkButton: Button;
    };
    services: {
      title: string;
      subtitle: string;
      items: Service[];
    };
    serviceAreas: {
      badge: string;
      title: string;
      description: string;
      areas: string[];
      quoteButton: Button;
      mapUrl: string;
    };
    whyChooseUs: {
      title: string;
      reasons: string[];
      cta: {
        title: string;
        description: string;
        button: Button;
      };
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Testimonial[];
    };
    contact: {
      title: string;
      subtitle: string;
      callButton: Button;
      quoteButton: Button;
    };
  };
  beforeAfterPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    gallery: BeforeAfterItem[];
    testimonials: {
      title: string;
      subtitle: string;
      items: Testimonial[];
    };
    cta: {
      title: string;
      subtitle: string;
      quoteButton: Button;
      scheduleButton: Button;
    };
  };
  processPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    steps: ProcessStep[];
    equipmentAndSafety: {
      equipment: {
        title: string;
        features: EquipmentFeature[];
      };
      safety: {
        title: string;
        measures: string[];
      };
    };
    timeline: {
      title: string;
      subtitle: string;
      items: ServiceTimeline[];
    };
    cta: {
      title: string;
      subtitle: string;
      callButton: Button;
      quoteButton: Button;
    };
  };
}
