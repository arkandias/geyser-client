import { useQuasar } from "quasar";
import { type ComputedRef, computed } from "vue";

export const useDarkMode = () => {
  const $q = useQuasar();

  const storedDarkMode = $q.localStorage.getItem("darkMode");
  if (typeof storedDarkMode === "boolean") {
    $q.dark.set(storedDarkMode);
  } else {
    $q.dark.set("auto");
  }

  const isDarkModeActive: ComputedRef<boolean> = computed(
    () => $q.dark.isActive,
  );

  const toggleDarkMode = (): void => {
    $q.dark.toggle();
    $q.localStorage.set("darkMode", $q.dark.isActive);
  };

  return {
    isDarkModeActive,
    toggleDarkMode,
  };
};
