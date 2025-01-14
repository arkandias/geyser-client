import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.development.local" });

const GRAPHQL_URL = process.env["VITE_GRAPHQL_URL"];
const HASURA_ADMIN_SECRET = process.env["VITE_HASURA_ADMIN_SECRET"];
if (!GRAPHQL_URL) {
  throw new Error("VITE_GRAPHQL_URL environment variable is required");
}
if (!HASURA_ADMIN_SECRET) {
  throw new Error("VITE_HASURA_ADMIN_SECRET environment variable is required");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [GRAPHQL_URL]: {
      headers: {
        "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET,
      },
    },
  },
  documents: [
    "src/**/*.graphql",
    "src/**/*.ts",
    "src/**/*.vue",
    "!src/gql/**/*",
  ],
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: true,
      },
      config: {
        useTypeImports: true,
      },
    },
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
