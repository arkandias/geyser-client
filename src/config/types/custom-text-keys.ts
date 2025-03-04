import { PHASES, capPhase } from "@/config/types/phases.ts";

export const CUSTOM_TEXT_KEYS = [
  "homeTitle",
  `homeSubtitle${capPhase(PHASES.REQUESTS)}`,
  `homeSubtitle${capPhase(PHASES.ASSIGNMENTS)}`,
  `homeSubtitle${capPhase(PHASES.RESULTS)}`,
  `homeSubtitle${capPhase(PHASES.SHUTDOWN)}`,
  `homeMessage${capPhase(PHASES.REQUESTS)}`,
  `homeMessage${capPhase(PHASES.ASSIGNMENTS)}`,
  `homeMessage${capPhase(PHASES.RESULTS)}`,
  `homeMessage${capPhase(PHASES.SHUTDOWN)}`,
  "contact",
  "legalNotice",
] as const;

export type CustomTextKey = (typeof CUSTOM_TEXT_KEYS)[number];

export const isCustomTextKey = (key: unknown): key is CustomTextKey =>
  Object.values(CUSTOM_TEXT_KEYS).includes(key as CustomTextKey);
