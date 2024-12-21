<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useShownRequestTypes } from "@/composables/shown-request-types.ts";
import {
  type RequestType,
  labelRequestType,
} from "@/config/types/request-types.ts";
import { processArchives } from "@/helpers/courses.ts";
import type { Archive, CourseDetails } from "@/types/course.ts";
import type { RequestDetails } from "@/types/request.ts";

import PriorityChip from "@/components/core/PriorityChip.vue";
import RequestCard from "@/components/core/RequestCard.vue";
import RequestForm from "@/components/core/RequestForm.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";

const { details } = defineProps<{ details: CourseDetails }>();

const perm = usePermissions();
const { shown: shownRequestTypes } = useShownRequestTypes();

const requests: ComputedRef<(type: RequestType) => RequestDetails[]> = computed(
  () => (type) => details.requests.filter((request) => request.type === type),
);

const archives: ComputedRef<Archive[]> = computed(() =>
  processArchives(details.parent).sort((a, b) => b.year - a.year),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <RequestForm
      v-if="perm.toSubmitRequests || perm.toEditAssignments"
      :course-id="details.courseId"
      :hours-per-group="details.hoursPerGroup"
    />
    <DetailsSubsection
      v-for="requestType in shownRequestTypes"
      :key="requestType"
      :title="labelRequestType(requestType)"
    >
      <QCardSection>
        <div class="row q-gutter-xs">
          <RequestCard
            v-for="request in requests(requestType)"
            :key="request.id"
            :request
          />
        </div>
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
  <DetailsSection title="Priorités">
    <QCardSection>
      <PriorityChip
        v-for="priorite in details.priorities"
        :key="priorite.id"
        :priorite
      />
    </QCardSection>
  </DetailsSection>
  <DetailsSection title="Archives">
    <DetailsSubsection
      v-for="archive in archives"
      :key="archive.year"
      :title="archive.year.toString()"
    >
      <QCardSection>
        <div class="row q-gutter-xs">
          <RequestCard
            v-for="request in archive.requests"
            :key="request.id"
            :request
            archive
          />
        </div>
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
