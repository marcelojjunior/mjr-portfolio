# mjr-portfolio

Personal portfolio of [Marcelo Junior](https://www.marcelojunior.dev) — full stack developer.

Statically rendered with Astro, bilingual (Portuguese at the root, English under `/en/`), with a
dedicated case page per project.

## Commands

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # type-checks, then builds to dist/
pnpm preview  # serve the built site
```

## Structure

```
src/
├── config/      site constants, project order, experience
├── content/     MDX cases and pages, one file per locale
├── components/  Astro components; React only under islands/
├── layouts/     BaseLayout — SEO, hreflang, JSON-LD, theme
├── lib/         i18n paths, content queries, structured data
├── pages/       thin route wrappers, mirrored per locale
└── styles/      design tokens
```

## Contributing to this repo (including with an AI agent)

Rules live in `CLAUDE.md` at the root and in `src/content/`, `src/components/` and `src/pages/`.
Domain vocabulary is in `CONTEXT.md`; architectural decisions are in `docs/adr/`.

All project artefacts are written in English. Portuguese appears only in visitor-facing content.
