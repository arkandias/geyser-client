<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminPositionFragment,
  AdminPositionFragmentDoc,
  DeletePositionDocument,
  InsertPositionDocument,
  InsertPositionsDocument,
  type InsertPositionsMutationVariables,
  UpdatePositionDocument,
} from "@/gql/graphql.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import AdminButtons from "@/components/admin/AdminButtons.vue";
import AdminImport from "@/components/admin/AdminImport.vue";

const { positionFragments } = defineProps<{
  positionFragments: FragmentType<typeof AdminPositionFragmentDoc>[];
}>();

graphql(`
  fragment AdminPosition on Position {
    value
    label
    description
    baseServiceHours
  }

  mutation InsertPosition(
    $value: String!
    $label: String!
    $description: String
    $baseServiceHours: Float
  ) {
    insertPositionOne(
      object: {
        value: $value
        label: $label
        description: $description
        baseServiceHours: $baseServiceHours
      }
    ) {
      value
    }
  }

  mutation UpdatePosition(
    $currentValue: String!
    $value: String!
    $label: String!
    $description: String
    $baseServiceHours: Float
  ) {
    updatePositionByPk(
      pkColumns: { value: $currentValue }
      _set: {
        value: $value
        label: $label
        description: $description
        baseServiceHours: $baseServiceHours
      }
    ) {
      value
    }
  }

  mutation DeletePosition($value: String!) {
    deletePositionByPk(value: $value) {
      value
    }
  }

  mutation InsertPositions($objects: [PositionInsertInput!]!) {
    insertPosition(objects: $objects) {
      returning {
        value
      }
    }
  }
`);

const { t } = useI18n<I18nOptions>();

const insertPosition = useMutation(InsertPositionDocument);
const updatePosition = useMutation(UpdatePositionDocument);
const deletePosition = useMutation(DeletePositionDocument);
const insertPositions = useMutation(InsertPositionsDocument);

const positionInsert = ref(false);
const positionUpdate = ref(false);
const positionEdit = computed({
  get: () => positionInsert.value || positionUpdate.value,
  set: (val) => {
    if (!val) {
      positionInsert.value = false;
      positionUpdate.value = false;
    }
  },
});

const selectedValue = ref("");
const position = reactive<{
  value: string;
  label: string;
  description: string | null;
  baseServiceHours: number | null;
}>({
  value: "",
  label: "",
  description: null,
  baseServiceHours: null,
});

const validatePosition = () => {
  if (!position.value) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.positions.form.invalid.message"),
      caption: t("admin.teachers.positions.form.invalid.caption.value_empty"),
    });
    return false;
  }
  if (!/^[a-z0-9_]*$/.test(position.value)) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.positions.form.invalid.message"),
      caption: t(
        "admin.teachers.positions.form.invalid.caption.value_invalid_characters",
      ),
    });
    return false;
  }
  if (!position.label) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.positions.form.invalid.message"),
      caption: t("admin.teachers.positions.form.invalid.caption.label_empty"),
    });
    return false;
  }
  if (position.baseServiceHours !== null && position.baseServiceHours < 0) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.positions.form.invalid.message"),
      caption: t(
        "admin.teachers.positions.form.invalid.caption.base_service_hours_negative",
      ),
    });
    return false;
  }
  return true;
};

const insertPositionHandle = async () => {
  if (!validatePosition()) {
    return;
  }
  const { data, error } = await insertPosition.executeMutation(position);
  positionEdit.value = false;
  if (data?.insertPositionOne?.value && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.teachers.positions.form.valid.insert", {
        position: String(data.insertPositionOne.value),
      }),
    });
  }
};

const updatePositionHandle = async () => {
  if (!validatePosition()) {
    return;
  }
  const { data, error } = await updatePosition.executeMutation({
    currentValue: selectedValue.value,
    value: position.value,
    label: position.label,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    description: position.description || null,
    baseServiceHours: position.baseServiceHours,
  });
  positionEdit.value = false;
  if (data?.updatePositionByPk?.value && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.teachers.positions.form.valid.update", {
        position: String(data.updatePositionByPk.value),
      }),
    });
  }
};

