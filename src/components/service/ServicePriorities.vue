<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type TeacherServicePrioritiesFragment,
  TeacherServicePrioritiesFragmentDoc,
} from "@/gql/graphql.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { priorityColor } from "@/utils/colors.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import ServiceList from "@/components/service/ServiceList.vue";

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

const { t } = useCustomI18n();

const priorities = computed(
  () =>
    useFragment(TeacherServicePrioritiesFragmentDoc, dataFragment).priorities,
);

type Priority = ArrayElement<TeacherServicePrioritiesFragment["priorities"]>;

const formatPriorityTS = (priority: Priority) =>
  t("service.priorities.format.typeSemester", {
    type: priority.course.type.label,
    semester: priority.course.semester,
  });

const formatPriority = (priority: Priority) => priority.course.name;

const formatPriorityExtra = (priority: Priority) =>
  `${priority.course.program.degree.name} ${priority.course.program.name}` +
  (priority.course.track
    ? `, ${t("service.priorities.format.track", { track: priority.course.track.name })}`
    : "");
</script>

<template>
  <DetailsSection :title="t('service.priorities.title')">
    <ServiceList>
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
    </ServiceList>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
