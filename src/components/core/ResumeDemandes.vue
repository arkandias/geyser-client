<script setup lang="ts">
import { useRequestTypes } from "@/composables/request-types.ts";
import {
  type RequestType,
  labelRequestType,
} from "@/config/types/request-types.ts";
import { nf } from "@/helpers/format.ts";

import TableService from "@/components/core/TableService.vue";

defineProps<{
  totauxDemandes: Record<RequestType, number>;
}>();

const { shown: shownRequestTypes } = useRequestTypes();
</script>

<template>
  <TableService>
    <tr v-for="requestType in shownRequestTypes" :key="requestType">
      <td>{{ labelRequestType(requestType) }}</td>
      <td>{{ nf.format(totauxDemandes[requestType]) + " htd" }}</td>
    </tr>
  </TableService>
</template>

<style scoped lang="scss"></style>
