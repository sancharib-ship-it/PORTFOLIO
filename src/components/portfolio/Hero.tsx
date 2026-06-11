import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden section-padding pt-24 md:pt-32">
      {/* Subtle background element */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--cherry) / 0.35), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-narrow">
        <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.75rem]">
          Hi, I'm Sanchari —
          <br />
          I build systems that turn
          <br />
          <span className="text-cherry">attention into action.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Give me a message, a funnel, and some data, and I'll find the leaks, fix the story, and turn curious visitors into committed customers.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary group">
            View My Work
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <Link to="/work-experience" className="btn-ghost">
            Work Experience
          </Link>
          <a
            href="https://moreofsancharee.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Read My Marketing Blog
          </a>
          <a
            href="https://www.instagram.com/hiresancharee/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost gap-2"
          >
            <Instagram className="h-4 w-4" />
            Why Hire Sanchari
          </a>
        </div>
      </div>
    </section>
  );
};
