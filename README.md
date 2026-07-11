# ByteLab — Landing Page

Scroll-driven marketing landing page for ByteLab (robotics education, Cambodia).
Next.js App Router + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 (Next picks the next free port if 3000 is busy).

## Where to plug in real content

| What | Where |
|---|---|
| **Brand colors** — violet primary / blue secondary | `app/globals.css`, the `:root` block at the top. One place; every `bg-primary` / `text-blue` class follows. Rules: white bg, ink text, slate muted copy, violet sparingly for primary actions, blue for secondary, mist for chip tints, no gradients. |
| **Offering media** — 3D kit model, platform video, project photos | `components/MediaSlot.tsx` — one slot per offering with `[TODO]` comments: drop a `.glb` in a `<model-viewer>`/react-three-fiber for the kit, a muted looping `<video>` for e-learning, real photos for the collage. The R&D self-drawing blueprint works as-is. |
| **All copy (EN + Khmer)** | `lib/strings.ts`. Khmer strings are drafts — have a native speaker review. |
| **Logo** | `components/Logo.tsx` (marked `[LOGO PLACEHOLDER]`). |
| **Contact details** — `[email]`, `[phone]`, `[social links]` | `lib/strings.ts` (displayed text) and `CONTACT_EMAIL` in `components/Contact.tsx` (mailto target). Social hrefs are in `Contact.tsx` and `Footer.tsx`. |
| **Partner logos** — `[partner logos here]` | `components/Partners.tsx` — swap the dashed tiles for `<Image>` logos. |
| **Form backend** | `components/Contact.tsx` `handleSubmit` — currently a mailto stub; swap for Formspree / an API route. |

## Where to plug in more real content

- **Team** — names, roles, photos: `lib/strings.ts` (`team.members`) + swap the numbered avatar in `components/Team.tsx` for `<Image>` photos.
- **Impact numbers** — `impact.stats` in `lib/strings.ts`; delete the placeholder note line once real.
- **Achievements** — `achievements.items` (years/titles/stories).
- **Testimonials** — `testimonials.quotes`.
- **FAQ** — `faq.items` (kit pricing answer is a placeholder).
- **Service pages** — deeper copy per service lives in `whatWeDo.items[].detail`.

## Structure

- `app/page.tsx` — landing page section order: Hero, Mission, WhatWeDo, WhyUs, Impact, Testimonials, ForYou, Partners, About teaser, FAQ, Contact
- `app/about/page.tsx` — About Us page: story hero, Achievements (timeline), Team. Split out from the landing page to keep the homepage focused on services/conversion; a teaser card on the homepage links here.
- `app/services/[slug]/page.tsx` — one detail page per service (`robot-kits`, `learning-platform`, `project-services`, `research`); slugs map to services in `lib/services.ts`
- `components/` — Header (sticky, transparent→solid), Hero, Mission, WhatWeDo (large scroll-animated bands, each links to its service page), WhyUs, Impact (count-up stats), Testimonials, FAQ (accordion), ForYou (audience tabs), Partners, AboutTeaser, Contact, Footer
- `components/AboutDetail.tsx`, `Achievements.tsx`, `Team.tsx` — used by the About Us page
- `components/ScrollProgress.tsx` — hairline reading-progress under the header; `components/Marquee.tsx` — scroll-driven text marquee
- `components/SmoothScroll.tsx` — Lenis (skipped for reduced-motion users)
- `components/LangProvider.tsx` — EN/ខ្មែរ toggle state

## Accessibility & motion

`prefers-reduced-motion` disables Lenis, the hero intro, reveals, and all
decorative CSS animation. Keyboard focus is visible site-wide.
