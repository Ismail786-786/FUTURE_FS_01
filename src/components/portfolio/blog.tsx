import { ArrowUpRight, Clock } from "lucide-react";
import { POSTS } from "./data";

export function Blog() {
  return (
    <section id="blog" className="section-shell border-t border-border py-16 lg:py-20">
      <div>
        <p className="eyebrow">04 — Blog</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Insights &amp; journey logs</h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="surface-card group flex flex-col rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-primary">
                {post.tag}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">{post.date}</span>
            </div>
            <h3 className="mt-3 text-[15px] font-semibold leading-snug">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <Clock className="size-3" strokeWidth={2} /> {post.readTime}
              </span>
              <a
                href="#blog"
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:underline"
              >
                Read <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
