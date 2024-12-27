<script setup lang="ts">
import { usePermissions } from "@/composables/permissions.ts";
import { formatWH } from "@/helpers/format.ts";
import { totalWH } from "@/helpers/hours.ts";
import type { TotalWeightedHours } from "@/types/row.ts";

import ServiceTable from "@/components/core/ServiceTable.vue";

defineProps<{
  totalAssigned: TotalWeightedHours;
  totalPrimary: TotalWeightedHours;
  totalSecondary: TotalWeightedHours;
}>();

const perm = usePermissions();
</script>

<template>
  <ServiceTable>
    <tr v-if="perm.toViewAssignments">
      <td>Attributions</td>
      <td>{{ formatWH(totalWH(totalAssigned)) }}</td>
    </tr>
    <tr>
      <td>Demandes principales</td>
      <td>{{ formatWH(totalWH(totalPrimary)) }}</td>
    </tr>
    <tr>
      <td>Demandes secondaires</td>
      <td>{{ formatWH(totalWH(totalSecondary)) }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss"></style>
