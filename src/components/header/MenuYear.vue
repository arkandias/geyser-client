<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

import { setQueryParam } from "@/helpers/query-params.ts";
import { useYears } from "@/stores/years.ts";
import type { Option } from "@/types/common.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const router = useRouter();

const { years, activeYear } = useYears();

const options: ComputedRef<Option<number>[]> = computed(() =>
  years
    .map((year) => ({
      value: year,
      label: year.toString(),
    }))
    .sort((a, b) => b.value - a.value),
);

const selected: Ref<number | null> = ref(null);

const update = async () => {
  await setQueryParam(router, "year", selected.value ?? undefined);
};

watch(
  () => activeYear,
  () => {
    selected.value = activeYear;
  },
  { immediate: true },
);
</script>

<template>
  <MenuBase label="Année" icon="sym_s_history">
    <QList dense>
      <QItem class="flex-center">
        <QItemLabel header>Année</QItemLabel>
      </QItem>
      <QSeparator />
      <QItem class="item-options">
        <QOptionGroup
          v-model="selected"
          :options
          color="primary"
          type="radio"
          @update:model-value="update"
        />
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
