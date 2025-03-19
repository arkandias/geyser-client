<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceRequestsFragmentDoc } from "@/gql/graphql.ts";
import { formatWH, totalHW } from "@/utils/hours.ts";

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

const { t } = useCustomI18n();
const perm = usePermissions();

const requestsTotals = computed(() =>
  useFragment(TeacherServiceRequestsFragmentDoc, dataFragment),
);
</script>

<template>
  <DetailsSection :title="t('service.requests.title')">
    <ServiceTable>
      <tr v-if="perm.toViewAssignments">
        <td>{{ t("service.requests.assignments") }}</td>
        <td>{{ formatWH(totalHW(requestsTotals.assigned)) }}</td>
      </tr>
      <tr>
        <td>{{ t("service.requests.primary") }}</td>
        <td>{{ formatWH(totalHW(requestsTotals.primary)) }}</td>
      </tr>
      <tr>
        <td>{{ t("service.requests.secondary") }}</td>
        <td>{{ formatWH(totalHW(requestsTotals.secondary)) }}</td>
      </tr>
    </ServiceTable>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
