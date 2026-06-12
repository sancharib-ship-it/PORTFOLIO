import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl font-bold tracking-tight">
              Project not found.
            </h1>
            <Link
              to="/#work"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cherry hover:underline"
            >
              ← Back to all projects
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="section-padding pt-16 md:pt-24">
        <div className="container-narrow">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All projects
          </Link>

          <header className="mt-10 border-b border-border pb-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cherry">
              {project.category} · {project.year}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.metric && (
                <div className="flex items-baseline gap-2 rounded-lg border border-border bg-card px-4 py-3">
                  <span className="text-2xl font-bold tracking-tight text-cherry">
                    {project.metric.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {project.metric.label}
                  </span>
                </div>
              )}
              {project.externalLink && (
                <a
                  href={project.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  {project.externalLink.label}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
            </div>

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
          </header>

          {project.heroImage && (
            <figure className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={project.heroImage.src}
                alt={project.heroImage.alt ?? project.title}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              {project.heroImage.caption && (
                <figcaption className="border-t border-border bg-background px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {project.heroImage.caption}
                </figcaption>
              )}
            </figure>
          )}

          <div className="mt-14 space-y-14">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {section.body}
                  </p>
                )}
                {section.bullets && (
                  <ul className="mt-4 max-w-3xl space-y-3">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-base leading-relaxed text-muted-foreground md:text-lg"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cherry" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-card">
                        <tr>
                          {section.table.columns.map((c) => (
                            <th
                              key={c}
                              className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                            >
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className="border-t border-border align-top"
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="px-4 py-3 leading-relaxed text-muted-foreground"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.links && section.links.length > 0 && (
                  <ul className="mt-6 grid max-w-3xl gap-3">
                    {section.links.map((l, i) => {
                      const className =
                        "group flex items-start justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-cherry hover:bg-background";
                      const inner = (
                        <>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground md:text-base">
                              {l.label}
                            </p>
                            {l.note && (
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                                {l.note}
                              </p>
                            )}
                          </div>
                          <span className="mt-1 shrink-0 text-cherry transition-transform duration-200 group-hover:translate-x-0.5">
                            →
                          </span>
                        </>
                      );
                      if (l.to) {
                        return (
                          <li key={i}>
                            <Link to={l.to} className={className}>
                              {inner}
                            </Link>
                          </li>
                        );
                      }
                      return (
                        <li key={i}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                          >
                            {inner}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {section.images && section.images.length > 0 && (
                  <div
                    className={`mt-8 grid gap-5 ${
                      section.images.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                  >
                    {section.images.map((img, i) => (
                      <figure
                        key={i}
                        className="overflow-hidden rounded-xl border border-border bg-card"
                      >
                        <img
                          src={img.src}
                          alt={img.alt ?? section.heading}
                          className="h-auto w-full object-cover"
                          loading="lazy"
                        />
                        {img.caption && (
                          <figcaption className="border-t border-border bg-background px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-10">
            <Link
              to="/#work"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ← All projects
            </Link>
            {project.externalLink && (
              <a
                href={project.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {project.externalLink.label}
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
