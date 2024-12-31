<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TotalRequestsFragmentDoc } from "@/gql/graphql.ts";
import { formatWH } from "@/helpers/format.ts";
import { totalWH } from "@/helpers/hours.ts";

import ServiceTable from "@/components/core/ServiceTable.vue";

const { totalRequestsFragment } = defineProps<{
  totalRequestsFragment: FragmentType<typeof TotalRequestsFragmentDoc>;
}>();

graphql(`
  fragment TotalRequests on intervenant {
    assigned: demandes_aggregate(
      where: { _and: [{ type: { _eq: "attribution" } }] }
    ) {
      aggregate {
        sum {
          hours: heures
          weightedHours: heures_eqtd
        }
      }
    }
    primary: demandes_aggregate(
      where: { _and: [{ type: { _eq: "principale" } }] }
    ) {
      aggregate {
        sum {
          hours: heures
          weightedHours: heures_eqtd
        }
      }
    }
    secondary: demandes_aggregate(
      where: { _and: [{ type: { _eq: "secondaire" } }] }
    ) {
      aggregate {
        sum {
          hours: heures
          weightedHours: heures_eqtd
        }
      }
    }
  }
`);

const totalRequests = computed(() =>
  useFragment(TotalRequestsFragmentDoc, totalRequestsFragment),
);

const perm = usePermissions();
</script>

<template>
  <ServiceTable>
    <tr v-if="perm.toViewAssignments">
      <td>Attributions</td>
      <td>{{ formatWH(totalWH(totalRequests.assigned)) }}</td>
    </tr>
    <tr>
      <td>Demandes principales</td>
      <td>{{ formatWH(totalWH(totalRequests.primary)) }}</td>
    </tr>
    <tr>
      <td>Demandes secondaires</td>
      <td>{{ formatWH(totalWH(totalRequests.secondary)) }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss"></style>
