"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { showToast } from "./ToastContainer";

const contactLinks = [
  {
    label: "Email",
    value: "aryatama0409@gmail.com",
    href: "mailto:aryatama0409@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhany-arya-pratama",
    href: "https://www.linkedin.com/in/dhany-arya-pratama-b33953294/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/dhanyarya-qa",
    href: "https://github.com/dhanyarya-qa",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      showToast("Message sent successfully! I'll get back to you soon.", "success");
    }, 1500);
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 md:py-32">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,192,0,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-lambo-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-lambo-gold font-light">
              07 / Contact
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[0.92] text-white">
            GET IN <span className="gold-text">TOUCH</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-light max-w-xl">
            Interested in working together? Let&apos;s discuss how I can help ensure
            your software quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
              I&apos;m always open to new opportunities, collaborations, and
              interesting QA challenges. Whether you need automation frameworks
              built from scratch or comprehensive testing strategies, feel free
              to reach out.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-white/[0.04] hover:border-lambo-gold/20 hover:bg-lambo-gold/[0.02] transition-all duration-300"
                >
                  <span className="text-white/30 group-hover:text-lambo-gold transition-colors duration-300">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm text-white/70 font-light group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 ml-auto text-white/10 group-hover:text-lambo-gold group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Keyboard hint */}
            <div className="mt-8 p-4 border border-white/[0.04] bg-white/[0.01]">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-light mb-2">
                ⌨️ Keyboard Shortcuts
              </p>
              <div className="flex flex-wrap gap-2">
                {["1-About", "2-Skills", "3-Exp", "4-Projects", "5-Certs", "6-Contact", "H-Top"].map((k) => (
                  <span key={k} className="px-2 py-1 text-[9px] uppercase tracking-wider border border-white/[0.06] text-white/25 font-light">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white font-light focus:outline-none focus:border-lambo-gold transition-colors placeholder:text-white/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white font-light focus:outline-none focus:border-lambo-gold transition-colors placeholder:text-white/15"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white font-light focus:outline-none focus:border-lambo-gold transition-colors placeholder:text-white/15"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white font-light focus:outline-none focus:border-lambo-gold transition-colors resize-none placeholder:text-white/15"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="group w-full py-4 bg-lambo-gold text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {formStatus === "idle" && (
                  <>
                    Send Message
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
                {formStatus === "sending" && (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </span>
                )}
                {formStatus === "sent" && (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full section-line" />
    </section>
  );
}
