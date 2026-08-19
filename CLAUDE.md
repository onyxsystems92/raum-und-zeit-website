# Claude Code Handoff — Raum & Zeit Website

MODEL: Claude Code  
INTELLIGENCE: SONNET  
ENVIRONMENT: CLOUD unless local-only media/assets are supplied; switch to LOCAL only when required.

## Objective

Final engineering validation and deployment of the already-built static first draft for Sarah Weber / Raum und Zeit Physiotherapie.

Do **not** redesign the product, website strategy, information architecture, or brand direction unless Franklyn explicitly requests a change.

## Preflight

1. Read `README.md`.
2. Read `DESIGN.md` completely.
3. Inspect `index.html`, `styles.css`, `script.js`.
4. Preserve the current core architecture:
   - interactive progressive-disclosure hero
   - restrained Raum-&-Zeit CI accents
   - abstract hourglass signature
   - Therapy / Team / News / Contact
   - no backend / patient data / medical AI
5. Do not invent unresolved content.
6. Prefer fixes over rewrites.

## Required validation

Serve locally and verify:

```bash
python3 -m http.server 8000
```

Then validate at minimum:

- desktop at ~1440px
- tablet at ~900px
- mobile at ~390px
- all four hero orientation choices
- all five therapy choices
- navigation anchors
- phone link
- route link
- News rendering
- prefers-reduced-motion behavior
- browser console has no errors
- no horizontal overflow
- keyboard focus/click interaction remains usable

## Content boundaries

Before a production/public launch, keep these unresolved unless Franklyn/Sarah supplies confirmation:

- postcode
- email
- final appointment/booking URL
- real Google Maps place/embed
- approved staff descriptions
- real News entries
- final photography
- imprint/privacy content

Do not silently copy uncertain values from third-party listings.

## Design boundaries

- The supplied Refero 2.AG system is inspiration, not a brand to clone.
- Keep Sarah's CI as small accents only; do not make the site colorful again.
- Avoid generic medical blue, wellness spa styling, SaaS dashboards, chatbot UI, and cliché physio stock photography.
- Preserve high contrast, hairline borders, editorial hierarchy, restrained motion and real website chrome.

## Deployment

This is a dependency-free static site. No build command is required.

Preferred shortest reliable path: deploy repo root as a static site to the approved host.

Do not alter Sarah's existing live domain until Franklyn explicitly approves production cutover.

## Completion report

Return only:

- VALIDATION STATUS
- ISSUES FOUND / FIXED
- DEPLOYMENT TARGET
- PREVIEW URL
- UNRESOLVED CONTENT
- NEXT REQUIRED HUMAN DECISION
