# Portfolio content brief — jackfay.com

> This is the **source of truth for all copy** on the portfolio. Codex builds the pages
> from the text and structure here. It is a content + messaging brief, not a design spec —
> exact layout/visual choices are Codex's to make within the design notes at the bottom.
>
> Audience, in priority order: **(1) hiring managers / technical recruiters**, **(2) engineering leads who will read the case study closely**, **(3) potential investors or collaborators** who land here from a pitch. Every section below is written with "what does this reader need to believe about Jack after 90 seconds?" in mind.

---

## Who Jack is (the framing that makes the rest land)

Jack Fay is a builder who shipped a real, complex, opinionated product — **Switchback** — largely as a self-directed project, working in close pair-collaboration with AI tooling. The story is **not** "junior coder did a tutorial." The story is: *a person with a strong product instinct and a hard problem learned to direct a modern full-stack + AI build, made the architectural and ethical calls himself, and shipped something live and non-trivial.*

That framing matters because it is **exactly the profile a 2026 employer is trying to identify**: someone who can take an ambiguous problem, decide what to build, and drive an AI-assisted build to completion without needing every decision made for them. Lead with judgment and ownership; the line count is secondary.

**Tone:** confident, plainspoken, specific. No buzzword soup. No "passionate about leveraging synergies." Short sentences. Concrete nouns. Let the engineering details do the bragging.

---

## Why this reads well to an outside audience (reasoning — fold these into the copy, don't list them literally)

Five things a hiring manager / investor is scanning for, and where Switchback supplies each:

1. **Did they ship something real, or just describe an idea?** → Switchback is **live**, with real alpha users (~36 at last count, ~85% activation), 37 database tables, and an AI-driven crisis flow in production. *Show the live link prominently.* A working URL beats any amount of prose.

2. **Can they make decisions, or just take orders?** → The product is full of *opinionated, defensible* calls: it's deliberately **not** a streak-tracker (rejects the entire gamification playbook the category runs on), crisis routing is **deterministic, not AI** (a judgment call about where you do and don't trust a model), and the whole thing is organized around one make-or-break moment rather than a feature list. *Frame each decision as a decision — "I chose X over Y because Z."* This is the single most differentiating thing on the site.

3. **Do they understand the domain, or just the tech?** → Recovery is a sensitive, high-stakes space. Switchback shows domain maturity: it positions itself as **support software**, not treatment; it pushes users *toward* human connection, not deeper into an app; it refuses dark patterns that would juice engagement metrics at users' expense. *This restraint is a selling point — it signals product ethics and judgment, which is rare and valued, especially in health-adjacent work.* (Note: we describe it as "support," never as something that "treats" or "cures" — partly because that's accurate, and mostly because overclaiming here would read as naive to anyone who knows the space.)

4. **Can they work the modern AI-assisted stack?** → Switchback uses Claude (Anthropic) via server-side calls, with the API key never reaching the browser, and a clear line drawn between *where AI generates* (reflections, interventions) and *where determinism is required* (crisis classification, safety routing). And the build itself was an AI-pair-programming effort — which, told straight, signals fluency with how software actually gets made now. *Don't hide the AI collaboration; frame it as a strength and a modern competency.*

5. **Is the engineering actually sound?** → Row-Level Security on every one of 37 tables (defense in depth — a leaked key still exposes nothing cross-user), per-user-per-day caching to avoid redundant model calls, server components keeping secrets server-side, a deterministic-vs-generative split. *These are the details that make an engineering lead nod.* Include 3–4 of them concretely.

**The meta-point to land:** Jack is someone who can own a product from concept to live deployment, make the hard calls, and work fluently with AI tooling — the profile of a generalist builder, not a narrow specialist. That's the takeaway every page should reinforce.

---

## Page 1 — Home (`/`)

**Goal:** in one screen, establish who Jack is and route the reader to the Switchback case study.

### Hero
- **Name:** Jack Fay
- **One-line positioning** (pick/adapt): *"I build products end to end — from the core insight to the live deployment."*
- **Sub-line:** something like *"Most recently: Switchback, a recovery-support app engineered around the single moment that decides everything."*
- **Two buttons:** primary → "See the Switchback case study" (`/switchback`); secondary → "About me" (`/about`) or a direct link to the live app.

### "What I do" (3 short cards or a compact list)
- **Product thinking** — finding the one moment that matters and building everything around it.
- **Full-stack engineering** — Next.js / React / TypeScript / Postgres, shipped to production.
- **AI integration** — building with Claude/LLMs where they help, and knowing where *not* to trust them.

### Featured project teaser (Switchback)
- One paragraph: what it is, that it's live, one standout stat (37 tables / live alpha / deterministic crisis engine).
- Link through to the full case study.
- A live-app link (the public Switchback URL — use the marketing/landing surface, not anything behind login).

### Footer
- Email, GitHub (github.com/jfay2493), LinkedIn (placeholder — Jack to supply), and a "Built with Next.js, deployed on Vercel" line is fine as a quiet credibility signal.

---

## Page 2 — Switchback case study (`/switchback`) — THE CENTERPIECE

This page does the resume work. Structure it as a narrative, not a feature dump.

### Section A — The one-liner + the live link
- Headline: what Switchback is in one sentence — *"A recovery-support web app built around a single make-or-break moment: someone has an urge, opens the app, and doesn't relapse."*
- Immediately offer the **live link** and a one-line role statement: *"Solo creator and lead builder — product, architecture, and engineering, in AI-pair collaboration."*

