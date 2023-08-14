
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
cp 4-wsw_navbar/src/favicon.ico 6-wsw_navbar_graphics_sliders/src/
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

Run the following commands, per the **detailed instructions** below, to

- [x] 1. Rename the options in `index.html`
- [x] 2. Rename the `index-*.html` files
- [x] 3. Update the `href` attributes in `index.html`

```
pwd                                 # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/
vi index.html                       # Change the options' text
git mv index-en.html index-big_five.html
git mv index-es.html index-jungian.html
git mv index-fr.html index-enneagram.html
vi index.html                       # Change the options' href values
git commit -m '....'                # Replace '....' with a good description of the changes
```

Following are **detailed instructions:**

- [x] 1. Rename the "En" option to "Big 5"
  - [x] 1.1. Rename `index-en.html` to `index-big_five.html`
  - [x] 1.2. Update the option's `href` value in `index.html` accordingly
- [x] 2. Rename the "Es" option to "Jungian"
  - [x] 2.1. Rename `index-es.html` to `index-jungian.html`
  - [x] 2.2. Update the option's `href` value in `index.html` accordingly
- [x] 3. Rename the "Fr" option to "Enneagram"
  - [x] 3.1. Rename `index-fr.html` to `index-enneagram.html`
  - [x] 3.2. Update the option's `href` value in `index.html` accordingly

## 3.2. Rename `src/main-*.tsx` Files and Update the `index-*.html` Files Accordingly

Run the commands below to rename the `src/main-*.tsx` files and update the `index-*.html` files as
described in the **detailed instructions:**

```
pwd         # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
git mv main-en.tsx main-big_five.tsx
git mv main-es.tsx main-jungian.tsx
git mv main-fr.tsx main-enneagram.tsx
cd ..
pwd                      # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders
vi index-big_five.html   # Update the src attribute of the <script tag near the end of the file
vi index-enneagram.html  # Update the src attribute of the <script tag near the end of the file
vi index-jungian.html    # Update the src attribute of the <script tag near the end of the file
git add index-*          # The commands renaming the main-* files are already added to this commit
git commit -m '...'      # Replace '....' with a good description of the changes
```

Following are the **detailed instructions:**

- [x] 1. Rename `src/main-en.html` to `src/main-big_five.html`
  - [x] 1.1. Update the value of the `<script` tag's `src` attribute in `index-big_five.html` accordingly
- [x] 2. Rename `src/main-es.html` to `src/main-jungian.html`
  - [x] 2.1. Update the value of the `<script` tag's `src` attribute in `index-jungian.html` accordingly
- [x] 3. Rename `src/main-fr.html` to `src/main-enneagram.html`
  - [x] 3.1. Update the value of the `<script` tag's `src` attribute in `index-enneagram.html` accordingly

## 3.3. Rename the `src/App[EF]*` Files and Update the `src/main-*.tsx Files

Run the commands below to rename the `src/App*.tsx` files and update the `src/main-*.html` files as
described in the **detailed instructions:**

```
pwd         # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
git mv AppEn.tsx AppBigFive.tsx
git mv AppEs.tsx AppJungian.tsx
git mv AppFr.tsx AppEnneagram.tsx
vi AppBigFive.tsx      # Rename the function from AppEn to AppBigFive
vi AppJungian.tsx      # Rename the function from AppEs to AppJungian
vi AppEnneagram.tsx    # Rename the function from AppFr to AppEnneagram
vi main-big_five.tsx   # Change all 3 occurrences of "AppEn" to "AppBigFive"
vi main-jungian.tsx    # Change all 3 occurrences of "AppEs" to "AppJungian"
vi main-enneagram.tsx  # Change all 3 occurrences of "AppFr" to "AppEnneagram"
git add App* main-*
git commit -m '....'   # Replace '....' with a good description of the changes
```

Following are the **detailed instructions:**

- Rename `src/AppEn.html` to `src/AppBigFive.html`
  - Change the name of the function `src/AppBigFive.html` in accordingly
  - Change all 3 occurrences of "AppEn" in `main-big_five.tsx` to "AppBigFive"
