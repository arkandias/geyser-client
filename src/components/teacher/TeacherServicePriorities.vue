<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type TeacherServicePrioritiesFragment,
  TeacherServicePrioritiesFragmentDoc,
} from "@/gql/graphql.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { priorityColor } from "@/utils/colors.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherList from "@/components/teacher/TeacherList.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServicePrioritiesFragmentDoc>;
}>();

graphql(`
  fragment TeacherServicePriorities on Service {
    priorities(
      where: { isPriority: { _isNull: false } }
      orderBy: [
        { course: { semester: ASC } }
        { course: { type: { label: ASC } } }
        { course: { programId: ASC } }
        { course: { trackId: ASC } }
        { course: { name: ASC } }
      ]
    ) {
      id
      course {
        program {
          name: nameDisplay
          degree {
            name: nameDisplay
          }
        }
        track {
          name: nameDisplay
          program {
            name: nameDisplay
            degree {
              name: nameDisplay
            }
          }
        }
        name: nameDisplay
        semester
        type {
          label
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

type Priority = ArrayElement<TeacherServicePrioritiesFragment["priorities"]>;

const formatPriorityTS = (priority: Priority) =>
  `${priority.course.type.label} au S${priority.course.semester}`;

const formatPriority = (priority: Priority) => priority.course.name;

const formatPriorityExtra = (priority: Priority) =>
  `${priority.course.program.degree.name} ${priority.course.program.name}` +
  (priority.course.track ? `, parcours ${priority.course.track.name}` : "");
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
