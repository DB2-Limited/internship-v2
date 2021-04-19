# Lecture 3

### HTML5 & CSS3 intro

###### HTML 5

- **New Doctype:** HTML5 has a new doctype function where you only need to write and you are ready to go. There is no struggle of memorizing complicated and difficult codes. The declaration is very simple in this version and it allows browsers to render page in the standard mode.
- **Media Support:** HTML5 brings you an outstanding audio and video support. You can easily add audio and video files to make your website look lively and engaging.
- **Flawless content editing:** The current HTML version has an attribute called contenteditable that helps you edit content quickly and easily. This can help in taking advantage of local storage and various other uses.
- **Article and Section:** The HTML5 is provided with two semantic tags `<article>` and `<section>` to help you increase your search engine visibility. This will facilitate users to compose an article into multiple sections and integrate multiple articles into a single section.
- **The Figure element:** The previous versions of HTML lack the ability to provide any caption for the image. The previous HTML versions did not provide any way to associate the caption to make it more informative and comprehensive. However, in HTML5 there is new figure element which can be combined with element in order to easily associate caption with the other elements of an image.

###### CSS 3

- **Box Shadows:** This is a new feature that allows a content slide beneath are such as footer and it gives an appearance as if it is coming out or sinking into the website. This process is pretty simple and there is no need for the developer to create a new image using JavaScript plugin.
- **Border Images:** CSS3 has introduced a new feature that is border images. This feature allows you to exchange a border with an image. It helps you specify an image in place of a plain solid coloured border.
- **CSS3 selectors:** CSS selectors are more updated and improved in CSS3 version. With these selectors, DOM elements can be chosen on the bases of their attributes easily. There is no need to specify classes and ID’s for each and every element. You can use the field elements to perform styling functions.
- **Font Additions:** Adding fonts is easy in CSS3 and all you need to do is just upload the file to your server, link to the CSS file and add fonts as per your choice.
- **Opacity levels:** In previous versions, designers had to create a new image or make use of CSS filters. But in CSS3, you simply have to provide an input that will get the desirable effects.

### Semantic HTML

- The semantic elements added in HTML5 are:
  - `<article>`
  - `<aside>`
  - `<details>`
  - `<figcaption>`
  - `<figure>`
  - `<footer>`
  - `<header>`
  - `<main>`
  - `<mark>`
  - `<nav>`
  - `<section>`
  - `<summary>`
  - `<time>`
- Elements such as `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>` act more or less like `<div>` elements. They group other elements together into page sections. However where a `<div>` tag could contain any type of information, it is easy to identify what sort of information would go in a semantic `<header>` region.
- https://www.w3schools.com/html/html5_semantic_elements.asp
  ![semantic first example](./semantic1.jpg)

```html
<header></header>
<section>
  <article>
    <figure>
      <img />
      <figcaption></figcaption>
    </figure>
  </article>
</section>
<footer></footer>
```

```html
<div id="header"></div>
<div class="section">
  <div class="article">
    <div class="figure">
      <img />
      <div class="figcaption"></div>
    </div>
  </div>
</div>
<div id="footer"></div>
```

### CSS Frameworks

- Bootstrap - https://getbootstrap.com/
- Foundation - https://foundation.zurb.com/
- Bulma - https://bulma.io/
- Semantic UI - https://semantic-ui.com/
- Materialize - https://materializecss.com/
- Pure - https://purecss.io/
- Skeleton - http://getskeleton.com/
- ... _many more_
- https://saravanakumargn.github.io/css-frameworks-compare/ _compare css frameworks_
- https://youtu.be/FEs2jgZBaQA?t=860 _why you don`t need css framework_
- https://medium.com/magnetcoop/do-you-really-need-a-css-framework-767a8434eb76

### Package managers

**Package manager** - command line client with access to an online database(registry) of libraries(packages).

- Pinned versions
- A stable distribution
- Decentralization

  - Stronger encapsulation for dependencies.
  - Advancing semantic versioning.
  - Centralization as a special-case.

- https://www.npmjs.com/
- https://yarnpkg.com/en/

###### NPM

Pros:

- `nvm` or `n`
- audit
  Cons:
- speed
- caching
- security
- problems with package-lock.json
- node-gyp

###### Yarn

Pros:

- `Lerna`
- speed
- caching
- security
- `yarn why <package_name>`
- manage licenses
- predictability

Cons:

- separate install
- sending data to Facebook

###### package.json

- Initializing

```bash
npm init -y
```

- Example with default values

```json
{
  "name": "internship-docs",
  "version": "1.0.0",
  "description": "> The aim of education should be to teach us rather how to think, than what to think.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DB2-Limited/internship.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DB2-Limited/internship/issues"
  },
  "homepage": "https://github.com/DB2-Limited/internship#readme"
}
```

- Licensing

  - https://choosealicense.com/
  - https://help.github.com/en/articles/licensing-a-repository

- Engines

