import Link from "next/link";
import { Footer } from "@/components/footer";
import { TopNav } from "@/components/top-nav";

const strengths = [
  {
    title: "Product thinking",
    body: "Finding the one moment that matters and building everything around it.",
  },
  {
    title: "Full-stack engineering",
    body: "Next.js, React, TypeScript, Postgres, and production deployment.",
  },
  {
    title: "AI integration",
    body: "Building with Claude and LLMs where they help, and knowing where not to trust them.",
  },
];

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <section className="hero-wash border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Product and software
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-tight text-text sm:text-6xl lg:text-7xl">
                Jack Fay
              </h1>
              <p className="mt-6 max-w-2xl text-2xl leading-snug text-text sm:text-3xl">
                I build products end to end, from the core insight to the live
                deployment.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Most recently: Switchback, a recovery-support app engineered
                around the single moment that decides everything.
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

        <section aria-labelledby="what-i-do" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
            <h2 id="what-i-do" className="text-2xl font-semibold text-text">
              What I do
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-surface p-6"
                >
                  <h3 className="text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="featured-project">
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
                Switchback is a live recovery-support app built around a single
                make-or-break moment: urge, opens app, does not relapse. It is
                in private alpha with real users, backed by 37 database tables,
                Row-Level Security on every one, and deterministic crisis
                routing where the stakes are too high for a model call.
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
                  <dt className="text-sm text-muted">Schema</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    37 tables
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Alpha</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    ~36 users
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Activation</dt>
                  <dd className="mt-1 text-3xl font-semibold text-text">
                    ~85%
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
