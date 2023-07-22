
# 9b-wsw_navbar-in_main_tsx.md

# 1. Goal

- [x] Learn the basics of `react-router-dom` by using it to add a menu to `src/main.tsx`

# 2. Process

- Step 1. Start with the commands run in `whole_shebang/notes/5-whole_shebang_no_cruft.md`
  - These commands initialize a minimal "Hello world"-type project with minimal cruft
  - The project contains our now-standard components:
    - Vite with Reactjs
    - MDB
    - TypeScript
    - ESLint
- Step 2. Add a Navbar that can change a greeting based on the selected menu option
  - In this project, we add the Navbar to `src/main.tsx`
  - Preliminary testing shows this initial result looks less than ideal
- Step 3. Review the documentation and refine the Navbar code until it does what we want it to

# 3. Commands to Create a Cruft-less "Hello world" App

These come from `whole_shebang/notes/5-whole_shebang_no_cruft.md` in this repo.

## 3.1. Upgrade `npm`

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
```

## 3.2. Create New Project Using Vite, React, TypeScript, and MDB

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
npm init vite@latest -- --template react-ts    # Use '9b-wsw_navbar-in_main_tsx' for the [project_name]
cd 9b-wsw_navbar-in_main_tsx
npm i mdb-react-ui-kit
npm run lint
npm run dev
```

## 3.3. Add MDB, Font Awesome, and Google Fonts Roboto

Update `index.html`:

```
pwd   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
diff ../../whole_shebang/projects/5-whole_shebang_no_cruft/index.html 9b-wsw_navbar-in_main_tsx/index.html
cp ../../whole_shebang/projects/5-whole_shebang_no_cruft/index.html 9b-wsw_navbar-in_main_tsx/index.html
```

## 3.4. Sanity Checks Part 1

