export interface WebsiteConfig {
  // Brand Information
  brand: {
    name: string
    tagline: string
    description: string
    logo?: string
  }

  // Hero Section
  hero: {
    badge: {
      icon: string
      text: string
    }
    headline: string
    subheadline: string
    description: string
    primaryCTA: {
      text: string
      action: string
    }
    secondaryCTA: {
      text: string
      action: string
    }
    heroImage: {
      src: string
      alt: string
    }
    floatingElements: Array<{
      src: string
      alt: string
      position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    }>
  }

  // Problem-Solution Section
  problemSolution: {
    title: string
    subtitle: string
    problem: {
      badge: string
      title: string
      image: {
        src: string
        alt: string
      }
      points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      badge: string
      title: string
      image: {
        src: string
        alt: string
      }
      points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
  }

  // Features Section
  features: {
    title: string
    subtitle: string
    items: Array<{
      icon: string
      title: string
      description: string
      image: {
        src: string
        alt: string
      }
    }>
  }

  // Video Demo Section
  videoDemo: {
    title: string
    subtitle: string
    video: {
      src: string
      poster?: string
    }
    uiScreenshots: Array<{
      src: string
      alt: string
      caption: string
    }>
    cta: {
      text: string
      description: string
    }
  }

  // How It Works Section
  howItWorks: {
    title: string
    subtitle: string
    steps: Array<{
      icon: string
      title: string
      description: string
      image: {
        src: string
        alt: string
      }
    }>
    architecture: {
      title: string
      description: string
      image: {
        src: string
        alt: string
      }
      technologies: string[]
    }
  }

  // Theme Configuration
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
  }
}

