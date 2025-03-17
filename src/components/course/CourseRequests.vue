<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseRequestsFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import RequestCard from "@/components/core/RequestCard.vue";
import RequestForm from "@/components/core/RequestForm.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseRequestsFragmentDoc>;
}>();

graphql(`
  fragment CourseRequests on Course {
    ...RequestFormData

    requests(orderBy: [{ service: { teacher: { displayname: ASC } } }]) {
      id
      type
      ...RequestCardData
    }
  }
`);

const { t } = useCustomI18n();
const perm = usePermissions();

const data = computed(() =>
  useFragment(CourseRequestsFragmentDoc, dataFragment),
);

const requestsByType = computed(() =>
  [
    { value: REQUEST_TYPES.ASSIGNMENT, label: t("requestType.assignment") },
    { value: REQUEST_TYPES.PRIMARY, label: t("requestType.primary") },
    { value: REQUEST_TYPES.SECONDARY, label: t("requestType.secondary") },
  ]
    .filter(
      (opt) => opt.value !== REQUEST_TYPES.ASSIGNMENT || perm.toViewAssignments,
    )
    .map((opt) => ({
      ...opt,
      requests: data.value.requests.filter((r) => r.type === opt.value),
    })),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <DetailsSubsection v-if="perm.toSubmitRequests || perm.toEditAssignments">
      <RequestForm :data-fragment="data" />
    </DetailsSubsection>
    <DetailsSubsection
      v-for="opt in requestsByType"
      :key="opt.value"
      :title="opt.label + 's'"
    >
      <QCardSection class="row q-gutter-xs">
        <RequestCard v-for="r in opt.requests" :key="r.id" :data-fragment="r" />
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
