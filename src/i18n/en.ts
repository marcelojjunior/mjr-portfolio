export const en = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    experience: 'Experiences',
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
    subtitle: 'Some of the projects I have worked on and built.',
    featured: 'Featured',
    impactLabel: 'Impact',
    viewGithub: 'GitHub',
    viewLive: 'Live demo',
    items: {
      weather: {
        name: 'WeatherApp',
        description:
          'Mobile weather app with intelligent city search, real-time conditions, and extended forecasts in a fast and focused experience.',
        impact: [
          'Weather lookup with assisted search for cities worldwide',
          'Mobile experience designed for fast access to current and upcoming forecasts',
          'Local history persistence and support for low-connectivity scenarios',
        ],
      },
      talents: {
        name: 'Talent Fair Scoring',
        description:
          'Web-based scoring management system for the Talent Fair, covering criteria, students, teachers, and continuous progress tracking throughout the year.',
        impact: [
          'Centralizes registration, evaluation, and follow-up workflows in a single system',
          'Organizes dedicated flows for admins, teachers, and evaluators with tailored dashboards',
          'Improves visibility into student progress through automatic calculations and chart-based views',
        ],
      },
      vmfight: {
        name: 'VM Fight',
        description:
          'Institutional landing page built to strengthen the gym’s digital presence and guide users toward booking a trial class.',
        impact: [
          'Navigation structure designed to present classes, schedules, instructors, and location clearly',
          'Copy and calls to action focused on WhatsApp conversion',
          'More engaging visual experience with video, reading rhythm, and smooth transitions',
        ],
      },
      mbgestor: {
        name: 'MB Gestor',
        description:
          'Operational and financial management system for construction projects, bringing income, expenses, reserves, staff, clients, and tasks together in one panel.',
        impact: [
          'Consolidates financial and administrative operations into a centralized interface',
          'Improves business visibility with dashboard metrics, charts, and movement history',
          'Supports project management with calendar views, status tracking, team management, and client follow-up',
        ],
      },
    },
  },
  experience: {
    title: 'Experiences',
    subtitle: 'Some of the professional experiences that have shaped my journey so far.',
    items: {
      soulloop: {
        company: 'Soulloop',
        role: 'Software Engineer',
        period: 'October 2025 — Present',
        workModel: 'Hybrid',
        location: 'São Paulo, SP',
        bullets: [
          'Work on the maintenance and evolution of a React Native mobile application, implementing features and resolving critical bugs',
          'Develop responsive and high-performance interfaces with a focus on user experience',
          'Integrate the application with APIs and external services, ensuring efficient system communication',
          'Collaborate with designers and backend developers to ensure consistency and quality in the product experience',
          'Support the application lifecycle, ensuring stability, continuous fixes, and performance improvements',
          'Participate in scope definition and feature planning',
        ]
      },
      buzzveltech: {
        company: 'Buzzvel',
        role: 'Tech Manager',
        period: 'March 2025 — October 2025',
        workModel: 'Remote',
        location: 'Lisbon, Portugal',
        bullets: [
          'Managed the development team across multiple simultaneous projects, ensuring alignment and efficiency in deliveries',
          'Planned tasks and sprints using Agile methodologies, ensuring organization and predictability',
          'Handled people management, tracking individual performance and supporting team development',
          'Performed code reviews and provided technical support to ensure delivery quality',
          'Organized and monitored project deliveries, ensuring deadlines and objectives were met',
          'Participated in strategic decisions aligned with business goals',
        ]
      },
      buzzveldev: {
        company: 'Buzzvel',
        role: 'Software Engineer',
        period: 'November 2022 — February 2025',
        workModel: 'Remote',
        location: 'Lisbon, Portugal',
        bullets: [
          'Worked as a front-end developer building and maintaining web and mobile applications using React, Next.js, React Native, and TypeScript',
          'Developed responsive and accessible interfaces with a strong focus on performance and user experience',
          'Contributed to the development of landing pages, internal systems, and institutional websites, following best development practices',
          'Built custom WordPress solutions, including tailored blocks and themes for different project needs',
          'Performed code reviews and collaborated with the team to ensure quality and consistency in deliverables',
        ]
      },
      produtecnica: {
        company: 'Grupo Produtécnica',
        role: 'IT Assistant',
        period: 'February 2022 — July 2022',
        workModel: 'On-site',
        location: 'Balsas, MA',
        bullets: [
          'Provided on-site and remote technical support for headquarters and branch offices, ensuring service continuity',
          'Handled system maintenance and responded to user incidents and service requests',
          'Analyzed system failures and identified opportunities for process improvement',
          'Gathered requirements and created functional specifications for systems',
          'Performed queries and data analysis in Oracle databases to support diagnostics and improvements',
          'Installed, configured, and maintained corporate systems and tools',
          'Monitored and maintained security systems (antivirus and firewall), contributing to a more secure environment',
        ]
      },
      contabilize: {
        company: 'Contabilize Contabilidade',
        role: 'IT Assistant',
        period: 'January 2021 — January 2022',
        workModel: 'On-site',
        location: 'Balsas, MA',
        bullets: [
          'Provided technical support by resolving hardware and software incidents, ensuring service continuity',
          'Managed user accounts and permissions in Active Directory, improving access control and security',
          'Executed PostgreSQL queries to support internal operations and data validation',
          'Configured and maintained corporate systems and tools, ensuring performance and reliability',
          'Monitored and maintained security systems (antivirus and firewall), reducing risks and vulnerabilities',
        ]
      },
    },
  },
  stack: {
    title: 'Stack',
    subtitle: 'Technologies that are part of my day-to-day development work.',
    groups: {
      main: 'Main Stack',
      tools: 'Tools',
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'If you want to get in touch, these are the channels where you can find me.',
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
