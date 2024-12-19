<script setup lang="ts">
import { type Ref, ref } from "vue";

import EditableText from "@/components/core/EditableText.vue";
import HomeSubsection from "@/components/home/HomeSubsection.vue";

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
  <HomeSubsection v-model="edition" :title :editable>
    <EditableText v-model="edition" :title :text :default-text :set-text />
  </HomeSubsection>
</template>

<style scoped lang="scss"></style>
