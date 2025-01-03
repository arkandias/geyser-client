<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseCoordinatorsFragmentDoc } from "@/gql/graphql.ts";
import { formatUser } from "@/helpers/format.ts";
import type { UserName } from "@/types/user.ts";

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
    <div v-if="data.program.coordinators.length">
      Responsable{{ data.program.coordinators.length > 1 ? "s" : "" }}
      de la mention :
      {{ formatCoordinators(data.program.coordinators) }}
    </div>
    <div v-if="data.track?.coordinators.length">
      Responsable{{ data.track?.coordinators.length > 1 ? "s" : "" }} du
      parcours :
      {{ formatCoordinators(data.track?.coordinators) }}
    </div>
    <div v-if="data.coordinators.length">
      Responsable{{ data.coordinators.length > 1 ? "s" : "" }} de l'UE :
      {{ formatCoordinators(data.coordinators) }}
    </div>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
