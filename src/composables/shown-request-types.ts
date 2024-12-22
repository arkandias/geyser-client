import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  REQUEST_TYPE_METADATA,
  type RequestType,
} from "@/config/types/request-types.ts";

const requestTypes = Object.values(REQUEST_TYPES).sort(
  (a, b) => REQUEST_TYPE_METADATA[a].order - REQUEST_TYPE_METADATA[b].order,
);

export const useShownRequestTypes = () => {
  const perm = usePermissions();
  const shown: ComputedRef<RequestType[]> = computed(() =>
    requestTypes.filter(
      (requestType) =>
        perm.toViewAssignments || requestType != REQUEST_TYPES.ASSIGNMENT,
    ),
  );
  return {
    shown,
  };
};
