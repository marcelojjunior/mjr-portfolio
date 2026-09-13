# Pages and routes

## Route shape

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

## Every page must

- Pass a `page` ref (`{ kind: 'home' | 'about' }` or `{ kind: 'project', slug }`) to `BaseLayout`.
  This is what produces the canonical URL and the reciprocal `hreflang` pair. A wrong `page` ref
  silently points `hreflang` at the wrong twin.
- Pass a `title` and a `description` written for that page. Never reuse the site-wide description.
- Include the relevant JSON-LD from `src/lib/jsonld.ts`. Every page carries `personSchema`; a Case
  also carries `caseSchema`.

## The canonical host

`https://marcelojunior.dev` — apex, no `www`. It is set once in `src/config/site.ts` and
`vercel.json` redirects `www` to it. Never write an absolute URL by hand.

## Generated routes

- `robots.txt.ts` and `llms.txt.ts` are endpoints, not static files in `public/`. They read from the
  content collections so they cannot fall out of date.
- The sitemap is produced by `@astrojs/sitemap` with the i18n map configured in `astro.config.mjs`.
