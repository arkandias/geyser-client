<script setup lang="ts">
import { computed } from "vue";

import { useDownloadAssignments } from "@/composables/download-assignments.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type RequestBoolExp,
  type TeacherResponsibilitiesFragment,
  TeacherResponsibilitiesFragmentDoc,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { displayName, formatProgram } from "@/utils/format.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherList from "@/components/teacher/TeacherList.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherResponsibilitiesFragmentDoc>;
}>();

graphql(`
  fragment TeacherResponsibilities on Teacher {
    responsibilities(
      orderBy: [{ programId: ASC }, { trackId: ASC }, { courseId: ASC }]
    ) {
      id
      program {
        id
        name
        shortName: nameShort
        degree {
          name
          shortName: nameShort
        }
      }
      track {
        id
        name
        shortName: nameShort
        program {
          name
          shortName: nameShort
          degree {
            name
            shortName: nameShort
          }
        }
      }
      course {
        id
        year
        name
        shortName: nameShort
        program {
          name
          shortName: nameShort
          degree {
            name
            shortName: nameShort
          }
        }
        track {
          name
          shortName: nameShort
          program {
            name
            shortName: nameShort
            degree {
              name
              shortName: nameShort
            }
          }
        }
      }
      comment
    }
  }
`);

const { activeYear } = useYearsStore();
const perm = usePermissions();
const { downloadAssignments } = useDownloadAssignments();

const responsibilities = computed(() =>
  useFragment(
    TeacherResponsibilitiesFragmentDoc,
    dataFragment,
  ).responsibilities.filter(
    (responsibility) =>
      responsibility.course == null ||
      responsibility.course.year === activeYear.value,
  ),
);

// Helpers
type Responsibility = ArrayElement<
  TeacherResponsibilitiesFragment["responsibilities"]
>;

const formatResponsibilityType = (responsibility: Responsibility) =>
  responsibility.program
    ? "Mention"
    : responsibility.track
      ? "Parcours"
      : responsibility.course
        ? "UE"
        : "";

const formatResponsibility = (responsibility: Responsibility) =>
  (responsibility.program
    ? formatProgram(responsibility.program)
    : responsibility.track
      ? displayName(responsibility.track)
      : responsibility.course
        ? displayName(responsibility.course)
        : "") + (responsibility.comment ? ` (${responsibility.comment})` : "");

const formatResponsibilityExtra = (responsibility: Responsibility) =>
  responsibility.track
    ? formatProgram(responsibility.track.program)
    : responsibility.course
      ? formatProgram(responsibility.course.program) +
        (responsibility.course.track
          ? `, parcours ${displayName(responsibility.course.track)}`
          : "")
      : "";

const downloadProgramAssignments = async (responsibility: Responsibility) => {
  if (activeYear.value === null) {
    return;
  }
  let where: RequestBoolExp;
  let filename: string;
  if (responsibility.program) {
    where = {
      course: { programId: { _eq: responsibility.program.id } },
    };
    filename =
      activeYear.value.toString() + " " + formatProgram(responsibility.program);
  } else if (responsibility.track) {
    where = {
      course: { trackId: { _eq: responsibility.track.id } },
    };
    filename =
      activeYear.value.toString() +
      " " +
      formatProgram(responsibility.track.program) +
      " " +
      displayName(responsibility.track);
  } else if (responsibility.course) {
    where = {
      course: { id: { _eq: responsibility.course.id } },
    };
    filename =
      activeYear.value.toString() +
      " " +
      formatProgram(responsibility.course.program) +
      (responsibility.course.track
        ? " " + displayName(responsibility.course.track)
        : "") +
      " " +
      displayName(responsibility.course);
  } else {
    console.error("Invalid responsibility", responsibility);
    notify(NotifyType.ERROR, {
      message: "Responsabilité non valide",
    });
    return;
  }
  await downloadAssignments(
    {
      year: activeYear.value,
      where,
    },
    filename,
  );
};
</script>

<template>
  <DetailsSection title="Responsabilités">
    <TeacherList>
      <QItem
        v-for="responsibility in responsibilities"
        :key="responsibility.id"
        class="q-pa-none"
      >
        <QItemSection>
          <QItemLabel overline>
            {{ formatResponsibilityType(responsibility) }}
          </QItemLabel>
          <QItemLabel>{{ formatResponsibility(responsibility) }}</QItemLabel>
          <QItemLabel caption>
            {{ formatResponsibilityExtra(responsibility) }}
          </QItemLabel>
        </QItemSection>
        <QItemSection v-if="perm.toViewAssignments" avatar>
          <QBtn
            icon="sym_s_download"
            color="primary"
            size="md"
            flat
            square
            @click="downloadProgramAssignments(responsibility)"
          >
            <QTooltip :delay="TOOLTIP_DELAY">
              Télécharger les attributions
            </QTooltip>
          </QBtn>
        </QItemSection>
      </QItem>
    </TeacherList>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
