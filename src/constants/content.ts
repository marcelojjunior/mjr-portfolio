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
    id: 'acme',
    companyKey: 'experience.items.acme.company',
    roleKey: 'experience.items.acme.role',
    periodKey: 'experience.items.acme.period',
    bulletsPath: 'experience.items.acme.bullets',
  },
  {
    id: 'north',
    companyKey: 'experience.items.north.company',
    roleKey: 'experience.items.north.role',
    periodKey: 'experience.items.north.period',
    bulletsPath: 'experience.items.north.bullets',
  },
]

export const PRIMARY_TECH = new Set([
  'React',
  'TypeScript',
  'Node.js',
  'React Native',
  'PostgreSQL',
])

export const STACK_GROUPS: StackGroup[] = [
  {
    id: 'mobile',
    labelKey: 'stack.groups.mobile',
    items: ['React Native', 'Expo', 'Flutter'],
  },
  {
    id: 'backend',
    labelKey: 'stack.groups.backend',
    items: ['Node.js', 'PostgreSQL', 'MySQL', 'PHP', 'Laravel', 'Docker'],
  },
  {
    id: 'frontend',
    labelKey: 'stack.groups.frontend',
    items: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind',
      'Bootstrap',
    ],
  },
  {
    id: 'tools',
    labelKey: 'stack.groups.tools',
    items: ['Git', 'GitLab', 'Linux', 'macOS'],
  },
]
