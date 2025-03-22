<script setup lang="ts">
import DOMPurify from "dompurify";
import { useMutation } from "villus";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  TeacherServiceMessageFragmentDoc,
  UpdateMessageDocument,
} from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import EditableText from "@/components/core/EditableText.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceMessageFragmentDoc>;
}>();

graphql(`
  fragment TeacherServiceMessage on Service {
    id
    uid
    message
  }

  mutation UpdateMessage($serviceId: Int!, $message: String) {
    service: updateServiceByPk(
      pkColumns: { id: $serviceId }
      _set: { message: $message }
    ) {
      id
    }
  }
`);

const { t } = useCustomI18n();
const perm = usePermissions();

const updateMessage = useMutation(UpdateMessageDocument, {
  refetchTags: ["service"],
});

const data = computed(() =>
  useFragment(TeacherServiceMessageFragmentDoc, dataFragment),
);

const editMessage = ref(false);
const message = computed(() => DOMPurify.sanitize(data.value.message ?? ""));
const setMessage = computed(
  () => (message: string) =>
    updateMessage
      .execute({
        serviceId: data.value.id,
        message: message || null,
      })
      .then((result) => ({
        returnId: result.data?.service?.id ?? null,
        error: result.error,
      })),
);
</script>

<template>
  <DetailsSection
    v-model="editMessage"
    :title="t('service.message.title')"
    :editable="perm.toEditAMessage(data.uid)"
    :edition-tooltip="t('service.message.editionTooltip')"
  >
    <EditableText
      v-model="editMessage"
      :text="message"
      :set-text="setMessage"
      text-class="q-pa-sm"
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
