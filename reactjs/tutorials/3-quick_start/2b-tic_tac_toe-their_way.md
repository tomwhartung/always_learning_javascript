
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

- Skip the next few subsections and go to subsection [*1.8. Files Edited - Got It to Work!*](https://github.com/tomwhartung/always_learning_javascript/blob/master/reactjs/tutorials/3-quick_start/2b-tic_tac_toe-their_way.md#18-files-edited---got-it-to-work)

Or go straight to
[*1.8.3. The Fix*](https://github.com/tomwhartung/always_learning_javascript/blob/master/reactjs/tutorials/3-quick_start/2b-tic_tac_toe-their_way.md#183-the-fix).

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

I have a few problems with this way of doing things:

- I don't care for setting the `App` component equal to the `Board` component, then rendering the `App` component
  - Why??
- Our `index.js` contains the `root.render(...` code, and I'd rather just let that be, at least for now
- For some reason, I get an error for the empty `<>` and `</>` enclosing tags, but it's ok if I use `<div>` ... `</div>`
  - My version does fine with the empty `<>` and `</>` enclosing tags
  - Don't feel like chasing down that error right now
  - For more details, see subsection *2.2.1. Theory as to why `<>` throws an error in this version* below

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

2.2.1. My Theory as to Why `<>` Throws an Error in This Version

My theory is that the `ttt-their_way-app` is using an older version of Babel than the `ttt-my_way-app` is using.

#### 2.2.1.1. Evidence

It looks like the package-lock.json file specifies the version of Babel to use.

And it looks like the `ttt-their_way-app` is using version 7.0.0:

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-their_way-app
$ grep -n babel-loader package-lock.json
875:    "node_modules/babel-loader": {
877:      "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-7.0.0.tgz",
10997:        "babel-loader": "7.0.0",
$ wc -l  package-lock.json
15428 package-lock.json
$
```

While the `ttt-my_way-app` is using version 8.2.3:

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-my_way-app
 $ grep -n babel-loader package-lock.json
5152:    "node_modules/babel-loader": {
5154:      "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.3.0.tgz",
5170:    "node_modules/babel-loader/node_modules/schema-utils": {
14343:        "babel-loader": "^8.2.3",
tomh@jane: /var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-my_way-app
 $ wc -l  package-lock.json
17202 package-lock.json
$
```

#### 2.2.1.2. What to Do About It

I'm not going to worry about it for now, and hope that whatever the issue is, it will not cause further problems.

## 2.3. Passing data through props

This subsection discusses changing the "X" in each of the board's 9 squares to containing the values 1 through 9.
The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/04-Passing_data_through_props/sandbox.html` .

Here are the steps that the tutorial presents for this process:

2.3.1. Create a new `Square` function component that comprises a `<button...>` tag
2.3.2. Update the `Board` component to contain 9 of these `Squares`, 3 in each of 3 rows
2.3.3. Update the `Square` component to accept a `value` property, as a function argument **in curly braces**
2.3.4. Update the `Board` component to pass the appropriate value, 1-9, when creating each `Square`

I had to tweak this code as described in the previous section, *2.2. Building the board*; following is the result:

```javascript
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </div>);
}
```

## 2.4. Making an interactive component

This subsection shows how to make each `Square` display an "X" inside it when the user clicks on it.
The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/05-Making_an_interactive_component/sandbox.html` .

Here are the steps that the tutorial presents for this process:

2.4.1. Declare a `handleClick` function inside the `Square` function component
2.4.2. Add an `onClick={handleClick}` attribute to `Square`'s `<button...` tag
2.4.3. Update `Square` to `useState` [sic] to remember its state, i.e., whether it has been clicked, by setting its `value` to "X"
2.4.4. Update `Board` to no longer pass a numeric `value` to each of the `Button` components it uses

I had to tweak the downloaded code as described in the section *2.2. Building the board*; following is the result:

```javascript
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
```

## 2.5. React Developer Tools

This subsection briefly discusses the developer tools available in the browser section on CodeSandbox.

I won't be using that site....

# 3. Completing the game - `<h2> ...` Element

In this section we will switch between placing "X"s and placing "O"s on the board, and implement declaring a winner.

## 3.1. Lifting state up

This subsection discusses moving or *lifting* the *state variables* currently in the `Square` component *up* the
component hierarchy to the `Board` component.

This subsection of the tutorial includes two codeboxes, and two downloads, so I have broken the steps that the
tutorial presents for this process into two parts.

The code they offer for downloading is saved in:

-  `reactjs/projects/downloads/reactjs/06-Lifting_state_up-part_1/sandbox.html` .
-  `reactjs/projects/downloads/reactjs/07-Lifting_state_up-part_2/sandbox.html` .

**Note:** these steps are organized a little bit differently from those I went through doing the `ttt-my_way-app`
version, due to the fact that this subsection has two codeboxes, and hence two versions of the downloaded file.

### 3.1.1. Lifting state up - Part 1: Moving the `squares` state variable from `Square` to `Board`

Here are the steps that the tutorial presents for this process:

- **Step 3.1.1.1.** Update the `Board` component to keep the *state* of each of the 9 `Square` components
- **Step 3.1.1.2.** Update the `Board` component to pass the appropriate *state* value to each of the 9 `Square` components
- **Step 3.1.1.3.** Update the `Square` component to use the *state* value passed in to it from the `Board` component

At this point the tutorial presents a code box, and corresponding download file, with the changes made so far.

**Note:** at this point, the definition of `Square` in the codebox and downloaded code are missing the
`handleClick` function we added in the subsection entitled *Making an interactive component*!!
No biggie, but still....

The following subsections show the code changes needed to fulfill these steps.

#### **Step 3.1.1.1.** Update the `Board` component to keep the *state* of each of the 9 `Square` components

This is a matter of adding just one line of code after the `Board` function component's declaration:

*- **Before** :*

```javascript
export default function Board() {
  return (
  // . . .
  );
}
```

*- **After** :*

```javascript
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
  // . . .
  );
}
```

#### **Step 3.1.1.2.** Update the `Board` component to pass the appropriate state value to each of the 9 `Square` components

This requires adding a `value=` property to each `Square` component in the `Board`:

*- **Before** :*

```javascript
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
```

*- **After** :*

```javascript
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
  );
}
```

#### **Step 3.1.1.3.** Update the `Square` component to use the *state* value passed in to it from the `Board` component

This requires:

- Adding the `{ value }` prop to the `Square` function component definition
- Removing the `value` state variable definition from `Square`
- Commenting out the call to `setValue('X');` in the `handleClick()` function in `Square`
- Adding the `{value}` prop to the `<button...` tag definition

*- **Before** :*

```javascript
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
```

*- **After** :*

```javascript
function Square( { value } ) {

  function handleClick() {
    // setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
```

Again, the codebox and downloaded code are missing `Square`'s `handleclick` function, but that's ok....

### 3.1.2. Lifting state up - Part 2: Passing clicks from `Square` to `Board`

Following are the steps needed to pass clicks from `Square` to `Board` and finish *Lifting state up:*

- **Step 3.1.2.** Update the `Square` component to tell the `Board` component when a square has been clicked
   - This is made a bit complicated by the fact that "state is private to a component that defines it,"
   - As a result, "you cannot update the Board’s state directly from Square"
   - Therefore we need to **pass an event handler from the `Board` component to the `Square` component**
   - To do this, we need to follow these steps, which are not in the same sequence as the tutorial:
- **Step 3.1.2.1.** Add `onSquareClick` to the the `Square` component's properties
- **Step 3.1.2.2.** Update the `Square` component to call `onSquareClick` when a square is clicked
- **Step 3.1.2.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array
- **Step 3.1.2.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

#### **Step 3.1.2.** Update the `Square` component to tell the `Board` component when a square has been clicked

This requires a few sub-steps.

#### **Step 3.1.2.1.** Add `onSquareClick` to the the `Square` component's properties

Remove the old `handleClick` event handler, and change the declaration of the `Square` function component as follows:

*- **Before** :*

```javascript
function Square( { value } ) {

  function handleClick() {
    // setValue('X');
  }

  return (
    // . . .
  );
}
```

*- **After** :*

```javascript
function Square( { value, onSquareClick } ) {

  return (
    // . . .
  );
}
```

#### **Step 3.1.2.2.** Update the `Square` component to call `onSquareClick` when a square is clicked

Update the `<button ...` tag in `Square` to call `onSquareClick` instead of `handleClick`:

*- **Before** :*

```javascript
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
```

*- **After** :*

```javascript
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
```

#### **Step 3.1.2.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array

The tutorial does this step after the next one, but calling `handleClick` before it's defined causes an error,
so we add the function first.

Add the function to just after the `const [squares,...` statement at the top of `Board`:

```javascript
function handleClick(i) {
  const nextSquares = squares.slice();
  nextSquares[i] = 'X';
  setSquares(nextSquares);
}
```

#### **Step 3.1.2.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

Because we must pass a value to `onSquareClick` via `handleClick`, this requires using an *arrow function*.

**Note:** This step combines two steps in the tutorial, and several of the steps presented in the `ttt-my_way-app` version.
Since I already know that passing a parameter to an event handler that is called in a sub-component requires using an
*arrow function*, I am skipping the folderol of hard-coding a single square in the handler and going straight to the solution.

Update the use of the `Square` component in the `return` statement in `Board` as follows:

*- **Before** :*

```javascript
return (
  <div>
    <div className="board-row">
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  </div>
);
```

*- **After** :*

```javascript
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0) }/>
        <Square value={squares[1]} onSquareClick={ () => handleClick(1) }/>
        <Square value={squares[2]} onSquareClick={ () => handleClick(2) }/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={ () => handleClick(3) }/>
        <Square value={squares[4]} onSquareClick={ () => handleClick(4) }/>
        <Square value={squares[5]} onSquareClick={ () => handleClick(5) }/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={ () => handleClick(6) }/>
        <Square value={squares[7]} onSquareClick={ () => handleClick(7) }/>
        <Square value={squares[8]} onSquareClick={ () => handleClick(8) }/>
      </div>
    </div>
  );
```

The app now displays an "X" in a square immediately after the user clicks on it.

### 3.1.3. Lifting state up - Summary

It is useful to review the chain of events that occur when a user clicks on a square:

1. The `Square` tag in the `Board` component calls the `onSquareClick` event handler
2. The `onSquareClick` event handler is passed in as a property to `Square`
3. The *arrow function* definition hard-wires `onSquareClick` to `handleClick` in the `Board` component
4. The the `Board` component's `handleClick` function updates the `squares` state variable based on the index value passed to it

## 3.2. Why immutability is important

This subsection discusses why `Board`'s `handleClick(i)` function uses `const nextSquares = squares.slice();` to
create a new array of squares after each move, rather than update the original `squares` array of moves.

This subsection does not contain any code boxes, so there is no code to download.

## 3.3. Taking turns

This subsection shows how to update the code so that it alternates between placing "X"s and "O"s.
It also shows how to prevent overwriting a square that has already been played

The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/08-Taking_turns/sandbox.html` .

Following are the code changes the tutorial presents for this process.

First declare a *state* variable named `xIsNext` at the top of the `Board` component:

```javascript
const [xIsNext, setxIsNeXt] = useState(true);
```

Next, update `Board`'s `handleClick` event handler to:

- Use set `nextSquares[i]` based on the current value of `xIsNext`
- Toggle `xIsNext`

*- **Before** :*

```javascript
export default function Board() {
  const [xIsNext, setxIsNeXt] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    // . . .
  );
}
```

*- **After** :*

```javascript
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] ) {        // Ignore click: this square has alredy been played!
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);     // toggle xIsNext
  }

  return (
    // . . .
  );
}
```

Finally, update `Board`'s `handleClick` event handler to ignore clicks on a square that has already been played:

*- **Before** :*

```javascript
function handleClick(i) {
  const nextSquares = squares.slice();
  // . . .
}
```

*- **After** :*

```javascript
function handleClick(i) {
  if (squares[i]) {       // Ignore click: this square has alredy been played!
    return;
  }
  const nextSquares = squares.slice();
  // . . .
}
```

## 3.4. Declaring a winner

This subsection shows how to update the code so that it displays a message when one of the player wins.

The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/09-Declaring_a_winner/sandbox.html` .

