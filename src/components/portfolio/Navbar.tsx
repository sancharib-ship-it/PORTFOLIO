import { useEffect, useState } from "react";

const links = [
  { label: "About", hash: "about" },
  { label: "Work", hash: "work" },
  { label: "Tools", hash: "tools" },
  { label: "Credentials", hash: "credentials" },
];

// Build hrefs relative to the deployment base path so they work both locally
// ("/#about") and under a subpath like GitHub Pages ("/PORTFOLIO/#about").
const base = import.meta.env.BASE_URL; // e.g. "/" or "/PORTFOLIO/"
const sectionHref = (hash: string) => `${base}#${hash}`;

export const Navbar = () => {
  const [active, setActive] = useState("");

  // Scroll-spy: highlight the nav link whose section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Activate when a section crosses the upper-middle band of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    const els = links
      .map((l) => document.getElementById(l.hash))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container-narrow flex h-16 items-center justify-between px-6 md:px-10 lg:px-16">
        <a href={base} className="text-base font-bold tracking-tight">
          Sanchari<span className="text-cherry">.</span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const isActive = active === l.hash;
            return (
              <li key={l.hash}>
                <a
                  href={sectionHref(l.hash)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-cherry transition-transform duration-300 ease-smooth ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <a href={sectionHref("contact")} className="btn-dark">
          Let's talk
        </a>
      </nav>
    </header>
  );
};
