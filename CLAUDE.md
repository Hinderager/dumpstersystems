# Dumpster Systems AI

Automations agency website targeting dumpster rental companies.

**Domain:** dumpstersystems.ai
**Stack:** Next.js (App Router) + Vercel

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout (nav, footer)
│   ├── about/             # About the agency
│   ├── services/          # Automation services offered
│   ├── contact/           # Contact form / booking
│   ├── blog/              # SEO content / resources
│   ├── case-studies/      # Client success stories
│   └── pricing/           # Packages / pricing tiers
│
├── components/
│   ├── ui/                # Reusable UI (buttons, cards, inputs)
│   ├── sections/          # Page sections (hero, CTA, features)
│   └── forms/             # Form components (contact, booking)
│
├── lib/                   # Utilities, API helpers, constants
│
└── styles/                # Global styles, Tailwind config

public/
├── images/
│   ├── hero/              # Hero section images
│   ├── services/          # Service-specific visuals
│   ├── case-studies/      # Client logos, screenshots
│   ├── team/              # Team photos (if needed)
│   └── blog/              # Blog post images
│
├── icons/                 # SVG icons, favicons
│
└── videos/                # Demo videos, testimonials
```

---

## Naming Conventions

- **Pages:** lowercase with hyphens (`case-studies/`)
- **Components:** PascalCase (`HeroSection.tsx`)
- **Images:** lowercase with hyphens (`dumpster-dashboard-demo.webp`)
- **Prefer .webp** for images (smaller file size)

---

## Key Pages

| Page | Purpose |
|------|---------|
| `/` | Homepage - hero, value prop, services overview, CTA |
| `/services` | List of automation services with detail pages |
| `/pricing` | Pricing tiers / packages |
| `/case-studies` | Client success stories with results |
| `/blog` | SEO content targeting dumpster rental + automation keywords |
| `/contact` | Contact form, booking calendar |
| `/about` | Agency story, team, mission |

---

## Notes

- Target audience: Dumpster rental companies looking to automate lead management, scheduling, delivery tracking, follow-ups, reviews, etc.
- Tone: Professional but approachable, results-focused
- Focus on ROI and time savings in messaging
- Key pain points: Managing delivery schedules, tracking inventory, following up on rentals, collecting payments, getting reviews
