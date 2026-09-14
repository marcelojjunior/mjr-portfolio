/**
 * The stack shown in the home marquee, in the order it reads best.
 * `icon` is a simple-icons export name; `undefined` falls back to the label alone.
 */
export type TechItem = { label: string; icon?: string }

export const STACK: TechItem[] = [
  { label: 'TypeScript', icon: 'siTypescript' },
  { label: 'React', icon: 'siReact' },
  { label: 'Next.js', icon: 'siNextdotjs' },
  { label: 'Astro', icon: 'siAstro' },
  { label: 'React Native', icon: 'siReact' },
  { label: 'Laravel', icon: 'siLaravel' },
  { label: 'PHP', icon: 'siPhp' },
  { label: 'PostgreSQL', icon: 'siPostgresql' },
  { label: 'MySQL', icon: 'siMysql' },
  { label: 'Firebase', icon: 'siFirebase' },
  { label: 'Docker', icon: 'siDocker' },
  { label: 'WordPress', icon: 'siWordpress' },
  { label: 'Expo', icon: 'siExpo' },
  { label: 'Figma', icon: 'siFigma' },
]
