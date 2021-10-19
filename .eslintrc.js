module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: [
    "import", // import resolver plugin
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"], // default @ -> ./src alias in Vue, it exists even if vue.config.js is not present
          /*
          *... add your own webpack aliases if you have them in vue.config.js/other webpack config file
          * if you forget to add them, eslint-plugin-import will not throw linting error in .vue imports that contain the webpack alias you forgot to add
          */
        ],
        extensions: [".vue", ".json", ".js"],
      },
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/html-self-closing": "off",
    "indent": ["error", 2], // space indentation
    "max-len": "off", // disables line length check
    "vue/comment-directive": 0,
    "comma-dangle": ["error", {
        "arrays": "always",
        "objects": "always",
        "imports": "always",
        "exports": "always",
        "functions": "never"
    }],
    "no-unused-vars": "off",
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
    }],
    "quotes": ["error", "double"],
  },
};
