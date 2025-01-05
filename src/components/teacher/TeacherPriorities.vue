<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherPrioritiesFragmentDoc } from "@/gql/graphql.ts";
import { priorityColor } from "@/helpers/colors.ts";
import {
  formatPriority,
  formatPriorityExtra,
  formatPriorityTS,
} from "@/helpers/format.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";

const { dataFragments } = defineProps<{
  dataFragments: FragmentType<typeof TeacherPrioritiesFragmentDoc>[];
}>();

graphql(`
  fragment TeacherPriorities on priorite {
    id
    course: enseignement {
      name: nom
      shortName: nom_court
      semester: semestre
      typeByType {
        label
      }
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
    seniority: anciennete
    isPriority: prioritaire
  }
`);

const priorities = computed(() =>
  dataFragments.map((fragment) =>
    useFragment(TeacherPrioritiesFragmentDoc, fragment),
  ),
);
</script>

<template>
  <DetailsSection title="Priorités">
    <QList dense class="text-left">
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
    </QList>
  </DetailsSection>
</template>

<style scoped lang="scss">
.q-list {
  width: $teacher-section-width;
}
.q-list .q-item {
  padding: 8px;
}
</style>
