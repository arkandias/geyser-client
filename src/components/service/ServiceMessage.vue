<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { ref, Ref, watch } from "vue";

import ServiceSection from "@/components/service/ServiceSection.vue";
import { DELETE_MESSAGE, UPSERT_MESSAGE } from "@/graphql/messages.ts";
import { formatTypeMessage } from "@/helpers/format.ts";
import {
  defaultNotify,
  notifyAnneeActiveNull,
  successNotify,
} from "@/helpers/notify.ts";
import { Message } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";

const props = defineProps<{
  uid: string;
  editable: boolean;
  message: Message;
}>();

const { active: anneeActive } = useAnnees();
const updateMessage = useMutation(UPSERT_MESSAGE);
const deleteMessage = useMutation(DELETE_MESSAGE);

const editorOpen: Ref<boolean> = ref(false);
const editorText: Ref<string> = ref("");
watch(
  () => props.message.contenu,
  (value) => {
    editorText.value = value;
  },
  { immediate: true },
);

const onSave = async (): Promise<void> => {
  if (!anneeActive.value) {
    notifyAnneeActiveNull();
    return;
  }
  if (editorText.value === props.message.contenu) {
    defaultNotify("Pas de changements à enregistrer");
    editorOpen.value = false;
    return;
  }
  if (editorText.value === "") {
    const result = await deleteMessage.executeMutation({
      annee: anneeActive.value,
      uid: props.uid,
      typeMessage: props.message.typeMessage,
    });
    if (!result.error) {
      successNotify(`Message supprimé`);
    }
  } else {
    const result = await updateMessage.executeMutation({
      annee: anneeActive.value,
      uid: props.uid,
      typeMessage: props.message.typeMessage,
      contenu: editorText.value,
    });
    if (!result.error) {
      successNotify(`Message enregistré`);
    }
  }
  editorOpen.value = false;
};
const onAbort = (): void => {
  editorText.value = props.message.contenu;
  editorOpen.value = false;
};
</script>

<template>
  <ServiceSection
    v-model="editorOpen"
    :title="formatTypeMessage(message.typeMessage)"
    :editable
  >
    <template v-if="editorOpen">
      <QInput v-model="editorText" type="textarea" outlined square />
    </template>
    <template v-else>{{ message.contenu }}</template>
    <template v-if="editorOpen" #actions>
      <QBtn
        label="Enregistrer"
        color="primary"
        flat
        square
        dense
        @click="onSave"
      />
      <QBtn
        label="Abandonner"
        color="primary"
        flat
        square
        dense
        @click="onAbort"
      />
    </template>
  </ServiceSection>
</template>

<style scoped lang="scss"></style>
