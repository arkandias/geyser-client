export type Profile = {
  uid: string;
  firstname: string;
  lastname: string;
  alias: string | null;
};

export const isProfile = (profile: unknown): profile is Profile => {
  if (typeof profile !== "object" || profile === null) {
    return false;
  }
  return (
    "uid" in profile &&
    "firstname" in profile &&
    "lastname" in profile &&
    "alias" in profile &&
    typeof profile.uid === "string" &&
    typeof profile.firstname === "string" &&
    typeof profile.lastname === "string" &&
    (profile.alias === null || typeof profile.alias === "string")
  );
};

export const getProfile = (p: Profile) => ({
  uid: p.uid,
  firstname: p.firstname,
  lastname: p.lastname,
  alias: p.alias,
});
