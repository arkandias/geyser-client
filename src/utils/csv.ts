import { nf } from "@/utils/format.ts";

type CSVScalar = string | number | boolean | null | undefined;
type SimpleObject = { [key: string]: CSVScalar | SimpleObject };

export const formatValue = (value: CSVScalar): string => {
  const str =
    value === null || value === undefined
      ? ""
      : typeof value === "number"
        ? nf.format(value)
        : typeof value === "boolean"
          ? String(value)
          : value; // string
  return str.includes(",") ||
    str.includes('"') ||
    str.includes("\n") ||
    str.includes("\r")
    ? `"${str.replace(/"/g, '""')}"`
    : str;
};

const prefixObjectKeys = <T>(
  obj: Record<string, T>,
  prefix: string,
): Record<string, T> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [prefix + "." + key, value]),
  );

export const flattenSimpleObject = (
  obj: SimpleObject,
): Record<string, CSVScalar> => {
  return Object.entries(obj).reduce<Record<string, CSVScalar>>(
    (acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        return {
          ...acc,
          ...prefixObjectKeys<CSVScalar>(flattenSimpleObject(value), key),
        };
      }
      return { ...acc, [key]: value };
    },
    {},
  );
};

const dataToRow = (obj: SimpleObject, headers: string[]): string => {
  const flattened = flattenSimpleObject(obj);
  return headers.map((key) => formatValue(flattened[key])).join(",");
};

export const dataArrayToCSV = (
  data: SimpleObject[],
  headers: string[],
): string => {
  const headersRow = headers.join(",");
  const rows = data.map((row) => dataToRow(row, headers));
  return [headersRow, ...rows].join("\n");
};

export const downloadCSV = (
  data: SimpleObject[],
  headers: string[],
  filename: string,
) => {
  const csv = dataArrayToCSV(data, headers);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
