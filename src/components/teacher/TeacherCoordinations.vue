<script setup lang="ts">
import { computed } from "vue";

import { useDownloadAssignments } from "@/composables/download-assignments.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type RequestBoolExp,
  type TeacherCoordinationsFragment,
  TeacherCoordinationsFragmentDoc,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { displayName, formatProgram } from "@/utils/format.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherList from "@/components/teacher/TeacherList.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherCoordinationsFragmentDoc>;
}>();

graphql(`
  fragment TeacherCoordinations on Teacher {
    coordinations(
      orderBy: [{ programId: ASC }, { trackId: ASC }, { courseId: ASC }]
    ) {
      id
      program {
        id
        name
        nameShort
        degree {
          name
          nameShort
        }
      }
      track {
        id
        name
        nameShort
        program {
          name
          nameShort
          degree {
            name
            nameShort
          }
        }
      }
      course {
        id
        year
        name
        nameShort
        program {
          name
          nameShort
          degree {
            name
            nameShort
          }
        }
        track {
          name
          nameShort
          program {
            name
            nameShort
            degree {
              name
              nameShort
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

const coordinations = computed(() =>
  useFragment(
    TeacherCoordinationsFragmentDoc,
    dataFragment,
  ).coordinations.filter(
    (coordination) =>
      coordination.course == null ||
      coordination.course.year === activeYear.value,
  ),
);

// Helpers
type Coordination = ArrayElement<TeacherCoordinationsFragment["coordinations"]>;

const formatCoordinationType = (coordination: Coordination) =>
  coordination.program
    ? "Mention"
    : coordination.track
      ? "Parcours"
      : coordination.course
        ? "UE"
        : "";

const formatCoordination = (coordination: Coordination) =>
  (coordination.program
    ? formatProgram(coordination.program)
    : coordination.track
      ? displayName(coordination.track)
      : coordination.course
        ? displayName(coordination.course)
        : "") + (coordination.comment ? ` (${coordination.comment})` : "");

const formatCoordinationExtra = (coordination: Coordination) =>
  coordination.track
    ? formatProgram(coordination.track.program)
    : coordination.course
      ? formatProgram(coordination.course.program) +
        (coordination.course.track
          ? `, parcours ${displayName(coordination.course.track)}`
          : "")
      : "";

const downloadProgramAssignments = async (coordination: Coordination) => {
  if (activeYear.value === null) {
    return;
  }
  let where: RequestBoolExp;
  let filename: string;
  if (coordination.program) {
    where = {
      course: { programId: { _eq: coordination.program.id } },
    };
    filename =
      activeYear.value.toString() + " " + formatProgram(coordination.program);
  } else if (coordination.track) {
    where = {
      course: { trackId: { _eq: coordination.track.id } },
    };
    filename =
      activeYear.value.toString() +
      " " +
      formatProgram(coordination.track.program) +
      " " +
      displayName(coordination.track);
  } else if (coordination.course) {
    where = {
      course: { id: { _eq: coordination.course.id } },
    };
    filename =
      activeYear.value.toString() +
      " " +
      formatProgram(coordination.course.program) +
      (coordination.course.track
        ? " " + displayName(coordination.course.track)
        : "") +
      " " +
      displayName(coordination.course);
  } else {
    console.error("Invalid coordination", coordination);
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
        v-for="coordination in coordinations"
        :key="coordination.id"
        class="q-pa-none"
      >
        <QItemSection>
          <QItemLabel overline>
            {{ formatCoordinationType(coordination) }}
          </QItemLabel>
          <QItemLabel>{{ formatCoordination(coordination) }}</QItemLabel>
          <QItemLabel caption>
            {{ formatCoordinationExtra(coordination) }}
          </QItemLabel>
        </QItemSection>
        <QItemSection v-if="perm.toViewAssignments" avatar>
          <QBtn
            icon="sym_s_download"
            color="primary"
            size="md"
            flat
            square
            @click="downloadProgramAssignments(coordination)"
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
