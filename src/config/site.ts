export const SITE_URL = 'https://marcelojunior.dev'

export const LOCALES = ['pt', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'pt'

/** OpenGraph / hreflang codes. */
export const LOCALE_TAGS: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
}

/**
 * Localised path segments. Segments are translated, Project slugs are not.
 * See docs/adr/0002-bilingual-content-and-url-strategy.md
 */
export const SEGMENTS = {
  projects: { pt: 'projetos', en: 'projects' },
  about: { pt: 'sobre', en: 'about' },
} as const

/** The title Marcelo actually holds, in each locale. */
export const JOB_TITLE: Record<Locale, string> = {
  pt: 'Engenheiro de Software',
  en: 'Software Engineer',
}

export const PERSON = {
  name: 'Marcelo Junior',
  email: 'marcelovfjjunior@gmail.com',
  location: { city: 'São Paulo', country: 'BR' },
  github: 'https://github.com/marcelojjunior',
  linkedin: 'https://www.linkedin.com/in/marcelojjunior',
} as const

/** Display order on the home grid. Single source of truth. */
export const PROJECT_ORDER = [
  'formatura-med-txxxi',
  'vm-fight',
  'hotel-management',
  'mb-gestor',
  'feira-de-talentos',
  'weather-app',
] as const
