import { fileURLToPath } from "node:url";
import type { Config } from "prettier";

function resolvePlugin(pkg: string): string | undefined {
  try {
    return fileURLToPath(import.meta.resolve(pkg));
  } catch {
    return undefined;
  }
}

export default {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "lf",
  proseWrap: "always",
  overrides: [
    { files: ["**/*.md"], options: { proseWrap: "always" } },
    { files: ["**/jsr.json"], options: { parser: "json-stringify" } },
    // "IGNORES" -- prettier cfg dont let you ignore things so this is a hacky
    // way to have prettier kinda ignore things.
    {
      files: [
        // package managers & lock files et al
        "**/pnpm-lock.yaml",
        "**/*.yarm/**",
        "**/yarn.lock",
        "**/package-lock.json",
        "**/.pnp.*",
        "**/.cache/**",
        // documentation
        "**/CHANGELOG*.md",
        "**/LICENSE*",
        // build artifacts
        "**/build/**",
        "**/dist/**",
        "**/.heft/**",
        "**/.rush/**",
        "**/.next/**",
        "**/*.min.*",
        "**/.changeset/**",
        "**/.idea/**",
        "**/.output/**",
        "**/.wireit/**",
        "**/__snapshots__/**",
        "**/auto-import?(s).d.ts",
        "**/coverage/**",
        "**/node_modules/**",
        "**/output/**",
        "**/*.bak",

        // tmp/scratch/bak dirs
        "**/.temp/**",
        "**/.tmp/**",
        "**/tmp/**",
        "**/temp/**",
        "**/temp/**",
        "**/_temp/**",
        "**/_tmp/**",
        "**/_scratch/**",
        "**/scratch/**",
      ],
      options: { requirePragma: true },
    },
  ],
  plugins: ["@prettier/plugin-oxc"]
    .map((plugin) => resolvePlugin(plugin))
    .filter((plugin): plugin is string => plugin !== undefined),
} satisfies Config;