Following are the code changes the tutorial presents for this process.

First we need to add a `calculateWinner` function that the `Board` function component can call:

```javascript
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

Note that this function can be global and does not need to be inside of the `Board` component.

Next, we need to update `handleClick` to call `calculateWinner` and ignore any additoinal clicks - i.e., return,
if one of the players has indeed won:

*- **Before** :*

```javascript
function handleClick(i) {
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  // . . .
}
```

*- **After** :*

```javascript
function handleClick(i) {
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  // . . .
}
```

Finally, if someone has won, we need to display a message stating so.
Take care of this by:

- Adding the code shown in the **After** section to construct a `status` message just before the `return` statement in the `Board` component
- Adding a `<div>` element to display the `status` message to the `Board` component's `return` statement, as shown in the **After** code

*- **Before** :*

```javascript
function handleClick(i) {
  // . . .
}

return (
  <div>
    <div className="board-row">
  // . . .
    </div>
  </div>
);
```

*- **After** :*

```javascript
function handleClick(i) {
  // . . .
}

const winner = calculateWinner(squares);
let status;
if (winner) {
  status = "Winner: " + winner;
} else {
  status = "Next player: " + (xIsNext ? "X" : "O");
}

return (
  <div>
    <div className="status">{status}</div>
    <div className="board-row">
  // . . .
    </div>
  </div>
);
```

**Note:** this version does *not* display a message when the game is a draw.
I added that functionality to the `ttt-my_way-app` version - see subsection *3.5. Extra Credit: Identifying Draws* -
but will not be adding it here.


# 4. Adding time travel - `<h2> ...` Element

This section shows how to store the moves played and allow the user to go back to a previous move.

## 4.1. Storing a history of moves

This subsection discusses why treating the `squares` array as *immutable,* as discussed in subsection
*3.2. Why immutability is important,* makes it easier to implement this "time travel" idea.

There is no code to download for this subsection.

## 4.2. Lifting state up, again

This subsection shows why implementing this feature means we need to *lift state up* to a new top-level `Game` component, and
the code needed to do this.

The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/10-Lifting_state_up_again/sandbox.html` .

