<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherRequestsFragmentDoc } from "@/gql/graphql.ts";
import { formatWH } from "@/helpers/format.ts";
import { totalWH } from "@/helpers/hours.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import ServiceTable from "@/components/core/ServiceTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherRequestsFragmentDoc>;
}>();

graphql(`
  fragment TeacherRequests on intervenant {
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

const perm = usePermissions();

const data = computed(() =>
  useFragment(TeacherRequestsFragmentDoc, dataFragment),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <ServiceTable>
      <tr v-if="perm.toViewAssignments">
        <td>Attributions</td>
        <td>{{ formatWH(totalWH(data.assigned)) }}</td>
      </tr>
      <tr>
        <td>Demandes principales</td>
        <td>{{ formatWH(totalWH(data.primary)) }}</td>
      </tr>
      <tr>
        <td>Demandes secondaires</td>
        <td>{{ formatWH(totalWH(data.secondary)) }}</td>
      </tr>
    </ServiceTable>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
