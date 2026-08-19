# Yee Mon Oo — Portfolio

An editorial-style personal portfolio built with React, Vite, and Tailwind CSS — large display type, a technical monospace accent, scroll-reveal and micro-interactions, and a light/dark theme toggle. Sections: About, Skills, Experience, Projects, Contact.

## Editing content

All placeholder text lives in one file: [src/data/portfolioData.js](src/data/portfolioData.js). Update the `profile`, `facts`, `stats`, `skills`, `experience`, and `projects` values there to replace the placeholders with real content — no other files need to change for content updates.

Each project has a `variant` (`featured`, `split`, `rail`, or `list`) controlling its layout in [Projects.jsx](src/components/Projects.jsx) — keep exactly one `featured` and one `split` project for the intended case-study layout, and put the rest under `rail`/`list`.

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploying

### Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects the Vite preset, no extra configuration needed.

### GitHub Pages

1. Push this repo to GitHub (the default branch must be `main`).
2. In the repo's Settings → Pages, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds the site and publishes it to `https://<your-username>.github.io/<repo-name>/`.
4. If your repo name isn't `portfolio`, update the `base` path in [vite.config.js](vite.config.js) to match.
