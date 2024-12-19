import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  type RequestType,
  orderRequestType,
} from "@/config/types/request-types.ts";

const requestTypes = Object.values(REQUEST_TYPES).sort(
  (a, b) => orderRequestType(a) - orderRequestType(b),
);

export const useRequestTypes = () => {
  const perm = usePermissions();
  const shown: ComputedRef<RequestType[]> = computed(() =>
    requestTypes.filter(
      (requestType) =>
        perm.deVoirLesAttributions || requestType != REQUEST_TYPES.ASSIGNMENT,
    ),
  );
  return {
    shown,
  };
};
