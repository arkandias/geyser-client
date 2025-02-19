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
  PositionUpdateColumn,
  UpdatePositionDocument,
} from "@/gql/graphql.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import type { ParsedObject } from "@/utils/csv-import.ts";
import { getValueFromLabel } from "@/utils/misc.ts";
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
    $value: String!
    $label: String!
    $description: String
    $baseServiceHours: Float
  ) {
    updatePositionByPk(
      pkColumns: { value: $value }
      _set: {
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

  mutation InsertPositions(
    $objects: [PositionInsertInput!]!
    $updateColumns: [PositionUpdateColumn!]!
  ) {
    insertPosition(
      objects: $objects
      onConflict: { constraint: position_pkey, updateColumns: $updateColumns }
    ) {
      returning {
        value
      }
    }
  }
`);

const { t } = useI18n();

const insertPosition = useMutation(InsertPositionDocument);
const updatePosition = useMutation(UpdatePositionDocument);
const deletePosition = useMutation(DeletePositionDocument);
const insertPositions = useMutation(InsertPositionsDocument);

const positionInsert = ref(false);
const positionUpdate = ref(false);
const positionEdit = computed({
  get: () => positionInsert.value || positionUpdate.value,
  set: (newValue) => {
    if (!newValue) {
      positionInsert.value = false;
      positionUpdate.value = false;
    }
  },
});

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
  const { data, error } = await insertPosition.executeMutation({
    ...position,
    // add value field based on label field
    value: getValueFromLabel(position.label, positions.value, true),
  });
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
        position: position.label,
      }),
    )
  ) {
    const { data, error } = await deletePosition.executeMutation({
      value: position.value,
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
  positionFragments.map((f) => useFragment(AdminPositionFragmentDoc, f)),
);

const columns: ColumnNonAbbreviable<AdminPositionFragment>[] = [
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
const onImportClick = () => {
  positionsImport.value = true;
};

const descriptorObj = {
  label: { type: "string" },
  description: { type: "string", nullable: true },
  baseServiceHours: { type: "number", nullable: true },
} as const;

const insertObjects = async (
  objects: ParsedObject<typeof descriptorObj>[],
  overwrite: boolean,
) => {
  const { data, error } = await insertPositions.executeMutation({
    // add value field based on label field
    objects: objects.map((obj) => ({
      ...obj,
      value: getValueFromLabel(obj.label, positions.value, true),
    })),
    updateColumns: overwrite
      ? [
          PositionUpdateColumn.Label,
          PositionUpdateColumn.Description,
          PositionUpdateColumn.BaseServiceHours,
        ]
      : [],
  });
  if (data?.insertPosition?.returning && !error) {
    notify(NotifyType.SUCCESS, {
      message: t(
        "admin.teachers.positions.import.valid.message",
        data.insertPosition.returning.length,
      ),
    });
  }
};

// Export
const headers = ["label", "description", "baseServiceHours"];
const onExportClick = () => {
  downloadCSV(`positions_${Date.now().toString()}`, positions.value, headers, {
    success: t(
      "admin.teachers.positions.export.valid.message",
      positions.value.length,
    ),
    error: t("admin.export.invalid.message"),
  });
};
</script>

<template>
  <AdminButtons :on-create-click :on-import-click :on-export-click />

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
        {{ position.label }}
      </QCardSection>
      <QCardSection>
        <QForm
          id="edit-position"
          class="q-gutter-md"
          @submit="
            positionInsert ? insertPositionHandle() : updatePositionHandle()
          "
        >
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
        </QForm>
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
          form="edit-position"
          type="submit"
          :label="
            positionInsert
              ? t('admin.teachers.positions.form.insert')
              : t('admin.teachers.positions.form.update')
          "
          color="positive"
          flat
          square
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <AdminImport v-model="positionsImport" :descriptor-obj :insert-objects />
</template>

<style scoped lang="scss"></style>
