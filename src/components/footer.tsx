import Link from "next/link";

const links = [
  { href: "mailto:jack@jackfay.com", label: "Email" },
  { href: "https://github.com/jfay2493", label: "GitHub" },
  { href: "https://www.linkedin.com/in/jackfay93/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/35">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-text">Jack Fay</p>
          <p className="mt-1 text-sm text-muted">
            Built with Next.js, deployed on Vercel.
          </p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted outline-none transition hover:border-accent/60 hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
