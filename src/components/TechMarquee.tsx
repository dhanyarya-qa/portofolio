"use client";

const tools = [
  { name: "Playwright", emoji: "🎭" },
  { name: "Selenium", emoji: "🤖" },
  { name: "Appium", emoji: "📱" },
  { name: "Postman", emoji: "📮" },
  { name: "Grafana K6", emoji: "📊" },
  { name: "JIRA", emoji: "🎯" },
  { name: "GitHub", emoji: "🐙" },
  { name: "TypeScript", emoji: "💙" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "Gemini AI", emoji: "✨" },
  { name: "CI/CD", emoji: "⚙️" },
  { name: "REST API", emoji: "🔗" },
];

// Double the array for seamless loop
const doubled = [...tools, ...tools];

export default function TechMarquee() {
  return (
    <div className="relative w-full py-6 bg-[#050505] border-y border-white/[0.04] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

      <div className="marquee-track gap-0">
        {doubled.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 group shrink-0"
          >
            <span className="text-lg">{tool.emoji}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-light group-hover:text-white/60 transition-colors whitespace-nowrap">
              {tool.name}
            </span>
            <span className="ml-8 w-px h-3 bg-white/[0.08]" />
          </div>
        ))}
      </div>
    </div>
  );
}
