import type { ExperienceItem, ProjectItem, StackGroup } from '@/types'

export const PROJECTS: ProjectItem[] = [
  {
    id: 'commerce',
    nameKey: 'projects.items.commerce.name',
    descriptionKey: 'projects.items.commerce.description',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    impactPath: 'projects.items.commerce.impact',
    featured: true,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'mobile',
    nameKey: 'projects.items.mobile.name',
    descriptionKey: 'projects.items.mobile.description',
    tech: ['React Native', 'Expo', 'TypeScript'],
    impactPath: 'projects.items.mobile.impact',
    githubUrl: 'https://github.com',
  },
  {
    id: 'internal',
    nameKey: 'projects.items.internal.name',
    descriptionKey: 'projects.items.internal.description',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    impactPath: 'projects.items.internal.impact',
    githubUrl: 'https://github.com',
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'soulloop',
    companyKey: 'experience.items.soulloop.company',
    roleKey: 'experience.items.soulloop.role',
    periodKey: 'experience.items.soulloop.period',
    workModelKey: 'experience.items.soulloop.workModel',
    locationKey: 'experience.items.soulloop.location',
    bulletsPath: 'experience.items.soulloop.bullets',
  },
  {
    id: 'buzzveltech',
    companyKey: 'experience.items.buzzveltech.company',
    roleKey: 'experience.items.buzzveltech.role',
    periodKey: 'experience.items.buzzveltech.period',
    workModelKey: 'experience.items.buzzveltech.workModel',
    locationKey: 'experience.items.buzzveltech.location',
    bulletsPath: 'experience.items.buzzveltech.bullets',
  },
  {
    id: 'buzzveldev',
    companyKey: 'experience.items.buzzveldev.company',
    roleKey: 'experience.items.buzzveldev.role',
    periodKey: 'experience.items.buzzveldev.period',
    workModelKey: 'experience.items.buzzveldev.workModel',
    locationKey: 'experience.items.buzzveldev.location',
    bulletsPath: 'experience.items.buzzveldev.bullets',
  },
  {
    id: 'produtecnica',
    companyKey: 'experience.items.produtecnica.company',
    roleKey: 'experience.items.produtecnica.role',
    periodKey: 'experience.items.produtecnica.period',
    workModelKey: 'experience.items.produtecnica.workModel',
    locationKey: 'experience.items.produtecnica.location',
    bulletsPath: 'experience.items.produtecnica.bullets',
  },
  {
    id: 'contabilize',
    companyKey: 'experience.items.contabilize.company',
    roleKey: 'experience.items.contabilize.role',
    periodKey: 'experience.items.contabilize.period',
    workModelKey: 'experience.items.contabilize.workModel',
    locationKey: 'experience.items.contabilize.location',
    bulletsPath: 'experience.items.contabilize.bullets',
  },
]

export const STACK_GROUPS: StackGroup[] = [
  {
    id: 'frontend',
    labelKey: 'stack.groups.frontend',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind',
      'Bootstrap',
    ],
  },
  {
    id: 'backend',
    labelKey: 'stack.groups.backend',
    items: [
      'Firebase',
      'WordPress',
      'PHP',
      'Laravel',
      'Docker',
      'Node.js',
      'MySQL',
    ],
  },
  {
    id: 'mobile',
    labelKey: 'stack.groups.mobile',
    items: ['React Native', 'Expo'],
  },
  {
    id: 'tools',
    labelKey: 'stack.groups.tools',
    items: ['Git', 'GitHub', 'GitLab', 'Vercel', 'Linux', 'macOS'],
  },
]
