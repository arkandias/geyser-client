import { computed, reactive, readonly, ref } from "vue";

import { ROLES, type Role } from "@/config/types/roles.ts";

type Profile = {
  uid: string;
  firstname: string;
  lastname: string;
  alias?: string | null;
  active: boolean;
};

const profile = reactive<Profile>({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  active: false,
});
const roles = ref<Role[]>([]);
const activeRole = ref<Role>(ROLES.TEACHER);

const isActive = computed(() => profile.active);

const setProfile = (newProfile: Profile) => {
  Object.assign(profile, newProfile);
};

const setRoles = (newRoles: Role[]) => {
  roles.value = [...newRoles];
};

const setActiveRole = (role: Role) => {
  if (roles.value.includes(role)) {
    activeRole.value = role;
  }
};

// Impersonating
const isImpersonating = ref(false);
const profileSaved = reactive<Profile>({ ...profile });
const rolesSaved = ref<Role[]>([]);
const activeRoleSaved = ref<Role>(ROLES.TEACHER);

const impersonate = (otherProfile: Profile, otherRoles: Role[]) => {
  if (!isImpersonating.value) {
    Object.assign(profileSaved, profile);
    rolesSaved.value = [...roles.value];
    activeRoleSaved.value = activeRole.value;
  }
  setProfile(otherProfile);
  setRoles(otherRoles);
  setActiveRole(ROLES.TEACHER);
  isImpersonating.value = true;
};

const stopImpersonating = () => {
  if (isImpersonating.value) {
    setProfile(profileSaved);
    setRoles(rolesSaved.value);
    setActiveRole(activeRoleSaved.value);
    isImpersonating.value = false;
  }
};

export const useProfileStore = () => ({
  profile: readonly(profile),
  roles: readonly(roles),
  activeRole: readonly(activeRole),
  isActive,
  setProfile,
  setRoles,
  setActiveRole,
  isImpersonating: readonly(isImpersonating),
  impersonate,
  stopImpersonating,
});
