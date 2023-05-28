
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

# Page 3: [Sass/scss](https://mdbootstrap.com/learn/mdb-foundations/mdb-advanced-features/sass-scss/)

Sass/scss provides web designers with these additional features:

- Variables
- Nesting
- Modules
- Mixins
- Extend/Inheritance
- Operators

## 3.1. How to use scss in MDB?

Scss requires a preprocessor to turn it into CSS that browsers can understand.

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
- The code above works, turning the background red and proving that vite is preprocessing scss code

## 3.2. Variables

- The latest version of CSS supports variables, but many older browsers do not
- In Scss, use a dollar sign `$` and a colon `:` to declare a variable
  - For example: `$color-primary: #3B71CA;`

## 3.3. Nesting

- *Nesting* allows us to organize CSS hierarchically, much as we organize HTML
- Following is an example of some Scss:

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

- The preceding Scss compiles into the following CSS:
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

- The following example shows how to use the Scss `@use` directive to allow one file to include another:

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
- The following code shows how to use a *mixin* in Scss, and what the resultant CSS looks like:

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
- 
```
```
## 3.7. Operators
- 
```
```

# Page 4: [Optimization]() 
- 
```
```
# Page 5: [Utility API]() 
- 
```
```
# Page 6: [Customization]() 
- 
```
```
# Page 7: [Internationalization (i18n)]() 
- 
```
```
# Page 8: [RTL]() 
- 
```
```
# Page 9: [VSC snippets]() 
- 
```
```
# Page 10: [Theming and dark mode]() 
- 
```
```

- [ ] Step 1 - 
- [ ] Step 2 - 
- [ ] Step 3 - 
- [ ] Step 4 - 
- [ ] Step 5 - 
- [ ] Step 6 - 
- [ ] Step 7 - 
- [ ] Step 8 - 
## Step 1 - 
## Step 2 - 
## Step 3 - 
## Step 4 - 
## Step 5 - 
## Step 6 - 
## Step 7 - 
## Step 8 - 