```json
"engines": {
    "node": "12.0.0",
    "npm": "6.9.0"
}
```

###### NPM vs Yarn commands

<table>
<tbody>
    <tr>
      <td><code class="highlighter-rouge">npm install</code></td>
      <td><code class="highlighter-rouge">yarn install</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --flat</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --har</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install --no-package-lock</code></td>
      <td><code class="highlighter-rouge">yarn install --no-lockfile</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --pure-lockfile</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install [package] --save</code></td>
      <td><code class="highlighter-rouge">yarn add [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install [package] --save-dev</code></td>
      <td><code class="highlighter-rouge">yarn add [package] --dev</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn add [package] --peer</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install [package] --save-optional</code></td>
      <td><code class="highlighter-rouge">yarn add [package] --optional</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install [package] --save-exact</code></td>
      <td><code class="highlighter-rouge">yarn add [package] --exact</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn add [package] --tilde</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install [package] --global</code></td>
      <td><code class="highlighter-rouge">yarn global add [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm update --global</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
      <td><code class="highlighter-rouge">yarn global upgrade</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm rebuild</code></td>
      <td><code class="highlighter-rouge">yarn add --force</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm uninstall [package]</code></td>
      <td><code class="highlighter-rouge">yarn remove [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm cache clean</code></td>
      <td><code class="highlighter-rouge">yarn cache clean [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">rm -rf node_modules &amp;&amp; npm install</code> &nbsp;</td>
      <td><code class="highlighter-rouge">yarn upgrade</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm version major</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
      <td><code class="highlighter-rouge">yarn version --major</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm version minor</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
      <td><code class="highlighter-rouge">yarn version --minor</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm version patch</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
      <td><code class="highlighter-rouge">yarn version --patch</code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
    </tr>
  </tbody>
</table>

### Adaptive coding

###### media queries

```css
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width: 321px) {
  /* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 320px) {
  /* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  /* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  /* Styles */
}
/**********
iPad 3
**********/
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  /* Styles */
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  /* Styles */
}
/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Styles */
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  /* Styles */
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
  /* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  /* Styles */
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

/* iPhone 6+, 7+, 8+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

/* iPhone X ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
  /* Styles */
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
  /* Styles */
}
```

- https://www.w3schools.com/css/css3_mediaqueries_ex.asp _responsive intro_
- https://www.sitepoint.com/media-queries-width-vs-device-width/ _width vs device width_
- https://habr.com/ru/post/150071/ _-webkit-device-pixel-ratio_
- https://css-tricks.com/snippets/css/retina-display-media-query/ _-webkit-device-pixel-ratio_

### CSS Preprocessors & Postprocessors

> A traditional preprocessor like Sass gives you a whole bunch of functionality all bundled into one tool, irrespective of whether you need or will use all of those features.
> On the flip side, PostCSS is a blank slate; you can add as many or as few features to your process as you require.

###### Sass

- Preprocessing
- Variables
- Nesting
- Partials
- Extend/Inheritance
- Operators

- https://sass-lang.com/guide
- https://www.developerdrive.com/10-best-sass-mixins-for-web-developers/ _(mixins)_

```sass
//************************ MIXINS **************************
=placeholder
  &::-webkit-input-placeholder
    @content
  &:-moz-placeholder
    @content
  &::-moz-placeholder
    @content
  &:-ms-input-placeholder
    @content

%clearfix
  *zoom: 1
  &:before, &:after
    content: " "
    display: table
  &:after
    clear: both

@mixin bp-960
  @media (max-width: 960px)
    @content

@mixin bp-768
  @media (max-width: 768px)
    @content


@mixin bp-460
  @media (max-width: 460px)
    @content

//************************ MARGINS *************************
@for $i from 1 through 30
  .#{m-t}-#{$i}
    margin-top: 0px + $i

@for $i from 1 through 30
  .#{m-b}-#{$i}
    margin-bottom: 0px + $i

//************************ PADDINGS *************************
@for $i from 1 through 30
  .#{p-t}-#{$i}
    padding-top: 0px + $i

@for $i from 1 through 30
  .#{p-b}-#{$i}
    padding-bottom: 0px + $i

```

###### PostCSS

[precss](https://github.com/jonathantneal/precss) – is a tool that allows you to use Sass-like markup in your CSS files. Enjoy a familiar syntax with variables, mixins, conditionals, and other goodies.

[cssnext](https://github.com/cssnext/cssnext/) – is a CSS transpiler that allows you to use the latest CSS syntax today. It transforms CSS specs into more compatible CSS so you don’t need to wait for browser support.

[level4](https://github.com/stephenway/level4) – allows you to use W3C CSS Level 4 Modules Today with PostCSS. Take advantage of future techniques like variables, custom selectors, color functions, and new pseudo selectors.

[rucksack](http://simplaio.github.io/rucksack/) – contains plugins to speed up CSS development with new features and shortcuts.

[cssnano](http://cssnano.co/) – contains plugins that optimize CSS size for use in production.
