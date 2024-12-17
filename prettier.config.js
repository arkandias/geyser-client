export default {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^node:",
    "<THIRD_PARTY_MODULES>",
    // Local
    "^[@.]/(?!(css|components|pages)/)",
    // CSS
    "^[@.]/css/",
    // Vue components
    "^[@.]/(components|pages)/",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: false,
  // importOrderParserPlugins: ["typescript"],
  importOrderSideEffects: true,
};
