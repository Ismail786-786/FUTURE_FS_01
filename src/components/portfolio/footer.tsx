import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "./data";

export function Footer() {
  const links = [
    { href: CONTACT.github, label: "GitHub", Icon: Github },
    { href: CONTACT.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${CONTACT.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-border">
      <div className="section-shell flex flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Mohammed Ismail H. All rights reserved.
        </p>
        <div className="flex gap-3">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="size-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
