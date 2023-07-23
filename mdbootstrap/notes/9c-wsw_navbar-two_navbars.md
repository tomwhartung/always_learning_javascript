
# 9c-wsw_navbar-two_navbars.md

# 1. Goal

- [x] Combine menuing techniques used in `9a-wsw_navbar-in_index_html` and `9b-wsw_navbar-in_main_tsx`

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

## 3.3. Add First Navbar

Add the first Navbar to the `index*.html` files.

- This Navbar allows switching between languages
  - We are using these languages to simulate switching between different quiz types
- We do this by copying files from the `9a-wsw_navbar-in_index_html` subproject
- These files give us a huge head start on what we want to do

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
pwd   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
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


# 4. Add Second Navbar

The second Navbar allows displaying different messages in the selected language.

- The second Navbar uses components defined in `react-router-dom`
- Displaying the different messages simulate performing different operations on an image for the selected quiz type
- We do this by copying code from the `9b-wsw_navbar-in_main_tsx` subproject

## 4.1. Create Trivial Components for Testing the Menus

### 4.1.1. Create Trivial Components for Testing the Menus

Make a new directory under `src` for each language, and populate these directories with
files from the `9b-wsw_navbar-in_main_tsx` subproject.

- In the `src` directory we will create subdirectories named `en`, `es`, and `fr`
- In each of these directories we will create files named `Am.tsx`, `Midnight.tsx`, `Noon.tsx`, and `Pm.tsx`

```
pwd      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/9c-wsw_navbar-two_navbars/src
mkdir en es fr
cp ../../9b-wsw_navbar-in_main_tsx/src/Am.tsx en/
cp ../../9b-wsw_navbar-in_main_tsx/src/Pm.tsx en/
cp ../../9b-wsw_navbar-in_main_tsx/src/Midnight.tsx en/
cp ../../9b-wsw_navbar-in_main_tsx/src/Noon.tsx en/
cp  en/* es
cp  en/* fr
l */*.tsx        # Should show 12 files, four in each of the three subdirectories
vi es/*.tsx      # Translate the English text in each of these files to Spanish (*)
vi fr/*.tsx      # Translate the English text in each of these files to French (*)
```

(*) Following is a list of the translations:

- en/Am.tsx: Good morning!
- es/Am.tsx: ¡Buen día!
- fr/Am.tsx: Bonjour!
- en/Midnight.tsx: Good night!
- es/Midnight.tsx: ¡Buenas noches!
- fr/Midnight.tsx: Bonne nuit!
- en/Noon.tsx: It's lunchtime!
- es/Noon.tsx: ¡Es hora del almuerzo!
- fr/Noon.tsx: C'est l'heure du déjeuner!
- en/Pm.tsx: Goodbye!
- es/Pm.tsx: ¡Adiós!
- fr/Pm.tsx: Au revoir!

### 4.1.2. Fix the `import ...` Statement in Each Trivial Component

In each of these files, change `import './App.css'` to `import '../App.css'`.

## 4.2. Optional: Move Each `src/App[EF]*` Component Into Its Proper Directory

**Note:** I am *not doing this* because it requires changing a lot of `import` statements,
which makes it more trouble than it's worth!

```
git mv AppEn.tsx en
git mv AppEs.tsx es
git mv AppFr.tsx fr
```

Also update the:

- Corresponding `import App ...` statements in `main-*.tsx`
- `import App.css` statements in each `src/*/App*.tsx` file

**What a bunch of hassle for very little gain!**

## 4.3. Import the Trivial Components

### 4.3.1. Import the English Components

Add the following `import` statements for these new components to after the `import AppEn ...` statement in `main-en.tsx`

```
import Am from './en/Am.tsx'
import Noon from './en/Noon.tsx'
import Pm from './en/Pm.tsx'
import Midnight from './en/Midnight.tsx'
```

**Note:** these `import` statements cause some problems to appear in VSCode.  We will fix those momentarily.

### 4.3.2. Import the Spanish Components

Add the following `import` statements for these new components to after the `import AppEs ...` statement in `main-es.tsx`

```
import Am from './es/Am.tsx'
import Noon from './es/Noon.tsx'
import Pm from './es/Pm.tsx'
import Midnight from './es/Midnight.tsx'
```

**Note:** these `import` statements cause some problems to appear in VSCode.  We will fix those momentarily.

### 4.3.3. Import the French Components

Add the following `import` statements for these new components to after the `import AppFr ...` statement in `main-fr.tsx`

```
import Am from './fr/Am.tsx'
import Noon from './fr/Noon.tsx'
import Pm from './fr/Pm.tsx'
import Midnight from './fr/Midnight.tsx'
```

**Note:** these `import` statements cause some problems to appear in VSCode.  We will fix those momentarily.

## 4.4. Add `react-router-dom` Components

For details, see `9b-wsw_navbar-in_main_tsx.md` in this directory.

### 4.4.1. Import Required React Router Components

Add the `import` statement below to near the top of each `main-*.tsx` file to get the
required components from `react-router-dom`:

```
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
```

**Note:** this causes a total of *39 problems* to appear in VSCode!

- Again, we will fix those momentarily!!

### 4.4.2. Add the Navbar Code to Each `main-*.tsx` File

Add the following code to just after the opening `<React.StrictMode>` tag in each `main-*.tsx` file:

```
<BrowserRouter>
  <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
    <div className="container-fluid justify-content-center">
      <ul className="navbar-nav mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="Am">AM</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Noon">Noon</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Pm">PM</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Midnight">Midnight</Link>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container d-flex justify-content-center">
    <Routes>
      <Route path="/Am" element={<Am />} />
      <Route path="/Noon" element={<Noon />} />
      <Route path="/Pm" element={<Pm />} />
      <Route path="/Midnight" element={<Midnight />} />
    </Routes>
  </div>
</BrowserRouter>
```

**Voilà!** this fixes all 39 VSCode errors!!

- For details about how we created this code, see `9b-wsw_navbar-in_main_tsx.md` in this directory.

## 4.5. Test the Menu

In the browser, click on the menu options at the top of the page to test the new menu.

- It works for me today
- If it doesn't work for you, search google or whatever and find what changed!

**Note:** the *"Hello, world"* text that comes from the `<App /> element defined in `App.tsx` stays on the
page while the text above that - for example, *"Good morning!"* - changes when you click on a menu option.

## 4.6. Update Github

Check all these files into github, without further ado.

## 4.7. Add an Option to Go to the Home Page

Add an option to go to the Home page to each language-specific page.
This allows the user to change to a different language.

- In our future app it will allow them to change the quiz type
- Once they are in a language - future quiz type - they will need to go Home to switch to a different language/quiz type

Add the following code to the top of the menu - after the opening `<ul ...` tag - in each `src/main-*.html` file:

```
<li className="nav-item">
  <a className="nav-link link-secondary" href="index.html">
    <i className="fas fa-house"></i>
  </a>
</li>
```

## 4.8. Delete the Menus in the `index-*.html` Files

The menus in the `index-*.html` files are still there, but are hidden by the ones we added in the `main-*.tsx` files.

- This means we can delete *all* the code between and including the opening `<nav ...`  and the closing `</nav>` tags from each of the three `index-*.html` files

**Note:** do *not* delete the menu in the original, main `index.html` file, that is now our Home page!

## 4.9. Update Github

Check all these files into github, without further ado.

# 5. Common Notes

For notes that apply to all of the `9?-*` projects see `9-wsw_navbar` in this directory.

