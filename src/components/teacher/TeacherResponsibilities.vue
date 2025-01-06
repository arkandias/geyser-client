<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherResponsibilitiesFragmentDoc } from "@/gql/graphql.ts";
import {
  formatResponsibility,
  formatResponsibilityExtra,
  formatResponsibilityType,
} from "@/helpers/format.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherList from "@/components/core/TeacherList.vue";

const { dataFragments } = defineProps<{
  dataFragments: FragmentType<typeof TeacherResponsibilitiesFragmentDoc>[];
}>();

graphql(`
  fragment TeacherResponsibilities on responsable {
    id
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
    course: enseignement {
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
`);

const responsabilities = computed(() =>
  dataFragments.map((fragment) =>
    useFragment(TeacherResponsibilitiesFragmentDoc, fragment),
  ),
);
</script>

<template>
  <DetailsSection title="Responsabilités">
    <TeacherList>
      <QItem
        v-for="responsibility in responsabilities"
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
      </QItem>
    </TeacherList>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
