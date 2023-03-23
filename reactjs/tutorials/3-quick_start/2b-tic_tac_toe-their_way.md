
# 2b-tic_tac_toe-their_way.md

Notes from going through lesson 0 of this reactjs tutorial:

- [ReactJS Tutorial: Tic-Tac-Toe](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)

# 1. Setup for the tutorial

This section describes my efforts to setup the project for **`their_way`** of doing the tutorial.

The tutorial wants me to build this on a website named CodeSandbox.
I won't be doing that.

Their alternative, under *Setup for the tutorial* and in a **Note** box, **for using my local development environment,**
is to download the CodeSandbox files.

I will be building this `their_way` version of the tic-tac-toe project on my localhost in
`/var/www/always_learning/always_learning_javascript/reactjs/projects`.

## 1.1. Parallel Development

I will also be going through this in a parallel `my_way` version of the project, following a process
that makes more sense to me - because I'll learn more about `npm`, structuring the project, etc. - for working on my localhost.

See the file `2a-tic_tac_toe-my_way` in this directory for details about that effort.

## 1.2. Process for `their_way` of Developing on My Localhost

This process is a summarization of the process given in the **Note** box under
[*Setup for the tutorial*](https://beta.reactjs.org/learn/tutorial-tic-tac-toe#setup-for-the-tutorial).

1. Install `Node.js`
2. Export a zip file downloaded from CodeSandbox
3. Unzip the downloaded file and `cd` into that directory
4. Run `npm install` to install the dependencies
5. Run `npm start` and "follow the prompts to view the code running in a browser"

It all sounds too pat and easy, hence the desire to also do it `my_way`!

## 1.3. Steps Taken and Commands Run

**Note:** Taking these steps leads to a version that fails to compile.
Feel free to skip ahead!

However, I think most of these steps are necessary, and that we might be on the right track....

### 1.3.1. Install `Node.js`

Already done!

### 1.3.2. Download the Zip File

Too easy!

### 1.3.3. Unzip the Zip File and `cd`

Working on this version of the project in
`/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way`.

Keeping a copy of the downloaded file in
`var/www/always_learning/always_learning_javascript/reactjs/projects/downloads/codesandbox`.

```
pwd   # /var/www/always_learning/always_learning_javascript/reactjs/projects
mkdir -p downloads/reactjs/
cd downloads/reactjs/
mv  ~/Downloads/i18f1x.zip .
unzip i18f1x.zip .
cd ../..
mkdir ttt-their_way-app
l  ttt-their_way-app/
cp downloads/codesandbox/i18f1x.zip ttt-their_way-app/
cd  ttt-their_way-app/
l
unzip i18f1x.zip
l
```

### 1.3.4. Run `npm install`

Commands run:

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way-app/
$ npm install
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
. . .
. . .
. . .
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

added 1375 packages, and audited 1376 packages in 1m

72 packages are looking for funding
  run `npm fund` for details

110 vulnerabilities (11 low, 63 moderate, 27 high, 9 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

### 1.3.5. Run `npm start`

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way-app/
$ npm start
Failed to compile.

./src/App.js
Syntax error: Unexpected token (34:5)

  32 |
  33 |   return (
> 34 |     <>
     |      ^
  35 |       <div className="status">{status}</div>
  36 |       <div className="board-row">
  37 |         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
^C
$
```

Opens new browser tab for url
[http://localhost:3001/](http://localhost:3001/)
because I am already using port 3000 for the `my_way` app.

The new browser tab says:

> Failed to compile
> ./src/App.js
> Syntax error: Unexpected token (34:5)
>
>   32 |
>   33 |   return (
> > 34 |     <>
>      |      ^
>   35 |       <div className="status">{status}</div>
>   36 |       <div className="board-row">
>   37 |         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
> This error occurred during the build time and cannot be dismissed.

Well, that was unexpected!

At the end of the **Note** box, it says:

> If you get stuck, don’t let this stop you! Follow along online instead and try a local setup again later.

Thinking I might, *might,* try fixing this error.
*Maybe!*

Let me think about it....

**Note:** Finally fixed the error on 3/19/2023!

- Skip the next few subsections and go to subsection *1.8. Files Edited - Got It to Work!*

## 1.4. Files Edited - First try

**Note:** Taking these steps apparently just makes things worse!
Feel free to skip ahead to the next section, *1.5. Files Edited - Second try.*

Tried editing `src/App.js` to fix the error above:

```
$ gd src/App.js
diff --git a/reactjs/projects/ttt-their_way-app/src/App.js b/reactjs/projects/ttt-their_way-app/src/App.js
index 18de78c..2b54e0f 100644
--- a/reactjs/projects/ttt-their_way-app/src/App.js
+++ b/reactjs/projects/ttt-their_way-app/src/App.js
@@ -31,7 +31,7 @@ function Board({ xIsNext, squares, onPlay }) {
   }

   return (
-    <>
+    <div>
       <div className="status">{status}</div>
       <div className="board-row">
         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
@@ -48,7 +48,7 @@ function Board({ xIsNext, squares, onPlay }) {
         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
       </div>
-    </>
+    </div>
   );
 }
```

This caused a slew of other errors:

```
Failed to compile.

./src/App.js
  Line 5:   'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 34:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 35:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 36:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 37:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 38:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 39:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 41:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 42:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 43:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 44:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 46:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 47:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 48:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 49:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 79:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 80:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 86:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 87:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 88:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 90:  'React' must be in scope when using JSX  react/react-in-jsx-scope
  Line 91:  'React' must be in scope when using JSX  react/react-in-jsx-scope

Search for the keywords to learn more about each error.
```

## 1.5. Files Edited - Second Try - Another Failed Attempt

In `2a-tic_tac_toe-my_way.md` it was easy enough to get the minimal, 3-line version of `App.js` presented in the code box in the
[Setup for the tutorial](https://beta.reactjs.org/learn/tutorial-tic-tac-toe#setup-for-the-tutorial) subsection.
Let's give that a try!

- Saved a copy of the current version of `App.js` as `App-the_whole_shebang-fails_to_compile.js`
- Replaced all of with the minimal, 3-line version of `App.js` that appears in the following code snippet

```javascript
export default function Square() {
  return <button className="square">X</button>;
}
```

Rats!  This resulted in the following error:

```
./src/App.js
  Line 4:  'React' must be in scope when using JSX  react/react-in-jsx-scope
```

Which might be considered slightly better than the **21 similar errors** seen above.

**Note:** Went ahead and checked in this change.

## 1.6. Files Edited - Third Try - More Failed Attempts

Comparing the version of `index.js` in `ttt-my_way-app/src` to the version of `index.js` in `ttt-their_way-app/src`,
I tried making the following edits to `ttt-their_way-app/src/index.js`:

- Added the line `import ReactDOM from 'react-dom/client';` as line 2
  - This did not help
  - Commented out the line but left it in the new file `src/index-failed_attempts_to_fix_the_errors.js`
    - Don't want to waste time trying this "fix" again
    - Who knows, it might come in handy in the future
- Tried these two edits, based on what I see in `ttt-my_way-app/src/index.js`:
  - Updated line 10 (formerly line 9) from `<StrictMode>` to `<React.StrictMode>`
  - Updated line 12 (formerly line 11) from `</StrictMode>` to `</React.StrictMode>`
  - This did not help
  - Left these two "non-fixes" in the new file `src/index-failed_attempts_to_fix_the_errors.js`
    - I don't believe they will hurt anything, but want to be safe.

**Note:** Checked the file in as `../fixes_that_failed/index-failed_attempts_to_fix_the_errors.js` for possible future reference.

Following is the difference between the two `index*.js` files:

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way-app
$ diff src/index.js ../fixes_that_failed/index-failed_attempts_to_fix_the_errors.js
1a2
> // import ReactDOM from 'react-dom/client';
9c10
<   <StrictMode>
---
>   <React.StrictMode>
11c12
<   </StrictMode>
---
>   </React.StrictMode>
$
```

## 1.7. Files Edited - Fourth Try - `public/index.html`

Reviewed these two files:

- `ttt-my_way-app/public/index.html`
- `ttt-their_way-app/public/index.html`,

and made the following **cosmetic changes** to `ttt-their_way-app/public/index.html`, to make the files more similar:

- Added a `<meta name="description" ...` tag to `ttt-their_way-app/public/index.html`
- Added closing slashes ("`/`") to `<meta ...` and `<link ...` tags that didn't have them in `ttt-their_way-app/public/index.html`
- Changed the `<title ...> tag in `ttt-their_way-app/public/index.html`
- Removed the `<link rel="apple-touch-icon" ...` tag from `ttt-my_way-app/public/index.html`
- Added a `<noscript ...> tag to `ttt-their_way-app/public/index.html`

Here is the output of the `diff` command run comparing the updated versions of these two files:

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects
$ diff -i -b -w ttt-my_way-app/public/index.html ttt-their_way-app/public/index.html
5,6c5
<     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<     <meta name="viewport" content="width=device-width, initial-scale=1" />
---
>   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
13,14c12,13
<       manifest.json provides metadata used when your web app is installed on a
<       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
---
>     manifest.json provides metadata used when your web app is added to the
>     homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
16a16
>   <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
26c26,27
<     <title>"My Way" Version of the React Tutorial Tic-Tac-Toe App</title>
---
>   <title>"Their Way" Version of the React Tutorial Tic-Tac-Toe App</title>
>
$
```

This of course did not fix the error, but hey, it was worth a try!

**Putting this version on hold for the time being.**

## 1.8. Files Edited - Got It to Work!

Googled the error message and the fix is quite simple!

### 1.8.1. Current Situation

### 1.8.1.1. Files in `ttt-their_way-app/public`

It looks like only cosmetic changes were made to `public/index.html` in subsection *"1.7. Files Edited - Fourth Try - `public/index.html`"*.
Editing this file did not fix the problem.

### 1.8.1.2. Files in `ttt-their_way-app/src`

The files currently in `src` match the minimal versions from subsection *"1.5. Files Edited - Second Try - Another Failed Attempt"* above.

*- **`App.js` Before** :*

```javascript
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way-app/src
$ cat App.js
import { useState } from 'react';

export default function Square() {
  return <button className="square">X</button>;
}
$
```

*- **`index.js` Before** :*

```javascript
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way-app/src
$ cat index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
$
```

### 1.8.3. The Fix

Simply googling the error message brought up a few posts on [stackoverflow.com](https://stackoverflow.com) that
showed the correct syntax for statements `import`ing React.

*- **`App.js`: After** :*

```javascript
import React, { useState } from 'react';

export default function Square() {
  return <button className="square">X</button>;
}
```

**Note:** the first line now starts with `import React, ...`.
**This was the problem all along!!**

*- **`index.js` After** : no changes*

## 1.9. Recap

Assessing where I am at with these two versions of the tutorial, and how I plan to proceed with this version.

## 1.9.1. Recap: Summary

- The original goal
  - The goal of this version of the project was to contrast two ostensibly different ways of doing the same thing
  - The idea was that, for my own work, I might want to combine these methods in some way
- The snag
  - This version of the project hit on a snag right off, in that the code supplied did not compile
  - See above for the error messages, fixes attempted, and ultimate fix applied
- The other version, in `2a-tic_tac_toe-my_way.md`
  - I was almost done going through the tutorial when I found the fix for this version
  - I have now completed the other version, except for some optional "extra credit" ideas in the last section of it
- The downloads
  - The reason for having two versions of this project is that the tutorial provided two sources for downloading code
    - Downloads in `reactjs/projects/downloads/reactjs` are from the [react.dev](https://react.dev) site
    - Downloads in `reactjs/projects/downloads/codesandbox` are from the [codesandbox.io](https://codesandbox.io) site
    - For details, see `reactjs/projects/downloads/README.md`
  - The downloaded versions are a bit different stylistically
    - At this time, I am not committed to any given style of organizing React code
    - So I decided to work with two versions instead of just the one

## 1.9.2. Recap: Going Forward

The version of `App.js` in `reactjs/projects/ttt-their_way-app/src` more closely resembles the version of `App.js` in the
`reactjs/projects/ttt-their_way-app/src` than it does this one.

- At this point I prefer to have the `.js` code in a `.js` file rather than between `<script>` files in a `.html` file.
  - In this tutorial, anyway, we work only on the `.js` code and the `.html` markup doesn't change
  - The `.html` file also contains the project's css code, which is similarly unchanged during the project
- I want to go through the tutorial again, downloading the `sandbox.html` files when the tutorial offers them
  - This typically occurs at the end of a subsection, when they are recapping a set of changes
  - I am saving each of these files in a separate, appropriately-named directory in `reactjs/projects/downloads/reactjs`
- The code I will be migrating into `reactjs/projects/ttt-their_way-app/src/App.js` comes from the downloaded `sandbox.html` files
  - Download links appear in the tutorail above boxes containing the current version of the code used in the tutorial
  - This code appears after the `<script type="text/babel" data-type="module">` tag in those files
  - The downloaded `sandbox.html` files do not match the `App.js` code presented in the code boxes
  - Therefore, at this point it appears I will need to tweak this code a little to work with the code infrastructure I am using

**Note:** going forward the text in the heading tags in this file matches the text in the tutorial's headings.

# 2. Overview - `<h2> ...` Element

At this point, this version of `App.js`, in `reactjs/projects/ttt-their_way-app/src`, closely matches the version of the app
downloaded into `reactjs/projects/downloads/reactjs/02-Setup_for_the_tutorial/sandbox.html`.

- When run, this version of the code produces a single square with an "X" in it:

```javascript
export default function Square() {
  return <button className="square">X</button>;
}
```

## 2.1. Inspecting the starter code

This subsection discusses the following files:

- `App.js`
- `styles.css`
- `index.js`

Rather than break the downloaded code into these files, they provide a single `sandbox.html` file for download that contains the
contents of all of them.
I prefer having them broken down into these separate files.

## 2.2. Building the board

This subsection discusses turning the single square into a board containing 9 squares, with each containing its number rather than all "X"s.
The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/03-Inspecting_the_starter_code/sandbox.html` .

I had to tweak this code in a couple of ways:

- The `sandbox.html` file performs this bit of misdirection:

*- **Before** :*

```javascript
let App = function Board() {
  return (
    <>
      <div className="board-row">
. . .
. . .
. . .
      </div>
    </>
  );
}


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

I have two problems with this way of doing things:

- I don't care for setting the `App` component equal to the `Board` component, then rendering the `App` component
  - Why??
- Our `index.js` contains the `root.render(...` code, and I'd rather just let that be, at least for now
- For some reason, I get an error for the empty `<>` and `</>` enclosing tags, but it's ok if I use `<div>` ... `</div>`
  - My version does fine with the empty `<>` and `</>` enclosing tags
  - Don't feel like chasing down that error right now

So I changed the code above to look like this:

*- **After** :*

```javascript
export default function Board() {
  return (
    <div>
      <div className="board-row">
. . .
. . .
. . .
      </div>
    </div>
  );
}
```

## 2.3. Passing data through props
## 2.4. Making an interactive component
## 2.5. React Developer Tools

```
```

```javascript
```

```javascript
```

*- **Before** :*

```javascript
```

*- **After** :*

```javascript
```

```javascript
```

```javascript
```

*- **Before** :*

```javascript
```

*- **After** :*

```javascript
```

```javascript
```