### Section B — The problem & the insight
- The category is full of **tracking apps** — log your days, watch a streak, get a badge. Jack's bet: that's the wrong model. Tracking measures the problem; it doesn't intervene in it.
- The insight: recovery turns on **a specific moment** — the gap between an urge and an action. Build for *that moment*, not for a dashboard.
- The product is organized around one loop: **Awareness → Interruption → Replacement → Reinforcement.** Every feature has to serve it or it's noise.

### Section C — The hard decisions (the heart of the page)
Present these as deliberate engineering/product calls. Each gets a short "I chose X because Y":

1. **No streaks, no gamification.** The whole category runs on streak counters and FOMO. Switchback deliberately rejects them — a broken streak shouldn't punish someone in recovery, and engagement-bait is the wrong incentive in this domain. *Chose user well-being over the metrics-juicing playbook.*
2. **Deterministic crisis routing — not AI.** The flow that decides whether someone is in crisis is **rule-based, not a model call.** When the stakes are someone's safety, you don't want a probabilistic system silently misclassifying. AI generates the *supportive* content; a deterministic classifier owns the *routing*. *A clear, defensible line about where to trust a model and where not to.*
3. **Three lanes from one account.** Switchback serves three different users — someone in recovery, someone privately reflecting on a habit ("Mirror"), and someone supporting a person in recovery ("Ally") — via a single `mode` flag and a **mode-aware navigation rail** that reshapes the app per lane. *One codebase, three tailored experiences.*
4. **Support, not treatment.** Deliberately scoped as a support tool that points users *toward* human connection and professional help — never positioned as therapy or a medical device. *Domain maturity and honest scoping.*

### Section D — How it's engineered (for the technical reader)
Concrete, verifiable details (all true as of the live build):
- **Stack:** Next.js 16 (App Router) + React 19 + TypeScript; Tailwind v4; Supabase (Postgres + Auth); Anthropic Claude (Sonnet) via server-side SDK; deployed on Vercel with push-to-deploy.
- **Security:** Row-Level Security enabled on **every one of 37 tables** — policies enforce that a user can only ever touch their own rows, so even a leaked client key exposes nothing cross-user. Defense in depth, not perimeter-only.
- **AI architecture:** the Anthropic key never reaches the browser — all model calls run from server actions / server components. Daily reflections are **cached per-user-per-day** in the database so repeated loads don't re-hit the API. A deterministic classifier (not a model) owns crisis routing.
- **Data model:** ~37 tables spanning assessments, journaling, interventions, a peer-support "Circle," meeting companion, notifications, and referrals — a real relational schema, not a toy.
- **Scale of the build:** [Jack to confirm a line or two on timeline / solo nature / lines of code if desired.]

### Section E — Outcome / status
- **Live**, in a private alpha with real users (~36 users, ~85% activation at last measure — frame honestly as early-stage alpha, which is *more* credible than vague "thousands of users" claims).
- Link to live app again. Optional: 2–3 screenshots of **signed-out / marketing surfaces or mocked data only** — never a real user's data.

### Section F — What Jack took from it
- A short, honest reflection: learned to drive a full-stack + AI build end to end; made the architecture and product calls; learned where to lean on AI and where to keep humans/determinism in the loop. Forward-looking, not a humble-brag.

---

## Page 3 — About (`/about`)

Short. A few paragraphs:
- Who Jack is and the path to building Switchback (career-pivot-into-building is a strong, relatable narrative — use it if Jack's comfortable).
- How he works: product-first, ships, opinionated, fluent with AI tooling.
- What he's looking for (Jack to specify — roles, contract, collaboration).
- Contact + links.

*(Jack to supply: bio specifics, the "looking for" line, LinkedIn URL. Leave clearly-marked placeholders.)*

---

## Hard facts (use these verbatim where numbers appear — all verified against the live codebase)

- **37** database tables, **Row-Level Security on every one**.
- Stack: **Next.js 16, React 19, TypeScript, Tailwind v4, Supabase (Postgres + Auth), Anthropic Claude (Sonnet 4.6), Vercel.**
- Three lanes: **Recovery / Mirror / Ally**, one account, mode-aware navigation rail.
- Core loop: **Awareness → Interruption → Replacement → Reinforcement.**
- Make-or-break moment: **urge → opens app → does not relapse.**
- Crisis routing is **deterministic, not AI**; AI generates supportive content only.
- Alpha: **~36 users, ~85% activation** (early-stage — frame as such).
- GitHub: **github.com/jfay2493**. Live app: **switchbackrecovery.com** (use the public/marketing surface for any embeds or screenshots).

### Do NOT claim (these would read as naive or untrue to an informed reader)
- That Switchback "treats," "cures," or "guarantees" anything. It's **support** software.
- Any specific clinical outcome (relapse-rate reductions, etc.) — there's no data for it.
- Inflated user numbers. ~36 alpha users, told straight, beats a vague big number.
- That it was built with no AI help. The AI-pair-collaboration is part of the story and a strength — tell it straight.

---

## Design notes (Codex's discretion within these)
- Dark, modern, clean. Distinct from Switchback's own warm-amber brand — this is **Jack's** site. Tokens are already defined in `globals.css` (mint/emerald accent on near-black). Use them.
- Generous whitespace; strong typographic hierarchy; mobile-first and fully responsive.
- Fast and static — no client-side data fetching, no auth, no database. Server components / plain JSX only.
- Accessible: semantic HTML, real heading order, sufficient contrast, focus states on links/buttons.
- A simple shared top nav (Home / Switchback / About) and a shared footer. Build them as components in `src/components/`.
