
# 4d-5-mdb_advanced_features.md

Running through MDB's
[Advanced features tutorial](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/about/

# Page 1: [Advanced features tutorial](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/about/)

Yes, finally getting to the nitty gritty of what I need for the `whole_shebang`, including:

- Linting
- [Vite](https://mdbootstrap.com/docs/standard/getting-started/vite-integration/)

Most of this page is an overview of subsequent pages.

# Page 2: [Vite](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/vite/)

While I am used to using vite with React, this page shows how to use vite alone.

- [x] Step 2.1 - Launch the terminal and download Vite starter via MDB CLI

Project is in `vite/projects/4-my_mdb_adventure/4e-mdb_cli-mdb_advanced_features`.

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure
$ mkdir tmp
$ mdb init
? Choose project to initialize mdb5-free-standard-vite
[====================================================================================================] 0.0 s
Project starter will be downloaded to /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/tmp/mdb5-free-standard-vite folder
Success Download completed.
$ cd ..
$ mv tmp/mdb5-free-standard-vite/ .
$ mv mdb5-free-standard-vite 4e-mdb_cli-mdb_advanced_features
$ rmdir tmp
$
```
- [x] Step 2.2 - Install dependencies

```
$ cd 4e-mdb_cli-mdb_advanced_features/
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/4e-mdb_cli-mdb_advanced_features
$ npm install

added 673 packages, and audited 674 packages in 39s

84 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$
```
- [x] Step 2.3 - Launch Vite

```
npm start
```

- [x] 2.3.1. Visit app at [localhost:8080](http://localhost:8080/).
- [x] 2.3.2. Open directory in VSCode and open file `index.html`
- [x] 2.3.3. Edit `index.html` to say some sort of greeting

# Page 3: [SASS/SCSS](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/sass-scss/)

SASS/SCSS provides web designers with these additional features:

- Variables
- Nesting
- Modules
- Mixins
- Extend/Inheritance
- Operators

## 3.1. How to use SCSS in MDB?

SCSS requires a preprocessor to turn it into CSS that browsers can understand.

- The following process shows how to ensure vite is running this preprocessor:

- [ ] Step 3.1.1. - open `src/scss/style.scss` and find the following line in it:

```
@import 'mdb-ui-kit/css/mdb.min.css';
```

In the project I have, this is the only line in the file!

- [ ] Step 3.1.2. - add the following code to *just **before** *this line:

```
$color: red;

body {
    background-color: $color;
}

@import 'mdb-ui-kit/css/mdb.min.css';   /* Note: this line already exists in src/scss/style.scss */
```

Note that:

- The code above initializes a variable, which is not allowed in CSS
- The code above works, turning the background red and proving that vite is preprocessing SCSS code

## 3.2. Variables

- The latest version of CSS supports variables, but many older browsers do not
- In SCSS, use a dollar sign `$` and a colon `:` to declare a variable
  - For example: `$color-primary: #3B71CA;`

## 3.3. Nesting

- *Nesting* allows us to organize CSS hierarchically, much as we organize HTML
- Following is an example of some SCSS:

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

- The preceding SCSS compiles into the following CSS:
```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

## 3.4. Modules

- The following example shows how to use the SCSS `@use` directive to allow one file to include another:

```
// styles.scss file

@use 'base';     /* includes a file named "_base.scss"

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```
## 3.5. Mixins

*Mixins* are kind of like functions, in that they allow including predefined styles and
substituting different values for a variable.

- *Mixins* allow the reuse of a set of styles with different values for certain variables
- The following code shows how to use a *mixin* in SCSS, and what the resultant CSS looks like:

```
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

The resultant CSS:

```
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```

## 3.6. Extend/Inheritance

- Use the `@extend` directive *"to transfer a set of CSS attributes from one selector to another"*
- The following sample SCSS shows how to use placeholder classes to create a message system:

```
/* This CSS will print because %message-shared is extended. */
%message-shared {                  // Note "%" instead of "."
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {                  // Note "%" instead of "."
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend .message-shared;
}

.success {
  @extend .message-shared;
  border-color: green;
}

.error {
  @extend .message-shared;
  border-color: red;
}

.warning {
  @extend .message-shared;
  border-color: yellow;
}
```

The resultant output CSS:

```
/* This CSS will print because .message-shared is extended. */
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

**Notes:**

- Extending nested classes *"can cause unintended selectors in your CSS"*
- The `%equal-heights` class is never "printed" because it is never extended

## 3.7. Operators

- The math operators that SCSS supports include:
  - `+`, `-`, `*`, and `%`
  - `math.div()`

This SCSS, and the CSS following it, shows how to use a few of these operators:

```
.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```

```
.container {
  display: flex;
}

article[role="main"] {
  width: 62.5%;
}

aside[role="complementary"] {
  width: 31.25%;
  margin-left: auto;
}
```

This page ends with a link to the
[official guide](https://sass-lang.com/guide)
of the SASS language.

# Page 4: [Optimization](https://mdbootstrap.com/docs/standard/getting-started/optimization/)

- Shows how to use the PurgeCSS tool to *"**reduce the weight** of an MDBootstrap package by **up to 90%**"*
  - It works by removing CSS and JS that is not used
- This is very easy to do with vite - simply run `build`

```
$ npm run build

> mdb-starter-vite@1.0.0 build
> vite build

vite v3.2.7 building for production...
✓ 7 modules transformed.
../dist/index.html         1.79 KiB
../dist/assets/index.css   43.65 KiB / gzip: 9.47 KiB
../dist/assets/index.js    152.41 KiB / gzip: 46.12 KiB
$
```

For more information about *optimization,* see the MDB
[optimization docs](https://mdbootstrap.com/docs/standard/getting-started/optimization/).

# Page 5: [Utility API](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/utility-api/)

- A *"utility-first approach"* to CSS entails *"writing code with 'small' CSS classes ... instead of creating 'big' classes"*
  - These classes *"closely correspond to and constrained to a given CSS property"*
  - For example, using a `.bg-red` class to represent `background-color: red;`
- This looks kind of cool, an I don't want to dive into it right now, but will take a few moments to list the steps:

- Step 1 - import source files
  - In `/src/scss/style.scss`:
    - Change `@import 'mdb-ui-kit/css/mdb.min.css';` to `@import 'mdb-ui-kit/src/scss/mdb.free.scss';`
- Step 2 - create utility
  - Their example  rotates elements by using the `transform` CSS property
  - For the source SCSS and resultant generated CSS, see the two code boxes below (*)
- Step 3 - use the newly created utility classes in HTML
  - An example of how to add the class to a line of HTML:
    - `<img class="transform-90" src="https://mdbootstrap.com/img/new/avatars/2.jpg">`
- Step 4 - make it responsive
  - Adding `responsive: true` adds responsive classes containing the infix `-lg-`, etc.
- Step 5 - add state
  - By adding `state: hover` or `state: focus` to the `"transform"`

(*) This code box shows the source SCSS:

```
$utilities: (
  "transform": (
    property: transform,
    values: (
      0: rotate(0deg),
      10: rotate(10deg),
      30: rotate(30deg),
      45: rotate(45deg),
      90: rotate(90deg),
      180: rotate(180deg),
    )
  )
);

@import 'mdb-ui-kit/src/scss/mdb.free.scss';
```

(*) This code box shows the generated CSS:

```
.transform-0 {
  transform: rotate(0deg) !important
}

.transform-10 {
  transform: rotate(10deg) !important
}

.transform-30 {
  transform: rotate(30deg) !important
}

.transform-45 {
  transform: rotate(45deg) !important
}

.transform-90 {
  transform: rotate(90deg) !important
}

.transform-180 {
  transform: rotate(180deg) !important
}
```

# Page 6: [Customization](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/customization/)

- This page shows how to override defaults by editing `/src/scss/styles.scss`
- This technique makes it easy to change the default values for an entire site in just one place
- The example shows how to override the default value for rounding corners in cards and buttons

- Step 1 - have a look at the API tab
  - Pages describing elements in the MDB documentation generally have an "API" tab
    - Ensure you are looking at the "API" tab
    - Under *"SCSS variables,"* click on "</> SHOW CODE" to see the default values
  - For example, see the [MDB cards page](https://mdbootstrap.com/docs/standard/components/cards/#docsTabsAPI)
    - This opens to the "API" tab
- Step 2 - modify the selected variable in the `/src/scss/styles.scss` file
  - See the default value we want to change: `$card-border-radius: 0.5rem;`
  - The following code box shows how to update `/src/scss/styles.scss` to set this default to `1rem`

```
$card-border-radius: 1rem;
@import 'mdb-ui-kit/src/scss/mdb.free.scss';
```

# Page 7: [Internationalization (i18n)](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/internationalization/)

- This page shows how to enable translation of your site to a set of languages
- This example uses vite and builds on the project we have already started
  - See the project in `vite/projects/4-my_mdb_adventure/4e-mdb_cli-mdb_advanced_features`
- This is quite cool but I see no reason to go through these steps at this time
  - However, here is a list of the steps involved:

- Step 1 - install dependencies
  - Run `npm install ...` to install:
    - `i18next` - *"a very popular internationalization framework"*
    - `i18next-fetch-backend` - *"plugin to load resources using the fetch API"*
- Step 2 - prepare structure
- Step 3 - add translated content
  - Create a `*.json` file for each language you want to support
  - The example shows an `en.json`, `pl.json`, `ja.json`, and a `de.json`
- Step 4 - import i18next and finish the configuration
  - The page shows the changes that need to be made to `/src/js/i18n.js`
- Step 5 - import the Translator
  - Add the lines in the following code box to `/src/js/i18n.js`
- Step 6 - add example HTML content

```
import Translator from './i18n';
new Translator;
```

**Note:** Here is a link to the [MDB Internationalization Demo](https://mdb-standard-i18n.mdbgo.io/)

# Page 8: [RTL](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/rtl/)

- This page shows how to support languages read from Right-to-Left
  - Nice and good to know, but I am focused on another goal right now!

# Page 9: [VSC snippets](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/vsc-snippets/)

- This page shows how to install and use a VSCode extension named *"MDB 5 Standard snippets"*
- [x] Step 1 - install Visual Studio Code
  - Done, weeks ago
- [x] Step 2 - install MDB snippet extension
  - Found and installed in my install of VSCode
- [x] Step 3 - test if it works
  - As suggested, I tried typing `mdbc` for an MDB Card
  - Yes it works, and I can see how it would save *a lot* of typing!

**Note:** Starting about halfway down,
[this Page of the tutorial](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/vsc-snippets/)
contains a list of *"Available snippets"*.

# Page 10: [Theming and dark mode](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/theming-and-dark-mode/)

- This feature is available only in **MDB Pro**
- Should I ever decide to purchase **MDB Pro,** this page provides a discount code

