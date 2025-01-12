<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseCoordinatorsFragmentDoc } from "@/gql/graphql.ts";
import { formatCoordinators } from "@/utils/format.ts";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseCoordinatorsFragmentDoc>;
}>();

graphql(`
  fragment CourseCoordinators on enseignement {
    coordinators: responsables(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      username: intervenant {
        firstname: prenom
        lastname: nom
        alias
      }
      comment: commentaire
    }
    program: mention {
      coordinators: responsables(
        order_by: [
          { intervenant: { nom: asc } }
          { intervenant: { prenom: asc } }
        ]
      ) {
        username: intervenant {
          firstname: prenom
          lastname: nom
          alias
        }
        comment: commentaire
      }
    }
    track: parcours {
      coordinators: responsables(
        order_by: [
          { intervenant: { nom: asc } }
          { intervenant: { prenom: asc } }
        ]
      ) {
        username: intervenant {
          firstname: prenom
          lastname: nom
          alias
        }
        comment: commentaire
      }
    }
  }
`);

const data = computed(() =>
  useFragment(CourseCoordinatorsFragmentDoc, dataFragment),
);
const courseCoordinators = computed(() => data.value.coordinators);
const programCoordinators = computed(() => data.value.program.coordinators);
const trackCoordinators = computed(() => data.value.track?.coordinators ?? []);
</script>

<template>
  <DetailsSubsection title="Responsables">
    <div v-if="programCoordinators.length">
      Responsable{{ programCoordinators.length > 1 ? "s" : "" }} de la mention :
      {{ formatCoordinators(programCoordinators) }}
    </div>
    <div v-if="trackCoordinators.length">
      Responsable{{ trackCoordinators.length > 1 ? "s" : "" }} du parcours :
      {{ formatCoordinators(trackCoordinators) }}
    </div>
    <div v-if="courseCoordinators.length">
      Responsable{{ courseCoordinators.length > 1 ? "s" : "" }} de l'UE :
      {{ formatCoordinators(courseCoordinators) }}
    </div>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
