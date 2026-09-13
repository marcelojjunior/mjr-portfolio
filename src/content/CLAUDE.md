# Writing content

This directory is the only place Portuguese belongs, and the only place long-form prose belongs.

## Files

```
projects/<locale>/<project-slug>.mdx   one Case per Project per Locale
pages/<locale>/<page>.mdx              standalone pages
```

The Project slug is identical in both locales — `hotel-management.mdx` exists under `pt/` and `en/`.
Only the URL segment is translated (`/projetos/` vs `/en/projects/`). Adding a Case in one locale
without the other fails the build.

A new Project is only rendered once its slug is added to `PROJECT_ORDER` in `src/config/site.ts`.
That array, not the filesystem, decides what appears and in what order.

## Frontmatter

Structured facts go in frontmatter, prose goes in the body. The schema in `src/content.config.ts`
is authoritative; `alt` and `caption` on every image are required and the build fails without them.

## Case anatomy

Every Case body uses the same three `##` sections, in this order and with these names. No Case adds
a fourth, renames one, or skips one, so a reader who has read one Case can navigate the next.

```
## Visão geral            / ## Overview
## Decisões técnicas      / ## Technical decisions
## Resultados e aprendizados / ## Results and lessons
```

**Visão geral** states the problem as the client lived it, before any technology is named, then what
the thing is. Two or three paragraphs.

**Decisões técnicas** carries one `###` per decision: the choice, why this project needed it, then a
blockquote opening with **"O que isso custou:"** / **"What it cost:"**. A decision without its stated
cost is a description, not a decision. Two or three decisions per Case, never a list of everything
that was built.

**Resultados e aprendizados** says what changed because the project exists and what Marcelo would do
differently. The lesson is the one part that cannot be read out of the repository. Ask him for it;
never write one for him.

Headings start at `##`. The page already renders the title as the `h1`, so a `###` directly under it
would skip a level and break the document outline.

The numeric tiles come from `outcomes` in frontmatter, not from this section. A number that has not
been confirmed is `placeholder: true`.

## Tone

Draft with the `copywriting` skill, then run the result through `humanizer`, then save. Both live
in `.claude/skills/`. Neither step is optional, and `humanizer` always goes last.

First person. Concrete. Past tense for what was done.

- Write what the thing does and who it is for, not how good it is.
- Never point at a position on screen ("below", "on the right", "the card above"). The same
  string is read in one, two and three column layouts, so it is wrong in at least one of them.
- No "apaixonado por tecnologia", no "soluções escaláveis", no "experiências incríveis".
- Admit what something is. A learning project is called a learning project.
- Portuguese is written first; English is an **adaptation**, not a translation. Sentences may be
  restructured so the English reads as if it were written in English. Facts must not drift.