// Default configuration for Aaladin AI
export const websiteConfig: WebsiteConfig = {
  brand: {
    name: "Justice AI",
    tagline: "Know Your Rights, Take Action",
    description:
      "Justice AI empowers individuals with instant, actionable legal guidance through an AI-powered interface. Understand your rights, learn the law, and take the next step toward justice.",
    logo: "/logo-justiceai.svg",
  },

  hero: {
    badge: {
      icon: "ShieldCheck",
      text: "Powered by Aaladin AI",
    },
    headline: "Justice AI",
    subheadline: "Understand the law. Know your rights. Take action.",
    description:
      "Facing a crime or legal situation? Justice AI helps you understand the laws that apply and guides you through the right actions to take—whether it's harassment, fraud, theft, or any injustice.",
    primaryCTA: {
      text: "Contact Us to Get Started",
      action: "https://www.aaladinai.com/contact",
    },
    secondaryCTA: {
      text: "See a Live Example",
      action: "#demo",
    },
    heroImage: {
      src: "/1.jpeg",
      alt: "AI Legal Assistance Interface",
    },
    floatingElements: [
      {
        src: "/icon-crime-report.svg",
        alt: "Report Crime",
        position: "top-left",
      },
      {
        src: "/icon-helpline-chat.svg",
        alt: "Live Helpline Chat",
        position: "bottom-right",
      },
    ],
  },

  problemSolution: {
    title: "Justice Made Accessible",
    subtitle: "Empowering individuals to act with confidence",
    problem: {
      badge: "The Problem",
      title: "Lack of Legal Awareness Leads to Injustice",
      image: {
        src: "/solution1.jpg",
        alt: "User being harassed and confused about what to do",
      },
      points: [
        {
          icon: "AlertTriangle",
          title: "Victims Don't Know What to Do",
          description:
            "People facing harassment, assault, or fraud often don't know which laws apply or where to get help.",
        },
        {
          icon: "UserX",
          title: "Fear and Confusion",
          description:
            "Victims fear retaliation or legal complexity, preventing them from taking action.",
        },
        {
          icon: "HelpCircle",
          title: "Lack of Immediate Guidance",
          description:
            "There's no instant, accessible way for people to understand the law and next steps.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      title: "AI-Powered Legal Guidance & Action",
      image: {
        src: "/solution2.jpeg",
        alt: "Justice AI helping user with harassment case",
      },
      points: [
        {
          icon: "ShieldCheck",
          title: "Instant Legal Steps",
          description:
            "Get immediate legal guidance based on your input using language-based AI trained on local laws.",
        },
        {
          icon: "PhoneCall",
          title: "Connect with Helplines",
          description:
            "Automatically connect with verified legal support lines or emergency services if needed.",
        },
        {
          icon: "MapPin",
          title: "Location-Based Help",
          description:
            "Receive recommendations based on your location, including nearest police stations and legal aid offices.",
        },
      ],
    },
  },

  features: {
    title: "What Makes Justice AI Unique?",
    subtitle: "An AI system built with empathy, law, and accessibility in mind.",
    items: [
      {
        icon: "MessageCircle",
        title: "Live Chat Simulation",
        description:
          "Conversational interface that guides victims step-by-step through their legal options.",
        image: {
          src: "/feature3.jpg",
          alt: "Chat UI for crime reporting",
        },
      },
      {
        icon: "FileText",
        title: "Crime-to-Action Mapping",
        description:
          "Instantly map any incident to the relevant legal sections and penalties in your jurisdiction.",
        image: {
          src: "/feature1.jpg",
          alt: "Legal match system",
        },
      },
      {
        icon: "Phone",
        title: "Emergency Integration",
        description:
          "Call helplines or alert local authorities directly from the platform.",
        image: {
          src: "/feature2.jpg",
          alt: "Emergency call interface",
        },
      },
    ],
  },

  videoDemo: {
    title: "See How Justice AI Works",
    subtitle: "A real-world example: Reporting harassment on public transport",
    video: {
      src: "/videos/justiceai-demo.mp4",
      poster: "/images/justiceai-demo-poster.jpg",
    },
    uiScreenshots: [
      {
        src: "/screens/chat-simulation.jpg",
        alt: "Chat simulation",
        caption: "Simulated legal chat with helpline",
      },
      {
        src: "/screens/legal-match.jpg",
        alt: "Legal section match",
        caption: "Identifying relevant penal code section",
      },
    ],
    cta: {
      text: "Try the Demo",
      description: "Experience how Justice AI handles real-life scenarios.",
    },
  },

  howItWorks: {
    title: "How Justice AI Works",
    subtitle: "From input to actionable justice in 4 steps",
    steps: [
      {
        icon: "Edit3",
        title: "Describe the Incident",
        description:
          "User explains what happened in plain language. The AI listens and identifies the type of incident.",
        image: {
          src: "/steps/step1-describe.svg",
          alt: "Describe incident",
        },
      },
      {
        icon: "Search",
        title: "Analyze the Law",
        description:
          "The AI matches the situation with relevant laws like Section 354 for harassment, theft, or fraud.",
        image: {
          src: "/steps/step2-analyze.svg",
          alt: "Analyze law",
        },
      },
      {
        icon: "Map",
        title: "Give Local Recommendations",
        description:
          "The system checks your location to suggest nearby police stations, legal aid, and helplines.",
        image: {
          src: "/steps/step3-recommend.svg",
          alt: "Location-based help",
        },
      },
      {
        icon: "PhoneCall",
        title: "Help You Take Action",
        description:
          "Get step-by-step instructions, documentation tips, and emergency contacts to take real action.",
        image: {
          src: "/steps/step4-action.svg",
          alt: "Take action",
        },
      },
    ],
    architecture: {
      title: "Built on Responsible AI",
      description:
        "Justice AI uses a fine-tuned language model trained on legal texts, helpline transcripts, and public safety procedures. We ensure the information is accurate, safe, and community-approved.",
      image: {
        src: "/architecture.svg",
        alt: "Justice AI Architecture Diagram",
      },
      technologies: [
        "GPT-based Legal Reasoning",
        "Location-Aware Processing",
        "Real-time Helpline API",
        "Multilingual NLP",
      ],
    },
  },

  theme: {
    primaryColor: "#1D4ED8", // justice blue
    secondaryColor: "#9333EA", // purple for urgency & trust
    accentColor: "#10B981", // green for action & hope
  },
}

