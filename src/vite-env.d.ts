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

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URL: string;
  readonly VITE_KEYCLOAK_URL: string;
  readonly VITE_LOGIN_FLOW?: string;
  readonly VITE_BUILD_VERSION?: string;
  readonly VITE_HASURA_ADMIN_SECRET?: string;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
