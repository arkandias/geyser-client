export type UserName = {
  firstname: string;
  lastname: string;
  alias: string | null;
};

export type Profile = UserName & {
  uid: string;
  active: boolean;
};
