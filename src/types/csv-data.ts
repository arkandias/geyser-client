export type Header = string | { key: string; label: string };
export type Scalar = string | number | boolean | null | undefined;
export type SimpleObject = { [key: string]: Scalar | SimpleObject };

export type FieldDescriptor = {
  type: "string" | "number" | "boolean";
  nullable?: boolean;
};

export type ParsedField<T extends FieldDescriptor> = T["type"] extends "string"
  ? T["nullable"] extends true
    ? string | null
    : string
  : T["type"] extends "number"
    ? T["nullable"] extends true
      ? number | null
      : number
    : T["type"] extends "boolean"
      ? T["nullable"] extends true
        ? boolean | null
        : boolean
      : never;

export type RowDescriptor = Record<string, FieldDescriptor>;

export type ParsedRow<T extends RowDescriptor> = {
  [K in keyof T]: ParsedField<T[K]>;
};
