"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";

const navLinks = navigation.map((n) => ({ label: n.label, href: n.href }));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24 h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-white">
              D<span className="text-lambo-gold">.</span>A
              <span className="text-lambo-gold">.</span>P
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-lambo-gold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-lambo-gold transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium border border-lambo-gold/60 text-lambo-gold hover:bg-lambo-gold hover:text-black transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 w-7 group"
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px] w-7" : "w-7"}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-5"}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px] w-7" : "w-3"}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl uppercase tracking-[0.2em] font-light text-white/70 hover:text-lambo-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-4 px-8 py-3 text-sm uppercase tracking-[0.2em] border border-lambo-gold text-lambo-gold hover:bg-lambo-gold hover:text-black transition-all"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
