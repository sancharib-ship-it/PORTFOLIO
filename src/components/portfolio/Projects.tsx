import { ProjectCard, type Project } from "./ProjectCard";
import { projectDetails } from "@/data/projects";

interface ProjectGroup {
  id: string;
  header: string;
  blurb: string;
  projects: Project[];
}

const placeholder = (
  header: string,
  shortCategory: string,
  index: number,
): Project => ({
  title: `${shortCategory} Project ${index}`,
  category: header,
  year: "2025",
  description:
    "Add a 1–2 line description of the project, the problem, and your role.",
  metric: { value: "—", label: "Result" },
  tags: ["Tag 1", "Tag 2"],
  details:
    "Add the case-study summary: context, what you did, and the outcome you drove.",
});

const realBy = (slug: string): Project => {
  const p = projectDetails.find((d) => d.slug === slug);
  if (!p) throw new Error(`Missing project: ${slug}`);
  return {
    title: p.title,
    category: p.category,
    year: p.year,
    description: p.description,
    metric: p.metric,
    tags: p.tags,
    details: p.details,
    link: p.link,
    slug: p.slug,
    cardImage: p.cardImage,
  };
};

const groups: ProjectGroup[] = [
  {
    id: "ai-marketing",
    header: "AI-Developed Marketing Projects",
    blurb:
      "Marketing systems built with AI tooling and automation in the loop.",
    projects: [
      realBy("samsung-galaxy-kpi"),
      realBy("creative-testing-os"),
      realBy("kpis-for-dummies"),
      realBy("rc-celta-seat-alert"),
      ...Array.from({ length: 1 }, (_, i) =>
        placeholder("AI-Developed Marketing", "AI Marketing", i + 5),
      ),
    ],
  },
  {
    id: "branding",
    header: "Branding Ideations",
    blurb: "Brand concepts, positioning, and visual direction explorations.",
    projects: [
      realBy("judwa-socks"),
      realBy("strike-matchbox"),
    ],
  },
  {
    id: "strategy",
    header: "Marketing Strategy ",
    blurb: "Strategy breakdowns, frameworks, and end-to-end thinking.",
    projects: [
      realBy("starbucks-spain-ecosystem"),
      realBy("practo-care-companion"),
      ...Array.from({ length: 3 }, (_, i) =>
        placeholder("Marketing Strategy", "Strategy", i + 3),
      ),
    ],
  },
  {
    id: "social",
    header: "Social Media",
    blurb: "Social-first campaigns, content systems, and community plays.",
    projects: [
      realBy("instagram"),
      realBy("linkedin"),
      realBy("facebook"),
    ],
  },
  {
    id: "seo",
    header: "SEO",
    blurb: "Search strategy, content distribution, and organic growth.",
    projects: [realBy("seo-expertise")],
  },
  {
    id: "pr",
    header: "Public Relations",
    blurb: "PR narratives, launches, and media-driven storytelling.",
    projects: [realBy("pr-expertise")],
  },
];

export const Projects = () => {
  const total = groups.reduce((acc, g) => acc + g.projects.length, 0);

  return (
    <section id="work" className="section-padding">
      <div className="container-narrow">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
              Selected work
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Projects.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {total} projects across growth, brand, strategy, social, SEO, and PR.
          </p>
        </div>

        <div className="space-y-20">
          {groups.map((group) => (
            <div key={group.id} id={group.id}>
              <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
                    {group.projects.length}{" "}
                    {group.projects.length === 1 ? "project" : "projects"}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {group.header}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {group.blurb}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
                {group.projects.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
