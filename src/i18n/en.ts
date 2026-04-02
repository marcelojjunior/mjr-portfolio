export const en = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    experience: 'Experience',
    stack: 'Stack',
    contact: 'Contact',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    toggleTheme: 'Toggle color theme',
    toggleLanguage: 'Toggle language',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    mainNav: 'Primary navigation',
  },
  hero: {
    terminalLine: 'whoami',
    terminalOutput: 'Full Stack Developer (Mobile · Backend · Frontend)',
    badge: 'available for opportunities',
    headline: "hey, I'm",
    name: 'Marcelo Junior',
    roleLine: '// building scalable and user-focused digital products',
    description:
      'I design and build end-to-end digital solutions — from backend architecture to mobile and web applications, focusing on performance, scalability, and user experience.',
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Delivery, impact, and production systems.',
    featured: 'Featured',
    impactLabel: 'Impact',
    viewGithub: 'GitHub',
    viewLive: 'Live demo',
    items: {
      commerce: {
        name: 'Commerce platform API',
        description:
          'Problem: slow checkout and fragile integrations. Solution: redesigned API layer with caching, idempotent payments, and observability.',
        impact: [
          'Reduced API response time by ~40%',
          'Handled 10k+ requests/day at peak',
          'Improved checkout completion through clearer error handling',
        ],
      },
      mobile: {
        name: 'Field operations mobile app',
        description:
          'Problem: offline-first workflows missing on legacy tools. Solution: React Native app with sync queue and conflict resolution.',
        impact: [
          'Cut data entry time for field teams',
          'Reliable offline mode with background sync',
          'Shipped to iOS and Android from a single codebase',
        ],
      },
      internal: {
        name: 'Internal admin dashboard',
        description:
          'Problem: fragmented tools for ops. Solution: unified React dashboard with role-based access and real-time metrics.',
        impact: [
          'Consolidated workflows into one interface',
          'Faster decisions with live operational data',
          'Type-safe frontend with TypeScript',
        ],
      },
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'Roles focused on scale, performance, and delivery.',
    items: {
      acme: {
        company: 'ACME Labs',
        role: 'Senior Full Stack Engineer',
        period: '2022 — Present',
        bullets: [
          'Developed scalable APIs with Node.js and PostgreSQL handling thousands of daily requests',
          'Led frontend architecture improvements using React and TypeScript',
          'Introduced Docker-based environments to standardize deployments',
        ],
      },
      north: {
        company: 'Northwind Systems',
        role: 'Full Stack Developer',
        period: '2019 — 2022',
        bullets: [
          'Built and maintained Laravel and MySQL services for B2B clients',
          'Delivered React Native modules used by mobile sales teams',
          'Reduced incident response time with structured logging and alerts',
        ],
      },
    },
  },
  stack: {
    title: 'Stack',
    subtitle: 'Tools I use to ship end-to-end.',
    groups: {
      mobile: 'Mobile',
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Tools',
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'Direct channels — no form.',
    emailAria: 'Send email to Marcelo Junior',
    externalAria: 'Opens in a new tab',
    cards: {
      email: {
        title: 'Email',
        action: 'Send email',
      },
      github: {
        title: 'GitHub',
        action: 'View profile',
      },
      linkedin: {
        title: 'LinkedIn',
        action: 'Open profile',
      },
    },
  },
  footer: {
    rights: 'All rights reserved.',
  },
} as const

export type Messages = typeof en
