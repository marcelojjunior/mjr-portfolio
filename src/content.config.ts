import { defineCollection, z, type SchemaContext } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * One Case per Project per Locale. Files live at
 *   src/content/projects/<locale>/<project-slug>.mdx
 * The Project slug is identical across locales; only the URL segment is translated.
 */
const caseSchema = ({ image }: SchemaContext) =>
  z.object({
    /** Project name as written on the page. Not translated for proper nouns. */
    title: z.string(),
    /** One sentence, shown on the home grid card. Plain language, no adjectives. */
    summary: z.string(),
    /** What Marcelo actually did. "Desenvolvedor único", "Front-end no time de 4". */
    role: z.string(),
    period: z.string(),
    /** Short kind label: "SaaS multi-tenant", "Landing page", "App mobile". */
    kind: z.string(),
    stack: z.array(z.string()).min(1),
    /** Up to 5, shown on the card. */
    tags: z.array(z.string()).max(5),
    /** How the card animates. Starts as 'frames'; switch a project to 'video' once recorded. */
    preview: z.enum(['frames', 'video', 'none']).default('frames'),
    cover: image().optional(),
    images: z
      .array(
        z.object({
          src: image(),
          /** Required: the build fails without it. */
          alt: z.string().min(1),
        }),
      )
      .default([]),
    video: z.string().optional(),
    outcomes: z
      .array(
        z.object({
          /** Keep short — a number, or a dash when there is no number yet. */
          value: z.string(),
          label: z.string(),
          placeholder: z.boolean().default(false),
        }),
      )
      .default([]),
    /**
     * Set when the Project belongs to a company Marcelo worked for, not to him. The card badge,
     * the sidecar and the JSON-LD all say so; `links.case` points at the company's own case page.
     */
    company: z
      .object({
        name: z.string(),
        url: z.url(),
      })
      .optional(),
    links: z
      .object({
        live: z.url().optional(),
        repo: z.url().optional(),
        case: z.url().optional(),
      })
      .default({}),
    /** Set false to keep a Case in the repo but off the site. */
    published: z.boolean().default(true),
  })

const projects = defineCollection({
  loader: glob({ base: 'src/content/projects', pattern: '**/*.mdx' }),
  schema: caseSchema,
})

const pages = defineCollection({
  loader: glob({ base: 'src/content/pages', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = { projects, pages }
