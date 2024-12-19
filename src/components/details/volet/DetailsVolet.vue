<script setup lang="ts">
import { type Ref, ref, watch } from "vue";

import { useData } from "@/stores/data.ts";

defineProps<{
  label: string;
  caption: string;
}>();
defineSlots<{ default(): unknown }>();

const { selectedCourse, selectedService } = useData();

const expanded: Ref<boolean> = ref(false);

// on change: close and scroll to top (sync)
watch(
  [
    () => selectedCourse.value[0]?.id,
    () => selectedCourse.value[0]?.id ?? selectedService.value[0]?.id,
  ],
  () => {
    expanded.value = false;
    document.getElementById("volet")?.scrollIntoView();
  },
  {
    flush: "sync",
  },
);
</script>

<template>
  <QExpansionItem
    id="volet"
    v-model="expanded"
    expand-separator
    :label
    :caption
    dense
    dense-toggle
  >
    <QCard flat square class="text-body2">
      <slot />
    </QCard>
  </QExpansionItem>
</template>

<style scoped lang="scss">
.q-expansion-item {
  background-color: $grey-3;
}
.body--dark .q-expansion-item {
  background-color: $grey-9;
}
</style>
