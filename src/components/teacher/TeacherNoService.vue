<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type Ref, computed, ref } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  InsertServiceDocument,
  TeacherNoServiceFragmentDoc,
} from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";

const { year, teacherNoServiceFragment } = defineProps<{
  year: number;
  teacherNoServiceFragment: FragmentType<typeof TeacherNoServiceFragmentDoc>;
}>();

graphql(`
  fragment TeacherNoService on intervenant {
    uid
    position: fonctionByFonction {
      baseServiceHours: heures_eqtd_service_base
    }
  }

  mutation InsertService($uid: String!, $year: Int!, $hours: Float!) {
    service: insert_service_one(
      object: { uid: $uid, annee: $year, heures_eqtd: $hours }
    ) {
      id
    }
  }
`);

const teacher = computed(() =>
  useFragment(TeacherNoServiceFragmentDoc, teacherNoServiceFragment),
);
const insertService = useMutation(InsertServiceDocument);

// Service form
const serviceCreation: Ref<boolean> = ref(false);
const baseServiceHours: Ref<number> = ref(
  teacher.value.position?.baseServiceHours ?? 0,
);
const resetServiceCreation = (): void => {
  serviceCreation.value = false;
  baseServiceHours.value = teacher.value.position?.baseServiceHours ?? 0;
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
    uid: teacher.value.uid,
    year,
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
    <QBtn outline square color="primary" @click="serviceCreation = true">
      Cliquez ici pour en créer un
    </QBtn>
    <QDialog v-model="serviceCreation" persistent square>
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
            @click="resetServiceCreation"
          />
          <QBtn
            label="Enregistrer"
            flat
            square
            dense
            @click="submitServiceCreation"
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
