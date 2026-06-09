import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/switchback", label: "Switchback" },
  { href: "/about", label: "About" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/90 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-text outline-none transition hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Jack Fay
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-border bg-surface/70 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted outline-none transition hover:bg-surface-2 hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
