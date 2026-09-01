import { GraduationCap, Briefcase } from "lucide-react";
import { EXPERIENCE } from "./data";

export function About() {
  return (
    <section id="about" className="section-shell border-t border-border py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">01 — About</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Interactive resume</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            My journey runs through full-stack web development, prompt engineering internships,
            and embedded systems / IoT prototyping — connecting front-end craft to real back-end
            services and physical hardware.
          </p>
        </div>

        <div className="space-y-6 lg:col-span-8">
          <div className="surface-card rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <GraduationCap className="size-4.5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="eyebrow">Education</p>
                <p className="mt-1 font-semibold">B.Tech Information Technology</p>
                <p className="text-sm text-muted-foreground">
                  C. Abdul Hakeem College of Engineering &amp; Technology · Anna University
                  Regulation 2025
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="surface-card rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Briefcase className="size-4.5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">
                      {item.role}{" "}
                      <span className="font-normal text-muted-foreground">· {item.org}</span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
