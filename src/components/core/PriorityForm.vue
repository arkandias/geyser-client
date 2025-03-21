<script setup lang="ts">
import { useMutation } from "villus";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, useNotify } from "@/composables/useNotify.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  PriorityFormDataFragmentDoc,
  UpsertPriorityDocument,
} from "@/gql/graphql.ts";
import { priorityColor } from "@/utils/colors.ts";
import { inputToNumber } from "@/utils/misc.ts";

import SelectService from "@/components/core/SelectService.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof PriorityFormDataFragmentDoc>;
}>();

graphql(`
  fragment PriorityFormData on Course {
    courseId: id
  }

  mutation UpsertPriority(
    $serviceId: Int!
    $courseId: Int!
    $seniority: Int
    $isPriority: Boolean
  ) {
    priority: insertPriorityOne(
      object: {
        serviceId: $serviceId
        courseId: $courseId
        seniority: $seniority
        isPriority: $isPriority
        computed: false
      }
      onConflict: {
        constraint: priority_service_id_course_id_key
        updateColumns: [seniority, isPriority, computed]
      }
    ) {
      id
    }
  }
`);

const { t } = useCustomI18n();
const { notify } = useNotify();

const upsertPriority = useMutation(UpsertPriorityDocument, {
  refetchTags: ["request"],
});

const data = computed(() =>
  useFragment(PriorityFormDataFragmentDoc, dataFragment),
);

const serviceId = ref<number | null>(null);
const seniority = ref<number | null>(null);
const isPriority = ref<boolean | null>(null);

const priorityOptions = [
  { value: null, label: t("priorityForm.field.isPriority.null") },
  { value: true, label: t("priorityForm.field.isPriority.true") },
  { value: false, label: t("priorityForm.field.isPriority.false") },
];

const submitForm = async (): Promise<void> => {
  if (serviceId.value === null) {
    notify(NotifyType.ERROR, {
      message: t("priorityForm.invalid.message"),
      caption: t("priorityForm.invalid.caption.service"),
    });
    return;
  }
  if (
    seniority.value !== null &&
    (!Number.isInteger(seniority.value) || seniority.value < 0)
  ) {
    notify(NotifyType.ERROR, {
      message: t("priorityForm.invalid.message"),
      caption: t("priorityForm.invalid.caption.seniority"),
    });
    return;
  }

  const result = await upsertPriority.execute({
    serviceId: serviceId.value,
    courseId: data.value.courseId,
    seniority: seniority.value,
    isPriority: isPriority.value,
  });

  if (result.data?.priority && !result.error) {
    notify(NotifyType.SUCCESS, {
      message: t("priorityForm.success.updated"),
    });
  } else {
    notify(NotifyType.ERROR, {
      message: t("priorityForm.error.updated"),
      caption: result.error?.message,
    });
  }
};

const resetForm = (): void => {
  serviceId.value = null;
  seniority.value = null;
  isPriority.value = null;
};

watch(() => data.value.courseId, resetForm);
</script>

<template>
  <QForm
    class="row q-gutter-md text-body2"
    @submit="submitForm"
    @reset="resetForm"
  >
    <SelectService v-model="serviceId" dense options-dense />
    <QInput
      :model-value="seniority"
      type="number"
      color="primary"
      :label="t('priorityForm.field.seniority')"
      square
      dense
      @update:model-value="(value) => (seniority = inputToNumber(value))"
    />
    <QRadio
      v-for="opt in priorityOptions"
      :key="String(opt.value)"
      v-model="isPriority"
      :val="opt.value"
      :label="opt.label"
      :color="priorityColor(opt.value)"
      dense
    />
    <QBtn type="submit" icon="sym_s_check" color="primary" flat square dense>
      <QTooltip>{{ t("priorityForm.tooltip.submit") }}</QTooltip>
    </QBtn>
  </QForm>
</template>

<style scoped lang="scss">
.q-select {
  width: 180px;
}
.q-input {
  width: 60px;
}
</style>
