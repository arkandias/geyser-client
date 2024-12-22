export type Profile = {
  uid: string;
  firstname: string;
  lastname: string;
  alias: string | null;
  active: boolean;
};

export const isProfile = (profile: unknown): profile is Profile =>
  typeof profile === "object" &&
  profile !== null &&
  "uid" in profile &&
  "firstname" in profile &&
  "lastname" in profile &&
  "alias" in profile &&
  "active" in profile &&
  typeof profile.uid === "string" &&
  typeof profile.firstname === "string" &&
  typeof profile.lastname === "string" &&
  (profile.alias === null || typeof profile.alias === "string") &&
  typeof profile.active === "boolean";

export const getProfile = (p: Profile) => ({
  uid: p.uid,
  firstname: p.firstname,
  lastname: p.lastname,
  alias: p.alias,
  active: p.active,
});
