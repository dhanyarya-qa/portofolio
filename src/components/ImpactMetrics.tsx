"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const metrics = [
  {
    value: 777,
    suffix: "+",
    label: "JIRA Tickets Managed",
    description: "Bug tracking & issue management",
    icon: "🎯",
  },
  {
    value: 500,
    suffix: "+",
    label: "Bugs Identified",
    description: "Critical defects caught before prod",
    icon: "🐛",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Test Cases Written",
    description: "Manual & automated test coverage",
    icon: "📝",
  },
  {
    value: 95,
    suffix: "%",
    label: "Test Pass Rate",
    description: "Consistent quality delivery",
    icon: "✅",
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster Release Cycles",
    description: "Through automation implementation",
    icon: "🚀",
  },
  {
    value: 10,
    suffix: "+",
    label: "Tools & Frameworks",
    description: "Cross-platform expertise",
    icon: "🛠",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ImpactMetrics() {
  return (
    <section className="relative w-full bg-[#030303] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,192,0,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-lambo-gold/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              Proven Impact
            </span>
            <span className="w-8 h-px bg-lambo-gold/40" />
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold uppercase text-white">
            NUMBERS THAT <span className="gold-text">MATTER</span>
          </h2>
          <p className="mt-3 text-sm text-white/35 font-light max-w-lg mx-auto">
            Real metrics from real projects — measurable impact on software quality
          </p>
        </div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-white/[0.04]"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group bg-[#030303] p-6 md:p-8 text-center hover:bg-[#080808] transition-all duration-500"
            >
              <span className="text-2xl mb-3 block">{metric.icon}</span>
              <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-lambo-gold transition-colors duration-300">
                <AnimatedCounter
                  target={metric.value}
                  suffix={metric.suffix}
                  duration={2000}
                />
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-2 font-medium leading-tight">
                {metric.label}
              </p>
              <p className="text-[9px] text-white/25 mt-1 font-light hidden md:block">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
