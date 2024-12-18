import { type ComputedRef, type Ref, computed, readonly, ref } from "vue";

import { useAuthentication } from "@/stores/authentication.ts";
import type { CourseRow, ServiceRow } from "@/types/rows.ts";

const services: Ref<ServiceRow[]> = ref([]);
const enseignements: Ref<CourseRow[]> = ref([]);
const setServices = (rows: ServiceRow[]) => {
  services.value = rows;
};
const setEnseignements = (rows: CourseRow[]) => {
  enseignements.value = rows;
};

const fetchingServices: Ref<boolean> = ref(false);
const fetchingEnseignements: Ref<boolean> = ref(false);
const setFetchingServices = (value: boolean) => {
  fetchingServices.value = value;
};
const setFetchingEnseignements = (value: boolean) => {
  fetchingEnseignements.value = value;
};

// TODO: simplify these (need to tweek the QTable)
export const selectedService: Ref<
  {
    intervenant: {
      uid: string;
    };
  }[]
> = ref([]);
export const selectedEnseignement: Ref<{ id: number }[]> = ref([]);
const selectService = (id?: number | null) => {
  selectedService.value = id != null ? [{ id }] : [];
};
const selectEnseignement = (id?: number | null) => {
  selectedEnseignement.value = id != null ? [{ id }] : [];
};

const service: ComputedRef<ServiceRow | null> = computed(
  () =>
    services.value.find(
      (row) => row.teacher.uid === selectedService.value[0]?.intervenant.uid,
    ) ?? null,
);
const enseignement: ComputedRef<CourseRow | null> = computed(
  () =>
    enseignements.value.find(
      (row) => row.id === selectedEnseignement.value[0]?.id,
    ) ?? null,
);

export const useData = () => {
  const { uid: moi } = useAuthentication();
  const myService: ComputedRef<ServiceRow | null> = computed(
    () => services.value.find((row) => row.teacher.uid === moi.value) ?? null,
  );
  const myServiceSelected: ComputedRef<boolean> = computed(
    () => service.value?.teacher.uid === moi.value,
  );
  const toggleMonService = () => {
    if (myServiceSelected.value) {
      selectService(null);
    } else if (myService.value) {
      selectService(moi.value);
      selectEnseignement(null);
    }
  };
  return {
    services: readonly(services),
    enseignements: readonly(enseignements),
    fetchingServices: readonly(fetchingServices),
    fetchingEnseignements: readonly(fetchingEnseignements),
    selectedService: readonly(selectedService),
    selectedEnseignement: readonly(selectedEnseignement),
    service,
    enseignement,
    setServices,
    setEnseignements,
    setFetchingServices,
    setFetchingEnseignements,
    selectService,
    selectEnseignement,
    myService,
    myServiceSelected,
    toggleMonService,
  };
};
