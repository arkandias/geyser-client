export type Scalar = string | number | boolean | null | undefined;
export type SimpleObject<T extends Scalar> = {
  [key: string]: T | SimpleObject<T>;
};

export type PrimitiveTypeName = "string" | "number" | "boolean";
export type PrimitiveTypeMap<T extends PrimitiveTypeName> = T extends "string"
  ? string | null
  : T extends "number"
    ? number | null
    : T extends "boolean"
      ? boolean | null
      : never;

export type FieldDescriptor = {
  type: PrimitiveTypeName;
  nullable?: boolean;
};

export type ParsedField<T extends FieldDescriptor> = T["nullable"] extends true
  ? PrimitiveTypeMap<T["type"]> | null
  : PrimitiveTypeMap<T["type"]>;

export type RowDescriptor = Record<string, PrimitiveTypeName>;

export type ParsedRow<T extends RowDescriptor> = {
  -readonly [K in keyof T]: PrimitiveTypeMap<T[K]>;
};

export type Header = { key: string; typename: PrimitiveTypeName };

export type RowFromHeaders<T extends readonly Header[]> = ParsedRow<{
  [K in T[number]["key"]]: Extract<T[number], { key: K }>["typename"];
}>;

export type GetDataFn<Row, DataObject> = {
  (row: Row, checkConflicts: boolean): DataObject;
  (row: Row, checkConflicts: boolean, fields: string[]): Partial<DataObject>;
};
