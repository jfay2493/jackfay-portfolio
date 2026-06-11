# jackfay.com — portfolio

Personal portfolio site for Jack Fay. Static Next.js site whose centerpiece is a
case study of **Switchback**, a recovery-support web app.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · deployed on Vercel.
Fully static — no database, no auth, no API routes.

## Develop

```
npm install
npm run dev      # http://localhost:3010
npm run build    # production build
```

## Structure

- `src/app/page.tsx` — home
- `src/app/switchback/page.tsx` — Switchback case study (the centerpiece)
- `src/app/about/page.tsx` — about + contact
- `src/components/top-nav.tsx`, `footer.tsx` — shared chrome
- `docs/CASE_STUDY_BRIEF.md` — source of truth for all site copy
- `docs/_build-process/` — CC↔Codex build coordination notes (CONTEXT, task, results)

## Open placeholders (search the code for `Placeholder:`)

- About: bio specifics + "what I'm looking for" line
- Switchback: optional screenshot slot + optional build-scale proof point
- Contact email `jack@jackfay.com` — confirm this mailbox exists or swap it
