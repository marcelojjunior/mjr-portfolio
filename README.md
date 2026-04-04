# mjr-portfolio

Personal portfolio built to showcase projects, professional experience, technical stack, and contact links in a polished bilingual interface.

The project was designed with a focus on performance, smooth interactions, and straightforward content management, using animated transitions, lazy-loaded sections, and a clean component structure.

## Overview

This portfolio includes:

- hero section with personal intro and call-to-action buttons
- projects section with cards, tech stack, and external links
- professional experience section
- stack section organized by category
- direct contact section
- support for `pt-BR` and `en`
- smooth scrolling and animated section reveals

## Tech Stack

### Core

- `React 19`
- `TypeScript`
- `Vite`

### UI and experience

- `Tailwind CSS v4`
- `Framer Motion`
- `Lenis`
- `React Icons`
- `@fontsource/jetbrains-mono`

### State and utilities

- `Zustand`
- `clsx`

### Analytics

- `@vercel/analytics`

## Project Structure

```text
src/
  components/    Reusable UI components
  constants/     Structured content and app constants
  hooks/         Behavior, animation, translation, and navigation hooks
  i18n/          Portuguese and English copy
  layouts/       Main page layout
  providers/     Global providers
  sections/      Main portfolio sections
  store/         Global state with Zustand
  utils/         Helper functions
public/
  Public assets and static files
```

## Getting Started

### Requirements

- `Node.js` 18 or higher
- `pnpm`

If you use Corepack:

```bash
corepack enable
```

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

The app will run at `http://localhost:5173`.

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

### Run lint

```bash
pnpm lint
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the development server |
| `pnpm build` | Generates the production build |
| `pnpm preview` | Serves the production build locally |
| `pnpm lint` | Runs lint checks |

## License

This project is maintained as a personal professional portfolio.
