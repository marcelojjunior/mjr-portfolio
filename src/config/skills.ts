import type { Locale } from './site'
import type { TechItem } from './stack'

/**
 * The About page groups skills by what Marcelo is hired to do, not by language.
 * Kept apart from STACK: the home marquee is a glance, this is the list someone
 * reads when deciding whether to call.
 */
export type SkillGroup = {
  id: string
  label: Record<Locale, string>
  items: TechItem[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'mobile',
    label: { pt: 'Desenvolvimento mobile', en: 'Mobile development' },
    items: [
      { label: 'React Native', icon: 'siReact' },
      { label: 'TypeScript', icon: 'siTypescript' },
      { label: 'Expo', icon: 'siExpo' },
    ],
  },
  {
    id: 'web',
    label: { pt: 'Desenvolvimento web', en: 'Web development' },
    items: [
      { label: 'React', icon: 'siReact' },
      { label: 'Next.js', icon: 'siNextdotjs' },
      { label: 'TypeScript', icon: 'siTypescript' },
      { label: 'Astro', icon: 'siAstro' },
      { label: 'WordPress', icon: 'siWordpress' },
    ],
  },
  {
    id: 'backend',
    label: { pt: 'Back-end', en: 'Back end' },
    items: [
      { label: 'PHP', icon: 'siPhp' },
      { label: 'Laravel', icon: 'siLaravel' },
      { label: 'PostgreSQL', icon: 'siPostgresql' },
      { label: 'MySQL', icon: 'siMysql' },
      { label: 'Firebase', icon: 'siFirebase' },
      { label: 'Docker', icon: 'siDocker' },
    ],
  },
  {
    id: 'design',
    label: { pt: 'UI/UX', en: 'UI/UX' },
    items: [{ label: 'Figma', icon: 'siFigma' }],
  },
]
