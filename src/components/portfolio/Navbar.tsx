const links = [
  { label: "About", hash: "about" },
  { label: "Work", hash: "work" },
  { label: "Tools", hash: "tools" },
  { label: "Credentials", hash: "credentials" },
  { label: "Contact", hash: "contact" },
];

// Build hrefs relative to the deployment base path so they work both locally
// ("/#about") and under a subpath like GitHub Pages ("/PORTFOLIO/#about").
const base = import.meta.env.BASE_URL; // e.g. "/" or "/PORTFOLIO/"
const sectionHref = (hash: string) => `${base}#${hash}`;

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container-narrow flex h-16 items-center justify-between px-6 md:px-10 lg:px-16">
        <a href={base} className="text-base font-bold tracking-tight">
          Sanchari<span className="text-cherry">.</span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.hash}>
              <a
                href={sectionHref(l.hash)}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={sectionHref("contact")} className="btn-dark">
          Let's talk
        </a>
      </nav>
    </header>
  );
};
