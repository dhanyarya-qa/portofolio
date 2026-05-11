"use client";

import { useState, useEffect, useCallback } from "react";

export function useProjectModal() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const open = useCallback((slug: string) => {
    setOpenSlug(slug);
    history.pushState(null, "", `/#projects/${slug}`);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setOpenSlug(null);
    history.replaceState(null, "", "/#projects");
    document.body.style.overflow = "";
  }, []);

  // On mount: parse hash to auto-open
  useEffect(() => {
    const match = window.location.hash.match(/^#projects\/(.+)$/);
    if (match) {
      setOpenSlug(match[1]);
      document.body.style.overflow = "hidden";
    }
  }, []);

  // ESC key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openSlug) {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openSlug, close]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return { openSlug, open, close };
}
