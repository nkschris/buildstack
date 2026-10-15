# Buildstack

AI tools directory for **vibe coders and builders making money online** — Alex Finn / BuildStack style.

North star: **sponsor revenue** via clearly labeled Featured / Sponsored listings. Editor's picks stay unpaid.

## What's included

- Homepage directory grouped by use case (coding agents, writing, design, video, automation, e-commerce, etc.)
- Featured shelf: **Editor's pick** (unpaid) vs **Sponsored** (paid, amber badge)
- New tool releases shelf
- Advertise / Sponsor page with pricing tiers + Stripe payment link placeholder
- Newsletter signup UI (Resend not wired yet)
- SEO: titles, meta, Open Graph, `robots.txt`, `sitemap.xml`
- `public/llms.txt` for LLM / chatbot discovery
- Seed data in `data/tools.json` (edit to add tools)

## Run locally

```bash
cd /workspace/buildstack   # or your clone path
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Add env vars (optional):
   - `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://buildstack.vercel.app`)
   - `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` — Stripe Payment Link URL
5. Deploy

## Where to paste the Stripe payment link

Either:

- **Env:** set `NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/...` in `.env.local` / Vercel, or
- **Config:** edit `stripePaymentLink` in [`src/config.ts`](src/config.ts) (look for the TODO comment)

Until set, Advertise CTAs fall back to `mailto:sponsors@buildstack.dev`.

## Where to add tools

Edit [`data/tools.json`](data/tools.json):

- Add/edit objects under `tools` (`name`, `description`, `url`, `categories`, `tags`, `featured`, `featuredType`: `"editors-pick"` | `"sponsored"` | `null`, `isNew`, `releasedAt`)
- Categories are defined under `categories`

For a paid sponsor: set `"featured": true` and `"featuredType": "sponsored"`.

## Newsletter (Resend)

UI is in [`src/components/NewsletterForm.tsx`](src/components/NewsletterForm.tsx). It does **not** send email yet.

**TODO:** add an API route and call [Resend](https://resend.com) (or your ESP) — search for `TODO(Resend)` in that file.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Directory, Featured, New, newsletter |
| `/advertise` | Sponsor pricing + payment CTA |
| `/about` | About + FAQ (LLM-citable) |
| `/llms.txt` | Machine-readable site summary |

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript
