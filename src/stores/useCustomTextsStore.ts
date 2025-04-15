import DOMPurify from "dompurify";
import { computed, ref } from "vue";

import {
  CUSTOM_TEXT_KEYS,
  type CustomTextKey,
  isCustomTextKey,
} from "@/config/custom-text-keys.ts";

const customTexts = ref(
  Object.fromEntries(CUSTOM_TEXT_KEYS.map((key) => [key, null])) as Record<
    CustomTextKey,
    string | null
  >,
);

const customTextsSanitized = computed(
  () =>
    Object.fromEntries(
      CUSTOM_TEXT_KEYS.map((key) => [
        key,
        DOMPurify.sanitize(customTexts.value[key] ?? ""),
      ]),
    ) as Record<CustomTextKey, string>,
);

const getCustomText = (key: CustomTextKey) =>
  computed(() => customTextsSanitized.value[key]);

const setCustomTexts = (
  newCustomTexts: { key: string; value: string | null }[],
) => {
  CUSTOM_TEXT_KEYS.forEach((key) => {
    customTexts.value[key] =
      newCustomTexts.find((text) => text.key === key)?.value ?? null;
  });

  // Log invalid keys (if any)
  const invalidKeys = newCustomTexts
    .map(({ key }) => key)
    .filter((key) => !isCustomTextKey(key));
  if (invalidKeys.length) {
    console.error(`Invalid custom text keys: ${invalidKeys.join(", ")}`);
  }
};

export const useCustomTextsStore = () => ({
  getCustomText,
  setCustomTexts,
});
