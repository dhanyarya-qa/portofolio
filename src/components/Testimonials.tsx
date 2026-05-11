// DEPRECATED: re-enable when 2+ real LinkedIn recommendations are available in src/data/recommendations.ts
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: "01",
    quote:
      "Dhany is an outstanding QA Engineer with exceptional attention to detail. His automation frameworks significantly improved our release cycle quality and team efficiency.",
    name: "Tech Lead",
    role: "Senior Engineer",
    company: "YouApp — GBCI Ventures",
  },
  {
    id: "02",
    quote:
      "His work on performance testing with Grafana K6 helped us identify critical bottlenecks before production. A true professional who goes above and beyond.",
    name: "Product Manager",
    role: "Product Lead",
    company: "MEPO — PT Kreasi Multi Travelindo",
  },
  {
    id: "03",
    quote:
      "Dhany brings a unique combination of technical excellence and collaborative mindset. His AI-assisted testing approach was truly innovative for our team.",
    name: "Engineering Manager",
    role: "VP of Engineering",
    company: "GBCI Ventures",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#030303] py-24 md:py-32"
    >
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,192,0,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              05 / Testimonials
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            WHAT THEY <span className="gold-text">SAY</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-light max-w-xl">
            Feedback from colleagues and leads who have worked directly with me.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.04]"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="group relative bg-[#030303] p-8 md:p-10 transition-all duration-500 hover:bg-black"
            >
              {/* Quote mark */}
              <span className="absolute top-6 right-8 text-[80px] leading-none font-bold text-white/[0.03] select-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-lambo-gold/60"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed italic mb-8">
                &quot;{t.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-white/30 uppercase">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-light">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-lambo-gold/50 font-light mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Number */}
              <span className="absolute bottom-4 left-8 text-[10px] text-white/10 font-light">
                {t.id}
              </span>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
