import { CertificationSchema, EducationSchema, type Certification, type Education } from "./_schemas";
import { z } from "zod";

export const certifications: Certification[] = z.array(CertificationSchema).parse([
  {
    id: "01",
    title: "Manual Quality Assurance (Software Tester)",
    issuer: "GROWIA — PT Growia Online Edukasi",
    year: "2024",
    category: "QA / Testing",
    color: "from-red-500/10 to-transparent",
  },
  {
    id: "02",
    title: "AI-Assisted Testing & Automation",
    issuer: "Hackativ8",
    year: "2025",
    category: "AI / Testing",
    color: "from-lambo-gold/10 to-transparent",
  },
]);

export const education: Education[] = z.array(EducationSchema).parse([
  {
    degree: "S1 Teknik Informatika",
    institution: "Indraprasta PGRI University",
    period: "2021 — 2025",
    description:
      "Specialized in modern software engineering, AI-driven development tools, and intelligent quality assurance methodologies.",
  },
]);
