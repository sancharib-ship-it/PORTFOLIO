import { Link } from "react-router-dom";

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  metric: { value: string; label: string };
  tags: string[];
  details: string;
  link?: string;
  slug?: string;
  cardImage?: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:scale-[1.01] hover:border-foreground/20 hover:shadow-card-hover">
      {/* Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {project.cardImage ? (
          <img
            src={project.cardImage}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-foreground transition-transform duration-500 ease-smooth group-hover:scale-105" />
            <div
              className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, hsl(var(--cherry) / 0.55), transparent 55%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className="text-6xl font-bold leading-none tracking-tight text-beige-soft/80">
                {project.title.charAt(0)}
              </span>
            </div>
          </>
        )}
        <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
          {project.year}
        </div>

        {/* Hover overlay revealing details + CTA */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-7 opacity-0 transition-opacity duration-300 ease-smooth group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-beige-soft/90">
            {project.details}
          </p>
          {project.slug ? (
            <Link
              to={`/projects/${project.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cherry hover:underline"
            >
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cherry hover:underline"
            >
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          ) : (
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cherry">
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cherry">
              {project.category}
            </p>
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">
              {project.title}
            </h3>
          </div>
          {/* Result metric */}
          <div className="flex shrink-0 flex-col items-end rounded-lg border border-border bg-background px-3 py-2 text-right">
            <span className="text-lg font-bold leading-none tracking-tight text-cherry md:text-xl">
              {project.metric.value}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {project.metric.label}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
