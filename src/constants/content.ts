import type { ExperienceItem, ProjectItem, StackGroup } from '@/types'

export const PROJECTS: ProjectItem[] = [
  {
    id: 'vmfight',
    nameKey: 'projects.items.vmfight.name',
    descriptionKey: 'projects.items.vmfight.description',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageUrl: '/projects/vmfight.png',
    impactPath: 'projects.items.vmfight.impact',
  },
  {
    id: 'talents',
    nameKey: 'projects.items.talents.name',
    descriptionKey: 'projects.items.talents.description',
    tech: ['React', 'TypeScript', 'Firebase', 'Recharts'],
    imageUrl: '/projects/talents.png',
    impactPath: 'projects.items.talents.impact',
  },
  {
    id: 'mbgestor',
    nameKey: 'projects.items.mbgestor.name',
    descriptionKey: 'projects.items.mbgestor.description',
    tech: ['React', 'TypeScript', 'Firebase', 'Recharts'],
    imageUrl: '/projects/mbgestor.png',
    impactPath: 'projects.items.mbgestor.impact',
  },
  {
    id: 'weather',
    nameKey: 'projects.items.weather.name',
    descriptionKey: 'projects.items.weather.description',
    tech: ['React Native', 'TypeScript', 'Axios', 'NativeWind'],
    imageUrl: '/projects/weather.png',
    impactPath: 'projects.items.weather.impact',
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
    id: 'main',
    labelKey: 'stack.groups.main',
    items: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Tailwind',
      'Node.js',
      'WordPress',
      'Firebase',
    ],
  },
  {
    id: 'tools',
    labelKey: 'stack.groups.tools',
    items: ['Git', 'GitHub', 'Docker', 'Vercel'],
  },
]
