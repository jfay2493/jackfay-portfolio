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
                I&apos;m an analytically minded, creativity-focused person, and
                I&apos;m eager to put that to work with my next team. Switchback
                is where it all comes together — a live personal project that
                started as a single idea and grew into something I care deeply
                about. It helps users build healthy new habits by interrupting
                negative feedback loops with positive ones.
              </p>
              <p>
                My background ties together naturally: account management gave me
                communication, marketing gave me high-level creativity, and my
                recent analytical work flows directly into building Switchback.
                Being naturally analytical, I see an idea and its inner workings
                clearly, then find creative ways to improve and optimize it. I
                care about making products that are genuine — and about finding a
                career path doing work I&apos;m actually passionate about.
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
                A full-time role that&apos;s product-focused and analytically
                grounded — somewhere I can bring creativity and a sharp eye to
                making products genuinely better. I do my best work on a team
                built on constructive criticism and growth: data-informed, with
                guidance and the freedom to run. Early-stage or established,
                small team or large — I&apos;m most focused on gaining
                experience and bringing creativity, organization, and cohesion
                to the people I work with.
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
