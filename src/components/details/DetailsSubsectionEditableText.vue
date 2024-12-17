<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

import EditableText from "@/components/core/EditableText.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";

defineProps<{
  title: string;
  text: string | null;
  defaultText?: string;
  setText?: (text: string) => Promise<boolean>;
  editable?: boolean;
}>();

const edition: Ref<boolean> = ref(false);
</script>

<template>
  <DetailsSubsection v-model="edition" :title :editable>
    <EditableText v-model="edition" :title :text :default-text :set-text />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
