import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

export function Hero() {
  return (
    <section id="top" className="section-shell grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-7">
        <span className="rise inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium">
          <Rocket className="size-3.5 text-primary" strokeWidth={2} />
          IT Undergraduate &amp; Full Stack Developer
        </span>

        <h1 className="rise mt-7 text-[clamp(2.25rem,5vw,3.9rem)] font-bold leading-[1.04] text-balance">
          Building intelligent web apps, <span className="text-primary">AI tools</span>, and
          seamless user experiences.
        </h1>

        <p className="rise mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
          Information Technology student at C. Abdul Hakeem College of Engineering &amp;
          Technology, passionate about modern web stacks, full-stack engineering, and AI-driven
          applications.
        </p>

        <div className="rise mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Explore Projects <ArrowRight className="size-4" strokeWidth={2} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          {[
            ["3", "Internships"], 
            ["10+", "Projects shipped"],
            ["Web · AI · IoT", "Focus areas"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-xl font-bold">{value}</dt>
              <dd className="text-xs text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rise lg:col-span-5">
        <div className="surface-card relative overflow-hidden rounded-3xl p-3">
          <img
            src={heroImage}
            alt="Abstract isometric illustration of connected code panels and network nodes"
            width={1024}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <div className="flex items-center justify-between gap-3 px-3 pb-1 pt-4">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Sparkles className="size-3.5 text-primary" strokeWidth={2} />
              Currently building
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">LogicGuard v2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
