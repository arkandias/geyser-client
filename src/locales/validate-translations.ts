import * as fs from "fs/promises";
import { glob } from "glob";

import en from "./en";
import fr from "./fr";
import { CUSTOM_TEXT_KEYS } from "@/config/custom-text-keys.ts";
import { PHASES } from "@/config/phases.ts";
import { RequestTypeEnum, RoleTypeEnum } from "@/gql/graphql.ts";

const locales = [
  { label: "fr-FR", messages: fr },
  { label: "en-US", messages: en },
];

async function main() {
  const keysInFiles = await findKeysInFiles();

  locales.forEach((locale) => {
    console.log(`Validation translations for locale ${locale.label}...`);
    validateTranslations(locale.messages, keysInFiles);
  });
}

type MessagesObj = {
  [key: string]: string | MessagesObj;
};

const flattenObject = (obj: MessagesObj, prefix = ""): string[] =>
  Object.keys(obj).flatMap((key) =>
    typeof obj[key] === "object"
      ? flattenObject(obj[key], prefix + key + ".")
      : [prefix + key],
  );

const validateTranslations = (obj: MessagesObj, keys: string[]) => {
  const definedKeys = flattenObject(obj);

  const missingKeys = keys.filter((key) => !definedKeys.includes(key));

  if (missingKeys.length > 0) {
    console.error(`* MISSING TRANSLATION KEYS:
  - ${missingKeys.join("\n  - ")}`);
  } else {
    console.log("* All used keys are defined in the locale file");
  }

  const unusedKeys = definedKeys.filter((key) => !keys.includes(key));

  if (unusedKeys.length > 0) {
    console.warn(`* UNUSED TRANSLATION KEYS:
  - ${unusedKeys.join("\n  - ")}`);
  } else {
    console.log("* All defined keys are used in the code");
  }
};

