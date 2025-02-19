import { type UnparseConfig, unparse } from "papaparse";

import { i18n } from "@/services/i18n.ts";
import { toSlug } from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

export type Header = string | { key: string; label: string };
type Scalar = string | number | boolean | null | undefined;
type SimpleObject = { [key: string]: Scalar | SimpleObject };

/**
 * Recursively flattens a nested object into a single-level object with
 * dot-notation keys (e.g., { a: { b: 1 } } becomes { "a.b": 1 }).
 */
export const flattenSimpleObject = (
  obj: SimpleObject,
  prefix = "",
): Record<string, Scalar> => {
  return Object.entries(obj).reduce<Record<string, Scalar>>(
    (acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        // value is not a Scalar
        return {
          ...acc,
          ...flattenSimpleObject(value, prefix + key + "."),
        };
      }
      // value is a Scalar
      return { ...acc, [prefix + key]: value };
    },
    {},
  );
};

/**
 * Converts an array of objects into a CSV string with specified headers.
 * Throws if any required fields are missing from the input objects.
 */
export const dataArrayToCSV = (
  data: SimpleObject[],
  headers: Header[] = [],
): string => {
  const keys = headers.map((h) => (typeof h === "string" ? h : h.key));
  const labels = headers.map((h) => (typeof h === "string" ? h : h.label));

  const processedData = data.map((obj) => {
    const flatObj = flattenSimpleObject(obj);

    if (!headers.length) {
      return flatObj;
    }

    // transform keys using header labels and return entry
    return Object.fromEntries(
      keys.map((key, i) => [labels[i], flatObj[key]]),
    ) as Record<string, Scalar>;
  });

  const config: UnparseConfig = {
    newline: "\n",
    ...(headers.length ? { columns: labels } : {}),
  };

  return unparse(processedData, config);
};

/**
 * Creates and triggers download of a CSV file from given data, with specified
 * headers and filename.
 */
export const downloadCSV = (
  filename: string,
  data: SimpleObject[],
  headers: Header[] = [],
  message?: { success: string; error: string },
) => {
  try {
    const BOM = "\uFEFF"; // Byte Order Mark
    const csv = dataArrayToCSV(data, headers);
    const blob = new Blob([BOM + csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = toSlug(filename) + ".csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    if (message) {
      notify(NotifyType.SUCCESS, {
        message: message.success,
      });
    }
  } catch (error) {
    console.error("Export error:", error);
    if (message) {
      notify(NotifyType.ERROR, {
        message: message.error,
        caption:
          error instanceof Error
            ? error.message
            : i18n.global.t("notify.error.unknown"),
      });
    }
  }
};
