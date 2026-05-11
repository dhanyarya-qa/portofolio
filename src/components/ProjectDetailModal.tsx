"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";

interface ProjectDetailModalProps {
  openSlug: string | null;
  close: () => void;
}

export default function ProjectDetailModal({ openSlug, close }: ProjectDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const project = openSlug ? projects.find((p) => p.slug === openSlug) : null;

  // Focus trap & restore
  useEffect(() => {
    if (openSlug && modalRef.current) {
      previousFocus.current = document.activeElement as HTMLElement;
      modalRef.current.focus();
    }
    return () => {
      if (previousFocus.current) {
        previousFocus.current.focus();
      }
    };
  }, [openSlug]);

  if (!openSlug) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Modal Panel */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/[0.06] outline-none"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-white/[0.08] text-white/40 hover:text-lambo-gold hover:border-lambo-gold/30 transition-all duration-300"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Gold top accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-lambo-gold/60 via-lambo-gold/20 to-transparent" />

            <div className="p-8 md:p-12">
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-light">
                  Project {project.id}
                </span>
                <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium border ${
                  project.status === "Production"
                    ? "text-green-400/80 border-green-400/20 bg-green-400/5"
                    : "text-lambo-gold border-lambo-gold/20 bg-lambo-gold/5"
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-1">
                {project.title}
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-light mb-8">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Case Study */}
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-lambo-gold mb-3 font-medium">Problem</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{project.caseStudy.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-lambo-gold mb-3 font-medium">Approach</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{project.caseStudy.approach}</p>
                </div>

                {/* Outcome Grid */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-lambo-gold mb-3 font-medium">Outcome</p>
                  <div className="grid grid-cols-3 gap-[1px] bg-white/[0.04]">
                    {project.caseStudy.outcome.map((o) => (
                      <div key={o.label} className="bg-[#0a0a0a] p-4 text-center">
                        <p className="text-xl md:text-2xl font-bold text-white mb-1">{o.stat}</p>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/40 font-light">{o.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 font-light">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] border border-white/[0.06] text-white/40 font-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-lambo-gold text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Repo
                </a>
                {project.reportUrl && (
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 hover:border-lambo-gold hover:text-lambo-gold"
                  >
                    View Test Report
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Shareable link hint */}
              <div className="pt-4 border-t border-white/[0.04]">
                <p className="text-[9px] text-white/20 font-light tracking-wider">
                  📎 Shareable link: {typeof window !== "undefined" ? window.location.origin : ""}/#projects/{project.slug}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
