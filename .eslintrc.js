module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["import"],
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
    quotes: [2, "double", { avoidEscape: true }],
    indent: ["error", 2], // space indentation
    // "indent": ["error", "tab"] // tabbed indentation
    "max-len": "off", // disables line length check
    "vue/comment-directive": 0,
  },
};
