<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  REQUEST_TYPE_OPTIONS,
  type RequestType,
} from "@/config/types/request-types.ts";
import type { Option } from "@/types/common.ts";
import type { Archive, CourseDetails, NestedArchives } from "@/types/course.ts";
import type { RequestDetails } from "@/types/request.ts";

import PriorityChip from "@/components/core/PriorityChip.vue";
import RequestCard from "@/components/core/RequestCard.vue";
import RequestForm from "@/components/core/RequestForm.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";

const { details } = defineProps<{ details: CourseDetails }>();

const perm = usePermissions();

const requestsByTypeOptions: ComputedRef<
  (Option<RequestType> & { requests: RequestDetails[] })[]
> = computed(() =>
  REQUEST_TYPE_OPTIONS.filter(
    (requestType) =>
      requestType.value !== REQUEST_TYPES.ASSIGNMENT || perm.toViewAssignments,
  ).map((option) => ({
    ...option,
    requests: details.requests.filter(
      (request) => request.type === option.value,
    ),
  })),
);

const getArchive = (archives: NestedArchives): Archive => {
  const { parent, ...archive } = archives;
  return archive;
};

const processArchives = (
  archives: NestedArchives | null | undefined,
): Archive[] =>
  archives ? [getArchive(archives), ...processArchives(archives.parent)] : [];

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
      v-for="requestOption in requestsByTypeOptions"
      :key="requestOption.value"
      :title="requestOption.label + 's'"
    >
      <QCardSection>
        <div class="row q-gutter-xs">
          <RequestCard
            v-for="request in requestOption.requests"
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
