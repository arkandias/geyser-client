import { PHASES } from "@/config/types/phases.ts";
import { capitalize } from "@/utils/misc.ts";

export const CUSTOM_TEXT_KEYS = [
  "homeTitle",
  `homeSubtitle${capitalize(PHASES.REQUESTS)}`,
  `homeSubtitle${capitalize(PHASES.ASSIGNMENTS)}`,
  `homeSubtitle${capitalize(PHASES.RESULTS)}`,
  `homeSubtitle${capitalize(PHASES.SHUTDOWN)}`,
  `homeMessage${capitalize(PHASES.REQUESTS)}`,
  `homeMessage${capitalize(PHASES.ASSIGNMENTS)}`,
  `homeMessage${capitalize(PHASES.RESULTS)}`,
  `homeMessage${capitalize(PHASES.SHUTDOWN)}`,
  "contact",
  "legalNotice",
] as const;

export type CustomTextKey = (typeof CUSTOM_TEXT_KEYS)[number];

export const isCustomTextKey = (key: unknown): key is CustomTextKey =>
  Object.values(CUSTOM_TEXT_KEYS).includes(key as CustomTextKey);
