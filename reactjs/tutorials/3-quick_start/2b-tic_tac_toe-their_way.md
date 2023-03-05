
# 2b-tic_tac_toe-their_way.md

Notes from going through lesson 0 of this reactjs tutorial:

- [ReactJS Tutorial: Tic-Tac-Toe](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)

# 1. Setup for `their_way` of Doing the Tutorial

The tutorial wants me to build this on a website named CodeSandbox.
I won't be doing that.

Their alternative, under *Setup for the tutorial* and in a **Note** box, **for using my local development environment,**
is to download the CodeSandbox files.

I will be building this `their_way` version of the tic-tac-toe project on my localhost in
`/var/www/always_learning/always_learning_javascript/reactjs/projects`.

## Parallel Development

I will also be going through this in a parallel `my_way` version of the project, following a process
that makes more sense to me - because I'll learn more about `npm`, structuring the project, etc. - for working on my localhost.

See the file `2a-tic_tac_toe-my_way` in this directory for details about that effort.

## Process for `their_way` of Developing on My Localhost

This process is a summarization of the process given in the **Note** box under
[*Setup for the tutorial*](https://beta.reactjs.org/learn/tutorial-tic-tac-toe#setup-for-the-tutorial).

1. Install `Node.js`
2. Export a zip file downloaded from CodeSandbox
3. Unzip the downloaded file and `cd` into that directory
4. Run `npm install` to install the dependencies
5. Run `npm start` and "follow the prompts to view the code running in a browser"

It all sounds too pat and easy, hence the desire to also do it `my_way`!

## Steps Taken and Commands Run

### 1. Install `Node.js`

Already done!

### 2. Download the Zip File

Too easy!

### 3. Unzip the Zip File and `cd`

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

### 4. Run `npm install`

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

### 5. Run `npm start`

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

## Files Edited

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

**Putting this version on hold for the time being.**

# 1. TBD

```
```

```javascript
```

# 1. XXX

```javascript
```

```javascript
```

# 1. XXX

```html
```

```javascript
```

# 1. XXX

```html
```

```javascript
```

# 1. XXX

```html
```

```javascript
```

