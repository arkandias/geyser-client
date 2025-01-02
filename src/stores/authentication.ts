import { type Ref, reactive, readonly, ref } from "vue";

import type { Role } from "@/config/types/roles.ts";
import type { Profile } from "@/types/user.ts";

export const activeRole: Ref<Role | null> = ref(null);

const logged: Ref<boolean> = ref(false);
const profile: Profile = reactive({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  active: false,
});
const allowedRoles: Ref<Role[]> = ref([]);
const logout: Ref<() => Promise<void>> = ref(() => Promise.resolve());

const login = (
  newProfile: Profile,
  newAllowedRoles: Role[],
  newDefaultRole: Role,
  newLogout: () => Promise<void>,
): void => {
  allowedRoles.value = newAllowedRoles;
  activeRole.value = newDefaultRole;
  profile.uid = newProfile.uid;
  profile.firstname = newProfile.firstname;
  profile.lastname = newProfile.lastname;
  profile.alias = newProfile.alias;
  profile.active = newProfile.active;
  logout.value = async () => {
    logged.value = false;
    await newLogout();
  };
  logged.value = true;
  console.debug("Logged in");
};

export const useAuthenticationStore = () =>
  readonly({
    logged,
    profile,
    allowedRoles,
    activeRole,
    logout,
    login,
  });
