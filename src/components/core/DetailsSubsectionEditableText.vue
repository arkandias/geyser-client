<script setup lang="ts">
import { type Ref, ref } from "vue";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import EditableText from "@/components/core/EditableText.vue";

defineProps<{
  title: string;
  text: string | null;
  setText: (text: string) => Promise<boolean>;
  defaultText?: string;
  editable?: boolean;
}>();

const edition: Ref<boolean> = ref(false);
</script>

<template>
  <DetailsSubsection v-model="edition" :title :editable>
    <EditableText v-model="edition" :text :set-text :default-text />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
