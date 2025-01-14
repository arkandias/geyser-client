<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherRequestsFragmentDoc } from "@/gql/graphql.ts";
import { formatWH } from "@/utils/format.ts";
import { totalWH } from "@/utils/hours.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherTable from "@/components/teacher/TeacherTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherRequestsFragmentDoc>;
}>();

graphql(`
  fragment TeacherRequests on service {
    assigned: requests_aggregate(where: { type: { _eq: "attribution" } }) {
      aggregate {
        sum {
          weightedHours: hours_weighted
        }
      }
    }
    primary: requests_aggregate(where: { type: { _eq: "principale" } }) {
      aggregate {
        sum {
          weightedHours: hours_weighted
        }
      }
    }
    secondary: requests_aggregate(where: { type: { _eq: "secondaire" } }) {
      aggregate {
        sum {
          weightedHours: hours_weighted
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
