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
  }
`);

const data = computed(() =>
  useFragment(TeacherResponsibilitiesFragmentDoc, dataFragment),
);
</script>

<template>
  <DetailsSection title="Responsabilités">
    <QList dense class="text-left">
      <QItem v-for="r in data.responsibilities" :key="r.id" class="q-pa-none">
        <QItemSection>
          <QItemLabel overline>{{ formatResponsibilityType(r) }}</QItemLabel>
          <QItemLabel>{{ formatResponsibility(r) }}</QItemLabel>
          <QItemLabel caption>
            {{ formatResponsibilityExtra(r) }}
          </QItemLabel>
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
