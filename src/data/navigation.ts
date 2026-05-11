import { NavItemSchema, type NavItem } from "./_schemas";
import { z } from "zod";

const _navigation: NavItem[] = z.array(NavItemSchema).parse([
  { id: "about", label: "About", href: "#about", sectionNumber: "01" },
  { id: "skills", label: "Skills", href: "#skills", sectionNumber: "02" },
  { id: "experience", label: "Experience", href: "#experience", sectionNumber: "03" },
  { id: "projects", label: "Projects", href: "#projects", sectionNumber: "04" },
  { id: "certifications", label: "Certifications", href: "#certifications", sectionNumber: "05" },
  { id: "contact", label: "Contact", href: "#contact", sectionNumber: "06" },
]);

export const navigation = _navigation;
