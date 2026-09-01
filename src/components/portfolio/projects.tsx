import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS, type ProjectFilter } from "./data";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-shell border-t border-border py-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">03 — Projects</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Selected work</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={
                filter === item
                  ? "rounded-full bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-primary-foreground"
                  : "rounded-full border border-border px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.title}
            className="surface-card rise flex flex-col rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="eyebrow">{project.category}</p>
            <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border bg-background px-2 py-0.5 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 text-[13px] font-semibold">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                <ExternalLink className="size-3.5" strokeWidth={2} /> Live demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" strokeWidth={2} /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
