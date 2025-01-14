<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type TeacherPrioritiesFragment,
  TeacherPrioritiesFragmentDoc,
} from "@/gql/graphql.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { priorityColor } from "@/utils/colors.ts";
import { displayName, formatProgram } from "@/utils/format.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherList from "@/components/teacher/TeacherList.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherPrioritiesFragmentDoc>;
}>();

graphql(`
  fragment TeacherPriorities on service {
    priorities(
      order_by: [
        { course: { semester: asc } }
        { course: { typeByType: { label: asc } } }
        { course: { program_id: asc } }
        { course: { track_id: asc } }
        { course: { name: asc } }
      ]
    ) {
      id
      course {
        name
        shortName: name_short
        semester
        typeByType {
          label
        }
        program {
          name
          shortName: name_short
          degree {
            name
            shortName: name_short
          }
        }
        track {
          name
          shortName: name_short
          program {
            name
            shortName: name_short
            degree {
              name
              shortName: name_short
            }
          }
        }
      }
      seniority
      isPriority: is_priority
    }
  }
`);

const priorities = computed(
  () => useFragment(TeacherPrioritiesFragmentDoc, dataFragment).priorities,
);

// Helpers
type Priority = ArrayElement<TeacherPrioritiesFragment["priorities"]>;

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
      <QItem
        v-for="priority in priorities"
        :key="priority.id"
        class="q-pa-none"
      >
        <QItemSection>
          <QItemLabel overline>
            {{ formatPriorityTS(priority) }}
          </QItemLabel>
          <QItemLabel>{{ formatPriority(priority) }}</QItemLabel>
          <QItemLabel caption>
            {{ formatPriorityExtra(priority) }}
          </QItemLabel>
        </QItemSection>
        <QItemSection avatar>
          <QAvatar
            :color="priorityColor(priority.isPriority)"
            text-color="white"
            square
            size="md"
          >
            {{ priority.seniority }}
          </QAvatar>
        </QItemSection>
      </QItem>
    </TeacherList>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
