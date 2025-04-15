import DOMPurify from "dompurify";
import { computed, ref } from "vue";

import {
  type CustomComposerTranslation,
  useCustomI18n,
} from "@/composables/useCustomI18n.ts";
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

const getCustomText = (t: CustomComposerTranslation) => (key: CustomTextKey) =>
  customTextsSanitized.value[key] || t(`customText.${key}.default`);

const setCustomText = (key: string, value: string | null) => {
  if (isCustomTextKey(key)) {
    customTexts.value[key] = value;
  } else {
    console.error(`Invalid custom text key: ${key}`);
  }
};

export const useCustomTextsStore = () => {
  const { t } = useCustomI18n();

  return {
    getCustomText: getCustomText(t),
    setCustomText,
  };
};
