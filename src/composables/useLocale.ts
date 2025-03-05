import { useQuasar } from "quasar";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import {
  type AvailableLocale,
  isAvailableLocale,
} from "@/config/types/locales.ts";
import { quasarLanguages } from "@/services/quasar.ts";

export const useLocale = () => {
  const { locale } = useCustomI18n();
  const $q = useQuasar();

  const storedLocale = $q.localStorage.getItem("lang");
  if (isAvailableLocale(storedLocale)) {
    locale.value = storedLocale;
    $q.lang.set(quasarLanguages[storedLocale]);
  } else {
    const browserLocale = $q.lang.getLocale();
    if (isAvailableLocale(browserLocale)) {
      locale.value = browserLocale;
      $q.lang.set(quasarLanguages[browserLocale]);
    }
  }

  const setLocale = (newLocale: AvailableLocale) => {
    locale.value = newLocale;
    $q.lang.set(quasarLanguages[newLocale]);
    $q.localStorage.set("lang", newLocale);
  };

  return {
    setLocale,
  };
};
