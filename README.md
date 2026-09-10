# nino-ventures — company website (nino.id)

Source for the marketing site at **[nino.id](https://nino.id/)**
(ninoventures.com redirects here). Built with **Astro** as a multi-page,
bilingual site (English default, Bahasa Indonesia under `/id/`), deployed
to **GitHub Pages** via GitHub Actions — a push to `main` triggers the
build and goes live within minutes.

| Path                         | What it is                                            |
|------------------------------|-------------------------------------------------------|
| `src/pages/`                 | Routes: 5 pages × 2 locales + `404.astro`             |
| `src/components/views/`      | Shared page markup, locale passed as a prop           |
| `src/i18n/`                  | All copy, per locale (`en.ts`, `id.ts`)               |
| `src/site.ts`                | Non-translatable facts (contact info, `BOOKING_URL`)  |
| `src/styles/global.css`      | The design system (minimal editorial)                 |
| `public/`                    | `CNAME` (nino.id), favicon, brand assets, robots.txt  |
| `.github/workflows/deploy.yml` | Build & deploy pipeline (GitHub Actions)            |

## Working on it

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

Review changes locally before pushing — `main` **is** production.

## Editing content

- All copy lives in `src/i18n/en.ts` and `src/i18n/id.ts` (one shape, two
  languages — keep them in sync).
- To enable the discovery-call booking CTA everywhere, set `BOOKING_URL`
  in `src/site.ts`.
- This is a public repository: never commit confidential or internal
  company material. Product claims must match reality (HaiNaya is live;
  labs are experiments).

## Deployment

GitHub Pages is configured to build from **GitHub Actions** (workflow in
`.github/workflows/deploy.yml`). Every push to `main` builds and deploys.
`public/CNAME` pins the `nino.id` domain — do not delete or rename it.
