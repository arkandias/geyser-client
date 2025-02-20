import DOMPurify from "dompurify";
import { computed, ref } from "vue";

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
  "legal_notice",
] as const;

type CustomTexts = {
  key: (typeof CUSTOM_TEXT_KEYS)[number];
  value: string | null;
};

const customTexts = ref<CustomTexts[]>(
  CUSTOM_TEXT_KEYS.map((key) => ({
    key,
    value: null,
  })),
);
const customTextsSanitized = computed(() =>
  customTexts.value.map((text) => ({
    ...text,
    value: DOMPurify.sanitize(text.value ?? ""),
  })),
);

const getValue = (key: string) =>
  computed(
    () =>
      customTextsSanitized.value.find((text) => text.key === key)?.value ??
      null,
  );

const setValue = (key: string, value: string) => {
  const customText = customTexts.value.find((text) => text.key === key);
  if (!customText) {
    console.warn(`Invalid custom text key: ${key}`);
    return;
  }
  customText.value = value;
};

export const useCustomTextsStore = () => ({
  customTexts: customTextsSanitized,
  getValue,
  setValue,
});
