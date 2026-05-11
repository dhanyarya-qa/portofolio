"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    id: "01",
    title: "Belajar Pengujian Aplikasi Web dengan Selenium",
    issuer: "Dicoding Indonesia",
    year: "2024",
    category: "Automation",
    color: "from-blue-500/10 to-transparent",
  },
  {
    id: "02",
    title: "Belajar Dasar-Dasar DevOps",
    issuer: "Dicoding Indonesia",
    year: "2024",
    category: "DevOps",
    color: "from-purple-500/10 to-transparent",
  },
  {
    id: "03",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2024",
    category: "Backend",
    color: "from-green-500/10 to-transparent",
  },
  {
    id: "04",
    title: "AI-Assisted Testing & Automation",
    issuer: "Hackativ8",
    year: "2025",
    category: "AI / Testing",
    color: "from-lambo-gold/10 to-transparent",
  },
];

const education = [
  {
    degree: "S1 Teknik Informatika",
    institution: "Universitas / Institut",
    period: "2019 — 2023",
    description: "Fokus pada rekayasa perangkat lunak dan pengujian sistem.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black py-24 md:py-32"
    >
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              05 / Credentials
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            CERTS & <span className="gold-text">EDUCATION</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-light max-w-xl">
            Continuously expanding knowledge through professional certifications
            and structured learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Certifications */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-light">
              Professional Certifications
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-3"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className={`group relative p-6 bg-[#0a0a0a] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 overflow-hidden`}
                >
                  {/* Gradient bg */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider border border-white/[0.08] text-white/30 font-light">
                          {cert.category}
                        </span>
                        <span className="text-[10px] text-white/20 font-light">
                          {cert.year}
                        </span>
                      </div>
                      <h3 className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-lambo-gold/60 font-light mt-1.5 uppercase tracking-[0.15em]">
                        {cert.issuer}
                      </p>
                    </div>
                    {/* Certificate icon */}
                    <div className="shrink-0 w-10 h-10 border border-white/[0.06] flex items-center justify-center group-hover:border-lambo-gold/20 transition-colors">
                      <svg
                        className="w-4 h-4 text-white/20 group-hover:text-lambo-gold/60 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div className="lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-light">
              Education
            </p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative p-6 bg-[#0a0a0a] border border-white/[0.04]"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-lambo-gold/20" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-light">
                    {edu.period}
                  </span>
                  <h3 className="text-base font-semibold text-white mt-2 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-lambo-gold/60 uppercase tracking-[0.15em] font-light mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-white/40 font-light leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Stats box */}
              <div className="p-6 bg-[#0a0a0a] border border-white/[0.04]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light mb-4">
                  Quick Stats
                </p>
                {[
                  { label: "Certs Earned", value: "4+" },
                  { label: "Tools Mastered", value: "10+" },
                  { label: "Test Cases Written", value: "1000+" },
                  { label: "Bugs Found", value: "500+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center py-2.5 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="text-xs text-white/40 font-light">
                      {stat.label}
                    </span>
                    <span className="text-sm font-semibold text-lambo-gold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