Here is a list of the steps that the tutorial presents for this process:

- **Step 4.2.1** Add a new top-level component named `Game`
- **Step 4.2.2** Add `currentSquares` and the existing `xIsNext` and new `history` state variables to `Game`
- **Step 4.2.3** Add an empty function `handlePlay` to `Game` and pass it, and `squares` and `xIsNext`, to `Board`
- **Step 4.2.4** Change `Board` to take these three prop values, and call `onPlay`, i.e. `Board`'s `handlePlay` function
- **Step 4.2.5** Update `Board` to use the first two props, fixing the compile error
- **Step 4.2.6** Update `Board` to call `onPlay` when the user clicks on a square
- **Step 4.2.7** Update the `handlePlay` function in `Game` to toggle `xIsNext`
- **Step 4.2.8** Update the `handlePlay` function in `Game` to add the new `squares` array to the end of `history`

The following subsections show the code needed to take care of each of these steps.

### **Step 4.2.1** Add a new top-level component named `Game`

To add a new top-level component, and still have the game work, we need to

- Remove the `export default` prefix from the `Board` function component
  - `Board` is left as-is, for now
- Use the `export default` prefix to declare a new `Game` function component
- Add JSX code to `Game` to use the `Board` component

*- **Before** :*

```javascript
export default function Board() {
  // . . .
}
```

