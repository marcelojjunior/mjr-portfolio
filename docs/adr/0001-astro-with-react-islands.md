---
status: accepted
---

# Astro with React islands, replacing the Vite SPA

The previous site was a client-rendered Vite SPA that gated every section behind an intro animation, so crawlers and language models only ever saw the hero; it also had no way to give a Case its own URL. We are rebuilding on Astro with statically rendered pages and React only in explicitly chosen islands, because the site's primary job — being found, read and correctly cited — is a content-delivery problem, not an application problem.

## Considered options

- **Stay on Vite + add prerendering.** Rejected: prerendering the SPA still ships the whole runtime, and the intro gate and in-memory i18n would have to be dismantled anyway. The remaining benefit did not justify keeping components built around a different architecture.
- **Next.js App Router.** A reasonable fit, and the stronger choice if the site ever needed a server. It does not, and Next's default is to ship React everywhere and opt out, which is backwards for a site that is 95% static prose.
- **Astro.** Chosen. Zero JavaScript by default, first-class content collections with schema validation, and i18n routing built in.

## Consequences

- `lenis` (custom smooth scrolling) and `zustand` (global state) are removed rather than ported. Locale becomes a route, Theme becomes a cookie plus a root attribute, and neither needs a store.
- `framer-motion` is only permitted inside an Island.
- No component from the previous site is carried over. The rebuild is greenfield; `main` keeps serving the old site until the new one merges.
