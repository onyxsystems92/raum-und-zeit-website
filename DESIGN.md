# Raum & Zeit — Design Implementation Reference

Source reference: Refero `2.AG — Style Reference` supplied by Franklyn on 2026-08-19.

## Translation rule

Use the 2.AG reference for **design grammar**, not brand copying.

Preserve from the reference:
- high-contrast editorial website character
- 50/50 or asymmetric split layouts
- Inter Tight / Inter-like typography
- generous vertical rhythm
- hairline borders instead of heavy shadows
- 12–20px card radii
- pill actions used sparingly
- layered, product-like information presentation
- clear navigation and strong interaction states
- alternating light/dark structural surfaces

Do not copy:
- 2.AG branding or content
- pharmaceutical/product imagery
- teal/mint identity as the dominant palette
- testimonial or dosage components
- science claims/stat blocks that do not fit Raum & Zeit

## Raum & Zeit identity translation

Sarah explicitly wants the existing CI to remain recognizable, but only **accent-wise**. The current website is too colorful; this rebuild should feel quieter and more mature.

Principle: **Preserve → refine → reduce.**

### Foundation
- `--paper: #f6f3ed` warm ivory
- `--paper-2: #ede9e1` warm stone
- `--ink: #161817` near-black
- `--graphite: #555a57`
- `--line: rgba(22,24,23,.18)`
- `--dark: #202724` deep charcoal-botanical

### CI accents
Use only in small, intentional moments. These are muted implementation accents, not a new brand declaration:
- `--ci-coral: #d8796f`
- `--ci-gold: #d5ad5f`
- `--ci-sage: #7f9a86`
- `--ci-blue: #7897a7`

The accents should collectively occupy roughly 10–15% of the visual system. Never place all four as large surfaces. Prefer one active accent at a time.

Recommended usage:
- hourglass mark: multi-accent or selected single accent
- active navigation marker
- selected orientation item
- tiny section labels / rules / dots
- hover feedback
- news metadata

## Typography

Primary: `Inter Tight`, fallback `Inter, Arial, sans-serif`.

- Display: 58–72px desktop, 42–52px tablet, 36–44px mobile; weight 500; tracking -0.04em; line-height .96–1.02
- H2: 36–48px; weight 500; tracking -0.03em
- H3: 20–28px; weight 500
- Body: 16–18px; line-height 1.5–1.65
- Meta / labels: 10–12px uppercase; tracking .10em

## Layout

- max-width: 1280px
- gutters: 24px mobile / 36px tablet / 56px desktop
- major section spacing: 72–112px
- hero: strong asymmetric split with a dark structural field and a light/interactive field
- avoid long single-column brochure flow
- keep total page to approximately 5 meaningful visual moments

## Shape / elevation

- hairline borders define depth
- avoid heavy shadows
- radii: 14–22px on cards, 999px on primary pills
- use overlap and tonal steps for layering

## Signature device: abstract hourglass

The hourglass should not be antique or illustrative.

Use two opposing geometric chambers narrowing to a center point. It may be built from:
- two rounded trapezoids / clipped planes
- two triangular forms
- two mirrored curved paths

It should function as:
- brand mark
- favicon
- navigation icon
- subtle transition/loading motif
- spatial composition principle

The mark may carry Sarah's CI accents more visibly than the rest of the page.

## Motion

Restrained only:
- 180–420ms transitions
- selected orientation panel reveal
- navigation underline / dot movement
- subtle hourglass transformation
- image/placeholder parallax maximum 4–8px
- respect `prefers-reduced-motion`

## Website behavior principle

The site should not dump information.

`visitor intention → concise relevant practice information → next useful action → human decision`

For V1 this is deterministic progressive disclosure, not medical AI.

## Don'ts

- no generic medical blue
- no wellness-spa beige-only aesthetic
- no gradients as decoration
- no cliché physiotherapy stock photography
- no icon-card wall
- no large rainbow CI sections
- no chatbot box
- no symptom diagnosis/triage
- no invented testimonials or medical claims
