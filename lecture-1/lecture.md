# Lecture 1

### Welcome

![Welcome](welcome.gif)

### IDE setup and configuration

- https://code.visualstudio.com/download
- https://www.jetbrains.com/webstorm/download/

### IDE extensions

###### VScode:

- **Settings Sync** - https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
- **WakaTime** - https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime
- **Bracket Pair Colorizer** - https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
- **One Dark Pro** - https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme
- **One Dark+** - https://marketplace.visualstudio.com/items?itemName=anjmao.dark-plus-pro
- **ESLint** - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- **TSLint** - https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
- **Prettier** - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- **Vetur** - https://marketplace.visualstudio.com/items?itemName=octref.vetur
- **Rainbow CSV** - https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv
- **IntelliJ IDEA Keybindings** - https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings
- **Docker** - https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
- **TODO Highlight** - https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight
- **YAML** - https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
- **SASS** - https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented
- ...
- https://marketplace.visualstudio.com/

###### WebStorm:

- **WakaTime** - https://plugins.jetbrains.com/plugin/7425-wakatime
- **Markdown** - https://plugins.jetbrains.com/plugin/7793-markdown
- **Awesome Console** - https://plugins.jetbrains.com/plugin/7677-awesome-console
- **LiveEdit** - https://plugins.jetbrains.com/plugin/7007-liveedit
- **BashSupport** - https://plugins.jetbrains.com/plugin/4230-bashsupport
- ...
- https://plugins.jetbrains.com/webstorm

### Code snippets, multicursors, hotkeys

###### Snippets

- https://code.visualstudio.com/docs/editor/userdefinedsnippets
- https://blog.jetbrains.com/webstorm/2018/01/using-and-creating-code-snippets/

###### Multicursors

- https://code.visualstudio.com/docs/getstarted/tips-and-tricks
- https://blog.jetbrains.com/ruby/2014/03/whats-mining-multiple-cursors-and-selection/
- https://www.jetbrains.com/help/rider/Working_in_the_Editor.html

###### Hotkeys

pdf cheat sheet: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

- https://code.visualstudio.com/docs/getstarted/keybindings
- https://www.jetbrains.com/help/rider/Reference_Keymap_Rider.html
- https://resources.jetbrains.com/storage/products/webstorm/docs/WebStorm_ReferenceCard.pdf

### BEM

- https://nicothin.pro/idiomatic-pre-CSS/
- https://ru.bem.info/methodology/quick-start/

### Code style

- https://learn.javascript.ru/coding-style

- https://prettier.io/

code for `.prettierrc`

```
{
    "printWidth": 120,
    "singleQuote": true,
    "useTabs": false,
    "tabWidth": 2,
    "semi": true,
    "bracketSpacing": true
  }

```

- https://editorconfig.org/

code for `.editorconfig`

```
# Editor configuration, see https://editorconfig.org

root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
[*.md]

max_line_length = off
trim_trailing_whitespace = false
```

- eslint recommended list of rules:
  https://eslint.org/docs/rules/
- eslint boilerplate template: https://github.com/travishorn/eslint-prettier-boilerplate

- code from lecture https://github.com/IgorKurkov/eslint-prettier-editorconfig-boilerplate

### Vscode settings for prettier formatOnSave

(ctrl+shift+P, select settings.json)

```
// Enable per-language
"[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

### ESLint

- Airbnb, https://github.com/airbnb/javascript
- Standard, https://github.com/standard/standard
- Google, https://github.com/google/eslint-config-google

```json
{
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "template-curly-spacing": ["error", "always"],
    "no-cond-assign": ["error", "always"],
    "no-console": "off",
    "eol-last": "error"
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 8
  }
}
```
