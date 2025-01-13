<script setup lang="ts">
import { computed } from "vue";

import { useDownloadAssignments } from "@/composables/download-assignments.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type Demande_Bool_Exp,
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
  fragment TeacherResponsibilities on intervenant {
    responsibilities: responsabilites(
      order_by: [{ mention_id: asc }, { parcours_id: asc }, { ens_id: asc }]
    ) {
      id
      program: mention {
        id
        name: nom
        shortName: nom_court
        degree: cursus {
          name: nom
          shortName: nom_court
        }
      }
      track: parcours {
        id
        name: nom
        shortName: nom_court
        program: mention {
          name: nom
          shortName: nom_court
          degree: cursus {
            name: nom
            shortName: nom_court
          }
        }
      }
      course: enseignement {
        id
        name: nom
        shortName: nom_court
        program: mention {
          name: nom
          shortName: nom_court
          degree: cursus {
            name: nom
            shortName: nom_court
          }
        }
        track: parcours {
          name: nom
          shortName: nom_court
          program: mention {
            name: nom
            shortName: nom_court
            degree: cursus {
              name: nom
              shortName: nom_court
            }
          }
        }
      }
      comment: commentaire
    }
  }
`);

const { activeYear } = useYearsStore();
const perm = usePermissions();
const { downloadAssignments } = useDownloadAssignments();

const responsibilities = computed(
  () =>
    useFragment(TeacherResponsibilitiesFragmentDoc, dataFragment)
      .responsibilities,
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
  let where: Demande_Bool_Exp;
  let filename: string;
  if (responsibility.program) {
    where = {
      enseignement: { mention_id: { _eq: responsibility.program.id } },
    };
    filename =
      activeYear.value.toString() + " " + formatProgram(responsibility.program);
  } else if (responsibility.track) {
    where = {
      enseignement: { parcours_id: { _eq: responsibility.track.id } },
    };
    filename =
      activeYear.value.toString() +
      " " +
      formatProgram(responsibility.track.program) +
      " " +
      displayName(responsibility.track);
  } else if (responsibility.course) {
    where = {
      enseignement: { id: { _eq: responsibility.course.id } },
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
