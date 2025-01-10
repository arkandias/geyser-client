<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  REQUEST_TYPE_OPTIONS,
} from "@/config/types/request-types.ts";
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
  fragment CourseRequests on enseignement {
    ...RequestFormData
    requests: demandes(
      order_by: [
        { service: { intervenant: { nom: asc } } }
        { service: { intervenant: { prenom: asc } } }
      ]
    ) {
      id
      type
      ...RequestCardData
    }
  }
`);

const perm = usePermissions();

const data = computed(() =>
  useFragment(CourseRequestsFragmentDoc, dataFragment),
);

const requestsByType = computed(() =>
  REQUEST_TYPE_OPTIONS.filter(
    (requestType) =>
      requestType.value !== REQUEST_TYPES.ASSIGNMENT || perm.toViewAssignments,
  ).map((option) => ({
    ...option,
    requests: data.value.requests.filter(
      (request) => request.type === option.value,
    ),
  })),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <DetailsSubsection v-if="perm.toSubmitRequests || perm.toAssignCourses">
      <RequestForm :data-fragment="data" />
    </DetailsSubsection>
    <DetailsSubsection
      v-for="option in requestsByType"
      :key="option.value"
      :title="option.label + 's'"
    >
      <QCardSection class="row q-gutter-xs">
        <RequestCard
          v-for="request in option.requests"
          :key="request.id"
          :data-fragment="request"
        />
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
