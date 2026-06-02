import {
  TrendingUp,
  Filter,
  PenLine,
  Users,
  BarChart3,
  Sparkles,
  Megaphone,
  Search,
  Lightbulb,
  Workflow,
} from "lucide-react";

const skills = [
  { label: "Growth Strategy", Icon: TrendingUp },
  { label: "Funnel Optimization", Icon: Filter },
  { label: "Content Strategy & Storytelling", Icon: PenLine },
  { label: "CRM & Lifecycle Marketing", Icon: Users },
  { label: "Marketing Analytics & KPI Design", Icon: BarChart3 },
  { label: "AI Workflow & Automation", Icon: Sparkles },
  { label: "Demand Generation", Icon: Megaphone },
  { label: "SEO Strategy & Content Distribution", Icon: Search },
  { label: "Creative Strategy & Ideation", Icon: Lightbulb },
  { label: "Cross-functional Execution", Icon: Workflow },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
            About
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            A growth strategist who builds systems that ship.
          </h2>

          <div className="mt-10 hidden gap-8 md:flex">
            <div>
              <div className="text-3xl font-bold tracking-tight">2+</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground/60">
                Years
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tight">€360K</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground/60">
                Revenue driven
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tight">4+</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground/60">
                Industries
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-secondary-foreground/80 md:text-xl">
            I'm Sanchari, a growth and marketing strategist based in Madrid. I work
            at the intersection of growth, content, and systems — connecting
            messaging, funnels, and data to drive real outcomes. At 21, I led
            cross-functional changes that improved conversion and drove ~€360K in
            revenue. I think in systems, not channels, and I'm currently exploring
            AI-driven workflows to scale growth with leverage.
          </p>

          <div className="mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-foreground/60">
              Skills & expertise
            </p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {skills.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-lg border border-secondary-foreground/12 bg-secondary-foreground/[0.03] px-4 py-3 transition-all duration-200 ease-smooth hover:border-cherry hover:bg-secondary-foreground/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary-foreground/[0.06] text-secondary-foreground transition-colors duration-200 group-hover:bg-cherry group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
