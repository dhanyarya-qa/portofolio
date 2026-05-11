"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

const roles = [
  "QA Engineer",
  "Automation Specialist",
  "Performance Tester",
  "Manual Testing Expert",
];

// Particle system
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-lambo-gold"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  // Typed text effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { value: 777, suffix: "+", label: "JIRA Tickets" },
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 3, suffix: "+", label: "Companies" },
    { value: 10, suffix: "+", label: "Tools Mastered" },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,192,0,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,192,0,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Gold Particles */}
      <div className="absolute inset-0 z-[1]">
        <Particles />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-lambo-gold/10 hidden lg:block z-[1]"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 right-40 w-20 h-20 border border-white/5 hidden lg:block z-[1]"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-lambo-gold/30 hidden lg:block z-[1]"
      />

      {/* Content Layer */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto pt-20"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-12 h-px bg-lambo-gold" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-lambo-gold font-light">
            Portfolio / 2026
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div style={{ y: y1 }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[clamp(40px,9vw,110px)] font-bold uppercase leading-[0.92] tracking-tight text-white"
          >
            DHANY ARYA
            <br />
            <span className="gold-text">PRATAMA</span>
          </motion.h1>
        </motion.div>

        {/* Typed role */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm md:text-base uppercase tracking-[0.15em] text-white/60 font-light">
            {displayText}
            <span className="cursor-blink text-lambo-gold">|</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-lambo-gold text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(255,192,0,0.3)]"
          >
            View Experience
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 hover:border-lambo-gold hover:text-lambo-gold hover:bg-lambo-gold/5"
          >
            View Projects
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          {/* Download CV */}
          <a
            href="/CV - Dhany Arya Pratama.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 border border-lambo-gold/40 text-lambo-gold text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 hover:bg-lambo-gold hover:text-black"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Animated Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-16 md:mt-20 flex flex-wrap gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-lambo-gold transition-colors duration-300">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-lambo-gold/60 to-transparent"
        />
      </motion.div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
