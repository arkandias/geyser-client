<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useService } from "@/composables/useService.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  DeleteRequestDocument,
  GetRequestDocument,
  RequestFormDataFragmentDoc,
  UpsertRequestDocument,
} from "@/gql/graphql.ts";
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

  query GetRequest($serviceId: Int!, $courseId: Int!, $requestType: String!) {
    requests: request(
      where: {
        _and: [
          { serviceId: { _eq: $serviceId } }
          { courseId: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
      limit: 1 # unique
    ) {
      hours
    }
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

const { serviceId: myServiceId } = useService();
const perm = usePermissions();
const client = useClientHandle().client;

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

  const result = await client.query(
    GetRequestDocument,
    {
      serviceId: serviceId.value,
      courseId: courseId.value,
      requestType: requestType.value,
    },
    { requestPolicy: "network-only" },
  );
  if (!result.data?.requests || result.error) {
    notify(NotifyType.ERROR, {
      message: t("requestForm.error.fetch"),
      caption: result.error?.message,
    });
    return;
  }

  const current = result.data.requests[0]?.hours ?? 0;

  if (current === hours.value) {
    notify(NotifyType.DEFAULT, {
      message: t("requestForm.identical", {
        type: t(`requestForm.requestType.${requestType.value}`),
      }),
    });
    return;
  }

  if (hours.value === 0) {
    const { data, error } = await client.mutation(DeleteRequestDocument, {
      serviceId: serviceId.value,
      courseId: courseId.value,
      requestType: requestType.value,
    });

    if (data?.requests?.returning && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("requestForm.success.deleted", {
          type: t(`requestForm.requestType.${requestType.value}`),
        }),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t("requestForm.error.delete"),
        caption: error?.message,
      });
    }
  } else {
    const { data, error } = await client.mutation(UpsertRequestDocument, {
      serviceId: serviceId.value,
      courseId: courseId.value,
      requestType: requestType.value,
      hours: hours.value,
    });

    if (data?.request && !error) {
      notify(NotifyType.SUCCESS, {
        message: t(
          current === 0
            ? "requestForm.success.created"
            : "requestForm.success.updated",
          { type: t(`requestForm.requestType.${requestType.value}`) },
        ),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t(
          current === 0
            ? "requestForm.error.create"
            : "requestForm.error.update",
        ),
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
      <QTooltip>{{ t("requestForm.tooltip.submit") }}</QTooltip>
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
