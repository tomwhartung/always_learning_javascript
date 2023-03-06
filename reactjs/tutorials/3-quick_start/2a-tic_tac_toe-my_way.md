
# 2a-tic_tac_toe-my_way.md

Notes from going through lesson 0 of this reactjs tutorial:

- [ReactJS Tutorial: Tic-Tac-Toe](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)

# 1. Setup for `my_way` of Doing the Tutorial

The tutorial wants me to build this on a website named CodeSandbox.
I won't be doing that.

I will be building this `my_way` version of the tic-tac-toe project on my localhost by working in
`/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-my_way-app`.

## Parallel Development

I will also be going through this in a parallel `their_way` version of the project, following the process
they suggest for working on my localhost.

See the file `2b-tic_tac_toe-their_way` in this directory for details about that effort.

## Commands Run

```
$ pwd
/var/www/always_learning/always_learning_javascript/reactjs/projects
$ npx create-react-app ttt-my_way-app
Creating a new React app in /var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-my_way-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
. . .
. . .
. . .
Happy hacking!
$ cd ttt-my_way-app
$ npm start
$
```

## Files Edited - Part One

Edited these files to remove the demo code that `create-react-app` gives us by default:

### `.html` File

- `public/index.html`
  - Changed the `<title>`

Leaving all other files in the `public` directory alone for now.

The two `public/logo*.png` files are no doubt *harmless* cruft, but still cruft!
However, I'm just get started, so indulging in perfectionism would be premature!!

### `.css` Files

- `src/App.css`
  - Removed all css from this file

Leaving `src/index.css` alone for now, because it only defines the fonts to use.

### `.js` Files

- `src/App.js`
  - Removed all of the JSX in the `function App()...` except the opening `<div className="App">` and closing `</div>` tags
  - Added three `<p>` tags with different versions of ye olde standard greeting, as minimal temporary placeholders
  - The `git diff` output appears below

Leaving `src/index.js` alone for now, because although it is tiny it does some very important things, such as:

- `import` some files that are no doubt crucial to this project's success
- render the `App`!!

```
$ gd reactjs/projects/ttt-my_way-app/src/App.js
diff --git a/reactjs/projects/ttt-my_way-app/src/App.js b/reactjs/projects/ttt-my_way-app/src/App.js
index 3784575..cb58fb6 100644
--- a/reactjs/projects/ttt-my_way-app/src/App.js
+++ b/reactjs/projects/ttt-my_way-app/src/App.js
@@ -4,20 +4,15 @@ import './App.css';
 function App() {
   return (
     <div className="App">
-      <header className="App-header">
-        <img src={logo} className="App-logo" alt="logo" />
-        <p>
-          Edit <code>src/App.js</code> and save to reload.
-        </p>
-        <a
-          className="App-link"
-          href="https://reactjs.org"
-          target="_blank"
-          rel="noopener noreferrer"
-        >
-          Learn React
-        </a>
-      </header>
+      <p>
+        Hello, world!
+      </p>
+      <p>
+        Bonjour, le monde!
+      </p>
+      <p>
+        Hola, mundo!
+      </p>
     </div>
   );
 }
```

## Files Edited - Part Two

Edited these files to **add** just **some** of the code that the tutorial gives us by default:

- `src/App.css`
  - Verified that these two groups of style definitions match:
    - The 90 lines of styles in `reactjs/projects/downloads/codesandbox/src/styles.css`
    - The 90 lines of styles inside the `<style>` tag at the end of `reactjs/projects/downloads/reactjs/sandbox.html`
  - Added these 90 lines to the previously empty `src/App.css`

```
$ pwd
/var/www/always_learning/always_learning_javascript
$ diff reactjs/projects/downloads/codesandbox/src/styles.css  reactjs/projects/ttt-my_way-app/src/App.css
$
```

So far my version of the app has not blown up!

I believe we are now ready to start working on the JSX React code!!


# 1. TBD

```javascript
```

So far my version of the app has not blown up!


# 1. TBD

```javascript
```

```javascript
```

So far my version of the app has not blown up!


# 1. XXX

```javascript
```

```html
```

```javascript
```

# 1. XXX

```javascript
```

```html
```

```javascript
```

# 1. XXX

```javascript
```

```html
```

```javascript
```

