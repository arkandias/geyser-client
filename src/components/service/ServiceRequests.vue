<script setup lang="ts">
import { useShownRequestTypes } from "@/composables/shown-request-types.ts";
import {
  type RequestType,
  labelRequestType,
} from "@/config/types/request-types.ts";
import { nf } from "@/helpers/format.ts";

import ServiceTable from "@/components/service/ServiceTable.vue";

defineProps<{
  totalRequests: Record<RequestType, number>;
}>();

const { shown: shownRequestTypes } = useShownRequestTypes();
</script>

<template>
  <ServiceTable>
    <tr v-for="requestType in shownRequestTypes" :key="requestType">
      <td>{{ labelRequestType(requestType) }}</td>
      <td>{{ nf.format(totalRequests[requestType]) + " htd" }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss"></style>
