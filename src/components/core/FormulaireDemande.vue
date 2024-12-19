<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import {
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
  computed,
  ref,
  watch,
} from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { errorNotify } from "@/helpers/notify.ts";
import { updateRequest } from "@/helpers/requests-operations.ts";
import { useData } from "@/stores/data.ts";
import { usePhases } from "@/stores/phases.ts";

import SelectIntervenant from "@/components/core/SelectIntervenant.vue";

const props = defineProps<{
  ensId: number;
  heuresParGroupe: number | null;
}>();

const { current: phaseEnCours } = usePhases();
const perm = usePermissions();
const { myRow } = useData();

const heures: Ref<number | null> = ref(null);
watch(
  () => props.heuresParGroupe,
  (value) => {
    heures.value = value;
  },
  { immediate: true },
);

const groupes: WritableComputedRef<number | null> = computed({
  get: () =>
    heures.value === null || props.heuresParGroupe === null
      ? null
      : Math.round(
          (heures.value / props.heuresParGroupe + Number.EPSILON) * 100,
        ) / 100,
  set: (val) => {
    heures.value =
      val === null || props.heuresParGroupe === null
        ? null
        : val * props.heuresParGroupe;
  },
});

const typeDemandeInit: ComputedRef<string | null> = computed(() => {
  switch (phaseEnCours.value) {
    case "voeux":
      return "principale";
    default:
      return "attribution";
  }
});
const typeDemande: Ref<string | null> = ref(null);
watch(
  typeDemandeInit,
  (value) => {
    typeDemande.value = value;
  },
  { immediate: true },
);

const serviceIdInit: ComputedRef<number | null> = computed(() =>
  perm.deFaireDesDemandesPourAutrui || perm.deModifierLesAttributions
    ? null
    : (myRow.value?.id ?? null),
);
const serviceId: Ref<number | null> = ref(null);
watch(
  serviceIdInit,
  (value) => {
    serviceId.value = value;
  },
  { immediate: true },
);

const client = useClientHandle().client;
const submitForm = async (): Promise<void> => {
  if (serviceId.value === null) {
    errorNotify("Formulaire non valide", "Sélectionnez un intervenant");
    return;
  }
  if (heures.value === null || heures.value < 0) {
    errorNotify(
      "Formulaire non valide",
      "Sélectionnez un nombre d'heures positif ou nul",
    );
    return;
  }
  if (!typeDemande.value) {
    errorNotify("Formulaire non valide", "Sélectionnez un type de demande");
    return;
  }
  await updateRequest(client, {
    serviceId: serviceId.value,
    ensId: props.ensId,
    typeDemande: typeDemande.value,
    heures: heures.value,
  });
};
const resetForm = (): void => {
  serviceId.value = serviceIdInit.value;
  heures.value = props.heuresParGroupe;
  typeDemande.value = typeDemandeInit.value;
};
</script>

<template>
  <QCardSection>
    <QForm
      dense
      class="row q-gutter-md text-body2"
      @submit="submitForm"
      @reset="resetForm"
    >
      <SelectIntervenant
        v-if="
          perm.deFaireDesDemandesPourAutrui || perm.deModifierLesAttributions
        "
        v-model="serviceId"
        dense
        options-dense
      />
      <QInput
        v-model.number="groupes"
        color="primary"
        type="number"
        step="any"
        label="Groupes"
        square
        dense
      />
      <QInput
        v-model.number="heures"
        color="primary"
        type="number"
        step="any"
        label="Heures"
        square
        dense
      />
      <QRadio
        v-if="perm.deModifierLesAttributions"
        v-model="typeDemande"
        val="attribution"
        label="Attribution"
        color="primary"
        dense
      />
      <QRadio
        v-if="perm.deFaireDesDemandes"
        v-model="typeDemande"
        val="principale"
        label="Principale"
        color="primary"
        dense
      />
      <QRadio
        v-if="perm.deFaireDesDemandes"
        v-model="typeDemande"
        val="secondaire"
        label="Secondaire"
        color="primary"
        dense
      />
      <QBtn type="submit" icon="sym_s_check" color="primary" flat square dense>
        <QTooltip>Valider la demande</QTooltip>
      </QBtn>
    </QForm>
  </QCardSection>
</template>

<style scoped lang="scss">
.q-select {
  width: $form-select-width;
}
.q-input {
  width: $form-input-width;
}
</style>
