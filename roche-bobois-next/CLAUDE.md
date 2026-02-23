# Roche Bobois Residences — Project Reference

## Development Workflow (MUST FOLLOW)

For every change, follow this sequence:

1. **Make the edits** — modify files on the local machine
2. **Build & test** — run `next build` to verify nothing is broken
3. **Commit** — create one clean git save point with a clear description of what changed
4. **Push to GitHub** — upload the commit so it's backed up and triggers deployment
5. **Vercel auto-deploys** — the live site at pinkbuildingsstpete.com updates in ~30-45 seconds
6. **Verify the live site** — spot-check the deployed page to confirm it's working

**One feature = one commit = one deploy.** This makes it easy to undo any single change if something breaks.

### What to do based on user instructions

- **User says "commit and push it"** → commit, push, verify live site
- **User says "just save it locally"** → commit but do NOT push (stays off the live site)
- **User says "deploy it"** → push existing commits to go live
- **User says nothing about deploying** → make edits but leave them uncommitted for review. Do NOT commit or push without being asked.

### If auto-deploy doesn't trigger

Sometimes pushing to GitHub doesn't trigger a Vercel build. If the latest deploy in `npx vercel ls` doesn't match the push, run `npx vercel --prod` to manually deploy.

---

## Project Overview

Single-page luxury marketing landing page for **Roche Bobois Residences St. Petersburg** — a 29-story, 164-unit ultra-luxury condominium tower at **344 4th Street South, Downtown St. Petersburg, FL 33701**. Expected completion **2029**.

This is **not** the developer's official site. It is operated by **HomeScene Property Partners International LLC** (dba HomeScene Realty), a licensed FL real estate brokerage acting as buyer-representative.

**Live URL:** https://pinkbuildingsstpete.com
**GitHub:** https://github.com/bobbee247/roche-bobo
**Vercel Project:** `roche-bobois-next` (org: `bobbeee-3773s-projects`)

### Origin

Built from a static HTML page that was originally split into 3 sections on OnePage.io (top HTML section, native form widget, footer HTML section). Converted to a Next.js App Router project to gain component architecture, image optimization, and smooth-scroll animations.

---

## Tech Stack

| Dependency | Version | Purpose |
|---|---|---|
| Next.js | 14.2.35 | App Router, SSR/SSG framework |
| React | ^18 | UI library |
| GSAP | ^3.14.2 | ScrollTrigger, parallax, SplitText, counters |
| @gsap/react | ^2.1.2 | GSAP React integration |
| Framer Motion | ^12.34.3 | Page transitions, stagger animations, hover states, MagneticButton |
| Lenis | ^1.3.17 | Smooth scroll (synced with GSAP ScrollTrigger) |
| Tailwind CSS | ^3.4.1 | Utility-first styling |
| TypeScript | ^5 | Type safety |
| PostCSS | ^8 | Tailwind processing |
| ESLint | ^8 + next/core-web-vitals + next/typescript | Linting |

**Build:** `next build` → static + edge routes (OG/Twitter images are edge-rendered)

---

## Design Tokens

### CSS Custom Properties (`globals.css :root`)

```
--cream:         #FAF7F0
--cream-dark:    #F0EBE0
--magenta:       #D94F8E
--magenta-light: #E878AB
--magenta-dark:  #B03A72
--black:         #1A1714
--charcoal:      #2E2A24
--warm-gray:     #8A8279
--gold:          #C4A87C
--gold-light:    #D9C4A0
```

### Tailwind Extended Colors (same values, mapped to utility classes)

