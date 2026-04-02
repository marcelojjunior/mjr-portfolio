# mjr-portfolio

Personal developer portfolio — React (Vite), Tailwind CSS v4, Framer Motion, Zustand, Lenis, and Vercel Web Analytics.

This project uses **[pnpm](https://pnpm.io)** (`packageManager` is set in [`package.json`](package.json) for Corepack).

## Customize

- **Name and copy:** [`src/i18n/en.ts`](src/i18n/en.ts) and [`src/i18n/pt-BR.ts`](src/i18n/pt-BR.ts) (hero name, projects, experience, contact labels).
- **Structured data (URLs, tech lists):** [`src/constants/content.ts`](src/constants/content.ts).
- **SEO / Open Graph:** [`index.html`](index.html) — set `og:url`, `title`, and meta descriptions to your production domain.
- **CV:** add your file as [`public/cv.pdf`](public/cv.pdf) (remove [`public/cv-placeholder.txt`](public/cv-placeholder.txt) when done). The hero button links to `/cv.pdf`.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

## Deploy (Vercel)

1. Push this repo to GitHub (see remote below).
2. Import the repository in [Vercel](https://vercel.com) — framework **Vite**, output **`dist`**. With [`pnpm-lock.yaml`](pnpm-lock.yaml) present, Vercel runs **`pnpm install`** and **`pnpm build`** automatically (no need to set the install command unless you customize it).
3. Enable **Web Analytics** in the Vercel project settings.

## GitHub remote (example)

```bash
git remote add origin git@github.com:marcelojjunior/mjr-portfolio.git
git branch -M main
git push -u origin main
```

Adjust the remote URL if your username or repo name differs.
