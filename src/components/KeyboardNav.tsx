"use client";

import { useEffect, useCallback } from "react";

const sections = [
  { key: "1", id: "about" },
  { key: "2", id: "skills" },
  { key: "3", id: "experience" },
  { key: "4", id: "projects" },
  { key: "5", id: "testimonials" },
  { key: "6", id: "certifications" },
  { key: "7", id: "contact" },
];

export default function KeyboardNav() {
  const handleKey = useCallback((e: KeyboardEvent) => {
    // Skip if typing in an input
    const tag = (e.target as HTMLElement).tagName.toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    const section = sections.find((s) => s.key === e.key);
    if (section) {
      const el = document.getElementById(section.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // Press H or 0 to go to top
    if (e.key === "h" || e.key === "H" || e.key === "0") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return null; // invisible component
}