- Rename `src/AppEs.html` to `src/AppJungian.html`
  - Change the name of the function in `src/AppJungian.html` accordingly
  - Change all 3 occurrences of "AppEs" in `main-jungian.tsx` to "AppJungian"
- Rename `src/AppFr.html` to `src/AppEnneagram.html`
  - Change the name of the function in `src/AppEnneagram.html` accordingly
  - Change all 3 occurrences of "AppFr" in `main-enneagram.tsx` to "AppEnneagram"

## 3.4. Rename the `src/[ef]*` Subdirectories, and Update the `src/main-*` Files Accordingly

Run the commands below to rename the `src/[ef]*` subdirectories and update the `src/main-*.html` files as
described in the **detailed instructions:**

```
pwd         # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
git mv en big_five
git mv es jungian
git mv fr enneagram
vi main-big_five.tsx   # Change all 4 occurrences of "en/" to "big_five/"
vi main-jungian.tsx    # Change all 4 occurrences of "es/" to "jungian/"
vi main-enneagram.tsx  # Change all 4 occurrences of "fr/" to "enneagram/"
git add [bej]*/* main-*
git commit -m '....'   # Replace '....' with a good description of the changes
```

Following are the **detailed instructions:**

- Rename `src/en/` to `src/big_five/`
  - Change all 4 occurrences of "fr/" in the `import` statements to "big_five/"
- Rename `src/es/` to `src/jungian/`
  - Change all 4 occurrences of "fr/" in the `import` statements to "jungian/"
- Rename `src/fr/` to `src/enneagram/`
  - Change all 4 occurrences of "fr/" in the `import` statements to "enneagram/"

## 3.5. Rename the `src/[bej]*/*.tsx` Files and Update the `src/main-*.tsx Files Accordingly

Run the commands below to make the changes as described in the **detailed instructions:**

- [x] 1. Rename the `src/[bej]*/*.tsx` files
- [x] 2. Update values in the `src/[bej]*/*.tsx` files to match their new names
- [x] 3. Update the `src/main-*.html` files to reference the correct file and component names

```
pwd           # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
cd big_five   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/big_five
git mv Am.tsx Create.tsx
git mv Noon.tsx View.tsx
git mv Pm.tsx Refine.tsx
git mv Midnight.tsx Help.tsx
vi *.tsx                   # Change the name of the function and value of the "export default" statement in each file to match the file name
cd ..                      # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
cd jungian                 # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/jungian
git mv Am.tsx Create.tsx
git mv Noon.tsx View.tsx
git mv Pm.tsx Refine.tsx
git mv Midnight.tsx Help.tsx
vi *.tsx                   # Change the name of the function and value of the "export default" statement in each file to match the file name
cd ..                      # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
cd enneagram               # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/enneagram
git mv Am.tsx Create.tsx
git mv Noon.tsx View.tsx
git mv Pm.tsx Refine.tsx
git mv Midnight.tsx Help.tsx
vi *.tsx                   # Change the name of the function and value of the "export default" statement in each file to match the file name
cd ..                      # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src

vi main-*.tsx  # Change all occurrences of "Am" and "AM" to "Create"
vi main-*.tsx  # Change all occurrences of "Noon" to "View"
vi main-*.tsx  # Change all occurrences of "Pm" and "PM" to "Refine"
vi main-*.tsx  # Change all occurrences of "Midnight" to "Help"
git add [bej]*/* main-*
git commit -m '....'   # Replace '....' with a good description of the changes
```

Following are the **detailed instructions:**

- Rename the files in `src/big_five/` as follows:
  - Rename `Am.tsx` to `Create.tsx`
  - Rename `Noon.tsx` to `View.tsx`
  - Rename `Pm.tsx` to `Refine.tsx`
  - Rename `Midnight.tsx` to `Help.tsx`
- Update the files in `src/big_five/` as follows:
  - Change both occurrences of "Am" in `Create.tsx` to "Create"
  - Change both occurrences of "Noon" in `View.tsx` to "View"
  - Change both occurrences of "Pm" in `Refine.tsx` to "Refine"
  - Change both occurrences of "Midnight" in `Help.tsx` to "Help"
- Rename the files in `src/jungian/` as follows:
  - Rename `Am.tsx` to `Create.tsx`
  - Rename `Noon.tsx` to `View.tsx`
  - Rename `Pm.tsx` to `Refine.tsx`
  - Rename `Midnight.tsx` to `Help.tsx`
