<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherResponsibilitiesFragmentDoc } from "@/gql/graphql.ts";
import {
  formatResponsibility,
  formatResponsibilityExtra,
  formatResponsibilityType,
} from "@/utils/format.ts";

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

  query ProgramAssignments($mentionId: Int!) {
    assignements: demande(
      where: {
        _and: [
          { enseignement: { mention_id: { _eq: $mentionId } } }
          { type: { _eq: "attribution" } }
        ]
      }
      order_by: [
        { enseignement: { parcours: { nom: asc } } }
        { enseignement: { semestre: asc } }
        { enseignement: { nom: asc } }
        { enseignement: { typeByType: { label: asc } } }
        { service: { intervenant: { nom: asc } } }
        { service: { intervenant: { prenom: asc } } }
      ]
    ) {
      id
    }
  }
`);

const perm = usePermissions();

const responsibilities = computed(
  () =>
    useFragment(TeacherResponsibilitiesFragmentDoc, dataFragment)
      .responsibilities,
);
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
          <QBtn icon="sym_s_download" color="primary" size="md" flat square>
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
