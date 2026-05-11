"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality-First Mindset",
    description:
      "I don't just find bugs — I prevent them. My proactive approach to quality ensures issues are caught early in the development cycle, saving time and resources.",
    highlight: "Catch bugs before they reach production",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automation-Driven Efficiency",
    description:
      "I build scalable automation frameworks from scratch. From Playwright to Appium, I automate repetitive tasks so your team can focus on what matters.",
    highlight: "40% faster release cycles through automation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI-Augmented Testing",
    description:
      "I leverage AI tools like Gemini to accelerate test generation, gap analysis, and defect prediction — bringing modern innovation to QA workflows.",
    highlight: "Future-ready with AI integration",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Cross-Team Collaboration",
    description:
      "I work seamlessly with developers, product managers, and stakeholders to ensure quality is everyone's responsibility, not just QA's.",
    highlight: "Bridge between dev and product teams",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyHireMe() {
  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-lambo-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
                Why Choose Me
              </span>
            </div>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold uppercase leading-[0.92] text-white">
              WHY <span className="gold-text">HIRE ME</span>
            </h2>
          </div>
          <p className="text-sm text-white/40 font-light max-w-md lg:text-right">
            I bring measurable value to every team I join — here&apos;s why your
            next QA hire should be me.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group relative p-8 md:p-10 bg-[#0a0a0a] border border-white/[0.04] hover:border-lambo-gold/10 transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-6 right-8 text-[60px] font-bold leading-none text-white/[0.02] select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 border border-white/[0.06] flex items-center justify-center mb-6 text-white/30 group-hover:text-lambo-gold group-hover:border-lambo-gold/20 transition-all duration-300">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 uppercase tracking-wide">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 font-light leading-relaxed mb-5">
                {reason.description}
              </p>

              {/* Highlight tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lambo-gold/5 border border-lambo-gold/15">
                <span className="w-1.5 h-1.5 bg-lambo-gold/60" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-lambo-gold/80 font-medium">
                  {reason.highlight}
                </span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 md:p-12 bg-gradient-to-r from-lambo-gold/[0.06] to-transparent border border-lambo-gold/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-lg md:text-xl font-semibold text-white mb-2">
              Ready to elevate your team&apos;s quality?
            </p>
            <p className="text-sm text-white/40 font-light">
              Let&apos;s discuss how my expertise can help ship better software, faster.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-lambo-gold text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(255,192,0,0.3)] shrink-0"
          >
            Let&apos;s Talk
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
