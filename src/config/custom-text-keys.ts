import { PHASES } from "@/config/types/phases.ts";

export const CUSTOM_TEXT_KEYS = [
  "homeTitle",
  `homeSubtitle${PHASES.REQUESTS}`,
  `homeSubtitle${PHASES.ASSIGNMENTS}`,
  `homeSubtitle${PHASES.RESULTS}`,
  `homeSubtitle${PHASES.SHUTDOWN}`,
  `homeMessage${PHASES.REQUESTS}`,
  `homeMessage${PHASES.ASSIGNMENTS}`,
  `homeMessage${PHASES.RESULTS}`,
  `homeMessage${PHASES.SHUTDOWN}`,
  "contact",
  "legalNotice",
] as const;

export type CustomTextKey = (typeof CUSTOM_TEXT_KEYS)[number];

export const isCustomTextKey = (key: unknown): key is CustomTextKey =>
  Object.values(CUSTOM_TEXT_KEYS).includes(key as CustomTextKey);
