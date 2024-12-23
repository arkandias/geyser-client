<script setup lang="ts">
import {
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
  computed,
  ref,
  watch,
} from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useRequestOperations } from "@/composables/request-operations.ts";
import { PHASES } from "@/config/types/phases.ts";
import {
  REQUEST_TYPES,
  type RequestType,
} from "@/config/types/request-types.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePhases } from "@/stores/phases.ts";
import type { Option } from "@/types/common.ts";

import TeacherSelect from "@/components/core/TeacherSelect.vue";

const props = defineProps<{
  courseId: number;
  hoursPerGroup: number | null;
}>();

const { currentPhase } = usePhases();
const { profile } = useAuthentication();
const perm = usePermissions();

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

const requestType: Ref<string | null> = ref(null);
const requestTypeInit: ComputedRef<string | null> = computed(() => {
  switch (currentPhase.value) {
    case PHASES.ASSIGNMENTS:
      return REQUEST_TYPES.PRIMARY;
    default:
      return REQUEST_TYPES.ASSIGNMENT;
  }
});
const requestTypeOptions: ComputedRef<Option<RequestType>[]> = computed(() => [
  ...(perm.toEditAssignments
    ? [{ value: REQUEST_TYPES.ASSIGNMENT, label: "Attribution" }]
    : []),
  ...(perm.toSubmitRequests
    ? [
        { value: REQUEST_TYPES.PRIMARY, label: "Principale" },
        { value: REQUEST_TYPES.SECONDARY, label: "Secondaire" },
      ]
    : []),
]);
watch(
  requestTypeInit,
  (value) => {
    requestType.value = value;
  },
  { immediate: true },
);

const uid: Ref<string | null> = ref(null);
const uidInit: ComputedRef<string | null> = computed(() =>
  perm.toSubmitRequestsForOthers || perm.toEditAssignments ? null : profile.uid,
);
watch(
  uidInit,
  (value) => {
    uid.value = value;
  },
  { immediate: true },
);

const { updateRequest } = useRequestOperations();
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
  await updateRequest({
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
      <QRadio
        v-for="requestTypeOption in requestTypeOptions"
        :key="requestTypeOption.value"
        v-model="requestType"
        :val="requestTypeOption.value"
        :label="requestTypeOption.label"
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
  width: $request-form-teacher-select-width;
}
.q-input {
  width: $request-form-numeric-inputs-width;
}
</style>
