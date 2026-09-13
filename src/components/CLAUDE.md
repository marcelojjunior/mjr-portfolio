# Components

## Astro or React

Default to `.astro`. Reach for a React island only when the browser has to hold state that survives
interaction. Everything else — hover, focus, reveal on hover, a marquee — is CSS.

Current islands, and why each earns its JavaScript:

| Island | Why |
| --- | --- |
| `islands/Cursor.tsx` | Tracks pointer position every frame |
| `islands/ThemeToggle.tsx` | Reads and writes the theme cookie |

Load islands with `client:idle` unless something must run before first interaction.
Anything decorative is `aria-hidden` and disappears under `prefers-reduced-motion` and
`pointer: coarse`.

## Styling

Scoped `<style>` blocks in the component. No utility soup in the markup, no CSS-in-JS in `.astro`.

Every colour, font, duration and easing comes from a token in `src/styles/global.css`. A literal hex
value in a component is a bug — it will break one of the two themes, and it will break silently.

## Motion

Four behaviours exist on this site, and that is the whole vocabulary:

1. Cursor dot and ring.
2. Card hover — lift, accent border, preview crossfade, tags rising in sequence.
3. Timeline progress driven by scroll position.
4. Page-level transitions between the grid and a Case.

Do not add a fifth without a reason. Specifically, **no scroll-triggered fade-ins on sections**:
they are the signature of a generated template and they hide content from crawlers.

Every animation must survive `prefers-reduced-motion: reduce` by simply not happening, with the
end state visible.
