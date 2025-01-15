<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
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

const perm = usePermissions();

const data = computed(() =>
  useFragment(TeacherServiceMessageFragmentDoc, dataFragment),
);
const updateMessage = useMutation(UpdateMessageDocument);

const setMessage = computed(
  () => (message: string) =>
    updateMessage
      .executeMutation({
        serviceId: data.value.id,
        message: message || null,
      })
      .then((result) => !!result.data?.service?.id && !result.error),
);

const editMessage = ref(false);
</script>

<template>
  <DetailsSection
    v-model="editMessage"
    title="Message pour la commission"
    :editable="perm.toEditAMessage(data.uid)"
    edition-tooltip="Éditer le message"
  >
    <EditableText
      v-model="editMessage"
      :text="data.message ?? ''"
      :set-text="setMessage"
      default-text=""
    />
  </DetailsSection>
</template>

<style scoped lang="scss">
:deep(.displayed-text) {
  max-width: $teacher-page-content-width;
  padding: 8px;
}
</style>
