/// <reference types="vitest/config" />
import { fileURLToPath } from "node:url";

import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2022",
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    quasar({
      autoImportComponentCase: "pascal",
      sassVariables: fileURLToPath(
        new URL("./src/css/quasar.variables.scss", import.meta.url),
      ),
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/css/global.variables.scss";`,
      },
    },
  },
  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: "happy-dom",
    environmentOptions: {
      happyDOM: {
        url: "about:blank",
      },
    },
  },
});
