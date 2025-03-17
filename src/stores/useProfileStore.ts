import { computed, reactive, readonly, ref, toRefs } from "vue";

import { ROLES, type Role } from "@/config/types/roles.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

type Profile = {
  uid: string;
  displayname: string;
  active: boolean;
  roles: Role[];
  services: { id: number; year: number }[];
};

const profile = reactive<Profile>({
  uid: "",
  displayname: "",
  active: false,
  roles: [ROLES.TEACHER],
  services: [],
});

const activeRole = ref<Role>(ROLES.TEACHER);

const loaded = ref(false);

const setProfile = (newProfile: Profile) => {
  Object.assign(profile, newProfile);

  if (profile.roles.includes(ROLES.ADMIN)) {
    activeRole.value = ROLES.ADMIN;
  } else {
    activeRole.value = ROLES.TEACHER;
  }

  loaded.value = true;
};

const setActiveRole = (role: Role) => {
  if (profile.roles.includes(role)) {
    activeRole.value = role;
  } else {
    console.error(`Role not allowed: ${role}`);
  }
};

export const useProfileStore = () => {
  const { activeYear } = useYearsStore();

  const activeYearServiceId = computed(
    () =>
      profile.services.find((service) => service.year === activeYear.value)
        ?.id ?? null,
  );
  const hasService = computed(() => activeYearServiceId.value !== null);

  return {
    ...toRefs(readonly(profile)),
    activeRole: readonly(activeRole),
    loaded: readonly(loaded),
    activeYearServiceId,
    hasService,
    setProfile,
    setActiveRole,
  };
};