*- **After** :*

```javascript
function Board() {
  // . . .
}
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{ /* TODO */ }</ol>
      </div>
    </div>
  );
}
```

```javascript
```

### **Step 4.2.2** Add `currentSquares` and the existing `xIsNext` and new `history` state variables to `Game`

The next step is to add these variables to the `Game` component:

- Move the `xIsNext` *state variable* from the beginning of `Board` to the top of `Game`
- Add a `history` *state variable* to the top of `Game`
- Add `currentSquares` as a `const` variable to the top of `Game`
  - For now, `currentSquares` will equal the last Array in the `history` Array of moves, each of which is also an Array

Following is the code needed to add these variables:

```javascript
const [xIsNext, setXIsNext] = useState(true);
const [history, setHistory] = useState([Array(9).fill(null)]);
const currentSquares = history[history.length - 1];
```

### **Step 4.2.3** Add an empty function `handlePlay` to `Game` and pass it, and `squares` and `xIsNext`, to `Board`

The code for the empty function goes between the `const` variable definitions and the `return` statement in `Game`:

```javascript
function handlePlay(nextSquares) {
  // TODO
}
```

Update the `<Board ...>` tag in `Game`'s `return` statement so that it passes in the variables and the `handlePlay` function:

*- **Before** :*

```javascript
<div className="game-board">
  <Board />
</div>
```

