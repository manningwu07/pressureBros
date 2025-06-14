// Modify the datastructure to match the website

// Disclaimers
// DO NOT USE ARRAYS, IF YOU NEED TO, MAKE THE ELEMENTS OBJECTS WITH 1 ATTRBUTES {"paragraph": "insert_text"}[]
// THIS DOES NOT AFFECT NAVBAR/FOOTER ITEMS
// DOES NOT MOBILE DESIGN ADAPT

// Other helpful things
// src, imageSrc will prompt image uploading
// Links are manually made in the pages (set <Link href ={item.link}>content</Link>)
// It may not render for you when u check it out on the main; thats cuz theres caches. Just trust it works C:
// Updated DataStructure Interface
export interface DataStructure {
  components: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      link: string;
      cta: string;
    };
    joinLink: string;
  };

  landing: {
    gallary: {
      imageSrc: string;
    }[];
    whyJoin: {
      title: string;
      reason: string;
      imageSrc: string;
      accolades: {
        paragraph: string;
      }[];
    };
    whatYouGet: {
      title: string;
      list: {
        paragraph: string;
      }[];
      learnMore: {
        text: string;
        href: string;
      }[];
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: {
        quote: string;
        author: string;
        role: string;
      }[];
    };
    cta: {
      title: string;
      description: string;
      button: {
        text: string;
        href: string;
      };
      imageSrc: string;
    };
    faq: {
      title: string;
      subtitle: string;
      faqData: {
        question: string;
        answer: string;
      }[];
    };
  };
  aeroAdvantage: {
    opener: {
      cta: string;
      title: string;
      description: string;
      priceText: string;
    };

    photos: {
      imageSrc: string;
    }[];
    locationAndDatesSection: {
      title: string;
      locationsAndDates: {
        location: string;
        date: string;
        time: string;
      }[];
    };
    teamTitle: string;
    teamMembers: {
      name: string;
      bio: string;
      imageSrc: string;
    }[];
  };
  about: {
    mission: {
      title: string;
      description: string;
      imageSrc: string;
    };
    board: {
      students: {
        name: string;
        position: string;
        department: string;
        imageSrc: string;
      }[];
      parents: {
        name: string;
        position: string;
        department: string;
        imageSrc: string;
      }[];
    };
  };
  students: {
    calendarLink: string;
    upcomingEvents: {
      date: string;
      title: string;
      description: string;
      time: string;
      buttonText: string;
      details: {
        location: string;
        deadlines: {
          signup: string;
          fees: string;
          drop: string;
        };
        moreInfoLink: string;
        additionalInfo: string;
      };
    }[];
    upcomingDates: {
      date: string;
      event: string;
      type: string;
    }[];
    tournamentInfo: {
      header: string;
      description: { paragraph: string }[];
    }[];
    resources: {
      href: string;
      text: string;
    }[];
  };
  parents: {
    support: {
      title: string;
      description: string;
      link: string;
    };
    judging: {
      title: string;
      videoDescription: string;
      videoEmbedUrl: string;
      resourcesTitle: string;
      resources: {
        label: string;
        href: string;
      }[];
      trainingVideosTitle: string;
      trainingVideos: {
        label: string;
        href: string;
      }[];
      ballotTitle: string;
      ballotDescription: string;
      ballotImage: { src: string; captions: string };
      paradigmTitle: string;
      paradigmDescription: string;
      paradigmImage: { src: string; captions: string };
      tabroomTitle: string;
      tabroomDescription: string;
      tabroomLink: string;
    };
    mentor: {
      title: string;
      videoSrc: string;
      clearanceInstructions: {
        title: string;
        description: string;
      }[];
      additionalLinks: {
        text: string;
        href: string;
      }[];
    };
  };
}