const deletePositionHandle = async () => {
  if (
    confirm(
      t("admin.teachers.positions.form.confirm.delete", {
        position: selectedValue.value,
      }),
    )
  ) {
    const { data, error } = await deletePosition.executeMutation({
      value: selectedValue.value,
    });
    if (data?.deletePositionByPk?.value && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("admin.teachers.positions.form.valid.delete", {
          position: String(data.deletePositionByPk.value),
        }),
      });
    }
    positionEdit.value = false;
  }
};

const onCreateClick = () => {
  Object.assign(position, {
    value: "",
    label: "",
    description: null,
    baseServiceHours: null,
  });
  positionInsert.value = true;
};

const onRowClick = (_: Event, row: AdminPositionFragment) => {
  selectedValue.value = row.value;
  Object.assign(position, {
    value: row.value,
    label: row.label,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    description: row.description || null,
    baseServiceHours: row.baseServiceHours,
  });
  positionUpdate.value = true;
};

const positions = computed(() =>
  positionFragments.map((fragment) =>
    useFragment(AdminPositionFragmentDoc, fragment),
  ),
);

const columns: ColumnNonAbbreviable<AdminPositionFragment>[] = [
  {
    name: "value",
    label: t("admin.teachers.positions.table.value"),
    align: "left",
    field: "value",
    sortable: true,
  },
  {
    name: "label",
    label: t("admin.teachers.positions.table.label"),
    align: "left",
    field: "label",
    sortable: true,
  },
  {
    name: "description",
    label: t("admin.teachers.positions.table.description"),
    align: "left",
    field: (row) => row.description ?? null,
    sortable: true,
    searchable: true,
  },
  {
    name: "base_service_hours",
    label: t("admin.teachers.positions.table.base_service_hours"),
    field: (row) => row.baseServiceHours ?? null,
    format: (val: number | null) =>
      val === null ? "" : String(val) + " " + t("unit.weighted_hours"),
    sortable: true,
    searchable: false,
  },
];

// Import
const positionsImport = ref(false);
const validateObjects = (row: Record<string, string>) => ({
  value: row["value"]?.toString().trim() ?? "",
  label: row["label"]?.toString().trim() ?? "",
  description: row["description"] ?? null,
  baseServiceHours: row["service"] ? parseFloat(row["service"]) : null,
});
const insertObjects = async (variables: InsertPositionsMutationVariables) => {
  const { data, error } = await insertPositions.executeMutation(variables);
  if (data?.insertPosition?.returning && !error) {
    notify(NotifyType.SUCCESS, {
      message: t(
        "admin.teachers.positions.import.message",
        data.insertPosition.returning.length,
      ),
    });
  }
};

// Export
</script>

<template>
  <AdminButtons
    :on-create-click
    :on-import-click="() => (positionsImport = true)"
    :on-export-click="() => void 0"
  />

  <QTable
    :rows="positions"
    :columns
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    row-key="value"
    bordered
    flat
    dense
    @row-click="onRowClick"
  >
  </QTable>

  <QDialog v-model="positionEdit" square>
    <QCard flat square class="admin-form">
      <QCardSection v-if="positionUpdate" class="text-h6">
        {{ selectedValue }}
      </QCardSection>
      <QCardSection>
        <div class="q-gutter-md">
          <QInput
            v-model="position.value"
            :label="t('admin.teachers.positions.form.value')"
            square
            dense
          />
          <QInput
            v-model="position.label"
            :label="t('admin.teachers.positions.form.label')"
            square
            dense
          />
          <QInput
            v-model="position.description"
            :label="t('admin.teachers.positions.form.description')"
            clearable
            clear-icon="sym_s_close"
            square
            dense
          />
          <QInput
            v-model.number="position.baseServiceHours"
            type="number"
            :label="t('admin.teachers.positions.form.base_service_hours')"
            clearable
            clear-icon="sym_s_close"
            square
            dense
          />
        </div>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          v-if="positionUpdate"
          :label="t('admin.teachers.positions.form.delete')"
          color="negative"
          flat
          square
          @click="deletePositionHandle"
        />
        <QBtn
          :label="
            positionInsert
              ? t('admin.teachers.positions.form.insert')
              : t('admin.teachers.positions.form.update')
          "
          color="positive"
          flat
          square
          @click="
            positionInsert ? insertPositionHandle() : updatePositionHandle()
          "
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <AdminImport v-model="positionsImport" :validate-objects :insert-objects />
</template>

<style scoped lang="scss"></style>
