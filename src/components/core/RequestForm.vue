<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useRequestOperations } from "@/composables/useRequestOperations.ts";
import { useService } from "@/composables/useService.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { RequestFormDataFragmentDoc } from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import SelectService from "@/components/core/SelectService.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof RequestFormDataFragmentDoc>;
}>();

graphql(`
  fragment RequestFormData on Course {
    courseId: id
    hoursPerGroup: hoursEffective
  }
`);

const { t } = useCustomI18n();

const { serviceId: myServiceId } = useService();
const perm = usePermissions();
const client = useClientHandle().client;
const { updateRequest } = useRequestOperations(client);

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
  set: (newValue) => {
    hours.value =
      newValue === null || data.value.hoursPerGroup == null
        ? null
        : newValue * data.value.hoursPerGroup;
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
    ? [{ value: REQUEST_TYPES.ASSIGNMENT, label: t("requestType.assignment") }]
    : []),
  ...(perm.toSubmitRequests
    ? [
        {
          value: REQUEST_TYPES.PRIMARY,
          label: t("requestType.primary"),
        },
        {
          value: REQUEST_TYPES.SECONDARY,
          label: t("requestType.secondary"),
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

const displayServiceSelection = computed(
  () => perm.toSubmitRequestsForOthers || perm.toEditAssignments,
);

const serviceId = ref<number | null>(null);
const serviceIdInit = computed(() =>
  displayServiceSelection.value ? null : myServiceId.value,
);
watch(
  serviceIdInit,
  (value) => {
    serviceId.value = value;
  },
  { immediate: true },
);

const submitForm = async (): Promise<void> => {
  if (serviceId.value === null) {
    notify(NotifyType.ERROR, {
      message: t("requestForm.invalid.message"),
      caption: t("requestForm.invalid.caption.noTeacher"),
    });
    return;
  }
  if (hours.value === null || hours.value < 0) {
    notify(NotifyType.ERROR, {
      message: t("requestForm.invalid.message"),
      caption: t("requestForm.invalid.caption.negativeHours"),
    });
    return;
  }
  if (!requestType.value) {
    notify(NotifyType.ERROR, {
      message: t("requestForm.invalid.message"),
      caption: t("requestForm.invalid.caption.noType"),
    });
    return;
  }
  await updateRequest(
    serviceId.value,
    data.value.courseId,
    requestType.value,
    hours.value,
  );
};
const resetForm = (): void => {
  serviceId.value = serviceIdInit.value;
  hours.value = data.value.hoursPerGroup ?? null;
  requestType.value = requestTypeInit.value;
};
</script>

<template>
  <QForm
    class="row q-gutter-md text-body2"
    @submit="submitForm"
    @reset="resetForm"
  >
    <SelectService
      v-if="displayServiceSelection"
      v-model="serviceId"
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
      v-for="opt in requestTypeOptions"
      :key="opt.value"
      v-model="requestType"
      :val="opt.value"
      :label="opt.label"
      color="primary"
      dense
    />
    <QBtn type="submit" icon="sym_s_check" color="primary" flat square dense>
      <QTooltip>{{ t("requestForm.tooltip.submit") }}</QTooltip>
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
