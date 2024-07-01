<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { computed, ComputedRef } from "vue";

import type { Message } from "@/helpers/types.ts";

import {
  DELETE_MESSAGE,
  GET_TYPES_MESSAGE,
  UPSERT_MESSAGE,
} from "@/graphql/messages.ts";
import { formatTypeMessage } from "@/helpers/format.ts";
import { useAnnees } from "@/stores/annees.ts";
import { usePermissions } from "@/stores/permissions.ts";

import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";

const props = defineProps<{
  uid: string;
  messages: Message[];
}>();

const { active: anneeActive } = useAnnees();
const perm = usePermissions();

const queryTypesMessage = useQuery({
  query: GET_TYPES_MESSAGE,
  variables: {},
});

const typesMessage: ComputedRef<string[]> = computed(
  () =>
    queryTypesMessage.data.value?.typesMessage.map(
      (typeMessage) => typeMessage.value,
    ) ?? [],
);
const typesMessageVisibles: ComputedRef<string[]> = computed(() =>
  typesMessage.value.filter((typeMessage) =>
    perm.deVoirUnMessage(typeMessage, props.uid),
  ),
);
const updateMessage = useMutation(UPSERT_MESSAGE);
const deleteMessage = useMutation(DELETE_MESSAGE);
const getMessage = (typeMessage: string): string | null =>
  props.messages.find((message) => message.typeMessage === typeMessage)
    ?.contenu ?? null;
const setMessage =
  (typeMessage: string) =>
  (contenu: string): Promise<boolean> =>
    contenu
      ? updateMessage
          .executeMutation({
            annee: anneeActive.value ?? 0,
            uid: props.uid,
            typeMessage,
            contenu,
          })
          .then((result) => !!result.data?.message?.id && !result.error)
      : deleteMessage
          .executeMutation({
            annee: anneeActive.value ?? 0,
            uid: props.uid,
            typeMessage,
          })
          .then(
            (result) => !!result.data?.messages?.returning && !result.error,
          );
</script>

<template>
  <DetailsSubsectionEditableText
    v-for="typeMessage in typesMessageVisibles"
    :key="typeMessage"
    :name="formatTypeMessage(typeMessage)"
    :text="getMessage(typeMessage)"
    default-text="[Pas de message]"
    :set-text="setMessage(typeMessage)"
    :editable="perm.deModifierUnMessage(typeMessage, uid)"
  />
</template>

<style scoped lang="scss"></style>
