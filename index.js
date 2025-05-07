// @ts-check

/** @type {import('prettier').Config} */
export default {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "lf",
  proseWrap: "always",
  overrides: [
    {
      files: ["**/jsr.json"],
      options: {
        parser: "json-stringify",
      },
    },
  ],
};
