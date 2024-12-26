export type Profile = {
  uid: string;
  firstname: string;
  lastname: string;
  alias: string | null;
  active: boolean;
};

export const getProfile = (p: Profile) => ({
  uid: p.uid,
  firstname: p.firstname,
  lastname: p.lastname,
  alias: p.alias,
  active: p.active,
});
