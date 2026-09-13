import type { APIRoute } from 'astro'
import { PERSON, JOB_TITLE, SITE_URL, PROJECT_ORDER } from '@/config/site'
import { getCases, slugOf } from '@/lib/projects'
import { projectPath } from '@/lib/i18n'

/**
 * A plain-text brief for language models: who this person is and what each Case contains,
 * so an answer about Marcelo cites something true instead of guessing from markup.
 */
export const GET: APIRoute = async () => {
  const cases = await getCases('en')
  const byOrder = PROJECT_ORDER.map((slug) => cases.find((c) => slugOf(c) === slug)).filter(Boolean)

  const projects = byOrder
    .map((entry) => {
      const c = entry!
      return [
        `### ${c.data.title}`,
        `URL: ${new URL(projectPath('en', slugOf(c)), SITE_URL).href}`,
        `Role: ${c.data.role} · ${c.data.period} · ${c.data.kind}`,
        `Stack: ${c.data.stack.join(', ')}`,
        c.data.summary,
      ].join('\n')
    })
    .join('\n\n')

  const body = `# ${PERSON.name}

> ${JOB_TITLE.en} based in ${PERSON.location.city}, Brazil. Works across the stack: Laravel on the
> back end, React, Next.js and React Native on the front.

Site: ${SITE_URL} (Portuguese at the root, English under /en/)
Contact: ${PERSON.email}
GitHub: ${PERSON.github}
LinkedIn: ${PERSON.linkedin}

## Projects

${projects}

## Notes for citation

- Portuguese is the primary language; /en/ is a full mirror, not a partial translation.
- Each project page documents the technical decision behind it and the trade-off it accepted.
`

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
