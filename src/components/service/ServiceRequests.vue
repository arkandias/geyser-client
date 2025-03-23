<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceRequestsFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import ServiceTable from "@/components/service/ServiceTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceRequestsFragmentDoc>;
}>();

graphql(`
  fragment TeacherServiceRequests on Service {
    assigned: requestsAggregate(where: { type: { _eq: "assignment" } }) {
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

const { t, n } = useCustomI18n();
const perm = usePermissions();

const requestsTotals = computed(() =>
  useFragment(TeacherServiceRequestsFragmentDoc, dataFragment),
);

const formatTotal = (type: "assigned" | "primary" | "secondary") =>
  n(requestsTotals.value[type].aggregate?.sum?.hoursWeighted ?? 0, "decimal") +
  "\u00A0" +
  t("unit.weightedHours");
</script>

<template>
  <DetailsSection :title="t('service.requests.title')">
    <ServiceTable>
      <tbody>
        <tr v-if="perm.toViewAssignments">
          <td>{{ t("service.requests.assignments") }}</td>
          <td>{{ formatTotal("assigned") }}</td>
        </tr>
        <tr>
          <td>{{ t("service.requests.primary") }}</td>
          <td>{{ formatTotal("primary") }}</td>
        </tr>
        <tr>
          <td>{{ t("service.requests.secondary") }}</td>
          <td>{{ formatTotal("secondary") }}</td>
        </tr>
      </tbody>
    </ServiceTable>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
