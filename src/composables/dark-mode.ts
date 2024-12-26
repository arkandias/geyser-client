import { useQuasar } from "quasar";
import { type ComputedRef, type Ref, computed, ref } from "vue";

const inUse: Ref<boolean> = ref(false);

export const useDarkMode = () => {
  const $q = useQuasar();

  if (!inUse.value) {
    const storedDarkMode = $q.localStorage.getItem("darkMode");
    if (typeof storedDarkMode === "boolean") {
      $q.dark.set(storedDarkMode);
    } else {
      $q.dark.set("auto");
    }
    inUse.value = true;
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
