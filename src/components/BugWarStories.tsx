"use client";

import { motion } from "framer-motion";
import { bugStories } from "@/data/bug-stories";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BugWarStories() {
  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,192,0,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-lambo-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
                From the Trenches
              </span>
            </div>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold uppercase leading-[0.92] text-white">
              BUG <span className="gold-text">WAR STORIES</span>
            </h2>
          </div>
          <p className="text-sm text-white/40 font-light max-w-md lg:text-right">
            Real bugs from real projects — the kind that teach you more than any textbook ever could.
          </p>
        </div>

        {/* Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {bugStories.map((story) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className="group relative bg-[#0a0a0a] border border-white/[0.04] p-8 md:p-10 transition-all duration-500 hover:border-white/[0.08] hover:bg-[#0d0d0d]"
            >
              {/* Gold accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">🐛</span>
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-lambo-gold/10 text-lambo-gold border border-lambo-gold/20 font-medium">
                      {story.context}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-white group-hover:text-lambo-gold transition-colors duration-300">
                    {story.title}
                  </h3>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-red-400/60 mb-2 font-medium">🔴 The Bug</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{story.bugDescription}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400/60 mb-2 font-medium">💥 Impact</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{story.impact}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-green-400/60 mb-2 font-medium">✅ Resolution</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{story.resolution}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-lambo-gold/60 mb-2 font-medium">💡 Lesson Learned</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed italic">&ldquo;{story.lesson}&rdquo;</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] border border-white/[0.06] text-white/30 font-light">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-lambo-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
