# Portfolio

Marcelo Junior's personal portfolio: a bilingual, statically rendered site whose job is to turn a visitor into a direct contact. Every term below is the canonical name used in code, content, filenames and conversation.

## Content

**Project**:
A piece of software Marcelo built. Identified by a stable, language-independent slug (`hotel-management`, `mb-gestor`).
_Avoid_: work, app, product

**Case**:
The written narrative about a Project — context, role, technical decisions, screenshots, outcome. A Project may exist without a Case; a Case always belongs to exactly one Project. This is the unit that gets its own page and its own URL.
_Avoid_: case study, detail page, project page

**Decision**:
A named technical choice inside a Case, recorded together with the trade-off it accepted. A Case without Decisions is a description, not a Case.
_Avoid_: highlight, challenge

**Outcome**:
What changed in the world because the Project exists — preferably measurable. Distinct from Decision, which is about how it was built.
_Avoid_: result, impact, achievement

**Experience**:
A paid professional engagement at a company, with a role and a period. Never rendered as a Case and never given its own page.
_Avoid_: job, position, role (role is a field of Experience, not a synonym for it)

**Stack**:
The set of technologies attached to either a Project or the site owner. Always a flat list of canonical technology names — never prose.
_Avoid_: skills, technologies, tools

## Presentation

**Locale**:
One of exactly two supported languages, `pt` or `en`. `pt` is served at the site root, `en` under the `/en/` prefix. Every Case exists in both Locales or the build fails.
_Avoid_: language, i18n, translation

**Segment**:
The localized path component of a route (`projetos` in `pt`, `projects` in `en`). Segments are translated; Project slugs are not.
_Avoid_: route prefix, path

**Island**:
A React component that ships JavaScript to the browser. Everything not explicitly an Island is static HTML. Adding one is a deliberate cost, never a default.
_Avoid_: component, widget, interactive component

**Token**:
A named design value (colour, spacing step, type scale entry) that components consume. A raw value written inline in a component is a bug, not a shortcut.
_Avoid_: variable, theme value

**Theme**:
The resolved light or dark appearance for a visitor. Derived from device preference on first visit, from the visitor's stored choice afterwards.
_Avoid_: mode, colour scheme, dark mode
