<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type TeacherServicePrioritiesFragment,
  TeacherServicePrioritiesFragmentDoc,
} from "@/gql/graphql.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { priorityColor } from "@/utils/colors.ts";
import { displayName, formatProgram } from "@/utils/format.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherList from "@/components/teacher/TeacherList.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServicePrioritiesFragmentDoc>;
}>();

graphql(`
  fragment TeacherServicePriorities on Service {
    priorities(
      orderBy: [
        { course: { semester: ASC } }
        { course: { typeByType: { label: ASC } } }
        { course: { programId: ASC } }
        { course: { trackId: ASC } }
        { course: { name: ASC } }
      ]
    ) {
      id
      course {
        name
        nameShort
        semester
        typeByType {
          label
        }
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
      seniority
      isPriority
    }
  }
`);

const priorities = computed(
  () =>
    useFragment(TeacherServicePrioritiesFragmentDoc, dataFragment).priorities,
);

// Helpers
type Priority = ArrayElement<TeacherServicePrioritiesFragment["priorities"]>;

const formatPriorityTS = (priority: Priority) =>
  priority.course.typeByType.label +
  " au S" +
  priority.course.semester.toString();

const formatPriority = (priority: Priority) => displayName(priority.course);

const formatPriorityExtra = (priority: Priority) =>
  formatProgram(priority.course.program) +
  (priority.course.track
    ? `, parcours ${displayName(priority.course.track)}`
    : "");
</script>

<template>
  <DetailsSection title="Priorités">
    <TeacherList>
      <QItem v-for="p in priorities" :key="p.id" class="q-pa-none">
        <QItemSection>
          <QItemLabel overline>{{ formatPriorityTS(p) }}</QItemLabel>
          <QItemLabel>{{ formatPriority(p) }}</QItemLabel>
          <QItemLabel caption>{{ formatPriorityExtra(p) }}</QItemLabel>
        </QItemSection>
        <QItemSection avatar>
          <QAvatar
            :color="priorityColor(p.isPriority)"
            text-color="white"
            square
            size="md"
          >
            {{ p.seniority }}
          </QAvatar>
        </QItemSection>
      </QItem>
    </TeacherList>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
