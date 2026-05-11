"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // Show after scrolling past hero (>15%) and hide near contact section (>90%)
      setShow(v > 0.15 && v < 0.9);
    });
  }, [scrollYProgress]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <a
        href="#contact"
        className="flex items-center gap-2 px-6 py-3 bg-lambo-gold text-black text-[10px] uppercase tracking-[0.2em] font-semibold shadow-[0_4px_30px_rgba(255,192,0,0.3)] hover:bg-white transition-all duration-300"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Available — Hire Me
      </a>
    </motion.div>
  );
}
