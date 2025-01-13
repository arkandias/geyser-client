import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
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
  },
};

export default config;
