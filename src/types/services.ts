export type TypeModification = {
  label: string;
  description: string | null;
};

export type Modification = {
  id: number;
  typeModification: string;
  heuresEQTD: number;
};
