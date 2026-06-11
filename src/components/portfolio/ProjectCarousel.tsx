import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Project } from "./ProjectCard";
import { ProjectCardCompact } from "./ProjectCardCompact";

export const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });
  const [selected, setSelected] = useState(0);

  // Embla needs enough slides on both sides of centre for a gap-free loop.
  // With only a few projects, repeat the track until there are ~8 slides (dots
  // still map to the real projects, so the user sees one dot per actual one).
  const reps = projects.length >= 2 ? Math.ceil(8 / projects.length) : 1;
  const slides = Array.from({ length: reps }, () => projects).flat();

  // 3D coverflow: each slide is placed on a concave arc — angled inward toward
  // the centre and dipping downward at the edges — so the row curves like the
  // inside of a circle. Recomputed every scroll frame from each card's distance
  // to the viewport centre.
  const applyTween = useCallback(() => {
    if (!emblaApi) return;
    const viewport = emblaApi.rootNode();
    const vpRect = viewport.getBoundingClientRect();
    const vpCenter = vpRect.left + vpRect.width / 2;

    emblaApi.slideNodes().forEach((slide) => {
      const inner = slide.querySelector<HTMLElement>("[data-card-inner]");
      if (!inner) return;
      const rect = inner.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      // Signed, normalised offset from centre: ~ -1 (left) .. 0 .. 1 (right).
      const norm = Math.max(
        -1.5,
        Math.min(1.5, (center - vpCenter) / (vpRect.width / 2)),
      );
      const abs = Math.abs(norm);

      const rotateY = -norm * 34; // angle inward, facing the centre
      const translateY = abs * 48; // edges dip down -> concave arc
      const scale = 1 - abs * 0.16;
      const opacity = Math.max(1 - abs * 0.5, 0.15);

      inner.style.transform = `perspective(1100px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`;
      inner.style.opacity = `${opacity}`;
      inner.style.zIndex = `${Math.round((2 - abs) * 10)}`;
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () =>
      setSelected(emblaApi.selectedScrollSnap() % projects.length);
    onSelect();
    applyTween();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", applyTween);
    emblaApi.on("reInit", applyTween);
    emblaApi.on("reInit", onSelect);
    window.addEventListener("resize", applyTween);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", applyTween);
      emblaApi.off("reInit", applyTween);
      emblaApi.off("reInit", onSelect);
      window.removeEventListener("resize", applyTween);
    };
  }, [emblaApi, applyTween]);

  // A single-project section doesn't need a carousel — just centre the card.
  if (projects.length <= 1) {
    return (
      <div className="mx-auto w-full max-w-sm">
        {projects.map((p) => (
          <ProjectCardCompact key={p.title} project={p} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y items-start pb-16 pt-4">
          {slides.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="min-w-0 shrink-0 grow-0 basis-[68%] px-3 sm:basis-[44%] md:basis-[33%] lg:basis-[27%]"
            >
              <div
                data-card-inner
                className="h-full will-change-transform"
                style={{ transformOrigin: "center" }}
              >
                <ProjectCardCompact project={p} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-1 top-[38%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-card backdrop-blur transition-colors hover:bg-foreground hover:text-background md:left-2"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next project"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-1 top-[38%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-card backdrop-blur transition-colors hover:bg-foreground hover:text-background md:right-2"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {projects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`Go to ${p.title}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selected === i
                ? "w-7 bg-cherry"
                : "w-2 bg-foreground/25 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
