import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.development.local" });

export default {
  overwrite: true,
  schema: {
    [process.env["VITE_GRAPHQL_URL"] ?? ""]: {
      headers: {
        "X-Hasura-Admin-Secret": process.env["VITE_HASURA_ADMIN_SECRET"] ?? "",
      },
    },
  },
  documents: ["src/**/*.vue", "src/**/*.ts", "!src/gql/**/*"],
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: true,
      },
      config: {
        useTypeImports: true,
        avoidOptionals: true,
      },
    },
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
} satisfies CodegenConfig;
