<script setup lang="ts">
import { type Ref, ref } from "vue";

import EditableText from "@/components/core/EditableText.vue";
import CourseSubsection from "@/components/course/CourseSubsection.vue";

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
  <CourseSubsection v-model="edition" :title :editable>
    <EditableText v-model="edition" :text :set-text :default-text />
  </CourseSubsection>
</template>

<style scoped lang="scss"></style>
