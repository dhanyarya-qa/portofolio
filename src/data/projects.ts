import { ProjectSchema, type Project } from "./_schemas";
import { z } from "zod";

export const projects: Project[] = z.array(ProjectSchema).parse([
  {
    id: "01",
    title: "Playwright Automation Suite",
    subtitle: "E2E Web Testing Framework",
    description:
      "Comprehensive end-to-end test automation framework built with Playwright for web application testing. Features Page Object Model architecture, parallel test execution, and CI/CD integration.",
    tags: ["Playwright", "TypeScript", "CI/CD", "POM"],
    github: "https://github.com/dhanyarya-qa",
    status: "Production",
    highlight: true,
    slug: "playwright-suite",
    caseStudy: {
      problem:
        "Manual regression testing of a complex travel platform consumed 3+ days per sprint, delaying releases and allowing critical bugs to slip through.",
      approach:
        "Designed a modular Playwright framework using Page Object Model, implemented parallel execution across 4 workers, and integrated with GitHub Actions for CI/CD pipelines.",
      outcome: [
        { stat: "85%", label: "Reduction in regression time" },
        { stat: "200+", label: "Automated test scenarios" },
        { stat: "4x", label: "Faster release cadence" },
      ],
    },
    reportUrl: undefined,
  },
  {
    id: "02",
    title: "Appium Mobile Automation",
    subtitle: "Mobile E2E Testing Framework",
    description:
      "Mobile application test automation framework using Appium for Android testing. Supports automated regression testing for travel application flows.",
    tags: ["Appium", "Java", "Android", "Mobile Testing"],
    github: "https://github.com/dhanyarya-qa",
    status: "Production",
    highlight: false,
    slug: "appium-mobile",
    caseStudy: {
      problem:
        "The mobile team had zero automation coverage — every release required 2 QA engineers spending a full day on manual regression across multiple Android devices.",
      approach:
        "Built an Appium-based framework in Java with device abstraction layers, integrated cloud device farms, and created reusable component selectors for UI stability.",
      outcome: [
        { stat: "60%", label: "Reduction in manual effort" },
        { stat: "50+", label: "Critical path flows automated" },
        { stat: "3", label: "Android versions covered" },
      ],
    },
    reportUrl: undefined,
  },
  {
    id: "03",
    title: "AI-Powered Playwright Suite",
    subtitle: "Fully AI-Generated Test Framework",
    description:
      "Next-generation test automation framework entirely generated using AI assistance. Demonstrates AI-driven development in creating robust, maintainable test suites.",
    tags: ["AI-Generated", "Playwright", "TypeScript", "Automation"],
    github: "https://github.com/dhanyarya-qa",
    status: "Active",
    highlight: true,
    slug: "ai-playwright",
    caseStudy: {
      problem:
        "Traditional test authoring is slow and requires deep framework knowledge, creating bottlenecks when scaling QA across teams.",
      approach:
        "Used Gemini AI to generate the entire test framework from scratch — including page objects, test specs, configuration, and CI pipeline — then validated and refined the output.",
      outcome: [
        { stat: "10x", label: "Faster initial framework setup" },
        { stat: "95%", label: "AI-generated code accuracy" },
        { stat: "Zero", label: "Manual boilerplate needed" },
      ],
    },
    reportUrl: undefined,
  },
  {
    id: "04",
    title: "AI-Powered Appium Suite",
    subtitle: "Fully AI-Generated Mobile Tests",
    description:
      "Mobile automation test suite fully generated through AI-assisted development. Showcases AI integration in QA automation workflows.",
    tags: ["AI-Generated", "Appium", "Mobile", "Automation"],
    github: "https://github.com/dhanyarya-qa",
    status: "Active",
    highlight: false,
    slug: "ai-appium",
    caseStudy: {
      problem:
        "Mobile test automation has high entry barriers — complex setup, flaky selectors, and device fragmentation make it difficult to bootstrap quickly.",
      approach:
        "Leveraged AI to generate the full mobile testing framework including device configs, page objects with robust selectors, and test scenarios covering core user journeys.",
      outcome: [
        { stat: "8x", label: "Faster framework bootstrapping" },
        { stat: "40+", label: "Test scenarios generated" },
        { stat: "90%", label: "First-run pass rate" },
      ],
    },
    reportUrl: undefined,
  },
  {
    id: "05",
    title: "AI Integration Chatbot",
    subtitle: "Hackativ8 AI Dev Integration",
    description:
      "An intelligent chatbot application leveraging Gemini AI for developer productivity. Features multimodal capabilities including text and image generation.",
    tags: ["Gemini AI", "Node.js", "API", "Chatbot"],
    github: "https://github.com/dhanyarya-qa",
    status: "Active",
    highlight: true,
    slug: "ai-chatbot",
    caseStudy: {
      problem:
        "Development teams lacked an accessible internal tool to quickly leverage AI for code review, documentation generation, and visual asset creation.",
      approach:
        "Built a multimodal chatbot backend with Gemini Flash for text processing and Gemini Pro for image generation, wrapped in a clean REST API.",
      outcome: [
        { stat: "2", label: "AI models integrated" },
        { stat: "Sub-2s", label: "Average response time" },
        { stat: "100%", label: "API uptime in production" },
      ],
    },
    reportUrl: undefined,
  },
  {
    id: "06",
    title: "K6 Performance Scripts",
    subtitle: "Load & Stress Testing Suite",
    description:
      "Performance testing scripts built with Grafana K6 for load testing, stress testing, and performance benchmarking of web applications and APIs.",
    tags: ["Grafana K6", "Performance", "Load Testing", "JavaScript"],
    github: "https://github.com/dhanyarya-qa",
    status: "Production",
    highlight: false,
    slug: "k6-performance",
    caseStudy: {
      problem:
        "The travel platform experienced random slowdowns under peak traffic but had no systematic way to identify bottlenecks or set performance baselines.",
      approach:
        "Created a comprehensive K6 test suite covering load tests (normal traffic), stress tests (peak), and soak tests (endurance). Integrated Grafana dashboards for real-time monitoring.",
      outcome: [
        { stat: "3", label: "Performance bottlenecks found" },
        { stat: "40%", label: "Faster API response times" },
        { stat: "99.5%", label: "Uptime after optimization" },
      ],
    },
    reportUrl: undefined,
  },
]);
