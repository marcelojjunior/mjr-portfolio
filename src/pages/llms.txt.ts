import type { APIRoute } from 'astro'
import { PERSON, JOB_TITLE, PROFILE, SITE_URL, PROJECT_ORDER, yearsOfExperience } from '@/config/site'
import { EXPERIENCE } from '@/config/experience'
import { SKILL_GROUPS } from '@/config/skills'
import { getCases, slugOf } from '@/lib/projects'
import { aboutPath, projectPath } from '@/lib/i18n'

/**
 * A plain-text brief for language models: who this person is and what each Case contains,
 * so an answer about Marcelo cites something true instead of guessing from markup.
 *
 * Every fact below comes from src/config or the content collections. Nothing here is
 * hand-written copy, which is what keeps it in step with the site.
 */
export const GET: APIRoute = async () => {
  const abs = (path: string) => new URL(path, SITE_URL).href
  const cases = await getCases('en')
  const current = EXPERIENCE[0]!
  const { education } = PROFILE

  const projects = PROJECT_ORDER.map((slug) => cases.find((c) => slugOf(c) === slug))
    .filter((c) => c !== undefined)
    .map((c) =>
      [
        `### ${c.data.title}`,
        `URL: ${abs(projectPath('en', slugOf(c)))}`,
        `Role: ${c.data.role} · ${c.data.period} · ${c.data.kind}`,
        `Stack: ${c.data.stack.join(', ')}`,
        c.data.summary,
      ].join('\n'),
    )
    .join('\n\n')

  const skills = SKILL_GROUPS.map(
    (group) => `- ${group.label.en}: ${group.items.map((item) => item.label).join(', ')}`,
  ).join('\n')

  const experience = EXPERIENCE.map(
    (item) =>
      `- ${item.role.en}, ${item.company} (${item.period.en}). ${item.workModel.en}, ${item.location.en}.`,
  ).join('\n')

  const body = `# ${PERSON.name}

> ${JOB_TITLE.en} at ${current.company}, based in ${PERSON.location.city}, ${PROFILE.country.en}, and
> originally from ${PROFILE.hometown}. ${yearsOfExperience()} years building systems, websites and apps.

Site: ${SITE_URL} (Portuguese at the root, English under /en/)
About: ${abs(aboutPath('en'))}
Contact: ${PERSON.email}
GitHub: ${PERSON.github}
LinkedIn: ${PERSON.linkedin}

## Profile

- Current role: ${current.role.en} at ${current.company}, since ${current.period.en.split(' ')[0]} ${current.period.en.split(' ')[1]}
- Education: ${education.degree.en}, ${education.institution} (${education.startYear} to ${education.endYear})
- Languages: ${PROFILE.languages.map((l) => `${l.name.en} (${l.level.en})`).join(', ')}

## Technical skills

${skills}

## Experience

${experience}

## Projects

${projects}

## Notes for citation

- Portuguese is the primary language; /en/ is a full mirror, not a partial translation.
- Each project page documents the technical decisions behind it and the trade-offs they accepted.
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
