# Jack's Learning Playbook

> Two jobs:
> **Part 1** decodes every piece of terminology on your portfolio so you can speak to it confidently in an interview or a pitch.
> **Part 2** is a starter path for the foundational skills (a little Python, a little SQL, the core vocabulary) that make you a stronger product builder working alongside AI.
>
> You do **not** need to become an engineer. The goal is *fluency* — understanding enough to make good calls, ask sharp questions, and direct an AI-assisted build. That's the role you're actually growing into.

---

## Part 1 — Every term on your portfolio, explained

Read this once and the site stops being a wall of jargon and becomes a story you can tell.

### The stack (the "how it's built" list)

- **Next.js** — the framework the whole app is built on. Think of a framework as a pre-organized set of tools and rules so you're not building everything from scratch. Next.js is built on **React** and handles things like routing (which URL shows which page) and rendering. *Your one-liner:* "Next.js is the React framework I built the app on — it handles routing and server-side rendering."
- **React** — the library for building user interfaces out of reusable **components** (a button, a card, a nav bar — each is a component you define once and reuse). Almost the entire modern web is React or React-like. *Your one-liner:* "React is the UI library — everything on screen is a component."
- **TypeScript** — JavaScript (the language of the web) with a **type system** bolted on. "Types" mean you declare what kind of data each thing is (a number, a string, a user object), and the computer catches mistakes *before* the code runs. It's JavaScript with guardrails. *Your one-liner:* "TypeScript is JavaScript with type safety — it catches a whole class of bugs before they ship."
- **Tailwind (CSS)** — a styling tool. Instead of writing separate style files, you put small utility classes right on the element (`text-lg`, `bg-surface`, `px-6`). Faster to build with, and the styling lives next to the thing it styles. *Your one-liner:* "Tailwind is the styling system — utility classes instead of separate CSS files."
- **Supabase** — your **backend-as-a-service**. It bundles a **database** (Postgres), **authentication** (login/signup), and APIs into one hosted product so you don't run your own servers. *Your one-liner:* "Supabase is the backend — Postgres database plus auth, hosted."
- **Postgres (PostgreSQL)** — the actual **relational database** under Supabase. A relational database stores data in **tables** (like spreadsheets) that can reference each other. Your app has 37 of these tables. *Your one-liner:* "Postgres is the relational database — 37 tables."
- **Anthropic Claude** — the **AI model** (a large language model, or **LLM**) the app calls to generate text — the reflections and the supportive intervention content. "Sonnet" is the specific model tier. *Your one-liner:* "Claude is the LLM I call for the generative parts — reflections and intervention copy."
- **Vercel** — where the site is **hosted and deployed**. You push your code to GitHub, Vercel automatically builds it and puts it live on the internet. *Your one-liner:* "Vercel hosts it — push to GitHub, it auto-deploys."

### The architecture words (the "why it's smart" list — these are your strongest interview material)

- **Row-Level Security (RLS)** — a database rule that says *a user can only ever read or write their own rows.* It's enforced at the database itself, not just in the app code, so even if something else fails, your data can't leak across users. "Defense in depth" = multiple independent layers of protection. *Your one-liner:* "RLS is enforced on every table — a user physically cannot query another user's data, even if a key leaked."
- **Deterministic vs. AI/generative** — **Deterministic** means rule-based and predictable: same input always gives same output, no guessing. **Generative/AI** means a model produces something new and is *probabilistic* (it can occasionally be wrong). Your key design call: the **crisis routing is deterministic** (you don't let a model decide whether someone's in danger), while the **supportive content is generative**. *Your one-liner:* "I drew a hard line — deterministic rules own safety routing, the model only generates supportive content. You don't gamble someone's safety on a probability."
- **Server-side / client-side** — **Client-side** = runs in the user's browser (visible, less trusted). **Server-side** = runs on your server (hidden, trusted). Secrets like your AI **API key** must stay server-side so they never reach the browser. *Your one-liner:* "All model calls run server-side — the API key never reaches the browser."
- **API key** — a secret password that authorizes your app to use a paid service (like Anthropic). If it leaks, someone can run up your bill. Hence "never expose it client-side."
- **Caching** — storing the result of an expensive operation so you don't redo it. You cache the daily reflection **per-user-per-day** — generate it once, reuse it all day instead of paying for a new AI call on every page load. *Your one-liner:* "Reflections are cached per-user-per-day — one model call, not one per page load."
- **Schema** — the *structure* of your database: what tables exist, what columns each has, how they relate. "37-table schema" describes the shape of your data model.
- **Component** — (see React above) a reusable UI building block. Your nav and footer are components used on every page.
- **Routing** — the rules mapping a URL (`/switchback`) to the page that should show. Next.js does this by folder structure.
- **Static site** — a site with no live database or login, where every page is pre-built. Your *portfolio* is static (fast, cheap, simple). Switchback is *not* static — it's a full dynamic app. Knowing the difference is itself a useful concept.

