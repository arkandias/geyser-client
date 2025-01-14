<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  InsertServiceDocument,
  TeacherNoServiceFragmentDoc,
} from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

const { year, uid, dataFragment } = defineProps<{
  year: number;
  uid: string;
  dataFragment: FragmentType<typeof TeacherNoServiceFragmentDoc>;
}>();

graphql(`
  fragment TeacherNoService on Teacher {
    baseServiceHours
    positionByPosition {
      baseServiceHours
    }
  }

  mutation InsertService($year: Int!, $uid: String!, $hours: Float!) {
    service: insertServiceOne(
      object: { year: $year, uid: $uid, hours: $hours }
    ) {
      id
    }
  }
`);

const data = computed(() =>
  useFragment(TeacherNoServiceFragmentDoc, dataFragment),
);
const insertService = useMutation(InsertServiceDocument);

// Service form
const isServiceFormOpen = ref(false);
const baseServiceHours = ref(
  // eslint-disable-next-line vue/no-ref-object-reactivity-loss
  data.value.baseServiceHours ??
    // eslint-disable-next-line vue/no-ref-object-reactivity-loss
    data.value.positionByPosition?.baseServiceHours ??
    0,
);
const resetServiceCreation = (): void => {
  isServiceFormOpen.value = false;
  baseServiceHours.value = data.value.positionByPosition?.baseServiceHours ?? 0;
};
const submitServiceCreation = async (): Promise<void> => {
  if (baseServiceHours.value < 0) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await insertService.executeMutation({
    year,
    uid,
    hours: baseServiceHours.value,
  });
  if (result.data?.service && !result.error) {
    notify(NotifyType.SUCCESS, { message: "Service créé" });
  } else {
    notify(NotifyType.ERROR, { message: "Échec de la création" });
  }
  resetServiceCreation();
};
</script>

<template>
  <QCardSection class="text-center">
    <div class="text-subtitle1">Pas de service pour l'année en cours.</div>
    <br />
    <QBtn outline square color="primary" @click="isServiceFormOpen = true">
      Cliquez ici pour en créer un
    </QBtn>
    <QDialog v-model="isServiceFormOpen" persistent square>
      <QCard flat square>
        <QCardSection>
          <div class="text-subtitle1">
            Service de base
            <QIcon name="sym_s_help" color="primary">
              <QTooltip>
                Votre service de base est le nombre d'heures équivalent TD que
                vous devez effectuer cette année avant déduction des éventuelles
                modifications de service (délégation, décharge, etc.).
              </QTooltip>
            </QIcon>
          </div>
          <QInput
            v-model.number="baseServiceHours"
            color="primary"
            type="number"
            step="any"
            suffix="htd"
            square
            dense
          />
        </QCardSection>
        <QSeparator />
        <QCardActions align="right">
          <QBtn
            label="Annuler"
            flat
            square
            dense
            @click="resetServiceCreation()"
          />
          <QBtn
            label="Enregistrer"
            flat
            square
            dense
            @click="submitServiceCreation()"
          />
        </QCardActions>
      </QCard>
    </QDialog>
  </QCardSection>
</template>

<style scoped lang="scss">
.q-input {
  width: $modification-form-hours-input-width;
  margin-left: auto;
}
</style>