- `cream` / `cream-dark`
- `magenta` / `magenta-light` / `magenta-dark`
- `black` (#1A1714, not pure black)
- `charcoal`
- `warm-gray`
- `gold` / `gold-light`

### Additional Colors (inline only)

- Gallery section background: `#E6A8C7` (pink)
- Footer background: `#A09882` (taupe)
- Selection highlight: magenta bg + white text

### Fonts

| Font | Variable | Weights | Usage |
|---|---|---|---|
| Cormorant Garamond | `--font-cormorant` | 300, 400, 500, 600, 700 (normal+italic) | Headings, quotes, large display text |
| DM Sans | `--font-dm-sans` | 300, 400, 500, 700 (normal+italic) | Body text, labels, buttons, nav |
| Caveat | `--font-caveat` | 400, 500, 600, 700 | Handwritten accent text (section labels) |

All loaded via `next/font/google` with `display: swap`.

### Custom Easing

- **Luxury easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — used everywhere (Tailwind `ease-luxury`, Framer Motion, GSAP)
- **GSAP SplitText/counters:** `power3.out`, `power2.out`

### Box Shadows

- `card-hover`: `0 20px 60px rgba(217, 79, 142, 0.08)`
- `amenity-hover`: `0 15px 50px rgba(0, 0, 0, 0.05)`
- `btn-hover`: `0 15px 40px rgba(217, 79, 142, 0.25)`
- `nav`: `0 1px 0 rgba(26, 23, 20, 0.08)`

---

## File Structure

```
src/
├── app/
│   ├── globals.css              # Tailwind directives, CSS vars, grain overlay, Lenis reset, custom cursor
│   ├── layout.tsx               # Root layout: fonts, metadata, gtag.js (G-0QY8DQWM6B + G-E1LPWL98H1)
│   ├── template.tsx             # Framer Motion page fade-in wrapper (opacity 0→1, 0.6s)
│   ├── page.tsx                 # Home page — composes all sections in order
│   ├── privacy-policy/page.tsx  # Full privacy policy (HomeScene / Roche Bobois specific)
│   ├── icon.svg                 # Favicon — magenta rounded square with "RB" in cream
│   ├── opengraph-image.tsx      # Edge-rendered 1200×630 OG image
│   ├── twitter-image.tsx        # Edge-rendered 1200×630 Twitter card image
│   └── fonts/                   # Geist font files (unused — leftover from create-next-app)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Fixed top nav: logo + "Request Pricing" CTA, transparent→cream on scroll
│   │   └── BrokerFooter.tsx     # HomeScene info, Google Map embed, full legal disclaimer, Equal Housing
│   │
│   ├── sections/                # Page sections in render order:
│   │   ├── Hero.tsx             # Full-screen video bg, SplitText title, fade-up tagline
│   │   ├── Intro.tsx            # 2-col: looping video + text, parallax on image
│   │   ├── GalleryStrip.tsx     # GSAP-pinned dual-row horizontal scroll gallery (15 images)
│   │   ├── Residences.tsx       # 3-col card grid: Studios, 1-2-3 BR, Penthouses
│   │   ├── ImageBreak.tsx       # Pinned image with zoom + SplitText quote overlay
│   │   ├── Amenities.tsx        # 2-col amenity blocks + AnimatedCounter (24,000+)
│   │   ├── UpdateBanner.tsx     # Black section: "100% Traditional Luxury Condominiums" notice
│   │   ├── Visionaries.tsx      # 3-col: Developer, Architect, Brand profiles
│   │   └── CTAForm.tsx          # Lead capture form → JotForm + gtag conversion events
│   │
│   ├── providers/
│   │   └── SmoothScrollProvider.tsx  # Lenis smooth scroll + ScrollTrigger sync
│   │
│   └── ui/
│       ├── AnimatedCounter.tsx  # GSAP counter: 0→target on scroll (used for 24,000+)
│       ├── CustomCursor.tsx     # Desktop-only dot+ring cursor, GSAP-animated, magenta accent
│       ├── ImageReveal.tsx      # Magenta mask that scales away on scroll (wipe reveal)
│       ├── MagneticButton.tsx   # Framer Motion spring-follow magnetic hover effect
│       ├── ResidenceCard.tsx    # Hover card with Framer Motion lift + border color change
│       ├── ScrollProgressBar.tsx # Fixed 3px magenta bar at top, Lenis-driven
│       └── SectionReveal.tsx    # GSAP ScrollTrigger fade+slide (up/left/right), configurable delay
│
├── data/
│   ├── residences.ts            # Studios (S), 1-2-3 BR, Penthouses (PH)
│   ├── amenities.ts             # Resort Deck, Arts & Dining, White Glove
│   └── visionaries.ts           # Valor Capital, GVI, Roche Bobois
│
├── hooks/
│   └── useScrollProgress.ts     # Lenis scroll progress (0→1)
│
├── lib/
│   ├── fonts.ts                 # Google font config (Cormorant Garamond, DM Sans, Caveat)
│   ├── gsap-config.ts           # GSAP + ScrollTrigger plugin registration
│   └── split-text.ts            # Manual SplitText util (wraps words in spans for GSAP animation)
│
└── types/
    └── global.d.ts              # Window.gtag / Window.dataLayer types
```

### Config Files (root)

- `next.config.mjs` — remote image pattern for `clinicboom.co`
- `tailwind.config.ts` — extended colors, fonts, easing, shadows
- `postcss.config.mjs` — Tailwind plugin
- `tsconfig.json` — `@/*` path alias → `./src/*`
- `.eslintrc.json` — next/core-web-vitals + next/typescript
- `.env.local` — `NEXT_PUBLIC_JOTFORM_ID=260516548739972`

---

## Animation Inventory

### GSAP Animations

| Component | Animation | Trigger | Duration | Easing |
|---|---|---|---|---|
| Hero | SplitText word-by-word reveal on h1 | Page load (0.5s delay) | 0.8s per word, 0.08s stagger | power3.out |
| Intro | Image parallax (yPercent -15%) | ScrollTrigger scrub (top bottom → bottom top) | Scrub (continuous) | none (linear) |
| GalleryStrip | Top row scrolls left, bottom row scrolls right | ScrollTrigger pin + scrub 0.8 | Scroll-driven | none (linear) |
| ImageBreak | Section pin + image zoom (scale 1→1.1) | ScrollTrigger pin (top top → +=50%) | Scrub | none |
| ImageBreak | SplitText quote word reveal | ScrollTrigger (top 60%, once) | 0.6s, 0.04s stagger | power3.out |
| UpdateBanner | SplitText heading word reveal | ScrollTrigger (top 80%, once) | 0.7s, 0.05s stagger | power3.out |
| AnimatedCounter | Counter 0→24,000+ | ScrollTrigger (top 80%, once) | 2s | power2.out |
| SectionReveal | Fade + slide (y:30 or x:±40) | ScrollTrigger (top 85%, once) | 0.8s | power3.out |
| ImageReveal | Magenta mask scaleX 1→0 | ScrollTrigger (top 75%, once) | 1s | power3.inOut |
| CustomCursor | Dot follows mouse (0.1s), ring follows (0.3s) | mousemove | 0.1s / 0.3s | power2.out |
| CustomCursor | Ring expand on hover (36→50px) | mouseenter/leave on interactive elements | 0.3s | default |

### Framer Motion Animations

| Component | Animation | Trigger | Duration | Easing |
|---|---|---|---|---|
| Template | Page fade-in (opacity 0→1) | Route mount | 0.6s | [0.22, 1, 0.36, 1] |
| Hero | Subtitle + tagline + divider fade-up | Page load (staggered delays) | 0.8s / 1s | [0.22, 1, 0.36, 1] |
| Hero | Scroll hint fade-in | Page load (1.5s delay) | 1s | default |
| Residences | Card stagger reveal (opacity+y) | whileInView (once, 20% threshold) | 0.8s, 0.15s stagger | easeOut |
| Amenities | Block stagger reveal | whileInView (once, 20% threshold) | 0.8s, 0.15s stagger | default |
| Visionaries | Card stagger reveal | whileInView (once, 20% threshold) | 0.8s, 0.15s stagger | default |
| ResidenceCard | Hover lift (y:-5) + shadow + border color | whileHover | spring (300/20) | spring |
| MagneticButton | Spring-follow mouse position (0.3x offset) | mousemove/leave | spring (300/20) | spring |

### CSS Animations

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Gallery images | Hover scale 1→1.05 | 700ms | ease-luxury |
| Gallery overlays | Hover opacity change | 500ms | default |
| Navbar | Background/padding transition on scroll | 500ms | ease-luxury |
| Nav CTA | Hover bg/border/color transition | 400ms | default |
| Amenity blocks | Hover shadow + translateY(-3px) | 500ms | default |
| ScrollProgressBar | Width tracks scroll (no transition, Lenis-driven) | — | — |

---

## Cloud-Hosted Assets (clinicboom.co)

All remote assets are served from `https://clinicboom.co/wp-content/uploads/`:

| Asset | URL | Used In |
|---|---|---|
| Hero video | `.../roche-bobois-residences-st-petersburg-florida.mp4` | Hero.tsx |
| Hero poster | `.../maxresdefault.jpg` | Hero.tsx, OG/Twitter images |
| Intro looping video | `.../Roche-gif-into-800-x-600-px.mp4` | Intro.tsx |
| Navbar logo (white) | `.../roche-bobois-white-trans.png` | Navbar.tsx |
| HomeScene logo | `.../HomeScene-logo-2.png` | BrokerFooter.tsx |
| Equal Housing logo | `.../equal-housing.png` | BrokerFooter.tsx |

**Local gallery images** (15 renderings in `public/images/gallery/`):
- RBSPT_2nd Bedroom.jpg
- RBSPT_Fireside Lounge.jpg
- RBSPT_Fitness Center.jpg
- RBSPT_Garden Arrival.jpg
- RBSPT_Lobby Entrance.jpg
- RBSPT_Owner's Bathroom.jpg
- RBSPT_Owner's Lounge.jpg
- RBSPT_Penthouse Crown.jpg
- RBSPT_Plaza and Porte Cochère.jpg
- RBSPT_Pool from South East.jpg
- RBSPT_Pool Toward Hot Tub.jpg
- RBSPT_Poolside Cabanas.jpg
- RBSPT_Residence Living Space.jpg
- RBSPT_Residence Owner's Suite.jpg
- RBSPT_Summer Kitchen, Al Fresco Dining.jpg

---

## Content / Key Facts

- **Developer:** Valor Capital (CEO: Moises Agami)
- **Architect:** Gomez Vazquez International (GVI)
- **Brand partner:** Roche Bobois (Paris)
- **Address:** 344 4th Street South, St. Petersburg, FL 33701
- **Height:** 29 stories (375-foot silhouette)
- **Units:** 164 exclusive residences
- **Unit types:** Studios, 1-2-3 bedrooms, penthouses
- **Project value:** $70 million
- **Amenities:** 24,000+ sq ft
  - 5th-floor resort-style pool deck
  - 5,000 sq ft public arts plaza
  - 4,100+ sq ft signature dining/retail
  - 24/7 white-glove concierge
  - EV-capable parking
- **Completion:** 2029 (per main site copy; privacy policy says 2028)
- **Key update:** No condotel, no rooftop public bar, no short-term rentals — 100% traditional luxury condominiums
- **Brokerage:** HomeScene Property Partners International LLC (dba HomeScene Realty)
  - Address: 600 Cleveland Street, Ste 312, Clearwater, FL 33755
  - Email: hello@homescene.com

---

## Google Analytics / Ads Tags

Configured in `layout.tsx` head, loaded via `next/script` with `afterInteractive` strategy:

| Tag ID | Purpose |
|---|---|
| `G-0QY8DQWM6B` | Google Ads tag (pageview tracking) |
| `G-E1LPWL98H1` | GA4 property "Pink Buildings St Pete" |

### Form Conversion Events (CTAForm.tsx)

On successful form submission, two events fire:

1. **Google Ads conversion:** `gtag('event', 'conversion', { send_to: 'AW-11360709244/mrPMCNGukf0bEPzUmqkq', value: 1.0, currency: 'USD' })`
2. **GA4 key event:** `gtag('event', 'generate_lead', { event_category: 'Lead', event_label: 'Contact Form Submission' })`

---

## Form / Lead Capture

- **Component:** `CTAForm.tsx` (client component)
- **Backend:** Direct POST to JotForm (`https://submit.jotform.com/submit/{FORM_ID}`)
- **JotForm ID:** `260516548739972` (env var `NEXT_PUBLIC_JOTFORM_ID`)
- **Mode:** `no-cors` fetch (fire-and-forget, no response parsing)
- **Fields:**
  - First Name (`q1_fullName[first]`, required)
  - Last Name (`q1_fullName[last]`, required)
  - Email (`q2_email`, required)
  - Phone (`q3_phone[full]`, optional)
  - Interested In (`q4_interestedIn`, dropdown: Studio/1-BR/2-BR/3-BR/Penthouse)
- **Section anchor:** `#reserve` (nav CTA links here)

---

## Broker / Legal Requirements

### HomeScene Disclaimer (BrokerFooter.tsx)

Full disclaimer stating HomeScene is NOT the developer/owner/affiliate of Roche Bobois Residences. All content is informational, subject to change. HomeScene acts as buyer/tenant-representative. Not intended as legal/tax/accounting advice.

### FL Statute 718.503 Notice (BrokerFooter.tsx)

Required oral representations disclaimer in ALL CAPS italic:
> "ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE."

Links to: http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.503.html

### Equal Housing

Equal Housing Opportunity logo + text displayed in footer, sourced from clinicboom.co.

### Privacy Policy

Full dedicated page at `/privacy-policy` covering data collection, use, sharing, CCPA rights, cookies, data retention. Last updated February 17, 2026. Linked from BrokerFooter.

---

## Deployment

- **Platform:** Vercel
- **Project ID:** `prj_04LkullbmiHup5VjusYxg73tq2kI`
- **Production domain:** `pinkbuildingsstpete.com`
- **Preview domains:** `roche-bobois-next.vercel.app`, `roche-bobois-next-bobbeee-3773s-projects.vercel.app`
- **Build command:** `next build`
- **Output:** Mix of static (home, privacy, 404) and edge (OG/Twitter image generation)
- **Remote images:** Allowed from `clinicboom.co/wp-content/uploads/**` via `next.config.mjs`
- **Environment variables:**
  - `NEXT_PUBLIC_JOTFORM_ID=260516548739972` (in `.env.local`, gitignored)

### Deploy Flow

Push to `main` on GitHub should auto-deploy via Vercel Git integration. If it doesn't trigger, use `npx vercel --prod` from project root.

---

## Known Issues / Notes

1. **Privacy policy data inconsistency:** Main site says "164 residences, completion 2029". Privacy policy page says "165 units, completion 2028". These should be reconciled.
2. **Unused font files:** `src/app/fonts/GeistMonoVF.woff` and `GeistVF.woff` are leftover from `create-next-app` scaffold — not referenced anywhere.
3. **Gallery image filenames have spaces:** Works but requires URL encoding. All 15 images are local in `public/images/gallery/`.
4. **OG/Twitter image lint warnings:** `<img>` element used instead of Next `<Image>` (required for edge `ImageResponse` — Next Image not available in edge runtime). Also missing `alt` props on those `<img>` tags.
5. **no-cors form submission:** JotForm fetch uses `mode: 'no-cors'` which means the response is opaque — there's no way to confirm server-side success/failure. The UI always shows "Request Received" after the fetch completes.
6. **Custom cursor on mobile:** CSS `cursor: none !important` is behind a `@media (pointer: fine)` query so it only applies on desktop, but the component also guards with `matchMedia`.
7. **Smooth scroll + ScrollTrigger sync:** Lenis and GSAP ScrollTrigger are kept in sync via `SmoothScrollProvider` — the Lenis `onScroll` callback calls `ScrollTrigger.update()` every frame.
8. **Google Map embed:** Points to 360 4th St S (not exactly 344) — may be intentional proximity pin or may need updating.
