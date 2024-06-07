/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    NonNullable<unknown>,
    NonNullable<unknown>,
    never
  >;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_BUILD_VERSION?: string;
  readonly VITE_IMPORT_PROFILE?: string;
  readonly VITE_KEYCLOAK_URL: string;
  readonly VITE_GRAPHQL_HTTP: string;
  readonly VITE_HASURA_ADMIN_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