*- **After** :*

```javascript
<div className="game-board">
  <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
</div>
```

### **Step 4.2.4** Change `Board` to take these three prop values, and call `onPlay`, i.e. `Board`'s `handlePlay` function

**Note:** The tutorial covers * **Step 4.2.5** Update `Board` to use ... * before covering this step.

- Update the `Board` function declaration to accept these variables, as shown in the **After** version of the code
- Add a call to `onPlay` to the end of `Board`'s `handleClick` function
  - Note that `onPlay` is `Game`'s `handlePlay` function, passed in via props

*- **Before** :*

```javascript
function Board() {
  // . . .
}
```

*- **After** :*

```javascript
function Board({ xIsNext, squares, onPlay }) {
  // . . .
  onPlay(nextSquares);
}
```

**Note:** at this juncture, the code no longer compiles.  We will fix that presently.

### **Step 4.2.5** Update `Board` to use the first two props, fixing the compile error

**Note:** The tutorial covers * **Step 4.2.4** Change `Board` to take ... * before covering this step.

First, remove the `const` declarations of `xIsNext` and `squares` from the top of `Board`,
because they are now passed in as props:

*- **Before** :*

```javascript
function Board({ xIsNext, squares, onPlay }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
  // . . .
  }
  // . . .
}
```

*- **After** :*

```javascript
function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
  // . . .
  }
  // . . .
}
```

Next, remove the calls to `setXIsNext` and `setSquares` in `handleClick`

*- **Before** :*

```javascript
function handleClick(i) {
  // . . .
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
  onPlay(nextSquares);
}
```

*- **After** :*

```javascript
function handleClick(i) {
  // . . .
  onPlay(nextSquares);
}
```

**Note:** the app now compiles, but still does not work.
This is because we need to update the `handlePlay` function in `Game`.

### **Step 4.2.6** Update `Board` to call `onPlay` when the user clicks on a square

This may be done already, but if not do it now:

*- **Before** :*

```javascript
function Board({ xIsNext, squares, onPlay }) {
  // . . .
}
```

*- **After** :*

```javascript
function Board({ xIsNext, squares, onPlay }) {
  // . . .
  onPlay(nextSquares);
}
```

Now we are calling `onPlay`, which is `Game`'s passed-in `handlePlay` function, but it doesn't yet do anything.
Time to fix that!

### **Step 4.2.7** Update the `handlePlay` function in `Game` to toggle `xIsNext`

*- **Before** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay(nextSquares) {
    // TODO
  }
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
  }
  // . . .
}
```

### **Step 4.2.8** Update the `handlePlay` function in `Game` to add the new `squares` array to the end of `history`

*- **Before** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
  }
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  // . . .
}
```

The app now works once again!  Whew!!

## 4.3. Showing the past moves

This subsection shows how to use the Javascript Array method `map(...)` to construct a list of `<button...` tags that
users can click on to revisit their earlier moves.

The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/11-Showing_the_past_moves/sandbox.html` .

Here are the changes that the tutorial presents for this process:

- Add an empty - for now - function named `jumpTo` to the `Game` component
- Use the `map()` method to construct a list of buttons alowing users to revision prior moves
- Add the list of buttons to the markup returned by the `Game` component

Following is the code to be added to `Game` between the `handlePlay` function and the `return` statement:

```javascript
function jumpTo(nextMove) {
  // TODO
}

