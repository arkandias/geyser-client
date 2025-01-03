export type UserName = {
  firstname: string;
  lastname: string;
  alias?: string | null;
};

export const formatUser = (user: UserName) =>
  user.alias ?? user.firstname + " " + user.lastname;
