"use client";

import { useEffect, useCallback } from "react";
import { keyboardMap } from "@/data/keyboard";

export default function KeyboardNav() {
  const handleKey = useCallback((e: KeyboardEvent) => {
    // Skip if typing in an input
    const tag = (e.target as HTMLElement).tagName.toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    const entry = keyboardMap.find((k) => k.key === e.key);
    if (!entry) return;

    if (entry.action === "scroll-to-section" && entry.targetId) {
      const el = document.getElementById(entry.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (entry.action === "scroll-to-top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return null; // invisible component
}
