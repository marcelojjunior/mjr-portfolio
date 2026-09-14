/**
 * Canonical origin. www is the primary domain in Vercel; the apex and the vercel.app
 * domain redirect to it at the domain level, so no redirect lives in vercel.json.
 */
export const SITE_URL = 'https://www.marcelojunior.dev'

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

/**
 * Profile facts shown on the about page and repeated in llms.txt and the Person JSON-LD.
 * Change a fact here, never in a string in one of those three places, so they cannot drift.
 */
export const PROFILE = {
  country: { pt: 'Brasil', en: 'Brazil' } as Record<Locale, string>,
  hometown: 'Maranhão',
  /** First professional role; years of experience are counted from here. */
  careerStartYear: 2021,
  education: {
    institution: 'UNIBALSAS - Faculdade de Balsas',
    degree: { pt: 'Sistemas de Informação', en: 'BSc in Information Systems' } as Record<Locale, string>,
    startYear: 2018,
    endYear: 2022,
  },
  languages: [
    { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' } },
    { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'intermediário', en: 'intermediate' } },
  ] as { name: Record<Locale, string>; level: Record<Locale, string> }[],
}

export const yearsOfExperience = (now = new Date()) => now.getFullYear() - PROFILE.careerStartYear

/**
 * Display order on the home grid. Single source of truth: a Project not listed here is
 * not rendered, even if its MDX exists. hotel-management and mb-gestor are drafts awaiting
 * review and stay out until they are rewritten.
 */
export const PROJECT_ORDER = [
  'formatura-med-txxxi',
  'convite-casamento',
  'vm-fight',
  'feira-de-talentos',
  'weather-app',
] as const
