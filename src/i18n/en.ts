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
    terminalLine: 'marcelojunior@dev:~/portfolio$',
    terminalOutput: 'run portfolio',
    badge: 'Full Stack Developer',
    headline: "hey, I'm",
    name: 'Marcelo Junior',
    roleLine: '// Full Stack Developer',
    description:
      'Focused on solving technical problems, building efficient and practical solutions aligned with real user needs.',
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
      soulloop: {
        company: 'Soulloop',
        role: 'Software Engineer',
        period: 'October 2025 — Present',
        workModel: 'Remote',
        location: 'São Paulo, SP',
        bullets: [
          'Developed scalable APIs with Node.js and PostgreSQL handling thousands of daily requests',
          'Led frontend architecture improvements using React and TypeScript',
          'Introduced Docker-based environments to standardize deployments',
        ],
      },
      buzzveltech: {
        company: 'Buzzvel',
        role: 'Tech Manager',
        period: 'March 2025 — October 2025',
        workModel: 'Remote',
        location: 'Lisbon, Portugal',
        bullets: [
          'Developed scalable APIs with Node.js and PostgreSQL handling thousands of daily requests',
          'Led frontend architecture improvements using React and TypeScript',
          'Introduced Docker-based environments to standardize deployments',
        ],
      },
      buzzveldev: {
        company: 'Buzzvel',
        role: 'Software Engineer',
        period: 'November 2022 — February 2025',
        workModel: 'Remote',
        location: 'Lisbon, Portugal',
        bullets: [
          'Developed scalable APIs with Node.js and PostgreSQL handling thousands of daily requests',
          'Led frontend architecture improvements using React and TypeScript',
          'Introduced Docker-based environments to standardize deployments',
        ],
      },
      produtecnica: {
        company: 'Grupo Produtécnica',
        role: 'IT Assistant',
        period: 'February 2022 — July 2022',
        workModel: 'On-site',
        location: 'Balsas, MA',
        bullets: [
          'Developed scalable APIs with Node.js and PostgreSQL handling thousands of daily requests',
          'Led frontend architecture improvements using React and TypeScript',
          'Introduced Docker-based environments to standardize deployments',
        ],
      },
      contabilize: {
        company: 'Contabilize Contabilidade',
        role: 'IT Assistant',
        period: 'January 2021 — January 2022',
        workModel: 'On-site',
        location: 'Balsas, MA',
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
