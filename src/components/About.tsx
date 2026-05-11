"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-32">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              01 / About
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            ABOUT <span className="gold-text">ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Abstract profile placeholder */}
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-charcoal to-black border border-white/[0.06] overflow-hidden group">
                {/* Photo */}
                <img
                  src="/photo.jpg"
                  alt="Dhany Arya Pratama"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Info overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-green-400/80 font-light">
                      Available for work
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    Dhany Arya Pratama
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-lambo-gold mt-1 font-light">
                    QA Engineer
                  </p>
                </div>

                {/* Gold accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-full h-px bg-lambo-gold/40" />
                  <div className="absolute top-0 right-0 w-px h-full bg-lambo-gold/40" />
                </div>
              </div>

              {/* Side info */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-light writing-mode-vertical"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Based in Indonesia
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
              A dedicated{" "}
              <span className="text-white font-medium">QA Engineer</span> with
              expertise in both automation and manual testing. I ensure software
              quality through meticulous test planning, execution, and continuous
              improvement using industry-leading tools and frameworks.
            </p>

            <p className="text-base text-white/50 font-light leading-relaxed mb-12">
              Experienced in building robust automation frameworks using
              Playwright, Selenium, and Appium. Proficient in API testing with
              Postman and performance testing with Grafana K6. Passionate about
              leveraging AI-assisted testing to enhance quality assurance
              workflows and deliver exceptional software products.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Location", value: "Indonesia" },
                { label: "Focus", value: "Quality Assurance" },
                { label: "Specialization", value: "Automation & Manual Testing" },
                { label: "Experience", value: "2+ Years Professional" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="group border-l border-white/10 pl-4 hover:border-lambo-gold/50 transition-colors duration-300"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/80 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
