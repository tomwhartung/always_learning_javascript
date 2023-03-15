
# 2a-tic_tac_toe-my_way.md

Notes from going through lesson 0 of this reactjs tutorial:

- [ReactJS Tutorial: Tic-Tac-Toe](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)

# 1. Setup for `my_way` of Doing the Tutorial

The tutorial wants me to build this on a website named CodeSandbox.
I won't be doing that.

I will be building this `my_way` version of the tic-tac-toe project on my localhost by working in
`/var/www/always_learning/always_learning_javascript/reactjs/projects/ttt-my_way-app`.

## 1.1. Parallel Development

I will also be going through this in a parallel `their_way` version of the project, following the process
they suggest for working on my localhost.

See the file `2b-tic_tac_toe-their_way` in this directory for details about that effort.

## 1.2. Commands Run

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

## 1.3. Files Edited - Part One

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
  - Note that we rename this file to `src/styles.css`
    - For more information, see subsection *2.1. Inspecting the starter code* below

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

## 1.4. Files Edited - Part Two

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

## 1.5. Final Setup Step: Files Edited - Part Three

- `src/App.js`
  - Replaced all of the `function App()` greeting code with the contents of the few lines in the *second* code box, duplicated below
  - Also deleted the `export default App;` line

```
export default function Square() {
  return <button className="square">X</button>;
}
```

So far my version of the app has not blown up!

# 2. Overview - `<h2> ...` Element

Diving into the tutorial for realsies.

## 2.1. Inspecting the starter code

Much of this is review.

### 2.1.1. Files Edited, Continued

- Renaming `App.css` to `styles.css` for consistency with the tutorial
- Updated `App.js` to use the new style sheet name

While looking through this subsection, I tried to fix the errors I am seeing in the `ttt-their_way-app` version of this project.

### 2.1.2. A Brief Aside

I tried several things, but all my attempts failed.  Rats.
For details, see `2b-tic_tac_toe-their_way.md`.

## 2.2. Building the board

Made the updates discussed in this subsection, which involve creating a `Board` with 3 rows of 3 squares each for a total of 9 squares,
to the `ttt-my_way-app` version of `App.js`, without breaking anything.  Yay!

## 2.3. Passing data through props

- Don't forget the **curly braces** around `value` in **both:**
  - The **declaration** of the propery in the function definition
  - The **use** of the property inside the `<button...>` tag

```javascript
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```

```javascript
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value='1' />
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
    </>
  );
}
```

## 2.4. Making an interactive component

Time to make a square display an 'X' when we click on it.
Here's the process:

1. Add a `handleClick()` function to the `Square` component
2. Update the `Square` component to use *state* to remember that it has been clicked
   - Add an `import {useState}` statement at the top of the file
   - Remove the `{ value }` argument from the `Square` component function's definition
   - Define a new `value` variable by adding a call to `useState(null)`
3. Remove the `value=...` properties from the `Square` tags in the `Board` component
4. Update the `<button...` tag in the `Square` component to display an "X" when it has been clicked

1. Add a `handleClick()` function to the `Square` component

```javascript
function Square({ value }) {
  function handleClick() {
    console.log( "Clicked!" );
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

2. Update the `Square` component to use *state* to remember that it has been clicked
   - Add an `import {useState}` statement at the top of the file
   - Remove the `{ value }` argument from the `Square` component function's definition
   - Define a new `value` variable by adding a call to `useState(null)`

```javascript
import { useState } from 'react';