- Update the files in `src/jungian/` as follows:
  - Change both occurrences of "Am" in `Create.tsx` to "Create"
  - Change both occurrences of "Noon" in `View.tsx` to "View"
  - Change both occurrences of "Pm" in `Refine.tsx` to "Refine"
  - Change both occurrences of "Midnight" in `Help.tsx` to "Help"
- Rename the files in `src/enneagram/` as follows:
  - Rename `Am.tsx` to `Create.tsx`
  - Rename `Noon.tsx` to `View.tsx`
  - Rename `Pm.tsx` to `Refine.tsx`
  - Rename `Midnight.tsx` to `Help.tsx`
- Update the files in `src/enneagram/` as follows:
  - Change both occurrences of "Am" in `Create.tsx` to "Create"
  - Change both occurrences of "Noon" in `View.tsx` to "View"
  - Change both occurrences of "Pm" in `Refine.tsx` to "Refine"
  - Change both occurrences of "Midnight" in `Help.tsx` to "Help"
- Update the `src/main-*.tsx` files as follows:
  - Change all occurrences of "Am" and "AM" in all 3 `main-*.tsx` files to "Create"
  - Change all occurrences of "Noon" in all 3 `main-*.tsx` files to "View"
  - Change all occurrences of "Pm" and "PM" in all 3 `main-*.tsx` files to "Refine"
  - Change all occurrences of "Midnight" in all 3 `main-*.tsx` files to "Help"

## 3.6. Update the `src/[bej]*/*.tsx` Files

Run the commands below to make the changes as described in the **detailed instructions:**

```
pwd           # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
vi */Create.tsx        # Update the div tags as in step 1. described below
vi */View.tsx          # Update the div tags as in step 1. described below
vi */Refine.tsx        # Update the div tags as in step 1. described below
vi */Help.tsx          # Update the div tags as in step 1. described below
vi */Create.tsx        # Update the h1 tags as in step 2. described below
vi */View.tsx          # Update the h1 tags as in step 2. described below
vi */Refine.tsx        # Update the h1 tags as in step 2. described below
vi */Help.tsx          # Update the h1 tags as in step 2. described below
git add src/*/*
git commit -m '....'   # Replace '....' with a good description of the changes
```

Following are the **detailed instructions:**

- [x] 1. Update the `id` attributes of the `<div ...` tags in each file to match a lowercase version of the file's basename
  - Change `<div id="am">` in all `src/*/Create.txs` files to `<div id="create">`
  - Change `<div id="noon">` in all `src/*/View.txs` files to `<div id="view">`
  - Change `<div id="pm">` in all `src/*/Refine.txs` files to `<div id="refine">`
  - Change `<div id="midnight">` in all `src/*/Help.txs` files to `<div id="help">`
- [x] 2. Update the text of the `<h1>` tags in each file to match the file's name
  - Change the text in the `<h1>` tag in all `src/*/Create.txs` files to "This is the Create page"
  - Change the text in the `<h1>` tag in all `src/*/View.txs` files to "This is the View page"
  - Change the text in the `<h1>` tag in all `src/*/Refine.txs` files to "This is the Refine page"
  - Change the text in the `<h1>` tag in all `src/*/Help.txs` files to "This is the Help page"

## 3.7. Update the `src/App*` Files

Update the `src/App*` files:

- [x] 1. Ensure the function name and "export default" statement in each file matches the file name
- [x] 2. Update the `id` attributes of the `div` tags to equal a lowercase version of the file's basename
  - E.g., Use `id="app-big_five"` in the `<div ...>` tag in `AppBigFive.tsx`
- [x] 3. Update the text -- e.g., "Hello, world", etc. -- to something more appropriate

Hopefully you do not need more ** *"detailed instructions"* ** at this point!

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src
vi App*.tsx
git add App*.tsx
git commit -m '....'   # Replace '....' with a good description of the changes
```

## 3.8. Sanity Checks

- [x] Check VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run lint` inside the `6-wsw_navbar_graphics_sliders` directory
- [x] Run `npm run dev` inside the `6-wsw_navbar_graphics_sliders` directory
- [x] Check that the `App` is working in the browser


