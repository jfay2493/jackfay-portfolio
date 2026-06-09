import Link from "next/link";
import { Footer } from "@/components/footer";
import { TopNav } from "@/components/top-nav";

export default function About() {
  return (
    <>
      <TopNav />
      <main>
        <section className="hero-wash border-b border-border">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              About
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-text sm:text-5xl">
              I am a product-first builder who ships.
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
              <p>
                I built Switchback as a self-directed, AI-assisted product:
                product strategy, architecture, full-stack engineering, and the
                hard judgment calls that come with sensitive software.
              </p>
              <p>
                My work starts with the core product insight, then moves through
                the practical details: data model, interface, safety boundaries,
                deployment, and the feedback loops that make a live product
                sharper.
              </p>
              <p>
                I work well in ambiguous spaces. I can frame the problem, decide
                what matters, use AI tooling fluently, and keep enough taste and
                restraint in the loop that the product still feels human.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="details" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
            <article className="rounded-lg border border-border bg-surface p-6">
              <h2 id="details" className="text-xl font-semibold text-text">
                How I work
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Product-first, opinionated, concrete. I prefer a working
                deployment and a clear tradeoff over a polished idea that never
                leaves the notes app.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text">
                What I have shipped
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Switchback: a live recovery-support app using Next.js 16, React
                19, TypeScript, Supabase, Anthropic Claude, and Vercel.
              </p>
            </article>
            <article className="rounded-lg border border-dashed border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text">
                What I am looking for
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {/* Placeholder: Jack to supply specific roles, contract work, collaborations, or investor/collaborator line. */}
                Placeholder: Jack to specify roles, contract work,
                collaborations, or the exact opportunity he wants this site to
                invite.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="contact">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
            <h2 id="contact" className="text-3xl font-semibold text-text">
              Contact
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {/* Placeholder: Jack to supply fuller bio specifics if he wants this page to include more personal background. */}
              For now, this page keeps the bio intentionally short until Jack
              supplies the final background details.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:jack@jackfay.com"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg outline-none transition hover:bg-accent-strong focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Email Jack
              </Link>
              <Link
                href="https://github.com/jfay2493"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text outline-none transition hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jackfay93/"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text outline-none transition hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
