<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceRequestsFragmentDoc } from "@/gql/graphql.ts";
import { totalValue } from "@/utils/misc.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import ServiceTable from "@/components/service/ServiceTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceRequestsFragmentDoc>;
}>();

graphql(`
  fragment TeacherServiceRequests on Service {
    assignment: requests(where: { type: { _eq: ASSIGNMENT } }) {
      id
      hoursWeighted
    }
    primary: requests(where: { type: { _eq: PRIMARY } }) {
      id
      hoursWeighted
    }
    secondary: requests(where: { type: { _eq: SECONDARY } }) {
      id
      hoursWeighted
    }
  }
`);

const { t, n } = useCustomI18n();
const perm = usePermissions();

const service = computed(() =>
  useFragment(TeacherServiceRequestsFragmentDoc, dataFragment),
);
const totalRequests = computed(() => ({
  assignment: totalValue(service.value.assignment, "hoursWeighted"),
  primary: totalValue(service.value.primary, "hoursWeighted"),
  secondary: totalValue(service.value.secondary, "hoursWeighted"),
}));

const formatTotal = (type: "assignment" | "primary" | "secondary") =>
  n(totalRequests.value[type], "decimal") + "\u00A0" + t("unit.weightedHours");
</script>

<template>
  <DetailsSection :title="t('service.requests.title')">
    <ServiceTable>
      <tbody>
        <tr v-if="perm.toViewAssignments">
          <td>
            {{ t("service.requests.assignments") }}
          </td>
          <td>
            {{ formatTotal("assignment") }}
          </td>
        </tr>
        <tr>
          <td>
            {{ t("service.requests.primary") }}
          </td>
          <td>
            {{ formatTotal("primary") }}
          </td>
        </tr>
        <tr>
          <td>
            {{ t("service.requests.secondary") }}
          </td>
          <td>
            {{ formatTotal("secondary") }}
          </td>
        </tr>
      </tbody>
    </ServiceTable>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
