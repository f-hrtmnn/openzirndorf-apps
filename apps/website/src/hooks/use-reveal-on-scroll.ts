import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (nodes.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const node of nodes) {
        node.classList.add("is-visible");
      }

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}
