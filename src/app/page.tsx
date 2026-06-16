import Link from "next/link";
import { Footer } from "@/components/footer";
import { TopNav } from "@/components/top-nav";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <section className="hero-wash border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Product engineer
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-tight text-text sm:text-6xl lg:text-7xl">
                Jack Fay
              </h1>
              <p className="mt-6 max-w-2xl text-2xl leading-snug text-text sm:text-3xl">
                I own the product call and drive it to production.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Background in customer-facing roles — recruiting, sales, account
                management. I understand users before I write a line. Currently
                looking for a product engineer or product manager role where
                judgment and execution both matter.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/switchback"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg outline-none transition hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  See the Switchback case study
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text outline-none transition hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  About me
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="featured-project" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Featured project
              </p>
              <h2
                id="featured-project"
                className="mt-4 text-3xl font-semibold text-text sm:text-4xl"
              >
                Switchback
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                A live recovery-support app built around a single make-or-break
                moment: someone has an urge, opens the app, and does not relapse.
                I designed the product, made the architecture calls, and shipped
                the code — solo, in about five weeks part-time.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                37 database tables, Row-Level Security on every one, deterministic
                crisis routing (not a model call), and three distinct user lanes
                from a single codebase. In private alpha with real users.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/switchback"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg outline-none transition hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Read the case study
                </Link>
                <Link
                  href="https://switchbackrecovery.com"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text outline-none transition hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Visit the live app
                </Link>
              </div>
            </div>
            <aside
              aria-label="Switchback highlights"
              className="rounded-lg border border-border bg-surface p-6"
            >
              <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <dt className="text-sm text-muted">Live users</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    ~36
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Activation rate</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    ~85%
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Database</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    37 tables
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Built in</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    ~5 weeks
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section aria-labelledby="what-i-bring">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
            <h2 id="what-i-bring" className="text-2xl font-semibold text-text">
              What I bring
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="rounded-lg border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-text">
                  Product thinking
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  I find the one moment that matters and cut everything that
                  doesn&apos;t serve it. No streaks, no gamification — because
                  the wrong incentives are dangerous in this domain.
                </p>
              </article>
              <article className="rounded-lg border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-text">
                  End-to-end delivery
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Next.js, React, TypeScript, Postgres, Supabase, and Vercel.
                  I drive products from idea to production — in deliberate
                  collaboration with AI tools.
                </p>
              </article>
              <article className="rounded-lg border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-text">
                  Understanding users
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Years in recruiting, sales, and account management taught me
                  to think about outcomes before features — what someone actually
                  needs, not what looks good on a spec.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
