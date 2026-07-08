import jsse from "@jsse/eslint-config";

export default jsse({
  debug: false,
  typescript: {
    strict: true,
  },
  reportUnusedDisableDirectives: true,
  prettier: true,
  sortImports: true,
});