const findKeysInFiles = async (): Promise<string[]> => {
  // Find all .vue and .ts files in src directory
  const files = await glob("src/**/*.{vue,ts}");

  // Regex to find all t calls
  const regexAllTCalls = /[^a-zA-Z]t\([^)]*\)/g;

  // Regex for standard patterns
  const regexSingleQuotes = /[^a-zA-Z]t\([\s\n]*'([a-zA-Z.]*)'/g;
  const regexDoubleQuotes = /[^a-zA-Z]t\([\s\n]*"([a-zA-Z.]*)"/g;
  const regexTemplateStrings = /[^a-zA-Z]t\([\s\n]*`([a-zA-Z.${}]*)`/g;

  const standardKeys = new Set<string>();
  const nonStandardKeys = new Set<string>();
  const templateStringsKeys = new Set<string>();

  // Process each file
  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    let allMatch: RegExpExecArray | null;

    // Reset regex before use
    regexAllTCalls.lastIndex = 0;

    // Find all t calls
    while ((allMatch = regexAllTCalls.exec(content)) !== null) {
      const fullCall = allMatch[0];

      // Check single quotes
      regexSingleQuotes.lastIndex = 0;
      const singleQuoteMatch = regexSingleQuotes.exec(fullCall);
      if (singleQuoteMatch?.[1]) {
        standardKeys.add(singleQuoteMatch[1]);
        continue;
      }

      // Check double quotes
      regexDoubleQuotes.lastIndex = 0;
      const doubleQuoteMatch = regexDoubleQuotes.exec(fullCall);
      if (doubleQuoteMatch?.[1]) {
        standardKeys.add(doubleQuoteMatch[1]);
        continue;
      }

      // Check template strings
      regexTemplateStrings.lastIndex = 0;
      const templateMatch = regexTemplateStrings.exec(fullCall);
      if (templateMatch?.[1]) {
        templateStringsKeys.add(templateMatch[1]);
        continue;
      }

      nonStandardKeys.add(fullCall);
    }
  }

  if (nonStandardKeys.size > 0) {
    console.error(`Found ${nonStandardKeys.size} non-standard keys:
  - ${Array.from(nonStandardKeys).join("\n  - ")}`);
  }

  // Manually add template string keys

  Object.values(RequestTypeEnum).forEach((type) => {
    standardKeys.add(`requestType.${type}`);
  });
  [...templateStringsKeys].forEach((key) => {
    if (/requestType\.\${[a-zA-Z.]*}/.test(key)) {
      templateStringsKeys.delete(key);
    }
  });

  Object.values(RoleTypeEnum).forEach((type) => {
    standardKeys.add(`role.${type}`);
  });
  [...templateStringsKeys].forEach((key) => {
    if (/role\.\${[a-zA-Z.]*}/.test(key)) {
      templateStringsKeys.delete(key);
    }
  });

  CUSTOM_TEXT_KEYS.forEach((key) => {
    standardKeys.add(`customText.${key}.label`);
    standardKeys.add(`customText.${key}.default`);
  });
  [...templateStringsKeys].forEach((key) => {
    if (/customText\.\${[a-zA-Z.]*}\.(label|default)/.test(key)) {
      templateStringsKeys.delete(key);
    }
  });

  Object.values(PHASES).forEach((phase) => {
    standardKeys.add(`home.subtitle.${phase}`);
    standardKeys.add(`home.message.${phase}`);
  });
  [...templateStringsKeys].forEach((key) => {
    if (/home\.(subtitle|message)\.\${[a-zA-Z.]*}/.test(key)) {
      templateStringsKeys.delete(key);
    }
  });

  ["string", "number", "boolean"].forEach((type) => {
    standardKeys.add(`admin.data.import.table.type.${type}`);
    templateStringsKeys.delete("admin.data.import.table.type.${val}");
  });

  [
    "admin.courses.degrees",
    "admin.teachers.positions",
    "admin.requests.priorities",
    "admin.teachers.serviceModifications",
    "admin.teachers.services",
    "admin.teachers.teachers",
    "admin.requests.requests",
    "admin.courses.courses",
    "admin.courses.programs",
    "admin.teachers.serviceModificationTypes",
    "admin.courses.tracks",
    "admin.courses.types",
  ].forEach((keyPrefix) => {
    standardKeys.add(`${keyPrefix}.form.title.none`);
    standardKeys.add(`${keyPrefix}.form.title.single`);
    standardKeys.add(`${keyPrefix}.form.title.multiple`);
    standardKeys.add(`${keyPrefix}.data.success.insert`);
    standardKeys.add(`${keyPrefix}.data.success.update`);
    standardKeys.add(`${keyPrefix}.data.success.delete`);
    standardKeys.add(`${keyPrefix}.data.success.import`);
    standardKeys.add(`${keyPrefix}.data.success.export`);
    standardKeys.add(`${keyPrefix}.data.confirm.delete.single`);
    standardKeys.add(`${keyPrefix}.data.confirm.delete.multiple`);
    templateStringsKeys.delete("${keyPrefix}.form.title.none");
    templateStringsKeys.delete("${keyPrefix}.form.title.single");
    templateStringsKeys.delete("${keyPrefix}.form.title.multiple");
    templateStringsKeys.delete("${keyPrefix}.data.success.insert");
    templateStringsKeys.delete("${keyPrefix}.data.success.update");
    templateStringsKeys.delete("${keyPrefix}.data.success.delete");
    templateStringsKeys.delete("${keyPrefix}.data.success.import");
    templateStringsKeys.delete("${keyPrefix}.data.success.export");
    templateStringsKeys.delete("${keyPrefix}.export.invalid.message");
    templateStringsKeys.delete("${keyPrefix}.data.confirm.delete.single");
    templateStringsKeys.delete("${keyPrefix}.data.confirm.delete.multiple");
  });

  if (templateStringsKeys.size > 0) {
    console.warn(
      `Found ${templateStringsKeys.size} template string keys (to be checked manually):
  - ${Array.from(templateStringsKeys).join("\n  - ")}`,
    );
  }

  return [...standardKeys];
};

await main();
