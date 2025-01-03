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
  dataFragment: {
    assigned: FragmentType<typeof TeacherRequestsFragmentDoc>;
    primary: FragmentType<typeof TeacherRequestsFragmentDoc>;
    secondary: FragmentType<typeof TeacherRequestsFragmentDoc>;
  };
}>();

graphql(`
  fragment TeacherRequests on demande_aggregate {
    aggregate {
      sum {
        hours: heures
        weightedHours: heures_eqtd
      }
    }
  }
`);

const perm = usePermissions();

const data = computed(() => ({
  assigned: useFragment(TeacherRequestsFragmentDoc, dataFragment.assigned),
  primary: useFragment(TeacherRequestsFragmentDoc, dataFragment.primary),
  secondary: useFragment(TeacherRequestsFragmentDoc, dataFragment.secondary),
}));
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
