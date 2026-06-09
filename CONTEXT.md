# CONTEXT.md — jackfay.com portfolio (read this FIRST, every time)

> Codex: read this whole file before touching anything. It's the contract between Claude Code (CC) and Codex for this repo. Paste it at the top of every Codex session here.

## What this project is

Jack Fay's personal **portfolio site** at `jackfay.com`. A small, static Next.js site whose centerpiece is a case study of **Switchback** — a recovery-support web app Jack built. The audience is hiring managers, engineering leads, and potential investors/collaborators.

**This is a brand-new, standalone project.** It does NOT inherit any rules, safety floor, voice directive, or process from the Switchback/Sanctuary product. The only Switchback connection is *subject matter* — the case study is *about* Switchback.

## Source of truth for ALL copy

**`docs/CASE_STUDY_BRIEF.md`** is the single source of truth for every word on the site. Build page copy from it. If the brief and your instinct disagree, the brief wins; if the brief is missing something, flag it for CC — don't invent claims (especially numbers or outcome claims about Switchback).

## Stack & constraints

- Next.js 16 (App Router) + React 19 + TypeScript, Tailwind v4. Already scaffolded and building clean.
- **Static only.** No Supabase, no auth, no database, no client-side data fetching, no API routes, no `"use client"` unless genuinely needed for an interaction. Server components / plain JSX.
- Design tokens are in `src/app/globals.css` (mint/emerald accent on near-black). Use them — don't hardcode hex.
- Mobile-first, responsive, accessible (semantic HTML, heading order, focus states, contrast).
- Run dev on port **3010** (`npm run dev`).

## Agent operating model (adapted from the Switchback model — lighter, because this repo has NO shared-tree problem)

**Roles**
- **CC (Claude Code) = owner/organizer.** Scaffolding, the content brief, routing/structure decisions, review on return, the GitHub+Vercel wiring, anything ambiguous or cross-cutting. CC owns `docs/CASE_STUDY_BRIEF.md`.
- **Codex = primary builder.** Codex does the BULK of the page/component build from the brief. This is the inverse of the Switchback split (where Codex was a narrow bounded executor) — here Codex builds broadly, CC reviews and integrates.

**Branch rule (simplified)**
- This is a separate repo with a single writer at a time, so the heavy `codex/*`-only ritual from Switchback is NOT required here. Work directly on the branch named in your task block.
- BUT: still **commit your work and report what you did** in a `CODEX_RESULTS.md` at repo root when you finish, so CC's review-on-return is clean. Leave the tree committed, not dirty.

**Handoff direction**
- CC → Codex: a task block (see template below), pasted in chat by Jack along with this CONTEXT.md.
- Codex → CC: finish, commit, write `CODEX_RESULTS.md` (what you built, files touched, any decisions you made, anything you couldn't do or flagged for CC).

**CC intake ritual on return** (so nothing surprises Jack): `git log`/`git status` → read `CODEX_RESULTS.md` → review diff → `npm run build` must pass → CC integrates/polishes.

**Anti-double-task rule:** Each task block names the EXACT files Codex owns for that task. CC will not edit those files while Codex holds the task; Codex will not edit files outside its named set. If Codex needs a file outside its set, flag it in `CODEX_RESULTS.md` rather than reaching for it.

## Hard "do not" list (portfolio-specific, not Switchback rules)

- Don't invent stats or claims about Switchback. Use only the numbers in the brief's "Hard facts" section.
- Don't describe Switchback as "treating/curing" anything — it's **support** software (per the brief; this is for credibility, not compliance).
- Don't add analytics, tracking, or third-party scripts without CC sign-off.
- Don't pull real user data or behind-login screenshots from Switchback into this site.

## Task block template (CC fills this per handoff)

```
TASK: <one-line what>
BRANCH: <branch name, or "main">
OWNS THESE FILES (only edit these): <explicit list>
BUILD FROM: docs/CASE_STUDY_BRIEF.md  §<which sections>
DONE WHEN:
  - <verifiable criteria>
  - npm run build passes
  - CODEX_RESULTS.md written
DO NOT TOUCH: <files/areas CC is holding>
```