### The product words (the "why it matters" list)

- **The loop: Awareness → Interruption → Replacement → Reinforcement** — your product thesis. Not a feature, a *philosophy*: notice the urge, break the pattern, swap in a better action, reinforce it. Everything in the app has to serve this.
- **Pattern interruption** — the core mechanic: catching someone *in* the urge and breaking the automatic chain to the action.
- **Activation (rate)** — the % of signups who actually *do the core thing* (not just register). Your ~85% activation means most people who sign up engage — a genuinely strong early signal. *Investors and PMs care about this number a lot.*
- **Alpha (vs. beta)** — **Alpha** = earliest stage, small trusted group, still rough. **Beta** = later, broader, more polished. Calling it "private alpha" is honest and credible.
- **Dark patterns** — manipulative design tricks that benefit the company at the user's expense (fake urgency, guilt-trip streaks, hard-to-cancel flows). Your refusal to use them is a *product-ethics* signal employers respect.

---

## Part 2 — What's worth learning (and the order to learn it)

You asked what would help you assist AI in product development down the road. Here's the honest, prioritized answer. Don't try to learn it all — go top to bottom and stop wherever you've had enough.

### Tier 1 — Highest leverage, learn these first

**1. SQL (a few hours gets you 80% of the value)**
SQL is how you ask a database questions. It's the single most useful technical skill for a product person because it lets you *answer your own questions about your users* without waiting on anyone.
- What to learn: `SELECT` (get data), `WHERE` (filter), `COUNT`/`GROUP BY` (aggregate), `JOIN` (combine tables).
- A real example you could already run on Switchback: *"How many users signed up this week?"* → `select count(*) from profiles where created_at > now() - interval '7 days';`
- Where: **sqlbolt.com** (free, interactive, ~2 hours) or **PostgreSQL Tutorial** (postgresqltutorial.com).
- Why it's #1 for you: you already *have* a 37-table Postgres database full of real data. SQL turns it into answers.

**2. Reading code (you don't need to write much yet)**
Being able to *read* what an AI wrote and understand roughly what it does is more valuable than writing from scratch. You already do some of this. Lean in.
- What to practice: open a file in Switchback, read it top to bottom, and try to narrate what each section does in plain English. Ask the AI "explain this file like I'm new" and compare.
- Why: your real job is *directing and reviewing* AI output. Reading fluency is the skill that makes you a good reviewer.

**3. Core vocabulary (you're already most of the way there — Part 1 is your glossary)**
Being able to say "API," "database," "deployment," "frontend/backend," "schema" correctly is most of what makes a non-engineer credible in technical rooms.

### Tier 2 — Learn once Tier 1 feels comfortable

**4. A little Python**
Python is the language of data and AI. You don't need to build apps with it — you need enough to *poke at data and prototype ideas*.
- What to learn: variables, lists, dictionaries, loops, functions, reading a file. That's a weekend.
- The payoff use case: pulling data, simple analysis, scripting little tools, and understanding AI/data code when you read it.
- Where: **"Python Crash Course"** (book) or **freeCodeCamp's Python course** (free, YouTube). Or honestly — have the AI teach you interactively against a real task.

**5. How AI/LLMs actually work (concepts, not math)**
Since you're building *with* AI, understanding the mental model pays off everywhere.
- Concepts worth knowing: **token** (the unit an LLM reads/writes — you pay per token), **context window** (how much it can "see" at once), **prompt** (your instruction), **temperature** (randomness dial), **hallucination** (when it confidently makes something up — *why you kept crisis routing deterministic*), **RAG** (feeding a model your own documents so it answers from them), **fine-tuning** vs **prompting**.
- Where: Anthropic's own docs (docs.anthropic.com) are readable and practical.

### Tier 3 — Only if you catch the bug and want more

- **Git / GitHub** beyond the basics — branches, pull requests, reviewing diffs. (You already touch this.) Makes you self-sufficient.
- **APIs** — how software talks to other software (requests, responses, JSON). Useful once you want to wire services together.
- **The web basics** — HTML (structure), CSS (style), JavaScript (behavior). Helpful context, lower priority since AI handles most of it now.

### How to actually learn this (the meta-advice)

The fastest path for you specifically: **learn against Switchback, not against tutorials in a vacuum.** You have a real app with real data and an AI pair. So:
- Pick a real question ("how many active users last week?") → learn just enough SQL to answer it → you'll remember it because it mattered.
- When the AI writes code, ask it to explain the part you don't get. You have an infinitely patient tutor; use it.
- 30 focused minutes a few times a week beats a marathon. Consistency > intensity.

**Your honest starting move:** spend two hours on SQLBolt this week, then run one real query against your own Switchback database. That single loop — learn a concept, immediately use it on something you care about — is the whole game.
```
```
*(This playbook lives at `docs/LEARNING_PLAYBOOK.md` — add to it as you learn.)*
