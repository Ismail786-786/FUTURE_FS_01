import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS } from "./data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 font-display text-[15px] font-bold tracking-tight"
        >
          <span className="glow-dot size-2.5 shrink-0 rounded-full bg-primary" />
          <span className="truncate">Mohammed Ismail</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-5">
          <nav className="hidden items-center gap-7 text-[13px] font-medium text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <a
            href="/resume.pdf"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-flex"
          >
            <Download className="size-3.5" strokeWidth={2} />
            Download Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="section-shell flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
