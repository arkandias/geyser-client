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
import { type FragmentType, graphql, useFragment } from "@/gql";
import { RequestFormInfoFragmentDoc } from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePhase } from "@/stores/phase.ts";
import type { Option } from "@/types/common.ts";

import TeacherSelect from "@/components/core/TeacherSelect.vue";

const { requestFormInfoFragment } = defineProps<{
  requestFormInfoFragment: FragmentType<typeof RequestFormInfoFragmentDoc>;
}>();

graphql(`
  fragment RequestFormInfo on enseignement {
    courseId: id
    hoursPerGroup: heures_corrigees
  }
`);

const info = computed(() =>
  useFragment(RequestFormInfoFragmentDoc, requestFormInfoFragment),
);

const { currentPhase } = usePhase();
const { profile } = useAuthentication();
const perm = usePermissions();

const hours: Ref<number | null> = ref(null);
watch(
  () => info.value.hoursPerGroup,
  (value) => {
    hours.value = value;
  },
  { immediate: true },
);

const groups: WritableComputedRef<number | null> = computed({
  get: () =>
    hours.value === null || info.value.hoursPerGroup === null
      ? null
      : Math.round(
          (hours.value / info.value.hoursPerGroup + Number.EPSILON) * 100,
        ) / 100,
  set: (val) => {
    hours.value =
      val === null || info.value.hoursPerGroup === null
        ? null
        : val * info.value.hoursPerGroup;
  },
});

const requestType: Ref<string | null> = ref(null);
const requestTypeInit: ComputedRef<string | null> = computed(() => {
  switch (currentPhase) {
    case PHASES.ASSIGNMENTS:
      return REQUEST_TYPES.PRIMARY;
    default:
      return REQUEST_TYPES.ASSIGNMENT;
  }
});
const requestTypeOptions: ComputedRef<Option<RequestType>[]> = computed(() => [
  ...(perm.toAssignCourses
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
  perm.toSubmitRequestsForOthers || perm.toAssignCourses ? null : profile.uid,
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
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un intervenant",
    });
    return;
  }
  if (hours.value === null || hours.value < 0) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures positif ou nul",
    });
    return;
  }
  if (!requestType.value) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un type de demande",
    });
    return;
  }
  await updateRequest({
    uid: uid.value,
    courseId: info.value.courseId,
    requestType: requestType.value,
    hours: hours.value,
  });
};
const resetForm = (): void => {
  uid.value = uidInit.value;
  hours.value = info.value.hoursPerGroup;
  requestType.value = requestTypeInit.value;
};
</script>

<template>
  <QForm
    dense
    class="row q-gutter-md text-body2"
    @submit="submitForm"
    @reset="resetForm"
  >
    <TeacherSelect
      v-if="perm.toSubmitRequestsForOthers || perm.toAssignCourses"
      v-model="uid"
      dense
      options-dense
    />
    <QInput
      v-model.number="groups"
      color="primary"
      type="number"
      step="any"
      label="Groupes"
      square
      dense
    />
    <QInput
      v-model.number="hours"
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
</template>

<style scoped lang="scss">
.q-select {
  width: $request-form-teacher-select-width;
}
.q-input {
  width: $request-form-numeric-inputs-width;
}
</style>
