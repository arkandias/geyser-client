<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type Ref, ref } from "vue";

import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { UPSERT_SERVICE } from "@/graphql/services.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";

const { uid, year, positionBaseServiceHours } = defineProps<{
  uid: string;
  year: number;
  positionBaseServiceHours?: number | null;
}>();

const upsertService = useMutation(UPSERT_SERVICE);

const serviceCreation: Ref<boolean> = ref(false);
const baseServiceHours: Ref<number> = ref(positionBaseServiceHours ?? 0);

const resetServiceCreation = (): void => {
  serviceCreation.value = false;
  baseServiceHours.value = positionBaseServiceHours ?? 0;
};
const submitServiceCreation = async (): Promise<void> => {
  if (baseServiceHours.value < 0) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await upsertService.executeMutation({
    uid,
    year,
    hours: baseServiceHours.value,
  });
  if (result.data?.service && !result.error) {
    notify(NotifyType.Success, { message: "Service créé" });
  } else {
    notify(NotifyType.Error, { message: "Échec de la création" });
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
          <div>
            Service de base
            <QIcon name="sym_s_help" color="primary">
              <QTooltip :delay="TOOLTIP_DELAY">
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
