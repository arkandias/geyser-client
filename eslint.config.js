// @ts-check

// @ts-expect-error no types declaration for @eslint/js
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
// @ts-expect-error no types declaration for eslint-plugin-vue
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["src/gql/"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["*.js", "src/**/*.js"],
    ...eslint.configs.recommended,
  },
  {
    files: ["*.ts", "src/**/*.ts", "src/**/*.vue"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...pluginVue.configs["flat/recommended"],
    ],
    plugins: { "typescript-eslint": tseslint.plugin },
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".vue"],
        parser: tseslint.parser,
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
      // does not work with type definitions
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { ignoreRestSiblings: true },
      ],
      // TS already checks for that, and Typescript-Eslint recommends to disable it
      // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "no-undef": "off",
      // Uncategorized eslint-plugin-vue rules
      "vue/block-lang": ["error", { script: { lang: "ts" } }],
      "vue/block-order": ["warn", { order: ["script", "template", "style"] }],
      "vue/block-tag-newline": [
        "warn",
        {
          singleline: "always",
          multiline: "always",
          maxEmptyLines: 0,
        },
      ],
      "vue/component-api-style": ["error", ["script-setup", "composition"]],
      "vue/component-name-in-template-casing": [
        "warn",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],
      "vue/custom-event-name-casing": ["warn", "camelCase"],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-macros-order": [
        "warn",
        {
          order: [
            "defineModel",
            "defineProps",
            "defineEmits",
            "defineSlots",
            "defineOptions",
          ],
          defineExposeLast: true,
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
      "vue/match-component-file-name": [
        "error",
        {
          extensions: ["vue"],
          shouldMatchCase: true,
        },
      ],
      "vue/match-component-import-name": ["error"],
      "vue/next-tick-style": ["error", "promise"],
      "vue/no-boolean-default": ["error", "default-false"],
      "vue/no-duplicate-attr-inheritance": ["warn"],
      "vue/no-ref-object-reactivity-loss": ["warn"],
      "vue/no-required-prop-with-default": ["warn"],
      "vue/no-root-v-if": ["warn"],
      "vue/no-setup-props-reactivity-loss": ["warn"],
      "vue/no-template-target-blank": [
        "error",
        {
          allowReferrer: false,
          enforceDynamicLinks: "never",
        },
      ],
      "vue/no-undef-components": [
        "error",
        {
          // Quasar components and Vue Router
          ignorePatterns: ["q(\\-\\w+)+", "router\\-view", "router\\-link"],
        },
      ],
      "vue/no-undef-properties": ["warn"],
      "vue/no-unused-emit-declarations": ["warn"],
      "vue/no-unused-properties": ["warn"],
      "vue/no-unused-refs": ["warn"],
      "vue/no-use-v-else-with-v-for": ["warn"],
      "vue/padding-line-between-blocks": ["warn", "always"],
      "vue/prefer-define-options": ["error"],
      "vue/prefer-prop-type-boolean-first": ["warn"],
      "vue/prefer-true-attribute-shorthand": ["warn"],
      "vue/require-explicit-slots": ["warn"],
      "vue/require-expose": ["warn"],
      "vue/require-macro-variable-name": [
        "warn",
        {
          defineProps: "props",
          defineEmits: "emit",
          defineSlots: "slots",
          useSlots: "slots",
          useAttrs: "attrs",
        },
      ],
      "vue/require-typed-object-prop": ["warn"],
      "vue/require-typed-ref": ["warn"],
      "vue/v-for-delimiter-style": ["warn", "in"],
      "vue/valid-define-options": ["error"],
    },
  },
  eslintConfigPrettier,
);
