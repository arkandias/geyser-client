import { type Ref, reactive, readonly, ref, toRef } from "vue";

import type { Role } from "@/config/types/roles.ts";
import type { Profile } from "@/types/profile.ts";

export const activeRole: Ref<Role | null> = ref(null);

const logged: Ref<boolean> = ref(false);
const profile: Profile = reactive({
  uid: "",
  lastname: "",
  firstname: "",
  alias: null,
});
const allowedRoles: Ref<Role[]> = ref([]);
const logout: Ref<(() => Promise<void>) | undefined> = ref(undefined);

export function login(
  newProfile: Profile,
  newAllowedRoles: Role[],
  newDefaultRole: Role,
  newLogout: () => Promise<void>,
): boolean {
  allowedRoles.value = newAllowedRoles;
  activeRole.value = newDefaultRole;
  profile.uid = newProfile.uid;
  profile.lastname = newProfile.lastname;
  profile.firstname = newProfile.firstname;
  profile.alias = newProfile.alias;
  logout.value = newLogout;
  logged.value = true;
  console.debug("Logged in");
  return true;
}

export const useAuthentication = () => ({
  logged: readonly(logged),
  profile: readonly(profile),
  uid: readonly(toRef(profile, "uid")),
  allowedRoles: readonly(allowedRoles),
  activeRole: readonly(activeRole),
  logout: readonly(logout),
});
