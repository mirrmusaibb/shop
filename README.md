# Mir Tailors Website

Production-ready static website project for **Mir Tailors** (Sunsooma Achabal, Jammu & Kashmir), built with:

- Next.js (static export)
- React
- Tailwind CSS
- Framer Motion

The site is optimized for GitHub Pages deployment and includes bilingual support (English/Urdu), WhatsApp booking flows, local SEO, and a premium dark-luxury UI.

## Business Information

- Name: Mir Tailors
- Location: Sunsooma Achabal, Kashmir
- Coordinates: `33.6980062543632, 75.22158108800498`

## Features

- Fully static build (`output: "export"`)
- No backend/API routes/server rendering
- Bilingual UI toggle (English/Urdu)
- Pages:
  - Home
  - Services
  - Portfolio
  - Booking
  - Contact
- WhatsApp pre-filled booking and contact forms
- Google Maps embeds
- Delivery/service options and payment information sections
- LocalBusiness structured data + full OpenGraph/Twitter SEO tags
- Mobile-first and accessible semantic layout
- GitHub Actions workflow for automatic Pages deployment

## Project Structure

```txt
.
├─ components/
│  ├─ layout/
│  ├─ seo/
│  └─ ui/
├─ hooks/
├─ pages/
├─ public/
│  └─ images/
│     └─ portfolio/
├─ styles/
├─ utils/
├─ .github/workflows/deploy.yml
├─ next.config.js
├─ tailwind.config.js
└─ README.md
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open:

```txt
http://localhost:3000
```

## Static Build (GitHub Pages Ready)

Create production static export:

```bash
npm run build
```

This generates static files in:

```txt
out/
```

## GitHub Pages Deployment (Automatic)

Workflow file included:

- `.github/workflows/deploy.yml`

### One-time repository setup

1. Push this project to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure default branch is `main` (or update workflow trigger branch accordingly).

After each push to `main`, the workflow will:

1. Install dependencies
2. Build static export
3. Upload `out/`
4. Deploy to GitHub Pages

## Configuration Notes

### Static export requirement

`next.config.js` includes:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`

### GitHub Pages base path

`next.config.js` auto-detects repository context in GitHub Actions and sets `basePath`/`assetPrefix` for project pages repos.

## Update Business Details

Edit shared data in:

- `utils/constants.ts`

You can update:

- phone numbers
- WhatsApp number
- Instagram URL
- address text
- pricing
- testimonials
- bilingual copy

## Replace Placeholder Images

- Hero image:
  - `public/images/hero-tailoring.svg`
- Portfolio images:
  - `public/images/portfolio/*`
- UPI placeholder:
  - `public/images/upi-qr-placeholder.svg`

Keep file names (or update references in `utils/constants.ts`) for seamless replacement.

## SEO

SEO utilities are handled in:

- `components/seo/SeoHead.tsx`

Included:

- Meta title/description
- Keywords
- OpenGraph
- Twitter cards
- LocalBusiness JSON-LD schema

## Accessibility and Performance

- Semantic HTML structure
- Focus-visible states and keyboard navigation
- High contrast dark theme with gold accents
- Mobile-first tap-friendly controls
- Lazy-loaded gallery/map media

## Production Checklist

Before going live, replace placeholders in `utils/constants.ts` and `public/images/*`:

- real phone and WhatsApp number
- real Instagram handle
- real stitched garment photos
- real UPI QR image
- preferred canonical site URL (`NEXT_PUBLIC_SITE_URL`)
