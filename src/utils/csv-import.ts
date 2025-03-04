import { type ParseConfig, parse } from "papaparse";

import type {
  ParsedRow,
  PrimitiveTypeMap,
  PrimitiveTypeName,
  RowDescriptor,
} from "@/types/admin-data.ts";

/**
 * Parses a string value into a strongly-typed field (string, number, or
 * boolean) based on the field descriptor. Handles nullable fields and trims
 * whitespace. Throws if value cannot be parsed into the specified type.
 */
export const parseField = <T extends PrimitiveTypeName>(
  str: string,
  typename: T,
): PrimitiveTypeMap<T> => {
  const trimmed = str.trim();
  if (!trimmed) {
    return null as PrimitiveTypeMap<T>;
  }
  switch (typename) {
    case "string":
      return trimmed as PrimitiveTypeMap<T>;
    case "number": {
      return Number(trimmed) as PrimitiveTypeMap<T>;
    }
    case "boolean": {
      switch (trimmed) {
        case "true":
          return true as PrimitiveTypeMap<T>;
        case "false":
          return false as PrimitiveTypeMap<T>;
        default:
          throw new Error("Boolean fields must be 'true' or 'false'");
      }
    }
    default:
      throw new Error(`Invalid type: ${typename as string}`);
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
    if (descriptor === undefined) {
      throw new Error(`Unknown field: ${String(field)}`);
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
): ParsedRow<T>[] => {
  const parseResult = parse<ParsedRow<T>>(text, {
    delimiter: ",",
    header: true,
    skipEmptyLines: true,
    transform: transform(rowDescriptor),
  });

  if (parseResult.errors.length) {
    const errorMessages = parseResult.errors.map((e) => e.message).join("\n  ");
    throw new Error(`Parse error:\n  ${errorMessages}`);
  }

  // const missingHeaders = Object.keys(rowDescriptor).filter(
  //   (key) => !parseResult.meta.fields?.includes(key),
  // );
  // if (missingHeaders.length) {
  //   throw new Error(`Missing required headers: ${missingHeaders.join(", ")}`);
  // }

  return parseResult.data;
};
