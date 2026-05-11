// Barrel re-export for all data modules
export { navigation } from "./navigation";
export { keyboardMap } from "./keyboard";
export { roles } from "./roles";
export { heroMetrics, impactMetrics } from "./metrics";
export { skillCategories } from "./skills";
export { experiences } from "./experiences";
export { projects } from "./projects";
export { certifications, education } from "./certifications";
export { recommendations } from "./recommendations";
export { bugStories } from "./bug-stories";

// Re-export types
export type {
  NavItem,
  KeyboardEntry,
  Metric,
  SkillCategory,
  Experience,
  Project,
  Certification,
  Education,
  Recommendation,
  BugStory,
} from "./_schemas";
