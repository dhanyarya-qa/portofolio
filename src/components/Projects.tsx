"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Playwright Automation Suite",
    subtitle: "E2E Web Testing Framework",
    description:
      "Comprehensive end-to-end test automation framework built with Playwright for web application testing. Features Page Object Model architecture, parallel test execution, and CI/CD integration.",
    tags: ["Playwright", "TypeScript", "CI/CD", "POM"],
    github: "https://github.com/dhanyarya-qa",
    status: "Production",
    highlight: true,
  },
  {
    id: "02",
    title: "Appium Mobile Automation",
    subtitle: "Mobile E2E Testing Framework",
    description:
      "Mobile application test automation framework using Appium for Android testing. Supports automated regression testing for travel application flows.",
    tags: ["Appium", "Java", "Android", "Mobile Testing"],
    github: "https://github.com/dhanyarya-qa",
    status: "Production",
    highlight: false,
  },
  {
    id: "03",
    title: "AI-Powered Playwright Suite",
    subtitle: "Fully AI-Generated Test Framework",
    description:
      "Next-generation test automation framework entirely generated using AI assistance. Demonstrates AI-driven development in creating robust, maintainable test suites.",
    tags: ["AI-Generated", "Playwright", "TypeScript", "Automation"],
    github: "https://github.com/dhanyarya-qa",
    status: "Active",
    highlight: true,
  },
  {
    id: "04",
    title: "AI-Powered Appium Suite",
    subtitle: "Fully AI-Generated Mobile Tests",
    description:
      "Mobile automation test suite fully generated through AI-assisted development. Showcases AI integration in QA automation workflows.",
    tags: ["AI-Generated", "Appium", "Mobile", "Automation"],
    github: "https://github.com/dhanyarya-qa",
    status: "Active",
    highlight: false,
  },
  {
    id: "05",
    title: "AI Integration Chatbot",
    subtitle: "Hackativ8 AI Dev Integration",
    description:
      "An intelligent chatbot application leveraging Gemini AI for developer productivity. Features multimodal capabilities including text and image generation.",
    tags: ["Gemini AI", "Node.js", "API", "Chatbot"],
    github: "https://github.com/dhanyarya-qa",
    status: "Active",
    highlight: true,
  },
  {
    id: "06",
    title: "K6 Performance Scripts",
    subtitle: "Load & Stress Testing Suite",
    description:
      "Performance testing scripts built with Grafana K6 for load testing, stress testing, and performance benchmarking of web applications and APIs.",
    tags: ["Grafana K6", "Performance", "Load Testing", "JavaScript"],
    github: "https://github.com/dhanyarya-qa",
    status: "Production",
    highlight: false,
  },
];

// 3D Tilt Card wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 md:py-32">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              04 / Portfolio
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            FEATURED <span className="gold-text">PROJECTS</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-light max-w-xl">
            A curated selection of automation frameworks, AI-powered tools, and testing solutions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCard>
                <div className="group relative bg-[#0a0a0a] border border-white/[0.04] p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-white/[0.1] hover:bg-[#0d0d0d] h-full">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 60px rgba(255,192,0,0.03)" }}
                  />

                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-light">
                      Project {project.id}
                    </span>
                    <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium border ${
                      project.status === "Production"
                        ? "text-green-400/80 border-green-400/20 bg-green-400/5"
                        : "text-lambo-gold border-lambo-gold/20 bg-lambo-gold/5"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-1 group-hover:text-lambo-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-light mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] border border-white/[0.06] text-white/40 font-light hover:border-lambo-gold/20 hover:text-lambo-gold/60 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-lambo-gold transition-colors duration-300 font-light group/link"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <div className="absolute bottom-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />
                  {project.highlight && (
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-lambo-gold/15 border-l-[40px] border-l-transparent" />
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
