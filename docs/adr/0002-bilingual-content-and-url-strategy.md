---
status: accepted
---

# Bilingual content as per-locale MDX, with translated URL segments

Content lives in Astro content collections as one MDX file per Project per Locale (`src/content/projects/pt/hotel-management.mdx`, `src/content/projects/en/hotel-management.mdx`), validated by a single shared Zod schema, with a build-time check that fails if a Project exists in one Locale and not the other. `pt` is served at the root and `en` under `/en/`, with the path segment translated — `/projetos/[slug]` and `/en/projects/[slug]` — while the Project slug stays identical across Locales.

## Considered options

- **One file per Project holding both Locales in parallel fields.** Rejected: it guarantees parity but makes long-form prose unreadable and unwritable, and a Case is mostly long-form prose.
- **Untranslated segments (`/projetos/` and `/en/projetos/`).** Rejected: the URL is a relevance signal for the query it should match. A Portuguese word inside the English URL weakens both sides for the cost of one route table.
- **Translating Project slugs as well.** Rejected: product names are proper nouns. Translating them would fragment the identity of a single Project across Locales and complicate the reciprocal `hreflang` pairing for no gain.

## Consequences

- The previous `ProjectItem` shape — `nameKey` / `descriptionKey` / `impactPath` pointing into an i18n dictionary — is replaced entirely. Case fields become typed frontmatter; prose becomes the MDX body. Missing content becomes a build error instead of an empty string on the page.
- The canonical host is `www.marcelojunior.dev`, the primary domain in Vercel. The apex and `marcelojunior.vercel.app` redirect to it through Vercel's domain settings, not through `vercel.json`, so there is a single place where host routing is decided. Every canonical, `hreflang`, sitemap entry and OG URL must use the `www` form. (The first draft of this ADR chose the apex; it was reversed before launch to match the existing Vercel setup.)
- Locale is never chosen by automatic redirect. An English-preferring browser is offered a visible invitation to switch; the choice stays with the visitor and with the crawler.
