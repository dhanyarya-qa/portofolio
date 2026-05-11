import { KeyboardEntrySchema, type KeyboardEntry } from "./_schemas";
import { navigation } from "./navigation";
import { z } from "zod";

// Derive section key map from navigation (keys "1"-"6")
const sectionEntries: KeyboardEntry[] = navigation.map((nav, i) => ({
  key: String(i + 1),
  action: "scroll-to-section" as const,
  targetId: nav.id,
}));

// Scroll-to-top entries
const topEntries: KeyboardEntry[] = [
  { key: "H", action: "scroll-to-top" as const },
  { key: "h", action: "scroll-to-top" as const },
  { key: "0", action: "scroll-to-top" as const },
];

const _keyboardMap: KeyboardEntry[] = z
  .array(KeyboardEntrySchema)
  .parse([...sectionEntries, ...topEntries]);

export const keyboardMap = _keyboardMap;
