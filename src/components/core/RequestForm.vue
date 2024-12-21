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
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { updateRequest } from "@/helpers/operations-requests.ts";
import { useData } from "@/stores/data.ts";
import { usePhases } from "@/stores/phases.ts";

import TeacherSelect from "@/components/core/TeacherSelect.vue";

const props = defineProps<{
  courseId: number;
  hoursPerGroup: number | null;
}>();

const { currentPhase } = usePhases();
const perm = usePermissions();
const { myRow } = useData();

const heures: Ref<number | null> = ref(null);
watch(
  () => props.hoursPerGroup,
  (value) => {
    heures.value = value;
  },
  { immediate: true },
);

const groupes: WritableComputedRef<number | null> = computed({
  get: () =>
    heures.value === null || props.hoursPerGroup === null
      ? null
      : Math.round(
          (heures.value / props.hoursPerGroup + Number.EPSILON) * 100,
        ) / 100,
  set: (val) => {
    heures.value =
      val === null || props.hoursPerGroup === null
        ? null
        : val * props.hoursPerGroup;
  },
});

const requestTypeInit: ComputedRef<string | null> = computed(() => {
  switch (currentPhase.value) {
    case "voeux":
      return "principale";
    default:
      return "attribution";
  }
});
const requestType: Ref<string | null> = ref(null);
watch(
  requestTypeInit,
  (value) => {
    requestType.value = value;
  },
  { immediate: true },
);

const uidInit: ComputedRef<string | null> = computed(() =>
  perm.toSubmitRequestsForOthers || perm.toEditAssignments
    ? null
    : (myRow.value?.uid ?? null),
);
const uid: Ref<string | null> = ref(null);
watch(
  uidInit,
  (value) => {
    uid.value = value;
  },
  { immediate: true },
);

const client = useClientHandle().client;
const submitForm = async (): Promise<void> => {
  if (uid.value === null) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un intervenant",
    });
    return;
  }
  if (heures.value === null || heures.value < 0) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures positif ou nul",
    });
    return;
  }
  if (!requestType.value) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un type de demande",
    });
    return;
  }
  await updateRequest(client, {
    uid: uid.value,
    courseId: props.courseId,
    requestType: requestType.value,
    hours: heures.value,
  });
};
const resetForm = (): void => {
  uid.value = uidInit.value;
  heures.value = props.hoursPerGroup;
  requestType.value = requestTypeInit.value;
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
      <TeacherSelect
        v-if="perm.toSubmitRequestsForOthers || perm.toEditAssignments"
        v-model="uid"
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
      <!-- TODO: v-for -->
      <QRadio
        v-if="perm.toEditAssignments"
        v-model="requestType"
        :val="REQUEST_TYPES.ASSIGNMENT"
        label="Attribution"
        color="primary"
        dense
      />
      <QRadio
        v-if="perm.toSubmitRequests"
        v-model="requestType"
        :val="REQUEST_TYPES.PRIMARY"
        label="Principale"
        color="primary"
        dense
      />
      <QRadio
        v-if="perm.toSubmitRequests"
        v-model="requestType"
        :val="REQUEST_TYPES.SECONDARY"
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
