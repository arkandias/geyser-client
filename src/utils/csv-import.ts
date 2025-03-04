import { type ParseConfig, parse } from "papaparse";

import type {
  FieldDescriptor,
  ParsedField,
  RowDescriptor,
  VisibleParsedRow,
} from "@/types/admin-data.ts";

/**
 * Parses a string value into a strongly-typed field (string, number, or
 * boolean) based on the field descriptor. Handles nullable fields and trims
 * whitespace. Throws if value cannot be parsed into the specified type.
 */
export const parseField = <T extends FieldDescriptor>(
  str: string,
  fieldDescriptor: T,
): ParsedField<T> => {
  const trimmed = str.trim();
  if (!trimmed) {
    if (fieldDescriptor.nullable) {
      return null as ParsedField<T>;
    }
    throw new Error(`Non-nullable field '${str}' is empty`);
  }
  switch (fieldDescriptor.type) {
    case "string":
      return trimmed as ParsedField<T>;
    case "number": {
      return Number(trimmed) as ParsedField<T>;
    }
    case "boolean": {
      switch (trimmed) {
        case "true":
          return true as ParsedField<T>;
        case "false":
          return false as ParsedField<T>;
        default:
          throw new Error("Boolean fields must be 'true' or 'false'");
      }
    }
    default:
      throw new Error(`Invalid type: ${fieldDescriptor.type as string}`);
  }
};

/**
 * Returns a parser function for PapaParse to transform CSV fields according to
 * their descriptors. Throws detailed error messages when parsing fails,
 * including the field name in the error.
 */
const transform =
  (rowDescriptor: RowDescriptor): ParseConfig["transform"] =>
  (value: string, field: string | number) => {
    const descriptor = rowDescriptor[field];
    if (descriptor === undefined || descriptor.hidden) {
      throw new Error(`Unexpected field: ${String(field)}`);
    }
    try {
      return parseField(value, descriptor);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      throw new Error(
        `Error while parsing field '${String(field)}': ${message}`,
      );
    }
  };

/**
 * Parses a CSV text using a row descriptor and returns an array of typed rows.
 */
export const importCSV = <T extends RowDescriptor>(
  text: string,
  rowDescriptor: T,
): VisibleParsedRow<T>[] => {
  const parseResult = parse<VisibleParsedRow<T>>(text, {
    delimiter: ",",
    header: true,
    skipEmptyLines: true,
    transform: transform(rowDescriptor),
  });

  if (parseResult.errors.length) {
    const errorMessages = parseResult.errors.map((e) => e.message).join("\n  ");
    throw new Error(`Parse error:\n  ${errorMessages}`);
  }

  const missingHeaders = Object.keys(rowDescriptor).filter(
    (key) => !parseResult.meta.fields?.includes(key),
  );
  if (missingHeaders.length) {
    throw new Error(`Missing required headers: ${missingHeaders.join(", ")}`);
  }

  return parseResult.data;
};
