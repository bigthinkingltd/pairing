import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier"

export default [
  {
    files: ["**/*.js"],
    plugins: {
      prettier
    },
    languageOptions: {
        sourceType: "commonjs"
    }
  },
  {
    languageOptions: {
       globals: {
        ...globals.node,
          it: "readonly",
          describe: "readonly",
          expect: "readonly"
      },
    }
  },
  pluginJs.configs.recommended,
];