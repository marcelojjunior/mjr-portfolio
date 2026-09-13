import { DEFAULT_LOCALE, LOCALES, SEGMENTS, type Locale } from '@/config/site'

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale)
}

/** Reads the locale out of a URL pathname. Unprefixed paths are the default locale. */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0]
  return isLocale(first) ? first : DEFAULT_LOCALE
}

/** Builds an absolute-from-root path for a locale, prefixing every non-default locale. */
export function localePath(locale: Locale, ...parts: string[]): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  const tail = parts.filter(Boolean).join('/')
  return tail ? `${prefix}/${tail}` : prefix || '/'
}

export function projectsPath(locale: Locale): string {
  return localePath(locale, SEGMENTS.projects[locale])
}

export function projectPath(locale: Locale, slug: string): string {
  return localePath(locale, SEGMENTS.projects[locale], slug)
}

export function aboutPath(locale: Locale): string {
  return localePath(locale, SEGMENTS.about[locale])
}

/** The same page in the other locale — used by the toggle and by hreflang. */
export type PageRef =
  | { kind: 'home' }
  | { kind: 'projects' }
  | { kind: 'about' }
  | { kind: 'project'; slug: string }

export function alternatePath(locale: Locale, page: PageRef): string {
  if (page.kind === 'project') return projectPath(locale, page.slug)
  if (page.kind === 'projects') return projectsPath(locale)
  if (page.kind === 'about') return aboutPath(locale)
  return localePath(locale)
}

export const otherLocale = (locale: Locale): Locale => (locale === 'pt' ? 'en' : 'pt')
