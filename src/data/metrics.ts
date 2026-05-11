import { MetricSchema, type Metric } from "./_schemas";
import { z } from "zod";

/**
 * Unified metrics registry.
 * heroMetric: true → displayed in Hero stats bar (first 4).
 * All 6 entries are displayed in ImpactMetrics section.
 */
const _allMetrics: Metric[] = z.array(MetricSchema).parse([
  {
    value: 777,
    suffix: "+",
    label: "JIRA Tickets Managed",
    description: "Bug tracking & issue management",
    icon: "🎯",
    heroMetric: true,
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    description: "Professional QA engineering",
    icon: "📅",
    heroMetric: true,
  },
  {
    value: 3,
    suffix: "+",
    label: "Companies",
    description: "Enterprise-level engagements",
    icon: "🏢",
    heroMetric: true,
  },
  {
    value: 10,
    suffix: "+",
    label: "Tools Mastered",
    description: "Cross-platform expertise",
    icon: "🛠",
    heroMetric: true,
  },
  {
    value: 500,
    suffix: "+",
    label: "Bugs Identified",
    description: "Critical defects caught before prod",
    icon: "🐛",
    heroMetric: false,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Test Cases Written",
    description: "Manual & automated test coverage",
    icon: "📝",
    heroMetric: false,
  },
  {
    value: 95,
    suffix: "%",
    label: "Test Pass Rate",
    description: "Consistent quality delivery",
    icon: "✅",
    heroMetric: false,
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster Release Cycles",
    description: "Through automation implementation",
    icon: "🚀",
    heroMetric: false,
  },
]);

/** The 4 hero stats displayed in Hero.tsx */
export const heroMetrics = _allMetrics.filter((m) => m.heroMetric).slice(0, 4);

/** All 6 impact metrics displayed in ImpactMetrics.tsx (hero metrics excluded to avoid duplication) */
export const impactMetrics: Metric[] = [
  _allMetrics[0], // JIRA Tickets
  _allMetrics[4], // Bugs Identified
  _allMetrics[5], // Test Cases Written
  _allMetrics[6], // Test Pass Rate
  _allMetrics[7], // Faster Release Cycles
  _allMetrics[3], // Tools & Frameworks
];
