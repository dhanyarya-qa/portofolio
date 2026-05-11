import { ExperienceSchema, type Experience } from "./_schemas";
import { z } from "zod";

export const experiences: Experience[] = z.array(ExperienceSchema).parse([
  {
    id: "01",
    company: "YouApp",
    parent: "GBCI Ventures",
    role: "QA Engineer",
    type: "Full-time",
    period: "2024 — Present",
    description:
      "Leading quality assurance efforts for a cutting-edge social application platform, ensuring seamless user experiences across mobile and web platforms.",
    achievements: [
      "Designed and executed comprehensive test cases for mobile & web applications",
      "Collaborated with cross-functional teams for continuous quality improvement",
      "Implemented test automation strategies to improve regression testing efficiency",
      "Conducted thorough API testing using Postman for backend validation",
    ],
    tools: ["JIRA", "Postman", "Playwright", "Manual Testing"],
  },
  {
    id: "02",
    company: "MEPO",
    parent: "PT Kreasi Multi Travelindo",
    role: "QA Engineer",
    type: "Full-time",
    period: "2023 — 2024",
    description:
      "Ensured the quality of an advanced travel technology platform through comprehensive automation and performance testing strategies.",
    achievements: [
      "Managed 777+ JIRA tickets with high precision and traceability",
      "Built performance testing scripts with Grafana K6 for load testing",
      "Developed end-to-end automation testing using Playwright & Selenium",
      "Created API automation suites for backend service validation",
      "Executed mobile automation testing using Appium framework",
      "Ensured platform reliability through rigorous regression testing cycles",
      "Created detailed and structured test cases to ensure comprehensive test coverage and improve defect detection accuracy",
      "Leveraged AI agents to assist in test case generation, validation, and gap analysis, helping accelerate testing workflows and improve test detail consistency",
    ],
    tools: ["Playwright", "Selenium", "Appium", "Grafana K6", "Postman"],
  },
]);
