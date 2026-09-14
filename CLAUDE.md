# mjr-portfolio

Personal portfolio for Marcelo Junior. Bilingual, statically rendered, built to be found, read and
correctly cited. Read `CONTEXT.md` for the domain vocabulary before naming anything new.

## Language rule

**Every project artefact is written in English** — this file, `CONTEXT.md`, ADRs, code, identifiers,
filenames, comments, commit messages. Portuguese appears *only* in visitor-facing content:
`src/content/**/pt/` and the `pt` half of `src/i18n/ui.ts`. No exceptions.

## Stack

Astro 7 (static output) · React only inside islands · Tailwind v4 via `@tailwindcss/vite` ·
MDX content collections · deployed on Vercel.

```bash
pnpm dev      # local dev server
pnpm build    # astro check && astro build — must pass before any commit
pnpm preview  # serve the built site
```

TypeScript is pinned to 6.x: `astro check` relies on an API TypeScript 7 does not expose yet.
Do not bump it to 7 to "fix" a warning.

## Architecture rules

- **Static first.** A component is `.astro` unless it genuinely needs browser state. Adding a React
  island is a deliberate cost — see `src/components/CLAUDE.md`.
- **No global state library.** Locale is a route, Theme is a cookie plus `data-theme` on `<html>`.
  If something seems to need a store, the routing is probably wrong.
- **No smooth-scroll library, no scroll-triggered reveals.** Content is visible at rest; only
  progress indicators react to scroll. Anything that hides content until an observer fires is a
  bug, not an effect — it is exactly what made the previous version invisible to crawlers.
- **Locale parity is enforced.** `assertLocaleParity()` runs during the home page build and throws
  when a Project exists in one locale and not the other.

## Where things live

| Path | Holds |
| --- | --- |
| `src/config/site.ts` | Canonical URL, locales, URL segments, person data, project order |
| `src/config/experience.ts` | Experience entries (never Cases, never their own page) |
| `src/content/projects/<locale>/` | One MDX Case per Project per Locale |
| `src/content/pages/<locale>/` | Standalone pages (about) |
| `src/lib/i18n.ts` | The only place that builds a localised path |
| `src/lib/jsonld.ts` | Structured data builders |
| `src/styles/global.css` | Design tokens — the only place a colour is defined |

## Pages and routes

These rules live here, not in `src/pages/CLAUDE.md`: Astro turns every `.md` file inside
`src/pages/` into a public route, so a guidance file there was being served at `/CLAUDE` and listed
in the sitemap. Never put a Markdown or MDX file in `src/pages/` unless it is meant to be a page.

### Route shape

Portuguese is served from the root; English is prefixed. Segments are translated, Project slugs are
not.

| Page | pt | en |
| --- | --- | --- |
| Home | `/` | `/en/` |
| Project listing | `/projetos` | `/en/projects` |
| Case | `/projetos/[slug]` | `/en/projects/[slug]` |
| About | `/sobre` | `/en/about` |

A page file is a thin wrapper: read content, build metadata, hand it to `BaseLayout`. Layout and
markup belong in `src/components/`. The pt and en files for one page stay in lockstep — changing one
without the other breaks `hreflang`.

### Every page must

- Pass a `page` ref (`{ kind: 'home' | 'projects' | 'about' }` or `{ kind: 'project', slug }`) to `BaseLayout`.
  This is what produces the canonical URL and the reciprocal `hreflang` pair. A wrong `page` ref
  silently points `hreflang` at the wrong twin.
- Pass a `title` and a `description` written for that page. Never reuse the site-wide description.
- Include the relevant JSON-LD from `src/lib/jsonld.ts`. Every page carries `personSchema`; a Case
  also carries `caseSchema`.

### The canonical host

`https://www.marcelojunior.dev`, with `www`. It is set once as `SITE_URL` in `src/config/site.ts`.
The apex and `marcelojunior.vercel.app` redirect to it in Vercel's domain settings. Do not add a
host redirect to `vercel.json`: it would fight the domain-level redirect and loop. Never write an
absolute URL by hand.

### Generated routes

- `robots.txt.ts` and `llms.txt.ts` are endpoints, not static files in `public/`.
- The sitemap is produced by `@astrojs/sitemap` with the i18n map configured in `astro.config.mjs`,
  so it always matches the pages the build emits.

### Keeping llms.txt and JSON-LD current

`llms.txt`, the Person JSON-LD and the about page facts panel all read the same sources, and must
keep doing so:

| Fact | Source |
| --- | --- |
| Name, e-mail, city, GitHub, LinkedIn | `PERSON` in `src/config/site.ts` |
| Job title | `JOB_TITLE` in `src/config/site.ts` |
| Hometown, education, languages, years of experience | `PROFILE` in `src/config/site.ts` |
| Current employer and experience | `src/config/experience.ts` (newest first) |
| Technical skills | `src/config/skills.ts` |
| Projects | `PROJECT_ORDER` and the MDX in `src/content/projects/` |

Rules:

- Change a fact in its source, never as a string inside `llms.txt.ts`, `jsonld.ts` or a component.
  If a new fact has no source yet, add it to one of the files above first.
- Whenever a change touches personal data, experience, skills or projects, run `pnpm build` and read
  `dist/llms.txt` and the `application/ld+json` block in `dist/sobre/index.html` before committing.
- Prose is the exception: the about text, the hero lede and the home meta description are written
  by hand and repeat some of these facts ("cinco anos", Soulloop). Update them in the same change.

## Writing content

Every word a visitor reads passes two skills in `.claude/skills/` before it is written to a file:
hero copy, project summaries, case bodies, the about page, UI strings, meta descriptions, in both
locales.

1. `copywriting` shapes the draft: one idea per section, benefit before feature, specific over
   vague, customer language over company language, and a CTA that says what the reader gets.
2. `humanizer` strips the AI tells from that draft, and it goes last.

The order matters. `copywriting` is a marketing skill and will happily reach for the staged
contrast, the triad and the one-line closer that `humanizer` exists to remove. Two of its defaults
are also overruled here: this site never invents a statistic or a testimonial, and it does not use
rhetorical-question headlines, which read as salesy in a personal portfolio.

It does not apply to project artefacts. This file, `CONTEXT.md`, ADRs, code comments and commit
messages are technical writing for developers and stay as they are.

The skill removes structural AI tells (staged contrasts, one-line closers, forced triads, dashes as
the universal connector, inflated significance, decorative bold). Two of its rules bind hardest
here: no em dashes in visitor-facing prose unless the voice already uses them, and never add a
fact, name, number or date that Marcelo has not supplied.

## Never

- Hardcode a URL path. Use the helpers in `src/lib/i18n.ts`.
- Hardcode a colour, font or duration. Use a token from `src/styles/global.css`.
- Add a locale-detection redirect. The visitor is offered a switch; they are never moved for it.
- Invent a metric, a client name or an outcome in a Case. Unknown numbers stay marked
  `placeholder: true` until Marcelo supplies the real one.
