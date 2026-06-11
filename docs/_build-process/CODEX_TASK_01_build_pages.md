# CODEX_TASK_01 — Build all three portfolio pages + shared nav/footer

TASK: Build the full portfolio site (home, Switchback case study, about) + shared TopNav and Footer components, from the content brief.

BRANCH: main  (single-writer repo; commit directly)

OWNS THESE FILES (create/edit only these):
- src/app/page.tsx                 (Home)
- src/app/switchback/page.tsx      (Switchback case study — THE centerpiece)
- src/app/about/page.tsx           (About)
- src/components/top-nav.tsx       (new — shared nav: Home / Switchback / About)
- src/components/footer.tsx        (new — shared footer: email, GitHub, LinkedIn placeholder)
- src/app/globals.css              (only if you need to ADD utility classes; don't remove existing tokens)

BUILD FROM: docs/CASE_STUDY_BRIEF.md — the whole file is the spec.
- Home → §"Page 1 — Home"
- Switchback → §"Page 2 — Switchback case study" (Sections A–F). This is the most important page; give it the most care.
- About → §"Page 3 — About"
- Use the exact numbers/claims from §"Hard facts". Honor the §"Do NOT claim" list.

DESIGN:
- Use the tokens already in src/app/globals.css (bg, surface, surface-2, border, text, muted, accent, accent-strong). Don't hardcode hex; don't invent a new palette.
- Dark, modern, clean, generous whitespace, strong typographic hierarchy. Distinct from Switchback's own amber brand — this is Jack's site.
- Mobile-first and fully responsive. Render TopNav at the top and Footer at the bottom of every page (compose them into each page, or wrap in the layout — your call, but keep layout.tsx's existing metadata/font setup intact).
- Accessible: semantic landmarks (<header>/<main>/<footer>/<nav>), correct heading order (one <h1> per page), visible focus states, sufficient contrast.

WHERE TO LEAVE PLACEHOLDERS (clearly marked with a comment, don't invent):
- LinkedIn URL (Jack will supply)
- About-page bio specifics + the "what I'm looking for" line
- Any optional screenshots (leave a labeled empty slot; do NOT source real Switchback data)

DONE WHEN:
- All three pages built from the brief, with shared nav + footer.
- `npm run build` passes with no errors.
- No client components unless an actual interaction requires it (a static nav doesn't).
- No new dependencies added.
- CODEX_RESULTS.md written at repo root: what you built, files touched, any design decisions you made, and every placeholder you left for Jack/CC.

DO NOT TOUCH:
- src/app/layout.tsx metadata/font block (you may wrap children with nav/footer if you go the layout route, but keep the existing <html>/<body>/font setup).
- docs/CASE_STUDY_BRIEF.md, CONTEXT.md, package.json, tsconfig.json, next.config.ts.
