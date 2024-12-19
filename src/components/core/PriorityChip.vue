<script setup lang="ts">
import { formatUser, priorityColor } from "@/helpers/format.ts";
import type { Priority } from "@/types/priorities.ts";

defineProps<{ priorite: Priority }>();
</script>

<template>
  <QChip :color="priorityColor(priorite.isPriority)" outline square dense>
    <QAvatar
      :color="priorityColor(priorite.isPriority)"
      text-color="white"
      square
    >
      {{ priorite.seniority }}
    </QAvatar>
    {{ formatUser(priorite.teacher) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
