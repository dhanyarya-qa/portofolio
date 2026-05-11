"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl md:text-6xl font-bold tracking-[0.3em] uppercase text-white">
                D<span className="text-lambo-gold">.</span>A
                <span className="text-lambo-gold">.</span>P
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.5em] text-white/30 font-light">
                Portfolio Loading
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 md:w-64">
              <div className="flex justify-between mb-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-light">
                  Loading
                </span>
                <span className="text-[9px] text-lambo-gold/60 font-light">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
              <div className="w-full h-px bg-white/10">
                <motion.div
                  className="h-full bg-lambo-gold"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Animated dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1 h-1 bg-lambo-gold/60"
                />
              ))}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8">
            <div className="absolute top-0 left-0 w-full h-px bg-lambo-gold/30" />
            <div className="absolute top-0 left-0 w-px h-full bg-lambo-gold/30" />
          </div>
          <div className="absolute top-6 right-6 w-8 h-8">
            <div className="absolute top-0 right-0 w-full h-px bg-lambo-gold/30" />
            <div className="absolute top-0 right-0 w-px h-full bg-lambo-gold/30" />
          </div>
          <div className="absolute bottom-6 left-6 w-8 h-8">
            <div className="absolute bottom-0 left-0 w-full h-px bg-lambo-gold/30" />
            <div className="absolute bottom-0 left-0 w-px h-full bg-lambo-gold/30" />
          </div>
          <div className="absolute bottom-6 right-6 w-8 h-8">
            <div className="absolute bottom-0 right-0 w-full h-px bg-lambo-gold/30" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-lambo-gold/30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
