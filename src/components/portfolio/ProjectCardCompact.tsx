import { Link } from "react-router-dom";
import { type Project } from "./ProjectCard";

/**
 * Compact, fully-square project tile used in the coverflow carousel.
 * Image-forward with the title/category overlaid — keeps the section short
 * and matches the reference's square-card look.
 */
export const ProjectCardCompact = ({ project }: { project: Project }) => {
  const inner = (
    <article className="group relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted shadow-card transition-shadow duration-300 ease-smooth hover:shadow-card-hover">
      {/* Image or gradient fallback */}
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
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, hsl(var(--cherry) / 0.55), transparent 55%)",
            }}
          />
        </>
      )}

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent" />

      {/* Category pill + year */}
      <span className="absolute left-3 top-3 max-w-[70%] truncate rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium text-foreground">
        {project.category}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground">
        {project.year}
      </span>

      {/* Title + metric */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="line-clamp-2 text-base font-bold leading-tight tracking-tight text-beige-soft md:text-lg">
          {project.title}
        </h3>
        {project.metric && (
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-cherry">
              {project.metric.value}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-beige-soft/75">
              {project.metric.label}
            </span>
          </div>
        )}
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-beige-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View case study
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </article>
  );

  if (project.slug) {
    return (
      <Link to={`/projects/${project.slug}`} className="block">
        {inner}
      </Link>
    );
  }
  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
};
