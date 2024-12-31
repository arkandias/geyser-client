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

const { courseRequestsFragment } = defineProps<{
  courseRequestsFragment: FragmentType<typeof CourseRequestsFragmentDoc>;
}>();

graphql(`
  fragment CourseRequests on enseignement {
    ...RequestFormInfo
    requests: demandes(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      id
      type
      ...RequestCardInfo
    }
  }
`);

const courseRequests = computed(() =>
  useFragment(CourseRequestsFragmentDoc, courseRequestsFragment),
);

const perm = usePermissions();

const requestsOptions = computed(() =>
  REQUEST_TYPE_OPTIONS.filter(
    (requestType) =>
      requestType.value !== REQUEST_TYPES.ASSIGNMENT || perm.toViewAssignments,
  ).map((option) => ({
    ...option,
    requests: courseRequests.value.requests.filter(
      (request) => request.type === option.value,
    ),
  })),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <DetailsSubsection v-if="perm.toSubmitRequests || perm.toAssignCourses">
      <RequestForm :request-form-info-fragment="courseRequests" />
    </DetailsSubsection>
    <DetailsSubsection
      v-for="option in requestsOptions"
      :key="option.value"
      :title="option.label + 's'"
    >
      <QCardSection class="row q-gutter-xs">
        <RequestCard
          v-for="request in option.requests"
          :key="request.id"
          :request-card-info-fragment="request"
        />
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
