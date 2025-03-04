import { PHASES } from "@/config/types/phases.ts";

export const CUSTOM_TEXT_KEYS = [
  "home_title",
  `home_subtitle_${PHASES.REQUESTS}`,
  `home_subtitle_${PHASES.ASSIGNMENTS}`,
  `home_subtitle_${PHASES.RESULTS}`,
  `home_subtitle_${PHASES.SHUTDOWN}`,
  `home_message_${PHASES.REQUESTS}`,
  `home_message_${PHASES.ASSIGNMENTS}`,
  `home_message_${PHASES.RESULTS}`,
  `home_message_${PHASES.SHUTDOWN}`,
  "contact",
  "legal_notice",
] as const;

export type CustomTextKey = (typeof CUSTOM_TEXT_KEYS)[number];

export const isCustomTextKey = (key: unknown): key is CustomTextKey =>
  Object.values(CUSTOM_TEXT_KEYS).includes(key as CustomTextKey);
