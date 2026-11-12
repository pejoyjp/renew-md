"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

    for (const element of elements) {
      const index = Number(element.dataset.stagger || 0);
      element.style.setProperty("--reveal-delay", `${index * 220}ms`);
      element.classList.add("reveal-ready");
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
      for (const element of elements) {
        element.classList.remove("reveal-ready", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, []);
  return null;
}
