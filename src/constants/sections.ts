export const SECTION_IDS = {
  hero: 'hero',
  projects: 'projects',
  experience: 'experience',
  stack: 'stack',
  contact: 'contact',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]
