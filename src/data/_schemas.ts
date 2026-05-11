import { z } from "zod";

// ─── Navigation ─────────────────────────────────────────────
export const NavItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  href: z.string(),
  sectionNumber: z.string(),
});
export type NavItem = z.infer<typeof NavItemSchema>;

// ─── Keyboard Map ───────────────────────────────────────────
export const KeyboardEntrySchema = z.object({
  key: z.string(),
  action: z.union([z.literal("scroll-to-section"), z.literal("scroll-to-top")]),
  targetId: z.string().optional(),
});
export type KeyboardEntry = z.infer<typeof KeyboardEntrySchema>;

// ─── Roles ──────────────────────────────────────────────────
export const RoleSchema = z.string().min(1);

// ─── Metrics ────────────────────────────────────────────────
export const MetricSchema = z.object({
  value: z.number(),
  suffix: z.string(),
  label: z.string(),
  description: z.string(),
  icon: z.string(),
  heroMetric: z.boolean(),
});
export type Metric = z.infer<typeof MetricSchema>;

// ─── Skills ─────────────────────────────────────────────────
export const SkillSchema = z.object({
  name: z.string(),
  level: z.number().min(0).max(100),
});

export const SkillCategorySchema = z.object({
  category: z.string(),
  icon: z.string(),
  skills: z.array(SkillSchema),
});
export type SkillCategory = z.infer<typeof SkillCategorySchema>;

// ─── Experience ─────────────────────────────────────────────
export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  parent: z.string(),
  role: z.string(),
  type: z.string(),
  period: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
  tools: z.array(z.string()),
});
export type Experience = z.infer<typeof ExperienceSchema>;

// ─── Projects ───────────────────────────────────────────────
export const CaseStudyOutcomeSchema = z.object({
  stat: z.string(),
  label: z.string(),
});

export const CaseStudySchema = z.object({
  problem: z.string(),
  approach: z.string(),
  outcome: z.array(CaseStudyOutcomeSchema),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  github: z.string().url(),
  status: z.string(),
  highlight: z.boolean(),
  slug: z.string(),
  caseStudy: CaseStudySchema,
  reportUrl: z.string().url().optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

// ─── Certifications ─────────────────────────────────────────
export const CertificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  issuer: z.string(),
  year: z.string(),
  category: z.string(),
  color: z.string(),
});
export type Certification = z.infer<typeof CertificationSchema>;

// ─── Education ──────────────────────────────────────────────
export const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  period: z.string(),
  description: z.string(),
});
export type Education = z.infer<typeof EducationSchema>;

// ─── Recommendations ────────────────────────────────────────
export const RecommendationSchema = z.object({
  id: z.string(),
  quote: z.string(),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  linkedinUrl: z.string().url().optional(),
});
export type Recommendation = z.infer<typeof RecommendationSchema>;

// ─── Bug War Stories ────────────────────────────────────────
export const BugStorySchema = z.object({
  id: z.string(),
  title: z.string(),
  context: z.string(),
  bugDescription: z.string(),
  impact: z.string(),
  resolution: z.string(),
  lesson: z.string(),
  tags: z.array(z.string()),
});
export type BugStory = z.infer<typeof BugStorySchema>;
