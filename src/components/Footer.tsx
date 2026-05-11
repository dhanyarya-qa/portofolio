"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/dhanyarya-qa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhany-arya-pratama-b33953294/" },
  { label: "Email", href: "mailto:aryatama0409@gmail.com" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/[0.04]">
      {/* Marquee */}
      <div className="overflow-hidden py-8 border-b border-white/[0.04]">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(40px,6vw,80px)] font-bold uppercase text-white/[0.03] whitespace-nowrap px-8 select-none"
            >
              DHANY ARYA PRATAMA • QA ENGINEER • AUTOMATION SPECIALIST •{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-2">
              D<span className="text-lambo-gold">.</span>A
              <span className="text-lambo-gold">.</span>P
            </p>
            <p className="text-xs text-white/30 font-light">
              QA Engineer — Automation & Manual Testing Specialist
            </p>
          </div>

          {/* Center - links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-white/30 hover:text-lambo-gold transition-colors duration-300 font-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/30 hover:text-lambo-gold transition-colors duration-300 font-light"
          >
            Back to top
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/20 font-light tracking-wider">
            © {new Date().getFullYear()} Dhany Arya Pratama. All rights reserved.
          </p>
          <p className="text-[10px] text-white/15 font-light tracking-wider">
            Designed & Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
