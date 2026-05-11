"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Automation Testing",
    icon: "⚡",
    skills: [
      { name: "Playwright", level: 95 },
      { name: "Selenium", level: 85 },
      { name: "Appium", level: 80 },
    ],
  },
  {
    category: "API Testing",
    icon: "🔗",
    skills: [
      { name: "Postman", level: 90 },
      { name: "REST API", level: 88 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "Performance Testing",
    icon: "📊",
    skills: [
      { name: "Grafana K6", level: 85 },
      { name: "Load Testing", level: 82 },
      { name: "Stress Testing", level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠",
    skills: [
      { name: "JIRA", level: 92 },
      { name: "Git / GitHub", level: 88 },
      { name: "CI/CD Pipelines", level: 75 },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    skills: [
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    category: "Emerging Tech",
    icon: "🤖",
    skills: [
      { name: "AI-Assisted Testing", level: 80 },
      { name: "Gemini AI Integration", level: 78 },
      { name: "Prompt Engineering", level: 82 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-black py-24 md:py-32"
    >
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              02 / Skills
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            SKILLS & <span className="gold-text">TOOLS</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-light max-w-xl">
            Technical arsenal built through hands-on experience across enterprise
            quality assurance projects.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.04]"
        >
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
              className="group relative bg-black p-8 md:p-10 transition-all duration-500 hover:bg-[#0a0a0a]"
            >
              {/* Index */}
              <span className="absolute top-4 right-4 text-[10px] font-light text-white/15 uppercase tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <span className="text-2xl mb-4 block">{cat.icon}</span>

              {/* Category */}
              <h3 className="text-xs uppercase tracking-[0.25em] text-lambo-gold mb-6 font-medium">
                {cat.category}
              </h3>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-white/70 font-light">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-white/30 font-light">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-[2px] bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-lambo-gold/80 to-lambo-gold"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
