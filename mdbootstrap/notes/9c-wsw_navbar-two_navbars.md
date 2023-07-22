
# 9c-wsw_navbar-two_navbars.md

# 1. Goal

- [ ] Combine menuing techniques used in `9a-wsw_navbar-in_index_html` and `9b-wsw_navbar-in_main_tsx`

# 2. Process

- Step 1. Start with the commands run in `mdbootstrap/notes/9b-wsw_navbar-in_main_tsx.md`
  - These commands initialize a minimal "Hello world"-type project with minimal cruft
  - The project contains our now-standard components:
    - Vite with Reactjs
    - MDB
    - TypeScript
    - ESLint
- Step 2. Use the menuing technique in `9a-wsw_navbar-in_index_html` to switch between `index*.html` files
  - Each `index*.html` file displays a message in a different language
    - These simulate different quiz types
- Step 3. Use the menuing technique in `9b-wsw_navbar-in_main_tsx` to switch between different messages in the selected language
  - These options simulate the different operations we will want to perform on the various quiz types

# 3. Commands to an App With an `index*.html` File in a Different Language

These come from `9b-wsw_navbar-in_main_tsx.md` in this directory.

## 3.1. Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

**Note:** This upgraded npm from version 9.8.0 to 9.8.1.

## 3.2. Create New Project Using Vite, React, TypeScript, and MDB

**Note:** now we will also include `react-router-dom`.

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
npm init vite@latest -- --template react-ts    # Use '9c-wsw_navbar-two_navbars' for the [project_name]
cd 9c-wsw_navbar-two_navbars
npm install mdb-react-ui-kit
npm install react-router-dom --save            # New, as of the 9b-wsw_navbar-in_main_tsx subproject!
npm run lint
npm run dev
```

## 3.3. Copy Files From the `9a-wsw_navbar-in_index_html` Subproject

These files give us a huge head start on what we want to do.

Run the commands in the code box below to:

- Copy over the `index*.html` files
  - These add MDB, Font Awesome, and Google Fonts Roboto
  - List of files to copy over:
    - `index-en.html`
    - `index-es.html`
    - `index-fr.html`
    - `index.html`
- Copy over the `src/*.tsx` files
  - These are cruft-free and allow us to delete the `*.svg` files
  - List of files to copy over:
    - `src/App.tsx`
    - `src/AppEn.tsx`
    - `src/AppEs.tsx`
    - `src/AppFr.tsx`
    - `src/main-en.tsx`
    - `src/main-es.tsx`
    - `src/main-fr.tsx`
    - `src/main.tsx`
- Copy over the `src/*.css` files
  - These add cruft-free styles that also allow us to delete the `*.svg` files
  - They also add other tweaks we will want for the menus
  - List of files to copy over:
    - `src/App.css`
    - `src/index.css`


```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
cp 9a-wsw_navbar-in_index_html/index*.html 9c-wsw_navbar-two_navbars/
cp 9a-wsw_navbar-in_index_html/src/*.tsx 9c-wsw_navbar-two_navbars/src/
cp 9a-wsw_navbar-in_index_html/src/*.css 9c-wsw_navbar-two_navbars/src/
```

## 3.4. Check for References to `*.svg` Files, and Remove Them:

These checks should not be necessary, but they won't hurt.

```
cd 9c-wsw_navbar-two_navbars
pwd                                    # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/9c-wsw_navbar-two_navbars
grep svg index*.html src/*.*           # Should be no occurrences
grep logo index*.html src/*.*          # Should be no occurrences
rm public/vite.svg src/assets/react.svg
```


## 3.5. Sanity Checks

- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run lint` inside the `9c-wsw_navbar-two_navbars` directory
- [x] Run `npm run dev` inside the `9c-wsw_navbar-two_navbars` directory
- [x] Check that the `App` is working in the browser at [http://localhost:5175/](http://localhost:5175/)
  - This assumes that `9a-wsw_navbar-in_index_html`'s `App` is running at [http://localhost:5173/](http://localhost:5173/)
  - This assumes that `9b-wsw_navbar-in_main_tsx`'s `App` is running at [http://localhost:5174/](http://localhost:5174/)

**Note:** at this point, the app should work just like `9a-wsw_navbar-in_index_html`'s `App`.

## 3.6. Update github

Update git now, before changing anything else.

