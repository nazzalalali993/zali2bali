# Zali2Bali Website

Production-ready Next.js 15 website for Zali2Bali — built for Cloudflare Pages deployment.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **React 19**
- **TypeScript**
- **Tailwind CSS** with custom Zali2Bali design tokens
- **Framer Motion** (available for enhanced animations)
- **Cloudflare Pages** — deployment target
- **Cloudflare Workers** — edge functions
- **Cloudflare Analytics** — privacy-friendly analytics

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with WhatsApp demo animation |
| `/company` | About, mission, vision, roadmap |
| `/solutions` | AI automation, WhatsApp, CRM, lead gen |
| `/services` | Pricing tiers and packages |
| `/technology` | Tech stack and AWS architecture |
| `/contact` | Free Automation Audit booking form |
| `/careers` | Future roles |
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of service |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

### Option 1: Via Wrangler CLI
```bash
npm run pages:build
npm run deploy
```

### Option 2: Via Cloudflare Dashboard
1. Connect your GitHub repository in the Cloudflare Pages dashboard
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

### Environment Variables
None required for the static site. Add to Cloudflare Pages env if integrating a backend form endpoint:
```
NEXT_PUBLIC_FORM_ENDPOINT=https://your-endpoint.com
```

## Design Tokens

All brand colours are defined in `tailwind.config.ts` and as CSS variables in `globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `teal-deep` | `#0F6E56` | Primary brand, CTAs |
| `teal-mid` | `#1A9E7A` | Secondary accent |
| `teal-light` | `#2BC494` | Live indicators |
| `teal-ghost` | `#E1F5EE` | Tints, backgrounds |
| `ink` | `#0A0A0A` | Primary text |
| `paper` | `#FAFAF9` | Page background |

## SEO

- **Metadata**: `app/layout.tsx` and per-page `metadata` exports
- **JSON-LD**: Organization schema in layout, Software schema and FAQ schema on homepage
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots**: Auto-generated at `/robots.txt`
- **OpenGraph**: Configured per-page

## Adding Pages

1. Create `app/[route]/page.tsx`
2. Add `export const metadata: Metadata = pageMetadata(...)` using `lib/metadata.ts`
3. Add to sitemap in `app/sitemap.ts`
4. Add to nav if needed in `components/nav.tsx`

## Contact Form

The form in `components/sections/contact-form.tsx` currently simulates a submission. For production, replace the `handleSubmit` function with:
- A `fetch()` POST to your GoHighLevel form endpoint
- Or a Formspree/similar service endpoint
- Or a Next.js API route (requires switching from static export to a Worker-based deployment)
