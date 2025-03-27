<script setup lang="ts">
import { useMutation } from "villus";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, useNotify } from "@/composables/useNotify.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  DeleteRequestDocument,
  RequestFormDataFragmentDoc,
  UpsertRequestDocument,
} from "@/gql/graphql.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";

import SelectService from "@/components/core/SelectService.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof RequestFormDataFragmentDoc>;
}>();

graphql(`
  fragment RequestFormData on Course {
    courseId: id
    hoursPerGroup: hoursEffective
  }

  mutation UpsertRequest(
    $serviceId: Int!
    $courseId: Int!
    $requestType: String!
    $hours: Float!
  ) {
    request: insertRequestOne(
      object: {
        serviceId: $serviceId
        courseId: $courseId
        type: $requestType
        hours: $hours
      }
      onConflict: {
        constraint: request_service_id_course_id_type_key
        updateColumns: [hours]
      }
    ) {
      id
    }
  }

  mutation DeleteRequest(
    $serviceId: Int!
    $courseId: Int!
    $requestType: String!
  ) {
    requests: deleteRequest(
      where: {
        _and: [
          { serviceId: { _eq: $serviceId } }
          { courseId: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
    ) {
      returning {
        id
      }
    }
  }
`);

const { t } = useCustomI18n();
const { notify } = useNotify();
const { serviceId: myServiceId } = useProfileStore();
const perm = usePermissions();

const upsertRequest = useMutation(UpsertRequestDocument, {
  refetchTags: ["request"],
});
const deleteRequest = useMutation(DeleteRequestDocument, {
  refetchTags: ["request"],
});

const data = computed(() =>
  useFragment(RequestFormDataFragmentDoc, dataFragment),
);
const courseId = computed(() => data.value.courseId);
const hoursPerGroup = computed(() => data.value.hoursPerGroup ?? null);

const hours = ref<number | null>(null);
watch(
  hoursPerGroup,
  (value) => {
    hours.value = value;
  },
  { immediate: true },
);

const groups = computed<number | null>({
  get: () =>
    hours.value === null || hoursPerGroup.value == null
      ? null
      : Math.round((hours.value / hoursPerGroup.value + Number.EPSILON) * 100) /
        100,
  set: (newValue) => {
    hours.value =
      newValue === null || hoursPerGroup.value == null
        ? null
        : newValue * hoursPerGroup.value;
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
    ? [
        {
          value: REQUEST_TYPES.ASSIGNMENT,
          label: t(`requestForm.field.requestType.${REQUEST_TYPES.ASSIGNMENT}`),
        },
      ]
    : []),
  ...(perm.toSubmitRequests
    ? [
        {
          value: REQUEST_TYPES.PRIMARY,
          label: t(`requestForm.field.requestType.${REQUEST_TYPES.PRIMARY}`),
        },
        {
          value: REQUEST_TYPES.SECONDARY,
          label: t(`requestForm.field.requestType.${REQUEST_TYPES.SECONDARY}`),
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
      caption: t("requestForm.invalid.caption.service"),
    });
    return;
  }
  if (hours.value === null || hours.value < 0) {
    notify(NotifyType.ERROR, {
      message: t("requestForm.invalid.message"),
      caption: t("requestForm.invalid.caption.hours"),
    });
    return;
  }
  if (requestType.value === null) {
    notify(NotifyType.ERROR, {
      message: t("requestForm.invalid.message"),
      caption: t("requestForm.invalid.caption.type"),
    });
    return;
  }

  if (hours.value === 0) {
    const { data, error } = await deleteRequest.execute({
      serviceId: serviceId.value,
      courseId: courseId.value,
      requestType: requestType.value,
    });

    if (data?.requests?.returning && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("requestForm.success"),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t("requestForm.error"),
        caption: error?.message,
      });
    }
  } else {
    const { data, error } = await upsertRequest.execute({
      serviceId: serviceId.value,
      courseId: courseId.value,
      requestType: requestType.value,
      hours: hours.value,
    });

    if (data?.request && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("requestForm.success"),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t("requestForm.error"),
        caption: error?.message,
      });
    }
  }
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
      type="number"
      :label="t('requestForm.field.groups')"
      color="primary"
      square
      dense
    />
    <QInput
      v-model.number="hours"
      type="number"
      :label="t('requestForm.field.hours')"
      color="primary"
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
      <QTooltip>
        {{ t("requestForm.tooltip.submit") }}
      </QTooltip>
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
