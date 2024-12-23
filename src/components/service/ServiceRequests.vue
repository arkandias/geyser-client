<script setup lang="ts">
import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  REQUEST_TYPE_OPTIONS,
  type RequestType,
} from "@/config/types/request-types.ts";
import { formatWH } from "@/helpers/format.ts";
import { totalWH } from "@/helpers/hours.ts";
import type { TotalWeightedHours } from "@/types/row.ts";

import ServiceTable from "@/components/service/ServiceTable.vue";

defineProps<{
  totals: Record<RequestType, TotalWeightedHours>;
}>();

const perm = usePermissions();

const requestTypeOptions = REQUEST_TYPE_OPTIONS.filter(
  (requestType) =>
    requestType.value !== REQUEST_TYPES.ASSIGNMENT || perm.toViewAssignments,
);
</script>

<template>
  <ServiceTable>
    <tr v-for="requestType in requestTypeOptions" :key="requestType.value">
      <td>{{ requestType.label + "s" }}</td>
      <td>{{ formatWH(totalWH(totals[requestType.value])) }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss"></style>
