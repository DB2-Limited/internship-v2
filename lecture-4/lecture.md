# Lecture 4

### HTML template engines
- Pug
- Nunjucks
- Embedded JS
- Handlebars
- Mustache

###### Pug
**Features:**
- Works with any build tools or render engine on Node server
- Can be integrated into Vue / React / Angular
- Less HTML code
- Requires a strict awareness of whitespace
- Possibility to write JS in the template
- Possibility to insert content from one file into another
- Template inheritance
- `.pug` file extension

**Pug references:**
- Variables
- Case (JS `switch` analog)
- Code (inline JS code in the template)
- Conditionals (`if`, `else if`, `else`, `unless`)
- Filters (using other languages in your templates, e.g. Markdown or CoffeScript)
- Includes (content from one file to another)
- Extends & Block (recursive inheritance)
- String Interpolation
- Iteration (`each`, `while`)
- Mixins

###### Nunjucks
**Features:**
- Works with any build tools or render engine on Node server
- Can be integrated into Vue / React / Angular (?)
- Possibility to insert content from one file into another
- Possibility to write custom function and use them in your template
- Template inheritance
- `.njk` file extension

**Nunjucks references:**
- Variables
- Inheritance
- Tags (`if`, `for`, `asyncEach`, `asyncAll`, `macro`, `set`, `extends`, `block`, `include`, `import`, `raw`, `verbatim`, `filter`, `call`)
- Expressions
- Global functions
- Builtin and custom filters

### Tooling

**Build tools** - automation tool for repetitive work that have to be done.

- Gulp
- Webpack
- Grunt
- *... etc*

**Gulp useful plugins:**
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-cached](https://www.npmjs.com/package/gulp-cached)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)

