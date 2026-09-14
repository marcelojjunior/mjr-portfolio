import { getCollection, type CollectionEntry } from 'astro:content'
import { PROJECT_ORDER, type Locale } from '@/config/site'

export type CaseEntry = CollectionEntry<'projects'>

/** Entry ids are "<locale>/<slug>". */
export const slugOf = (entry: CaseEntry): string => entry.id.split('/').slice(1).join('/')
export const localeOf = (entry: CaseEntry): string => entry.id.split('/')[0]!

/**
 * Published Cases for one Locale, in PROJECT_ORDER.
 * Anything not listed in PROJECT_ORDER is dropped, so the order file stays authoritative.
 */
export async function getCases(locale: Locale): Promise<CaseEntry[]> {
  const all = await getCollection('projects', (e) => localeOf(e) === locale && e.data.published)
  const index = new Map(PROJECT_ORDER.map((slug, i) => [slug as string, i]))

  return all
    .filter((e) => index.has(slugOf(e)))
    .sort((a, b) => index.get(slugOf(a))! - index.get(slugOf(b))!)
}

export async function getCase(locale: Locale, slug: string): Promise<CaseEntry | undefined> {
  const cases = await getCases(locale)
  return cases.find((e) => slugOf(e) === slug)
}

/**
 * Fails the build when a Project exists in one Locale and not the other.
 * Parity is a promise the site makes to hreflang; a missing translation is a broken promise.
 */
export async function assertLocaleParity(): Promise<void> {
  const all = await getCollection('projects', (e) => e.data.published)
  const byLocale = new Map<string, Set<string>>()

  for (const entry of all) {
    const set = byLocale.get(localeOf(entry)) ?? new Set<string>()
    set.add(slugOf(entry))
    byLocale.set(localeOf(entry), set)
  }

  const pt = byLocale.get('pt') ?? new Set()
  const en = byLocale.get('en') ?? new Set()
  const missing = [
    ...[...pt].filter((s) => !en.has(s)).map((s) => `${s} missing in en`),
    ...[...en].filter((s) => !pt.has(s)).map((s) => `${s} missing in pt`),
  ]

  if (missing.length > 0) {
    throw new Error(`Locale parity broken:\n  - ${missing.join('\n  - ')}`)
  }
}
