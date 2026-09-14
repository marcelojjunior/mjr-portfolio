import { PERSON, JOB_TITLE, PROFILE, SITE_URL, LOCALE_TAGS, type Locale } from '@/config/site'
import { EXPERIENCE } from '@/config/experience'
import { SKILL_GROUPS } from '@/config/skills'
import { localePath } from '@/lib/i18n'

const abs = (path: string) => new URL(path, SITE_URL).href

/** The entity a language model cites when asked who Marcelo Junior is. */
export function personSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.name,
    url: abs(localePath(locale)),
    jobTitle: JOB_TITLE[locale],
    email: `mailto:${PERSON.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.location.city,
      addressCountry: PERSON.location.country,
    },
    sameAs: [PERSON.github, PERSON.linkedin],
    knowsLanguage: Object.values(LOCALE_TAGS),
    // EXPERIENCE is ordered newest first, so the first entry is the current employer.
    worksFor: { '@type': 'Organization', name: EXPERIENCE[0]!.company },
    alumniOf: { '@type': 'CollegeOrUniversity', name: PROFILE.education.institution },
    knowsAbout: [...new Set(SKILL_GROUPS.flatMap((group) => group.items.map((item) => item.label)))],
  }
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: abs(localePath(locale)),
    name: `${PERSON.name} — ${JOB_TITLE[locale]}`,
    inLanguage: LOCALE_TAGS[locale],
    publisher: { '@id': `${SITE_URL}/#person` },
  }
}

type CaseSchemaInput = {
  locale: Locale
  path: string
  title: string
  summary: string
  stack: string[]
  period: string
  company?: { name: string; url: string }
}

/** One CreativeWork per Case, tied back to the Person that built it. */
export function caseSchema({ locale, path, title, summary, stack, period, company }: CaseSchemaInput) {
  const person = { '@id': `${SITE_URL}/#person` }
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${abs(path)}#case`,
    name: title,
    description: summary,
    url: abs(path),
    inLanguage: LOCALE_TAGS[locale],
    dateCreated: period,
    keywords: stack.join(', '),
    // A company Project is credited to the company; Marcelo is a contributor, not its author.
    ...(company
      ? { author: { '@type': 'Organization', name: company.name, url: company.url }, contributor: person }
      : { author: person }),
  }
}
