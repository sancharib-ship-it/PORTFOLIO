import { useEffect } from "react";

/**
 * Adds smooth fade+rise reveal transitions to all <section> elements
 * as they scroll into view. Uses IntersectionObserver, no deps.
 */
export const SectionTransitions = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((s) => s.classList.add("section-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((s) => io.observe(s));

    const fallback = window.setTimeout(() => {
      sections.forEach((s) => s.classList.add("section-reveal-in"));
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
};

export default SectionTransitions;