// Square: function component defining a square on the tic-tac-toe board
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
```

3. Remove the `value=...` properties from the `Square` tags in the `Board` component

```javascript
export default function Board() {
. . .
. . .
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
  . . .
  . . .
```

4. Update the `<button...` tag in the `Square` component to display an "X" when it has been clicked

```javascript
function handleClick() {
  setValue('X');
}
```

So far my version of the app has not blown up!

## 2.5. React Developer Tools

Note that, since I've installed the *React Developer Tools* plugin, the Developer tools window
contains a *Components* tab, way over on the right.
Opening this tab, and clicking on one of the components, allows seeing props, hooks (e.g., state),
and other information that might help when debugging.


# 3. Completing the game - `<h2> ...` Element

To complete the game, we need to do the following:

- **Goal A:** Place alternating "X"s and "O"s on the board
- **Goal B:** Determine when the game is over
- **Goal C:** Determine whether the someone has won or result is a draw

## 3.1. Lifting state up

To accomplish **Goal B,** we need to be able to determine the state in each of the 9 `Square` components.

The best place to do this is in the `Board` component, because it is the *parent* of all 9 `Square` components.

- To do this, we need to refactor the code to keep the state in the `Board` component
- This is known as *Lifting state up*

### 3.1.1. Refactoring Steps - Part 1: Handling an Array of Clicks

1. Update the `Board` component to keep the *state* of each of the 9 `Square` components
2. Update the `Board` component to pass the appropriate *state* value to each of the 9 `Square` components
3. Update the `Square` component to use the *state* value passed in to it from the `Board` component
4. Update the `Square` component to tell the `Board` component when a square has been clicked
- This is made a bit complicated by the fact that "state is private to a component that defines it,"
- As a result, "you cannot update the Board’s state directly from Square"
- Therefore we need to **pass an event handler from the `Board` component to the `Square` component**
- To do this, we need to follow these steps, which are not in the same sequence as the tutorial:
4.1. Add `onSquareClick` to the the `Square` component's properties
4.2. Update the `Square` component to call `onSquareClick` when a square is clicked
4.3. Add a `handleClick` function in the `Board` component that updates the `squares` array
4.4. Update the `Board` component to connect `onSquareClick` with `handleClick`

This doesn't quite fix everything, but it's a huge starting point.

For additional steps and updates to the code, see subsections *3.1.3. Refactoring Steps - Part 2*
and *3.1.4. Refactoring the Code - Part 2.*

### 3.1.2. Refactoring the Code - Part 1: Handling an Array of Clicks

**Step 1.** Update the `Board` component to keep the *state* of each of the 9 `Square` components

Add this line to the top of the `Board` function component:

```javascript
const [squares, setSquares] = useState( Array(9).fill(null) );
```

**Step 2.** Update the `Board` component to pass the appropriate state value to each of the 9 `Square` components

Add `value=...` properties to the `Board` component's `<Square ...>` tags as follows:

```javascript
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
```

**Step 3.** Update the `Square` component to use the *state* value passed in to it from the `Board` component

This requires adding `{value}` as a parameter to the `Square` function component definition.

**Not mentioned in the tutorial** is the need to also:

- **remove the `value` state variable** definition
- **remove the `handleClick`** event handler

from the `Square` component!

*Before:*

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

*After:*

```javascript
function Square( {value} ) {
  return (
    <button
      className="square"
    >
      {value}
    </button>
  );
}
```

**Step 4.** Update the `Square` component to tell the `Board` component when a square has been clicked

This entails following these steps, which are in a *slightly different sequence* than those in the tutorial:

- **Step 4.1.** Add `onSquareClick` to the the `Square` component's properties
- **Step 4.2.** Update the `Square` component to call `onSquareClick` when a square is clicked
- **Step 4.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array
- **Step 4.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

**Step 4.1.** Add `onSquareClick` to the the `Square` component's properties

The new `Square` function component's definition now looks like this:

```javascript
function Square( {value, onSquareClick} ) {
```

**Step 4.2.** Update the `Square` component to call `onSquareClick` when a square is clicked

The new `<button ...` tag in the `Square` component now looks like this:

```javascript
<button
  className="square"
  onClick={onSquareClick}
>
  {value}
</button>
```

**Step 4.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array

The new `handleClick` event handler goes between the `const` and `return` statements, and looks like this:

```javascript
function handleClick() {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[0] = "X";                  // Updates the first one (!!!)
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

**Step 4.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

We do this by updating each of the `<Square ...` tags as follows:

```javascript
<div className="board-row">
  <Square value={squares[0]} onSquareClick={handleClick} />
  <Square value={squares[1]} onSquareClick={handleClick} />
  <Square value={squares[2]} onSquareClick={handleClick} />
</div>
<div className="board-row">
  <Square value={squares[3]} onSquareClick={handleClick} />
  <Square value={squares[4]} onSquareClick={handleClick} />
  <Square value={squares[5]} onSquareClick={handleClick} />
</div>
<div className="board-row">
  <Square value={squares[6]} onSquareClick={handleClick} />
  <Square value={squares[7]} onSquareClick={handleClick} />
  <Square value={squares[8]} onSquareClick={handleClick} />
</div>
```

### 3.1.3. Refactoring Steps - Part 2: Using an Arrow Function

5. Enable "X"s in more than just first square
6. Understand why `onSquareClick={handleClick(0)}` causes an **infinite loop!**
-  The parens around the `0` in `onSquareClick={handleClick(0)}` cause handleClick to be called without clicks!
   - `onSquareClick={handleClick}` sets `onSquareClick` equal to the function `{handleClick}`
   - `onSquareClick={handleClick(0)} causes React to try to call `handleClick(0)` !!
7. Use the correct syntax to pass the clicked `Square`s index to the event handler

### 3.1.4. Refactoring the Code - Part 2: Using an Arrow Function

** Step 5.** Enable "X"s in more than just first square

This requires passing a parameter to the `Board` component's `handleClick` function.

*Before:*

```javascript
function handleClick() {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[0] = "X";                  // Updates the first one (!!!)
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

*After:*

```javascript
function handleClick( idx ) {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[idx] = "X";                // Update the idx-th one
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

** Step 6.** Understand why `onSquareClick={handleClick(0)}` causes an **infinite loop!**

Change the assignment in the first `<Square...` tag from
`onSquareClick={handleClick}` to `onSquareClick={handleClick(0)}`

*Before:*

```javascript
<Square value={squares[0]} onSquareClick={handleClick} />
```


*After:*

```javascript
<Square value={squares[0]} onSquareClick={handleClick(0)} />
```

Open the console to see the error:

> Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

**Step 7.** Use the correct syntax to pass the clicked `Square`s index to the event handler

The correct syntax is `<Square value={squares[0]} onSquareClick={() => handleClick(0)} />`.

```javascript
<div className="board-row">
  <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
  <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
</div>
<div className="board-row">
  <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
</div>
<div className="board-row">
  <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
</div>
```

Quoting from the tutorial:

> `() => handleClick(0)` is an arrow function, which is a shorter way to define functions. When the square is clicked, the code after the `=>` “arrow” will run, calling `handleClick(0)`.

## 3.2. Why immutability is important

```javascript
```


```javascript
```


*Before:*

*After:*

```javascript
```

```javascript
```

## 3.3. Taking turns

```javascript
```


```javascript
```


*Before:*

*After:*

```javascript
```

```javascript
```

## 3.4. Declaring a winner

```javascript
```

```javascript
```

So far my version of the app has not blown up!


# 4. Adding time travel - `<h2> ...` Element

## 4.1. Storing a history of moves

```javascript
```

```javascript
```

*Before:*

*After:*

```javascript
```


```javascript
```



## 4.2. Lifting state up, again

```javascript
```

```javascript
```

*Before:*

*After:*

```javascript
```


```javascript
```



## 4.3. Showing the past moves

```javascript
```

```javascript
```


*Before:*

*After:*

```javascript
```


```javascript
```


## 4.4. Picking a key

```javascript
```

```javascript
```

*Before:*

*After:*

```javascript
```


```javascript
```



## 4.5. Implementing time travel

```javascript
```

```javascript
```

*Before:*

*After:*

```javascript
```


```javascript
```



## 4.6. Final cleanup

```javascript
```

```javascript
```

*Before:*

*After:*

```javascript
```


```javascript
```



## 4.7. Wrapping up

```javascript
```

```javascript
```


*Before:*

*After:*

```javascript
```


```javascript
```


