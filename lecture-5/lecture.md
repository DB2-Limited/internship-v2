# Lecture 5

### Webpack intro
>At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

 - Dependency graph
 - Lazy load modules as chunks
 - Code optimization
 - Live reload
 - Preprocessors
 - Integrations (PHP/Java/Gulp/Grunt)
 
https://webpack.js.org
 
 
###### Browser Compatibility
webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions.

### Configuration file
- Entry - by default its value is ./src/index.js, but you can specify a different (or multiple entry points)
- Output - It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

```js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

https://webpack.js.org/configuration/

### Modules
In modular programming, developers break programs up into discrete chunks of functionality called a module.

Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation boundaries, so that each module has a coherent design and a clear purpose within the overall application.

Node.js has supported modular programming almost since its inception. On the web, however, support for modules has been slow to arrive. Multiple tools exist that support modular JavaScript on the web, with a variety of benefits and limitations. webpack builds on lessons learned from these systems and applies the concept of modules to any file in your project.

In contrast to Node.js modules, webpack modules can express their dependencies in a variety of ways. A few examples are:
- An ES2015 import statement
- A CommonJS require() statement
- An AMD define and require statement
- An @import statement inside of a css/sass/less file.
- An image url in a stylesheet (`url(...)`) or html (`<img src=...>`) file.
> webpack 1 requires a specific loader to convert ES2015 import, however this is possible out of the box via webpack 2

https://auth0.com/blog/javascript-module-systems-showdown/

### Loaders
>Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

At a high level, loaders have two properties in your webpack configuration:

The `test` property identifies which file or files should be transformed.
The `use` property indicates which loader should be used to do the transforming.

###### webpack.config.js
```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

#### Styles loader
To allow Webpack to process our styles when required we are going to install css and style loaders.

```bash
npm install -D css-loader style-loader
```

The `css-loader` will interpret styles as dependencies and the `style-loader` will automatically include a `<style>` tag with them on the page when the bundle loads.

```js
rules: [
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' }
    ]
  }
]
```

#### Preprocessors
```js
rules: [
  {
    test: /\.sass/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ]
  }
]
```

#### Transpiling
```js
rules: [
  {
    test: /\.js$/,
    use: [
      { loader: 'babel-loader' }
    ]
  }
]
```
#### Images
Webpack has a great feature where it can detect url() statements inside stylesheets and let loaders apply changes to the image file and the url itself.
```sass
// index.sass file

@import 'sass/vars';

body
  background-color: @background-color
  color: @text-color

.logo
  background-image: url('./images/logo.svg')
```
By adding one rule, we could apply the file-loader to just copy the file or use the url-loader, the latest inlines the image as a base64 string unless it exceeds a byte limit, in which case it will replace the url statement with a relative path and copy the file to the output location for us.

```js
rules: [
    {
      test: /\.svg$/,
      use: [
        {
           loader: 'url-loader',
           query: { limit : 10000 }
        }
      ]
    }
]
```

- https://regexr.com/
- https://github.com/webpack/docs/wiki/list-of-loaders
- https://hackernoon.com/webpack-loaders-and-plugins-for-your-new-progressive-web-app-378e09f469

### Plugins
Webpack contains default behaviors to bundle most type of resources. When loaders are not enough, we can use plugins to modify or add capabilities to Webpack.

#### Extracting Assets
A common use for a plugin is to extract the generated stylesheet and load it as we normally do using a `<link>` tag.
```js
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let lessRules = {
  use: [
    { loader: 'css-loader' },
    { loader: 'less-loader' }
  ]
};

let baseConfig = {
  // ...
  module: {
    rules: [
      // ...
      { test: /\.less$/, use: ExtractTextPlugin.extract(lessRules) }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
};
```

#### Generate an `index.html` file
```js
let HTMLWebpackPlugin = require('html-webpack-plugin');

let baseConfig = {
  // ...
  plugins: [
    new HTMLWebpackPlugin()
  ]
};
```

https://webpack.js.org/plugins/


### Hot reload webpack-dev-server

```bash
npm install -D webpack-dev-server
```

```js
devServer: {
  contentBase: './dist'
}
```

```json
"start": "webpack-dev-server --open",
```

https://webpack.js.org/guides/development/#using-webpack-dev-server


- https://learn.javascript.ru/screencast/webpack (вебпэк, версия 1)
- https://medium.com/statuscode/what-i-expect-from-a-front-end-architecture-31b9be4498af

### Architectures

![Structure](structure-example.png ':size=300x550')