const moves = history.map((squares, move) => {
  let description;
  if (move > 0) {
    description = 'Go to move # ' + move;
  } else {
    description = 'Go to start of game';
  }
  return (
    <li>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

Update `Game`'s `return` statement, by putting the `moves` variable in the `game-info` `<div>` element,
as shown in the **After** version of the code below:

*- **Before** :*

```javascript
return (
  // . . .
    <div className="game-info">
      <ol>{ /* TODO */ }</ol>
    </div>
  // . . .
);
```

*- **After** :*

```javascript
return (
  // . . .
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  // . . .
);
```

**Note that:**

- Clicking on the buttons does not work - because currently the `jumpTo` function is empty
- The console displays this Warning message: "Warning: Each child in a list should have a unique "key" prop."

## 4.4. Picking a key

This subsection describes why React displays an error when the elements in a *dynamic list* do not have a *key.*

- Supplying a key makes it easier for React to track which elements have been added, deleted, or changed

If you do not supply a key, React *"will report an error and use the array index as a key by default."*

## 4.5. Implementing time travel

This subsection shows how to finish enabling the user to revisit prior movies.

**Note:** this section offers two versions of the code for downloading:

- The first version is saved as `reactjs/projects/downloads/reactjs/12-Implementing_time_travel-1/sandbox.html`
  - This version has the `key` added, which clears up the warning message in the console
- The second version is saved as `reactjs/projects/downloads/reactjs/13-Implementing_time_travel-2-done/sandbox.html`
  - This version is the version made available at the end of this subsection

These are the changes that the tutorial calls for to complete this step in the process:

- Add a `key` to the list items returned by the `moves` arrow function
- Add a `currentMove` state variable to the `Game` function component
- Update `Game`'s `jumpTo` method to render the move that was selected by the user
- Update `Game`'s `handlePlay` method to update `history` and `currentMove`:
- Update `Game` to render the user's currently desired state

The updated code needed for each of these changes follows.

Add a `key` to the list items returned by the `moves` arrow function, to fix the error message:

*- **Before** :*

```javascript
return (
  <li>
    <button onClick={() => jumpTo(move)}>{description}</button>
  </li>
);
```

*- **After** :*

```javascript
return (
  <li key={move}>
    <button onClick={() => jumpTo(move)}>{description}</button>
  </li>
);
```
```

Add a `currentMove` state variable to the `Game` function component, to keep track of the index for the current move:

*- **Before** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];
  // . . .
}
```

Update `Game`'s `jumpTo` method to render the move that was selected by the user, by updating `currentMove` and `xIsNext`:

*- **Before** :*

```javascript
function jumpTo(nextMove) {
  // TODO
}
```

*- **After** :*

```javascript
function jumpTo(nextMove) {
  setCurrentMove(nextMove);
  setXIsNext(nextMove % 2 === 0);
}
```

Update `Game`'s `handlePlay` method to update `history` and `currentMove`:

*- **Before** :*

```javascript
function handlePlay(nextSquares) {
  setHistory([...history, nextSquares]);
  setXIsNext(!xIsNext);
}
```

*- **After** :*

```javascript
function handlePlay(nextSquares) {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  setXIsNext(!xIsNext);
}
```

Update `Game` to render the user's currently desired state, by setting `currentSquares` to the `currentMove` in `history`:

*- **Before** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];       // The only line changed in this **After** version
  // . . .
}
```

The game now works as it should!

## 4.6. Final cleanup

This subsection shows how to get rid of `xIsNext`, which is based on `currentMove` and therefore redundant.

There is no code to download for this subsection.

To finish this step we need to change the declaration of `xIsNext` in `Game` to a property, which requires
removing all calls to `setXIsNext` from `Game`'s `handlePlay` and `jumpTo` functions:

*- **Before** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // . . .
}
```

## 4.7. Wrapping up

This subsection discusses some ideas for extending the app.
For a list of these, see the `my_way` version in `reactjs/tutorials/3-quick_start/2a-tic_tac_toe-my_way.md` or the tutorial at
[Tic-Tac-Toe App: Wrapping up](https://react.dev/learn/tutorial-tic-tac-toe#wrapping-up).

The code they offer for downloading is saved in `reactjs/projects/downloads/reactjs/14-Wrapping_up/sandbox.html` .

