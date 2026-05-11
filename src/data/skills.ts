import { SkillCategorySchema, type SkillCategory } from "./_schemas";
import { z } from "zod";

export const skillCategories: SkillCategory[] = z.array(SkillCategorySchema).parse([
  {
    category: "Automation Testing",
    icon: "⚡",
    skills: [
      { name: "Playwright", level: 95 },
      { name: "Selenium", level: 85 },
      { name: "Appium", level: 80 },
    ],
  },
  {
    category: "API Testing",
    icon: "🔗",
    skills: [
      { name: "Postman", level: 90 },
      { name: "REST API", level: 88 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "Performance Testing",
    icon: "📊",
    skills: [
      { name: "Grafana K6", level: 85 },
      { name: "Load Testing", level: 82 },
      { name: "Stress Testing", level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠",
    skills: [
      { name: "JIRA", level: 92 },
      { name: "Git / GitHub", level: 88 },
      { name: "CI/CD Pipelines", level: 75 },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    skills: [
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    category: "Emerging Tech",
    icon: "🤖",
    skills: [
      { name: "AI-Assisted Testing", level: 80 },
      { name: "Gemini AI Integration", level: 78 },
      { name: "Prompt Engineering", level: 82 },
    ],
  },
]);
