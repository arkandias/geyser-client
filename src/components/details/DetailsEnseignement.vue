<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useShownRequestTypes } from "@/composables/shown-request-types.ts";
import { labelRequestType } from "@/config/types/request-types.ts";
import { processArchives } from "@/helpers/courses.ts";
import type { Archive, CourseDetails } from "@/types/course.ts";

import PriorityChip from "@/components/core/PriorityChip.vue";
import RequestForm from "@/components/core/RequestForm.vue";
import DetailsEnseignementDemandes from "@/components/details/DetailsEnseignementDemandes.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ details: CourseDetails }>();

const perm = usePermissions();
const { shown: shownRequestTypes } = useShownRequestTypes();

const archives: ComputedRef<Archive[]> = computed(() =>
  processArchives(props.details.parent).sort((a, b) => b.year - a.year),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <RequestForm
      v-if="perm.deFaireDesDemandes || perm.deModifierLesAttributions"
      :course-id="details.courseId"
      :hours-per-group="details.hoursPerGroup"
    />
    <DetailsEnseignementDemandes
      v-for="requestType in shownRequestTypes"
      :key="requestType"
      :title="labelRequestType(requestType)"
      :requests="
        details.requests.filter(
          (demande) => demande.requestType === requestType,
        )
      "
    />
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
    <DetailsEnseignementDemandes
      v-for="archive in archives"
      :key="archive.year"
      :title="archive.year.toString()"
      :requests="archive.requests"
      archive
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
