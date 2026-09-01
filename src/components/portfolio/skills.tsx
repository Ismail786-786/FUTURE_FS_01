import { useState } from "react";
import { Cpu, Database, Layout, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "./data";

const ICONS = { Layout, Database, Cpu, Wrench };

export function Skills() {
  const [active, setActive] = useState<string>("frontend");

  return (
    <section id="skills" className="section-shell border-t border-border py-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">02 — Skills</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Stack by category</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActive(group.id)}
              className={
                active === group.id
                  ? "rounded-full bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-primary-foreground"
                  : "rounded-full border border-border px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              }
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => {
          const Icon = ICONS[group.icon];
          const isActive = active === group.id;
          return (
            <div
              key={group.id}
              className={`surface-card rounded-2xl p-5 transition-all duration-300 ${
                isActive ? "ring-1 ring-primary/50" : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-4.5" strokeWidth={1.75} />
                </span>
                <p className="font-display font-semibold">{group.label}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-[13px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
