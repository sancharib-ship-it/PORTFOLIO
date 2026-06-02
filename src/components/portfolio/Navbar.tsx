const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Tools", href: "/#tools" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container-narrow flex h-16 items-center justify-between px-6 md:px-10 lg:px-16">
        <a href="#" className="text-base font-bold tracking-tight">
          Sanchari<span className="text-cherry">.</span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-dark">
          Let's talk
        </a>
      </nav>
    </header>
  );
};
