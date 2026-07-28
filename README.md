# Kylie Hub

Public marketing landing page + contact form for the Kylie AI suite (`kylieai.net`).

> 📖 **For a high-level overview of every Kylie product (Audit, Verify, Voice, VaaS, Coach)
> and how they fit together, see [KYLIE_SUITE_OVERVIEW.md](../KYLIE_SUITE_OVERVIEW.md).**

---

## What this site is

The customer-facing "home" of the suite: a navy hero, four product cards, and a
contact form. Nothing else lives here — product docs live in each product's repo.

Product cards (in `app/page.tsx`), all live:

| Card | Links to | Icon |
|---|---|---|
| Kylie Audit | `audit.kylieai.net` | magnifier |
| Kylie Verify | `verify.kylieai.net` | check |
| Kylie Voice | `voice.kylieai.net` | phone handset |
| Kylie Coach | `coach.kylieai.net` | ascending bars ("New" badge) |

## Brand notes

- **Colours:** navy `#0c264a` (headers/hero/footer), teal `#00D4AA` accents,
  white/gray-50 content sections. Tokens in `app/globals.css` + `tailwind.config.ts`.
- **Type:** Geist (self-hosted in `app/fonts/`).
- **Logo rule:** the **round** speech bubble (`public/kylie-ai-logo.png`) is reserved
  for the Kylie AI parent brand. **Products use square speech bubbles** with a product
  glyph — card icons here should match each product's own mark (e.g. Coach's ascending
  bars, `kylie-coach/dashboard/public/kylie-coach-mark.svg`).
- Keep card copy honest to what each product actually ships — this page is often the
  first thing a prospect reads.

## Development & deployment

```bash
npm install
npm run dev     # http://localhost:3000
```

Deployed on **Netlify** (`netlify.toml`, `@netlify/plugin-nextjs`): pushes to `main`
auto-build and publish to `kylieai.net`. DNS for the whole `kylieai.net` zone is also
managed in Netlify — product subdomains (e.g. `coach` → Vercel) are records in that zone.

The contact form posts via `app/api` + `app/components/ContactForm.tsx`.
