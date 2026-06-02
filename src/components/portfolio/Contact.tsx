const EMAIL = "sancharib2014@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/sancharibhat";

const socials = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: "in/sancharibhat", href: LINKEDIN },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
          Contact
        </p>
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Let's work together.
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Have a growth problem worth solving — or just want to say hello? I'd love
          to hear from you. Drop me a line and I'll get back within 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}`} className="btn-primary group">
            Send me an email
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-ghost">
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col gap-1.5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </span>
              <span className="text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-cherry">
                {s.value}
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <span>© 2026 Sanchari Bhattacharjee. All rights reserved.</span>
          <span>Madrid, Spain</span>
        </footer>
      </div>
    </section>
  );
};
