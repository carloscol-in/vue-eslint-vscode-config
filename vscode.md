# Linting Vue.js on VS Code

Add ESLint to Vue project by running on the CLI at the root of your project:

```
vue add @vue/cli-plugin-eslint
```

Find examples for the files `.editorconfig` and `.eslintrc.js` which will be added automatically generated after.

<br>

---
## VS Code specific configs for Vue.js Linting and Formatting

On `settings.json` use:

```
"eslint.validate": [
    "vue",
    "html",
    "javascript",
    "typescript"
],
"vetur.validation.template": false,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```

<br>

---
## Extensions needed for Linting and Formatting

You can install these extensions by copying the next lines, one by one, on **VS Code**'s Quick Open (ctrl+P).

```
ext install dbaeumer.vscode-eslint
ext install octref.vetur
```

If no changes are reflected, try restarting **VS Code**.

<br>

## ESLint and EditorConfig notes

There are some settings that have to be declared the same both on the `.eslintrc.js` and `.editorconfig` files. Take as an example the indent settings. One is for the editor to indent automatically as you want on ENTER and when clicking TAB (`.editorconfig`), and the other is for linting, warning/error tips on VS Code and on console (`.eslintrc.js`). The one that will be used to format the code on editor save is `.eslintrc.js`.