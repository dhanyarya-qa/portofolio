"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setPercent(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left bg-lambo-gold"
        style={{ scaleX }}
      />
      {/* Percentage badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: percent > 2 ? 1 : 0 }}
        className="fixed bottom-8 right-6 z-50 hidden md:flex items-center gap-2"
      >
        <div className="relative w-8 h-8">
          <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
            <circle
              cx="16" cy="16" r="12"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />
            <circle
              cx="16" cy="16" r="12"
              fill="none"
              stroke="#FFC000"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 12}`}
              strokeDashoffset={`${2 * Math.PI * 12 * (1 - percent / 100)}`}
              strokeLinecap="butt"
              className="transition-all duration-200"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[7px] text-white/40 font-light">
            {percent}
          </span>
        </div>
      </motion.div>
    </>
  );
}
