<script setup lang="ts">
import { useShownRequestTypes } from "@/composables/shown-request-types.ts";
import {
  type RequestType,
  labelRequestType,
} from "@/config/types/request-types.ts";
import { nf } from "@/helpers/format.ts";
import type { TotalWeightedHours } from "@/types/row.ts";

import ServiceTable from "@/components/service/ServiceTable.vue";

defineProps<{
  totals: Record<RequestType, TotalWeightedHours>;
}>();

const { shown: shownRequestTypes } = useShownRequestTypes();
const formatRequest = (total: TotalWeightedHours): string =>
  nf.format(total.aggregate?.sum?.weightedHours ?? 0) + " htd";
</script>

<template>
  <ServiceTable>
    <tr v-for="requestType in shownRequestTypes" :key="requestType">
      <td>{{ labelRequestType(requestType) }}</td>
      <td>{{ formatRequest(totals[requestType]) }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss"></style>
