<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceRequestsFragmentDoc } from "@/gql/graphql.ts";
import { formatWH } from "@/utils/format.ts";
import { totalHW } from "@/utils/hours.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherTable from "@/components/teacher/TeacherTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceRequestsFragmentDoc>;
}>();

graphql(`
  fragment TeacherServiceRequests on Service {
    assigned: requestsAggregate(where: { type: { _eq: "assignments" } }) {
      aggregate {
        sum {
          hoursWeighted
        }
      }
    }
    primary: requestsAggregate(where: { type: { _eq: "primary" } }) {
      aggregate {
        sum {
          hoursWeighted
        }
      }
    }
    secondary: requestsAggregate(where: { type: { _eq: "secondary" } }) {
      aggregate {
        sum {
          hoursWeighted
        }
      }
    }
  }
`);

const perm = usePermissions();

const requestsTotals = computed(() =>
  useFragment(TeacherServiceRequestsFragmentDoc, dataFragment),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <TeacherTable>
      <tr v-if="perm.toViewAssignments">
        <td>Attributions</td>
        <td>{{ formatWH(totalHW(requestsTotals.assigned)) }}</td>
      </tr>
      <tr>
        <td>Demandes principales</td>
        <td>{{ formatWH(totalHW(requestsTotals.primary)) }}</td>
      </tr>
      <tr>
        <td>Demandes secondaires</td>
        <td>{{ formatWH(totalHW(requestsTotals.secondary)) }}</td>
      </tr>
    </TeacherTable>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
