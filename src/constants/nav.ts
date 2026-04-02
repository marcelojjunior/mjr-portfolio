import { SECTION_IDS } from '@/constants/sections'

export const NAV_ITEMS = [
  { id: SECTION_IDS.hero, labelKey: 'nav.home' },
  { id: SECTION_IDS.projects, labelKey: 'nav.projects' },
  { id: SECTION_IDS.experience, labelKey: 'nav.experience' },
  { id: SECTION_IDS.stack, labelKey: 'nav.stack' },
  { id: SECTION_IDS.contact, labelKey: 'nav.contact' },
] as const
