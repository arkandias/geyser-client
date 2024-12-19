<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import type { TeacherRow } from "@/types/teachers.ts";

import DetailsIntervenantMessage from "@/components/details/DetailsIntervenantMessage.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ teacherRow: TeacherRow }>();

const contenu: ComputedRef<string | null> = computed(
  () => props.teacher.messages[0]?.body ?? null,
);
</script>

<template>
  <DetailsSection title="Messages">
    <DetailsIntervenantMessage
      :service-id="teacherRow.id"
      :uid="teacherRow.teacher.uid"
      :contenu
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
