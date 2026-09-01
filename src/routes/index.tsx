import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Blog } from "@/components/portfolio/blog";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

const title = "Mohammed Ismail H — Full Stack Developer & IT Undergraduate";
const description =
  "Portfolio of Mohammed Ismail H: full-stack web development, AI tooling, and IoT projects including LogicGuard, NeonSnap Studio, and the AI Content Suite.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
