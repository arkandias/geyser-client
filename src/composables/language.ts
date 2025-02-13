import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

import { type AvailableLocale, isAvailableLocale } from "@/services/i18n.ts";
import { QUASAR_LANGS } from "@/services/quasar.ts";

export const useLanguage = () => {
  const { locale } = useI18n();
  const $q = useQuasar();

  const storedLang = $q.localStorage.getItem("lang");
  if (isAvailableLocale(storedLang)) {
    locale.value = storedLang;
    $q.lang.set(QUASAR_LANGS[storedLang]);
  } else {
    const browserLocale = $q.lang.getLocale();
    if (isAvailableLocale(browserLocale)) {
      locale.value = browserLocale;
      $q.lang.set(QUASAR_LANGS[browserLocale]);
    }
  }

  const setLang = (newLocale: AvailableLocale) => {
    locale.value = newLocale;
    $q.lang.set(QUASAR_LANGS[newLocale]);
    $q.localStorage.set("lang", newLocale);
  };

  return {
    setLang,
  };
};
