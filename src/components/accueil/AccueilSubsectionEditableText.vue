<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

import AccueilSubsection from "@/components/accueil/AccueilSubsection.vue";
import EditableText from "@/components/core/EditableText.vue";

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
  <AccueilSubsection v-model="edition" :title :editable>
    <EditableText v-model="edition" :title :text :default-text :set-text />
  </AccueilSubsection>
</template>

<style scoped lang="scss"></style>
