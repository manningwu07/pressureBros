// Navigation and footer types
export type NavLink = {
  text: string;
  href: string;
  join?: boolean;
};

export type NavButton = NavLink & {
  variant: string;
};

export type FooterLinkSection = {
  title: string;
  items: NavLink[];
};

export type NavFooterContent = {
  navigation: {
    links: NavLink[];
    buttons: NavButton[];
  };
  footer: {
    social: {
      instagram: string;
      twitter: string;
      facebook: string;
    };
    links: FooterLinkSection[];
  };
};

// Hero
export type HeroSection = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  cta: string;
};
