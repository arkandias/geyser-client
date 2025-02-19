<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { usePermissions } from "@/composables/permissions.ts";
import { useRequestOperations } from "@/composables/request-operations.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { RequestFormDataFragmentDoc } from "@/gql/graphql.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import SelectTeacher from "@/components/core/SelectTeacher.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof RequestFormDataFragmentDoc>;
}>();

graphql(`
  fragment RequestFormData on Course {
    courseId: id
    hoursPerGroup: hoursEffective
  }
`);

const { t } = useI18n();

const { profile } = useProfileStore();
const perm = usePermissions();
const { updateRequest } = useRequestOperations();

const data = computed(() =>
  useFragment(RequestFormDataFragmentDoc, dataFragment),
);

const hours = ref<number | null>(null);
watch(
  () => data.value.hoursPerGroup,
  (value) => {
    hours.value = value ?? null;
  },
  { immediate: true },
);

const groups = computed<number | null>({
  get: () =>
    hours.value === null || data.value.hoursPerGroup == null
      ? null
      : Math.round(
          (hours.value / data.value.hoursPerGroup + Number.EPSILON) * 100,
        ) / 100,
  set: (val) => {
    hours.value =
      val === null || data.value.hoursPerGroup == null
        ? null
        : val * data.value.hoursPerGroup;
  },
});

const requestType = ref<string | null>(null);
const requestTypeInit = computed(() =>
  perm.toEditAssignments
    ? REQUEST_TYPES.ASSIGNMENT
    : perm.toSubmitRequests
      ? REQUEST_TYPES.PRIMARY
      : null,
);
const requestTypeOptions = computed(() => [
  ...(perm.toEditAssignments
    ? [{ value: REQUEST_TYPES.ASSIGNMENT, label: t("request_type.assignment") }]
    : []),
  ...(perm.toSubmitRequests
    ? [
        {
          value: REQUEST_TYPES.PRIMARY,
          label: t("request_type.primary"),
        },
        {
          value: REQUEST_TYPES.SECONDARY,
          label: t("request_type.secondary"),
        },
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

const displayTeacherSelection = computed(
  () => perm.toSubmitRequestsForOthers || perm.toEditAssignments,
);

const uid = ref<string | null>(null);
const uidInit = computed(() =>
  displayTeacherSelection.value ? null : profile.uid,
);
watch(
  uidInit,
  (value) => {
    uid.value = value;
  },
  { immediate: true },
);

const submitForm = async (): Promise<void> => {
  if (uid.value === null) {
    notify(NotifyType.ERROR, {
      message: t("request_form.invalid.message"),
      caption: t("request_form.invalid.caption.no_teacher"),
    });
    return;
  }
  if (hours.value === null || hours.value < 0) {
    notify(NotifyType.ERROR, {
      message: t("request_form.invalid.message"),
      caption: t("request_form.invalid.caption.negative_hours"),
    });
    return;
  }
  if (!requestType.value) {
    notify(NotifyType.ERROR, {
      message: t("request_form.invalid.message"),
      caption: t("request_form.invalid.caption.no_type"),
    });
    return;
  }
  await updateRequest(
    uid.value,
    data.value.courseId,
    requestType.value,
    hours.value,
  );
};
const resetForm = (): void => {
  uid.value = uidInit.value;
  hours.value = data.value.hoursPerGroup ?? null;
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
    <SelectTeacher
      v-if="displayTeacherSelection"
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
      <QTooltip>{{ t("request_form.tooltip.submit") }}</QTooltip>
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