- [x] Load into VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run dev` inside the `9b-wsw_navbar-in_main_tsx` directory
  - [x] Check that the `App` is working in the browser at [http://localhost:5174/](http://localhost:5174/)
    - This assumes that `9a-wsw_navbar-in_index_html`'s `App` is running at [http://localhost:5173/](http://localhost:5173/)

## 3.5. Cleanup Cruft

It's easiest to do this by copying files from `whole_shebang/projects/5-whole_shebang_no_cruft`.

- For details, see `whole_shebang/notes/5-whole_shebang_no_cruft.md`

### 3.5.1. Cleanup Logo Cruft

- [x] Remove all references to `public/vite.svg` and `src/assets/react.svg` from `index.html` and `src/App.tsx`

Diff and copy `App.tsx` and `App.css`:

```
pwd        # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
diff ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.tsx 9b-wsw_navbar-in_main_tsx/src/App.tsx
cp ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.tsx 9b-wsw_navbar-in_main_tsx/src/App.tsx
diff ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.css 9b-wsw_navbar-in_main_tsx/src/App.css
cp ../../whole_shebang/projects/5-whole_shebang_no_cruft/src/App.css 9b-wsw_navbar-in_main_tsx/src/App.css
```

Check and remove `*.svg` files:

```
cd 9b-wsw_navbar-in_main_tsx
pwd                                    # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/9b-wsw_navbar-in_main_tsx
grep svg index.html src/*.*            # Should be no occurrences
grep logo index.html src/*.*           # Should be no occurrences
rm public/vite.svg src/assets/react.svg
```

## 3.6. Install `react-router-dom`

```
npm install react-router-dom --save
```

## 3.7. Copy Over the `*.css` Files From the `9a-wsw_navbar-in_index_html` Subproject

It is important that the files in subproject `` match those in this subproject, because we will be combining them in subproject``.

```
pwd                # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
diff 9a-wsw_navbar-in_index_html/src/index.css 9b-wsw_navbar-in_main_tsx/src/index.css
cp  9a-wsw_navbar-in_index_html/src/index.css 9b-wsw_navbar-in_main_tsx/src/index.css
diff 9a-wsw_navbar-in_index_html/src/App.css 9b-wsw_navbar-in_main_tsx/src/App.css
cp  9a-wsw_navbar-in_index_html/src/App.css 9b-wsw_navbar-in_main_tsx/src/App.css
```

## 3.8. Sanity Checks Part 2

- [x] Run `npm run lint` inside the `9b-wsw_navbar-in_main_tsx` directory
- [x] Run `npm run dev` inside the `9b-wsw_navbar-in_main_tsx` directory
- [x] Check for problems in VSCode
- [x] Check that the `App` is working in the browser at [http://localhost:5174/](http://localhost:5174/)
  - This assumes that `9a-wsw_navbar-in_index_html`'s `App` is running at [http://localhost:5173/](http://localhost:5173/)

## 3.9. Update github

Update git now, before changing anything else.


# 4. Add and Refine MDB Navbar

Code is here:

- https://mdbootstrap.com/docs/standard/navigation/navbar/

## 4.1. Refinement Part 1: Fixing VSCode Errors

Follow this process to add it to the code in the `render` statement in `src/main.tsx`:

- 1. [x] Add the Navbar code *after* the existing `<React.StrictMode>` element and *before* the `<App />` element
- 2. [x] Remove all html comments, i.e., lines that start with `<!-- ...`
- 3. [x] Change all occurrences of `class=` to `className=`
- 4. [x] Ensure this fixes all problems in VSCode

**Note:** the Navbar appears very small and immediately above our "Hello, world" text.

- This is *unacceptable*

## 4.2. Refinement Part 2: Using `react-router-dom`

Getting these steps from:

- https://www.copycat.dev/blog/react-js-navigation/

### 4.2.1. Create Trivial Components for Testing the Menu

Using the following code to create `src/Am.tsx`:

```
import './App.css'

function Am() {
  return (
    <div id="am">
      <h1>Good morning!</h1>
    </div>
  )
}

export default Am
```

Based on this example, also create `src/Noon.tsx`, `src/Pm.tsx`, and `src/Midnight.tsx`.

### 4.2.2. Import the Trivial Components

Add these `import` statements to near the top of `main.tsx` to get these new components:

```
import Am from './Am.tsx'
import Noon from './Noon.tsx'
import Pm from './Pm.tsx'
import Midnight from './Midnight.tsx'
```

**Note:** these `import` statements cause some problems to appear in VSCode.  We will fix those momentarily.

### 4.2.3. Import Required React Router Components

Add this `import` statement to near the top of `main.tsx` to get the
required components from `react-router-dom`:

```
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
```

**Note:** this causes some more problems to appear in VSCode.  Again, we will fix those momentarily.

### 4.2.4. Enclose the Navbar Code in a `<BrowserRouter>` Component

Add:

- The opening `<BrowserRouter>` after the `<React.StrictMode>` tag and before the opening the `<nav ...>`
- The closing `</BrowserRouter>` after the closing `</nav>` tag and before the `<App />` tag

In other words, enclose the Navbar code within `<BrowserRouter>` and `</BrowserRouter>` tags:

```
<BrowserRouter>
  // ... Existing <nav ...> ... </nav> code
</BrowserRouter>
```

### 4.2.5. Add the `Routes` Element and `Route` Elements

Add this code after the closing `</nav>` tag and before the closing `</BrowserRouter>` tag:

```
<Routes>
  <Route path="/Am" element={<Am />} />
  <Route path="/Noon" element={<Noon />} />
  <Route path="/Pm" element={<Pm />} />
  <Route path="/Midnight" element={<Midnight />} />
</Routes>
```

### 4.2.6. Change the `<a ...` Tags to `<Link ...` Tags

- Change the `<a ...` tags to `<Link ...` tags
- Change the `href=` attributes of the `<a ...` tags to `to=` attributes

In other words, replace the these unordered list `<li ...` elements in the Navbar:

```
<li className="nav-item">
  <a className="nav-link" href="#">AM</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Noon</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">PM</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Midnight</a>
</li>
```

With these `<li ...` elements:

```
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
```

### 4.2.7. Test the Menu

In the browser, click on the menu options at the top of the page to test the new menu.

- It works for me today
- If it doesn't work for you, search google or whatever and find what changed!

**Note:** the *"Hello, world"* text that comes from the `<App /> element defined in `App.tsx` stays on the
page while the text above that - for example, *"Good morning!"* - changes when you click on a menu option.

# 5. Common Notes

For notes that apply to all of the `9?-*` projects see `9-wsw_navbar` in this directory.

