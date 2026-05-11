import { RoleSchema } from "./_schemas";
import { z } from "zod";

export const roles: string[] = z.array(RoleSchema).parse([
  "QA Engineer",
  "Automation Specialist",
  "Performance Tester",
  "Manual Testing Expert",
]);
