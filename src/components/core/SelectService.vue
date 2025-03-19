<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useServices } from "@/composables/useServices.ts";
import { normalizeForSearch } from "@/utils/misc.ts";

const id = defineModel<number | null>();

const { t } = useCustomI18n();

const { services } = useServices();

const options = ref<{ value: number; label: string; search: string }[]>([]);
const optionsInit = computed(() =>
  services.value.map((s) => ({
    value: s.id,
    label: s.teacher.displayname ?? "",
    search: normalizeForSearch(s.teacher.displayname ?? ""),
  })),
);
watch(
  optionsInit,
  (value) => {
    options.value = value;
  },
  { immediate: true },
);

const filter = (val: string, update: (x: () => void) => void) => {
  update(() => {
    options.value = optionsInit.value.filter((t) =>
      t.search.includes(normalizeForSearch(val)),
    );
  });
};
</script>

<template>
  <QSelect
    v-model="id"
    :options
    :label="t('selectService.label')"
    color="primary"
    emit-value
    map-options
    use-input
    fill-input
    hide-selected
    input-debounce="0"
    hide-dropdown-icon
    @filter="filter"
  />
</template>

<style scoped lang="scss"></style>
