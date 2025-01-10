<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherRequestsFragmentDoc } from "@/gql/graphql.ts";
import { formatWH } from "@/helpers/format.ts";
import { totalWH } from "@/helpers/hours.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherTable from "@/components/teacher/TeacherTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherRequestsFragmentDoc>;
}>();

graphql(`
  fragment TeacherRequests on service {
    assigned: demandes_aggregate(where: { type: { _eq: "attribution" } }) {
      aggregate {
        sum {
          weightedHours: heures_eqtd
        }
      }
    }
    primary: demandes_aggregate(where: { type: { _eq: "principale" } }) {
      aggregate {
        sum {
          weightedHours: heures_eqtd
        }
      }
    }
    secondary: demandes_aggregate(where: { type: { _eq: "secondaire" } }) {
      aggregate {
        sum {
          weightedHours: heures_eqtd
        }
      }
    }
  }
`);

const perm = usePermissions();

const requestsTotals = computed(() =>
  useFragment(TeacherRequestsFragmentDoc, dataFragment),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <TeacherTable>
      <tr v-if="perm.toViewAssignments">
        <td>Attributions</td>
        <td>{{ formatWH(totalWH(requestsTotals.assigned)) }}</td>
      </tr>
      <tr>
        <td>Demandes principales</td>
        <td>{{ formatWH(totalWH(requestsTotals.primary)) }}</td>
      </tr>
      <tr>
        <td>Demandes secondaires</td>
        <td>{{ formatWH(totalWH(requestsTotals.secondary)) }}</td>
      </tr>
    </TeacherTable>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
