export type Intervenant = {
  uid: string;
  nom: string;
  prenom: string;
  alias: string | null;
};

export type Responsable = {
  intervenant: Intervenant;
  commentaire: string | null;
};
