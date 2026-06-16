import Link from "next/link";
import { Footer } from "@/components/footer";
import { TopNav } from "@/components/top-nav";

const decisions = [
  {
    title: "No streaks, no gamification.",
    body: "I chose user well-being over the metrics-juicing playbook. A broken streak should not punish someone in recovery, and engagement-bait is the wrong incentive in this domain.",
  },
  {
    title: "Deterministic crisis routing, not AI.",
    body: "The flow that decides whether someone is in crisis is rule-based, not a model call. AI generates supportive content; a deterministic classifier owns the routing.",
  },
  {
    title: "Three lanes from one account.",
    body: "Recovery, Mirror, and Ally share one codebase and one account model, with a single mode flag and a mode-aware navigation rail reshaping the app per lane.",
  },
  {
    title: "Support, not treatment.",
    body: "Switchback is deliberately scoped as support software that points users toward human connection and professional help, never as therapy or a medical device.",
  },
];

const engineering = [
  "Stack: Next.js 16, React 19, TypeScript, Tailwind v4, Supabase (Postgres + Auth), Anthropic Claude (Sonnet 4.6), and Vercel.",
  "Security: Row-Level Security enabled on every one of 37 tables, with policies enforcing that a user can only touch their own rows.",
  "AI architecture: the Anthropic key never reaches the browser; model calls run from server actions and server components.",
  "Efficiency: daily reflections are cached per-user-per-day in the database so repeated loads do not re-hit the API.",
  "Data model: ~37 tables spanning assessments, journaling, interventions, a peer-support Circle, meeting companion, notifications, and referrals.",
];

export default function Switchback() {
  return (
    <>
      <TopNav />
      <main>
        <section className="hero-wash border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Switchback case study
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
                A recovery-support web app built around a single make-or-break
                moment: someone has an urge, opens the app, and does not relapse.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Solo creator and lead builder: product decisions, architecture,
                and everything that shipped. Built in deliberate AI collaboration
                — Claude Code for deep reasoning and codebase work, Codex for
                execution and parallel tasks, routed intentionally to manage
                context and get the best output from each.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://switchbackrecovery.com"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg outline-none transition hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Visit the live app
                </Link>
                <Link
                  href="#engineering"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text outline-none transition hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  See the engineering
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="problem" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                The problem
              </p>
              <h2 id="problem" className="mt-4 text-3xl font-semibold text-text">
                Tracking measures the problem. It does not intervene in it.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-muted">
              <p>
                The category is full of tracking apps: log your days, watch a
                streak, get a badge. My bet was that this is the wrong model for
                the moment that actually matters.
              </p>
              <p>
                Recovery turns on a specific gap between an urge and an action.
                Switchback is organized around that gap, not around a dashboard.
              </p>
              <p className="rounded-lg border border-border bg-surface p-5 text-text">
                Core loop: Awareness -&gt; Interruption -&gt; Replacement -&gt;
                Reinforcement. Every feature has to serve it or it is noise.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="decisions" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                The hard decisions
              </p>
              <h2
                id="decisions"
                className="mt-4 text-3xl font-semibold text-text sm:text-4xl"
              >
                The product is defined as much by what it refuses as by what it
                ships.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {decisions.map((decision) => (
                <article
                  key={decision.title}
                  className="rounded-lg border border-border bg-surface p-6"
                >
                  <h3 className="text-xl font-semibold text-text">
                    {decision.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">{decision.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="engineering"
          aria-labelledby="engineering-heading"
          className="border-b border-border"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                How it is engineered
              </p>
              <h2
                id="engineering-heading"
                className="mt-4 text-3xl font-semibold text-text sm:text-4xl"
              >
                A real relational product, with clear boundaries between
                deterministic safety and generative support.
              </h2>
              <ul className="mt-8 space-y-4">
                {engineering.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-surface p-5 leading-7 text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside
              aria-label="Build facts"
              className="h-fit rounded-lg border border-border bg-surface-2 p-6"
            >
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm text-muted">Database</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    37 tables
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Access model</dt>
                  <dd className="mt-1 text-2xl font-semibold text-text">
                    RLS on every table
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Safety routing</dt>
                  <dd className="mt-1 text-2xl font-semibold text-text">
                    Deterministic, not AI
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Modes</dt>
                  <dd className="mt-1 text-2xl font-semibold text-text">
                    Recovery / Mirror / Ally
                  </dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-border pt-6 text-sm leading-6 text-muted">
                Built the first fully functional alpha live in about five weeks,
                working part-time — picking up the infrastructure and AI side
                quickly and shipping a working product fast.
              </p>
            </aside>
          </div>
        </section>

        <section aria-labelledby="status" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Outcome and status
                </p>
                <h2 id="status" className="mt-4 text-3xl font-semibold text-text">
                  Live, early, and real.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Switchback is live in a private alpha with real users:
                  approximately 36 users and approximately 85% activation at
                  last measure. Early-stage alpha, told straight, is more
                  credible than vague scale claims.
                </p>
                <Link
                  href="https://switchbackrecovery.com"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg outline-none transition hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Open Switchback
                </Link>
              </div>
              <div className="rounded-lg border border-dashed border-border bg-surface p-6">
                {/* Placeholder: optional signed-out marketing screenshot or mocked-data screenshot only. Do not use real user data or behind-login Switchback screens. */}
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Optional screenshot slot
                </p>
                <p className="mt-4 text-lg leading-8 text-muted">
                  Add a signed-out marketing surface or mocked-data product
                  screenshot here after Jack or CC supplies approved imagery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="how-it-came-together" className="border-b border-border">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              How it came together
            </p>
            <h2
              id="how-it-came-together"
              className="mt-4 text-3xl font-semibold text-text sm:text-4xl"
            >
              From a daily reflection engine to a real product.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
              <p>
                Switchback started as a small project — a reflection engine to
                ground myself each day. It&apos;s since become something I&apos;m
                genuinely proud of and hope will reach a lot of people. Working
                part-time, I built the first fully functional alpha live in about
                five weeks, picking up the infrastructure and AI side quickly as
                I went and shipping a working product fast.
              </p>
              <p>
                From there I kept building on the foundation, adding features
                that reinforce the positive feedback loops at the core of the
                product. I workshopped the safety guidelines, how user
                information improves the experience, and how to optimize the site
                as a whole. Every main feature is something I developed myself
                through AI-assisted workshops, then refined. Under the hood, a
                relational database structured across 37 tables runs the back
                end — the foundation that lets every user&apos;s experience stay
                private, personal, and built to grow with them.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="reflection">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              What I took from it
            </p>
            <h2
              id="reflection"
              className="mt-4 text-3xl font-semibold text-text sm:text-4xl"
            >
              Building Switchback taught me how to drive a full-stack and AI
              product end to end.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              I learned to make the architecture and product calls myself, to
              use AI tooling as a serious collaborator, and to draw firm lines
              around the parts of a system where humans, rules, and
              deterministic behavior need to stay in the loop.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
