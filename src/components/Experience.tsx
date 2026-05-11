"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    company: "YouApp",
    parent: "GBCI Ventures",
    role: "QA Engineer",
    type: "Full-time",
    period: "2024 — Present",
    description:
      "Leading quality assurance efforts for a cutting-edge social application platform, ensuring seamless user experiences across mobile and web platforms.",
    achievements: [
      "Designed and executed comprehensive test cases for mobile & web applications",
      "Collaborated with cross-functional teams for continuous quality improvement",
      "Implemented test automation strategies to improve regression testing efficiency",
      "Conducted thorough API testing using Postman for backend validation",
    ],
    tools: ["JIRA", "Postman", "Playwright", "Manual Testing"],
  },
  {
    id: "02",
    company: "MEPO",
    parent: "PT Kreasi Multi Travelindo",
    role: "QA Engineer",
    type: "Full-time",
    period: "2023 — 2024",
    description:
      "Ensured the quality of an advanced travel technology platform through comprehensive automation and performance testing strategies.",
    achievements: [
      "Managed 777+ JIRA tickets with high precision and traceability",
      "Built performance testing scripts with Grafana K6 for load testing",
      "Developed end-to-end automation testing using Playwright & Selenium",
      "Created API automation suites for backend service validation",
      "Executed mobile automation testing using Appium framework",
      "Ensured platform reliability through rigorous regression testing cycles",
      "Created detailed and structured test cases to ensure comprehensive test coverage and improve defect detection accuracy",
      "Leveraged AI agents to assist in test case generation, validation, and gap analysis, helping accelerate testing workflows and improve test detail consistency"
    ],
    tools: ["Playwright", "Selenium", "Appium", "Grafana K6", "Postman"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-black py-24 md:py-32"
    >
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              03 / Experience
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            WORK <span className="gold-text">EXPERIENCE</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-light max-w-xl">
            A track record of delivering quality assurance excellence across
            enterprise platforms.
          </p>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="group relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[29px] top-8 w-3 h-3 border border-white/20 bg-black group-hover:border-lambo-gold group-hover:bg-lambo-gold/20 transition-all duration-300 hidden md:block" />

                {/* Card */}
                <div className="relative bg-[#0a0a0a] border border-white/[0.04] p-8 md:p-12 transition-all duration-500 hover:border-white/[0.08] hover:bg-[#0d0d0d]">
                  {/* Gold accent on hover */}
                  <div className="absolute top-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />

                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-light">
                          {exp.period}
                        </span>
                        <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-lambo-gold/10 text-lambo-gold border border-lambo-gold/20 font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-white/40 font-light mt-1">
                        {exp.parent}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-lambo-gold font-medium mt-3">
                        {exp.role}
                      </p>
                    </div>

                    {/* Large decorative number */}
                    <span className="text-[80px] md:text-[100px] font-bold leading-none text-white/[0.03] select-none hidden lg:block">
                      {exp.id}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/50 font-light leading-relaxed mb-8 max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-light">
                      Key Achievements
                    </p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-white/60 text-sm font-light leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 bg-lambo-gold shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 font-light">
                      Tools & Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] border border-white/[0.08] text-white/50 font-light hover:border-lambo-gold/30 hover:text-lambo-gold transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
