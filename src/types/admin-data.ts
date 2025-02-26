export type Scalar = string | number | boolean | null | undefined;
export type SimpleObject<T extends Scalar> = {
  [key: string]: T | SimpleObject<T>;
};

export type PrimitiveTypeName = "string" | "number" | "boolean";
export type PrimitiveTypeMap<T extends PrimitiveTypeName> = T extends "string"
  ? string
  : T extends "number"
    ? number
    : T extends "boolean"
      ? boolean
      : never;

export type FieldDescriptor = {
  type: PrimitiveTypeName;
  nullable?: boolean;
};

export type ParsedField<T extends FieldDescriptor> = T["nullable"] extends true
  ? PrimitiveTypeMap<T["type"]> | null
  : PrimitiveTypeMap<T["type"]>;

export type RowDescriptor = Record<string, FieldDescriptor>;

export type ParsedRow<T extends RowDescriptor> = {
  [K in keyof T]: ParsedField<T[K]>;
};

export type Header = { key: string; descriptor: FieldDescriptor };

export type RowFromHeaders<T extends readonly Header[]> = ParsedRow<{
  [K in T[number]["key"]]: Extract<T[number], { key: K }>["descriptor"];
}>;

export type GetObjectFn<Row, DataObject> = {
  (row: Row): DataObject;
  (row: Row, fields: string[]): Partial<DataObject>;
};