# 4. Add a Few Basic MDB CSS Classes

In the interest of starting to structure this project for realsies, make a few additional changes.

- Put the two main pieces of code in the `main-*.tsx` files in a `container`
- Each `container` should have at least one `row`

We may want to make these additional changes, but I see no reason to do so right now:

- Each `row` should have one or more `col`s
- In most apps, each `col` probably should have a `card`

As we add the graphics and sliders, we may want to do add some `cols`s and `card`s.

# 5. Add Graphics

Add the simplistic graphics from the `2-wsw_graphics` project to the Big 5 and Enneagram options.

# 6. Add a Sun Signs Option

Add a `sun_signs` option based on the code used for the `big_5` and `enneagram` options.

- [x] 1. Add the four standard files to new `src/sun_signs` directory
- [x] 2. Add `src/AppSunSigns.tsx`
- [x] 3. Add `src/main-sun_signs.tsx`
- [x] 4. Create `index-sun_signs.html`
- [x] 5. Add "Sun Signs" option to `index.html`
- [x] 6. Add `app-sun-signs` to `src/App.css`

# 7. Add Graphics and Sliders

Add the graphics and sliders from the `3-wsw_sliders` project to the Jungian option.

## 7.1. Copying Code From `whole_shebang/projects/3-wsw_sliders/src/App.tsx`

### 7.1.1. Add Code to `Create.tsx`

Adding the graphics with the sliders in the `3-wsw_sliders` project is simply a matter of
copying the code over from `whole_shebang/projects/3-wsw_sliders/src/App.tsx`
and into `whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/jungian/Create.tsx`.

This proved to be easy enough, with the only update needed being that `./Canvas.tsx`
is now in `../lib/Canvas.tsx`.

### 7.1.2. Add Code to `View.tsx`

Now that we've added the code to `Create.tsx`, we can add the same code to `View.tsx`.

This proved to be easy enough, but now we have a lot of duplicate code that needs to be refactored!

# 8. Refactoring

Break as much duplicated code as possible out of `src/jungian/Create.tsx` and `src/jungian/View.tsx`.

Guidelines:

- For now, leave the `draw()` function as-is in both
  - We will update this function in `src/jungian/View.tsx` later
- Put any code that might be useful to other quiz types in its own library file
  - For example: `src/lib/SliderLib.tsx`
- Put code looks to be useful only to the Jungian quiz type in `src/lib/Jungian.tsx`
- Rename `src/lib/Canvas.tsx` to `src/lib/CanvasLib.tsx` for consistency

# 9. Splitting up the Two Main Components

The goal is to have:

- The fixed-size image in `src/jungian/Create.tsx`
- The d-flex image in `src/jungian/View.tsx`

The high-level process is:

- [x] 1. Remove the `DFlexContainer` component from `src/jungian/Create.tsx` leaving only the `FixedContainer` component
  - The same goes for children used exclusively by one but not both of the two components
- [x] 2. Remove the `FixedContainer` component from `src/jungian/View.tsx` leaving only the `DFlexContainer` component
  - The same goes for children used exclusively by one but not both of the two components

A detailed process is beyond the scope of this document.

# 10. Utilize Local Storage

The goal is to:

- In `src/jungian/Create.tsx`, save the data needed to reproduce the image in JavaScript local storage
  - Actually, use the interface provided by React to do this
- In `src/jungian/View.tsx`, use the data stored in JavaScript local storage to reproduce the image
  - Again, use the interface provided by React to do this
  - This image should be read-only, so deactivate the sliders
  - We will probably eventually want to use the Score Scales used in seeourminds.com, but don't worry about that right now

## 10.1. Major Frustrations

I tried creating a new file, `whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/JungianPage.tsx`, which contains
the quiz-specific menu and thus a component that is a parent to the `Create.tsx` page and other pages.

The idea was to get the values from localStorage in this parent component and pass them on to `Create.tsx` and other pages,
as we do with state variables.

- It's clear that this idea will not work
- I can see the values in local storage in Chrome's developer tools and in the useEffect call, but ...
- ... these values somehow get reset to the default values before I can pass them on to the other pages

