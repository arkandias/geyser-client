import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.development.local" });

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.VITE_GRAPHQL_URL ?? ""]: {
      headers: {
        "x-hasura-admin-secret": process.env.VITE_HASURA_ADMIN_SECRET ?? "",
      },
    },
  },
  documents: ["src/graphql/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
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
};

export default config;
