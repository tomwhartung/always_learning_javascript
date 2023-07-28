
# 4-wsw_navbar.md

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
pwd                                            # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
npm init vite@latest -- --template react-ts    # Use '4-wsw_navbar' for the [project_name]
cd 4-wsw_navbar
npm i mdb-react-ui-kit
npm run lint
npm run dev
```

## 1.3. Add MDB, Font Awesome, and Google Fonts Roboto

Update `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
diff 1-whole_shebang/index.html 4-wsw_navbar/index.html
cp 1-whole_shebang/index.html 4-wsw_navbar/index.html
```

## 1.4. Sanity Checks

- [x] Run `npm run lint` inside the [project_name] directory
- [x] Run `npm run dev` inside the [project_name] directory
- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Check that the `App` is working in the browser at [http://localhost:5173/](http://localhost:5173/)

If using git, commit this project now.

## 1.5. Cleanup Cruft

### 1.5.1. Cleanup Logo Cruft

- [x] Remove all references to `public/vite.svg` and `src/assets/react.svg` from `index.html` and `src/App.tsx`
  - [x] Should be no references in `index.html`
  - [x] Remove all `import` lines from `src/App.tsx` that reference "react" and "svg" files
  - [x] Remove all code from the App component in `src/App.tsx` except that which returns "<h1>Hello, world</h1>"

```
grep svg index.html src/*.*
vi src/App.tsx                # See notes above
```

- [x] Delete `public/vite.svg` and `src/assets/react.svg`
  - **Note:** If files already checked into git, use `git rm`

```
rm public/vite.svg src/assets/react.svg
### **************************************
### OR, IF FILES ALREADY CHECKED INTO GIT:
### **************************************
git rm public/vite.svg src/assets/react.svg
```

### 1.5.2. Cleanup CSS Cruft

- Delete everything from `src/App.css` *except* the first rule defining styles for `#root`

## 1.6. Update github

Update git now, before changing anything else.

# 2. Add MDB Navbars

## 2.1. Install `react-router-dom`

One of our Navbars use the `react-router-dom` package, so run the following command to install that.

```
npm install react-router-dom --save            # New, as of the 9b-wsw_navbar-in_main_tsx subproject!
```

## 2.2. Copy Files From `mdbootstrap/projects/9c-wsw_navbar-two_navbars`

I have decided that the `mdbootstrap/projects/9c-wsw_navbar-two_navbars` project implements menus the way we will want
to do them for the main site I will be working on.

- Therefore it is ok to just copy those files over to this project
- For details about why and how, see that project

### 2.2.1. Copy the `index*.html` Files

The `index*.html` files contain the home page's top menu options:

- Home icon
- En - Pages in English
- Es - Pages in Spanish
- Fr - Pages in French

```
pwd       # /var/www/always_learning/always_learning_javascript
ls -al mdbootstrap/projects/9c-wsw_navbar-two_navbars/index*.html
cp  mdbootstrap/projects/9c-wsw_navbar-two_navbars/index*.html whole_shebang/projects/4-wsw_navbar/
git add  whole_shebang/projects/4-wsw_navbar/
git commit -m 'Copied the mdbootstrap/projects/9c-wsw_navbar-two_navbars/index*.html files to whole_shebang/projects/4-wsw_navbar/ .'
```

### 2.2.2. Copy the Language-Specific Files

These files define the trivial components we use for testing the menus.

#### 2.2.2.1. Copy the English `mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/en/*` Files

```
pwd # /var/www/always_learning/always_learning_javascript
ls -al mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/en/
cp -r  mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/en/ whole_shebang/projects/4-wsw_navbar/src/
git add whole_shebang/projects/4-wsw_navbar/src/en/
git commit -m 'Copied the English language files in mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/en/ to whole_shebang/projects/4-wsw_navbar/src/en .'
```

#### 2.2.2.2. Copy the Spanish `mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/es/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript
ls -al mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/es/
cp -r mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/es/ whole_shebang/projects/4-wsw_navbar/src/
git add  whole_shebang/projects/4-wsw_navbar/src/es/
git commit -m 'Copied the Spanglish language files in mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/es/ to whole_shebang/projects/4-wsw_navbar/src/es .'
```

#### 2.2.2.3. Copy the French `mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/fr/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript
ls -al mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/fr/
cp -r mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/fr/ whole_shebang/projects/4-wsw_navbar/src/
git add whole_shebang/projects/4-wsw_navbar/src/fr/
git commit -m 'Copied the French language files in mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/fr/ to whole_shebang/projects/4-wsw_navbar/src/fr .'
```


### 2.2.3. Copy the `src/main*.tsx` Files

```
pwd       # /var/www/always_learning/always_learning_javascript
l mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/main*
cp  mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/main* whole_shebang/projects/4-wsw_navbar/src/
git add  whole_shebang/projects/4-wsw_navbar/src/main*
git commit -m 'Copied the mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/main* files to whole_shebang/projects/4-wsw_navbar/src/ .'
```

### 2.2.4. Copy the `src/App*.tsx` Files

These files provide "Hello world" text on the home page for each language.

- Note that this text remains visible after clicking on the time-related options in the top menu for each language-specific page

```
pwd       # /var/www/always_learning/always_learning_javascript
l mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/App*.tsx
cp mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/App*.tsx whole_shebang/projects/4-wsw_navbar/src/
git add whole_shebang/projects/4-wsw_navbar/src/App*
git commit -m 'Copied the mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/App*.tsx files to whole_shebang/projects/4-wsw_navbar/src/ .'
```

### 2.2.5. Copy the `src/*.css` Files

These files provide some basic styles for the app.

```
pwd       # /var/www/always_learning/always_learning_javascript
l mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/*.css
cp mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/*.css whole_shebang/projects/4-wsw_navbar/src/
git add whole_shebang/projects/4-wsw_navbar/src/*.css
git commit -m 'Copied the mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/*.css files to whole_shebang/projects/4-wsw_navbar/src/ .'
```

### 2.2.6. Check for Differences

Run the following series of `diff` commands to ensure we haven't forgotten anything:

- It's ok to ignore differences in files like `.eslintrc.cjs` and `package*.json`
  - These are no doubt due to having run `npm install` at different times
  - That is why it's best to start each new project fresh
- I don't know why there's a `README.md` file in `mdbootstrap/projects/9c-wsw_navbar-two_navbars/` ...
  - ... but *not* one in `whole_shebang/projects/4-wsw_navbar/`
  - *Not* going to worry about this, becuase `README.md` is *not a source file*

```
diff mdbootstrap/projects/9c-wsw_navbar-two_navbars/ whole_shebang/projects/4-wsw_navbar/
diff mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/ whole_shebang/projects/4-wsw_navbar/src/
diff mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/en/ whole_shebang/projects/4-wsw_navbar/src/en
diff mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/es/ whole_shebang/projects/4-wsw_navbar/src/es
diff mdbootstrap/projects/9c-wsw_navbar-two_navbars/src/fr whole_shebang/projects/4-wsw_navbar/src/fr
```

## 2.3. Sanity Checks

- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run lint` inside the `4-wsw_navbar` directory
- [x] Run `npm run dev` inside the `4-wsw_navbar` directory
- [x] Check that the `App` is working in the browser

**Note:** at this point, the app should work just like the app in `mdbootstrap/projects/9c-wsw_navbar-two_navbars`.

