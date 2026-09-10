# AGENTS.md — nino-ventures (nino.id website)

You are working on the public marketing site for PT Nino Genio Indonesia,
served at [nino.id](https://nino.id/). Rules for AI agents and humans
alike:

- **This repository is public.** Its code and full history are
  world-visible. Never add confidential, client, or internal company
  material — no credentials, internal documents, or non-public strategy.
- **Deployment**: GitHub Pages, built from `main` by GitHub Actions
  (`.github/workflows/deploy.yml`). Pushing to `main` **is** the
  deployment — there is no staging environment. Always `npm run build`
  (and ideally `npm run preview`) locally before pushing.
- **Domain**: `public/CNAME` pins `nino.id`. Never delete or rename it —
  certificate re-provisioning is painful (see git history).
- **Content is bilingual**: every string exists in `src/i18n/en.ts`
  **and** `src/i18n/id.ts`; when you add or change copy, update both.
  Non-translatable facts (contact info, booking URL) live in `src/site.ts`.
- **Claims stay honest**: product claims must match reality — HaiNaya is
  live at hainaya.id; labs entries are experiments. Never name client
  companies or third-party employers anywhere on the site.
