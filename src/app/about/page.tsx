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
              I spent years on the user side of products. Then I built one.
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
              <p>
                My background is in recruiting, sales, and account management —
                roles where you live or die by whether someone gets value fast.
                That experience shaped how I think about product: I default to
                the user&apos;s moment, not the feature list.
              </p>
              <p>
                Switchback started because I needed it. It&apos;s a
                recovery-support app I designed and built from scratch —
                product decisions, architecture, and code — and shipped to real
                users in about five weeks part-time. Along the way I picked up
                a full stack: Next.js, React, TypeScript, Postgres, Supabase,
                Anthropic Claude, and Vercel. The project is in private alpha
                and growing.
              </p>
              <p>
                I work best at the intersection of clear thinking and fast
                execution. I&apos;m comfortable making hard product calls —
                what to build, what to cut, and where to draw lines — and then
                following them all the way to a deployed product.
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
                19, TypeScript, Supabase, Anthropic Claude, and Vercel. ~36
                users, ~85% activation, built solo in ~5 weeks part-time.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text">
                What I am looking for
              </h2>
              <p className="mt-4 leading-7 text-muted">
                A product engineer or product manager role — somewhere that
                values both sharp thinking and the ability to ship. I want to
                work on a team that moves fast, takes product seriously, and
                cares about getting things right for users. Early-stage or
                growth-stage, small team preferred.
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
              The fastest way to reach me is email. I&apos;m also on GitHub and
              LinkedIn — happy to talk product, engineering, or what I&apos;m
              building next.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:jfay93@gmail.com"
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
