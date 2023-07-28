
# 6-wsw_navbar_graphics_sliders.md

- Commands run in `1-whole_shebang` to initialize a minimal "Hello world"-type project using:
  - Vite with Reactjs
  - MDB
  - TypeScript
  - ESLint
- A Navbar that can take us to pages that say "Hello World" in a few different languages

# 1. Commands to Create *"The Whole Shebang"*

**Note:** this summary omits git commands.  You are on your own there!

## 1.1. Optional: Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

## 1.2. Create New Project Using Vite, React, TypeScript, and MDB

```
pwd                                          # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
npm init vite@latest -- --template react-ts  # Use '6-wsw_navbar_graphics_sliders' for the [project_name]
cd 6-wsw_navbar_graphics_sliders
npm i mdb-react-ui-kit
npm i react-router-dom --save                # New - used for menus we will add later
npm run lint
npm run dev
```

## 1.3. Load Into VSCode

Load the new project directory into VSCode and use Shift-Ctrl-M to ensure there are no problems.

## 1.4. Commit to Github

```
pwd          # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/
git commit -m 'Adding whole_shebang/projects/6-wsw_navbar_graphics_sliders/ , which contains the latest npm versions of the packages needed for this project.'
```

# 2. Add MDB Navbars and Test Components

We start by copying the Navbars and trivial components used in `whole_shebang/projects/4-wsw_navbar/`.

## 2.1. Copy the `index*.html` Files

The `index*.html` files contain the home page's top menu options:

- Home icon
- En - Pages in English
- Es - Pages in Spanish
- Fr - Pages in French

**We will update these later.**
For now, run the following commands to copy them as-is.

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/
ls -al 4-wsw_navbar/index*.html
cp 4-wsw_navbar/index*.html 6-wsw_navbar_graphics_sliders/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/index*.html files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/ .'
```

## 2.2. Copy the Language-Specific Files

These files define the trivial components we use for testing the menus.

### 2.2.1. Copy the English `4-wsw_navbar/src/en/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
ls -al 4-wsw_navbar/src/en/
cp -r  4-wsw_navbar/src/en/ 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/en/
git commit -m 'Copied the English language files in whole_shebang/projects/4-wsw_navbar/src/en/ to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/en .'
```

### 2.2.2. Copy the Spanish `4-wsw_navbar/src/es/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
ls -al 4-wsw_navbar/src/es/
cp -r 4-wsw_navbar/src/es/ 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add  whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/es/
git commit -m 'Copied the Spanglish language files in whole_shebang/projects/4-wsw_navbar/src/es/ to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/es .'
```

### 2.2.3. Copy the French `4-wsw_navbar/src/fr/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
ls -al 4-wsw_navbar/src/fr/
cp -r 4-wsw_navbar/src/fr/ whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/fr/
git commit -m 'Copied the French language files in whole_shebang/projects/4-wsw_navbar/src/fr/ to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/fr .'
```


## 2.3. Copy the `src/main*.tsx` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
l 4-wsw_navbar/src/main*
cp  4-wsw_navbar/src/main* 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add  whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/main*
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/src/main* files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/ .'
```

## 2.4. Copy the `src/App*.tsx` Files

These files provide "Hello world" text on the home page for each language.

- Note that this text remains visible after clicking on the time-related options in the top menu for each language-specific page

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
l 4-wsw_navbar/src/App*.tsx
cp 4-wsw_navbar/src/App*.tsx 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/App*
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/src/App*.tsx files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/ .'
```

## 2.5. Copy the `src/*.css` Files

These files provide some basic styles for the app.

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
l 4-wsw_navbar/src/*.css
cp 4-wsw_navbar/src/*.css 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/*.css
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/src/*.css files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/ .'
```

## 2.6. Cleanup Logo Cruft

Ensure there are no lingering references to `*.svg` files, and delete the ones installed by `npm`

```
cd 6-wsw_navbar_graphics_sliders
pwd                              # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders
grep svg index.html src/*.*
git rm public/vite.svg src/assets/react.svg
cd ../../..
pwd       # /var/www/always_learning/always_learning_javascript/
git commit -m 'Removed whole_shebang/projects/6-wsw_navbar_graphics_sliders/public/vite.svg and whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/assets/react.svg because they are crufty and unneeded.'
```

## 2.7. Check for Differences

Run the following series of `diff` commands to ensure we haven't forgotten anything:

- It's ok to ignore differences in files like `.eslintrc.cjs` and `package*.json`
  - These are no doubt due to having run `npm install` at different times
  - That is why it's best to start each new project fresh
- I don't know why there's a `README.md` file in `whole_shebang/projects/6-wsw_navbar_graphics_sliders/` ...
  - ... but *not* one in `whole_shebang/projects/4-wsw_navbar/`
  - *Not* going to worry about this, becuase `README.md` is *not a source file*

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects

diff 4-wsw_navbar/ 6-wsw_navbar_graphics_sliders/
diff 4-wsw_navbar/src/ 6-wsw_navbar_graphics_sliders/src/
diff 4-wsw_navbar/src/en/ 6-wsw_navbar_graphics_sliders/src/en
diff 4-wsw_navbar/src/es/ 6-wsw_navbar_graphics_sliders/src/es
diff 4-wsw_navbar/src/fr 6-wsw_navbar_graphics_sliders/src/fr
```

## 2.8. Sanity Checks

- [x] Check VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run lint` inside the `6-wsw_navbar_graphics_sliders` directory
- [x] Run `npm run dev` inside the `6-wsw_navbar_graphics_sliders` directory
- [x] Check that the `App` is working in the browser

**Note:** at this point, the app should work just like the app in `whole_shebang/projects/4-wsw_navbar`.


# 3. Rename Languages to Quiz Types

## 3.1. Rename Options, `index-*` Files, and `href` Attributes

Rename the options in `index.html`, and  as follows:

- Rename the "En" option to "Big 5"
  - Rename `index-en.html` to `index-big5.html`
  - Update the option's `href` value in `index.html` accordingly
- Rename the "Es" option to "Jungian"
  - Rename `index-es.html` to `index-jungian.html`
  - Update the option's `href` value in `index.html` accordingly
- Rename the "Fr" option to "Enneagram"
  - Rename `index-fr.html` to `index-enneagram.html`
  - Update the option's `href` value in `index.html` accordingly

