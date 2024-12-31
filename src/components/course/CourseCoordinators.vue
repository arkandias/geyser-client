<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseCoordinatorsFragmentDoc } from "@/gql/graphql.ts";
import { formatUser } from "@/helpers/format.ts";
import type { UserName } from "@/types/profile.ts";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";

const { courseCoordinatorsFragment } = defineProps<{
  courseCoordinatorsFragment: FragmentType<
    typeof CourseCoordinatorsFragmentDoc
  >;
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

const coordinators = computed(() =>
  useFragment(CourseCoordinatorsFragmentDoc, courseCoordinatorsFragment),
);

const formatCoordinators = (
  coordinators: { username: UserName; comment?: string | null }[],
): string =>
  coordinators
    .map(
      ({ username, comment }) =>
        formatUser(username) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");
</script>

<template>
  <DetailsSubsection title="Responsables">
    <div v-if="coordinators.program.coordinators.length">
      Responsable{{ coordinators.program.coordinators.length > 1 ? "s" : "" }}
      de la mention :
      {{ formatCoordinators(coordinators.program.coordinators) }}
    </div>
    <div v-if="coordinators.track?.coordinators.length">
      Responsable{{ coordinators.track?.coordinators.length > 1 ? "s" : "" }} du
      parcours :
      {{ formatCoordinators(coordinators.track?.coordinators) }}
    </div>
    <div v-if="coordinators.coordinators.length">
      Responsable{{ coordinators.coordinators.length > 1 ? "s" : "" }} de l'UE :
      {{ formatCoordinators(coordinators.coordinators) }}
    </div>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
