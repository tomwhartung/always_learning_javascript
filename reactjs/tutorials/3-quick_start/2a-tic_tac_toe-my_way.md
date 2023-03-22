
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

So far my version of the App has not blown up!

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

So far my version of the App has not blown up!

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

So far my version of the App has not blown up!

## 2.5. React Developer Tools

Note that, since I've installed the *React Developer Tools* plugin, the Developer tools window
contains a *Components* tab, way over on the right.
Opening this tab, and clicking on one of the components, allows seeing props, hooks (e.g., state),
and other information that might help when debugging.


# 3. Completing the game - `<h2> ...` Element

To complete the game, we need to do the following:

- **Goal A:** Place alternating "X"s and "O"s on the board
  - Goal A is accomplished in subsection "3.3. Taking turns"
- **Goal B:** Determine when the game is over
  - Goal B is accomplished in subsection "3.4. Declaring a winner"
- **Goal C:** Determine whether the someone has won or result is a draw
  - Goal C is accomplished in subsection "3.5. Extra Credit: Identifying Draws"

## 3.1. Lifting state up

To accomplish **Goal B,** we need to be able to determine the state in each of the 9 `Square` components.

The best place to do this is in the `Board` component, because it is the *parent* of all 9 `Square` components.

- To do this, we need to refactor the code to keep the state in the `Board` component
- This is known as *Lifting state up*

### 3.1.1. Refactoring Steps - Part 1: Handling an Array of Clicks

- **Step 3.1.1.1.** Update the `Board` component to keep the *state* of each of the 9 `Square` components
- **Step 3.1.1.2.** Update the `Board` component to pass the appropriate *state* value to each of the 9 `Square` components
- **Step 3.1.1.3.** Update the `Square` component to use the *state* value passed in to it from the `Board` component
- **Step 3.1.1.4.** Update the `Square` component to tell the `Board` component when a square has been clicked
   - This is made a bit complicated by the fact that "state is private to a component that defines it,"
   - As a result, "you cannot update the Board’s state directly from Square"
   - Therefore we need to **pass an event handler from the `Board` component to the `Square` component**
   - To do this, we need to follow these steps, which are not in the same sequence as the tutorial:
- **Step 3.1.1.4.1.** Add `onSquareClick` to the the `Square` component's properties
- **Step 3.1.1.4.2.** Update the `Square` component to call `onSquareClick` when a square is clicked
- **Step 3.1.1.4.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array
- **Step 3.1.1.4.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

This doesn't quite fix everything, but it's a huge starting point.

For additional steps and updates to the code, see subsections *3.1.3. Refactoring Steps - Part 2*
and *3.1.4. Refactoring the Code - Part 2.*

### 3.1.2. Refactoring the Code - Part 1: Handling an Array of Clicks

**Step 3.1.1.4.1.** Update the `Board` component to keep the *state* of each of the 9 `Square` components

Add this line to the top of the `Board` function component:

```javascript
const [squares, setSquares] = useState( Array(9).fill(null) );
```

**Step 3.1.1.4.2.** Update the `Board` component to pass the appropriate state value to each of the 9 `Square` components

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

**Step 3.1.1.4.3.** Update the `Square` component to use the *state* value passed in to it from the `Board` component

This requires adding `{value}` as a parameter to the `Square` function component definition.

**Not mentioned in the tutorial** is the need to also:

- **remove the `value` state variable** definition
- **remove the `handleClick`** event handler

from the `Square` component!

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

**Step 3.1.1.4.4.** Update the `Square` component to tell the `Board` component when a square has been clicked

This entails following these steps, which are in a *slightly different sequence* than those in the tutorial:

- **Step 3.1.1.4.4.1.** Add `onSquareClick` to the the `Square` component's properties
- **Step 3.1.1.4.4.2.** Update the `Square` component to call `onSquareClick` when a square is clicked
- **Step 3.1.1.4.4.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array
- **Step 3.1.1.4.4.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

**Step 3.1.1.4.4.1.** Add `onSquareClick` to the the `Square` component's properties

The new `Square` function component's definition now looks like this:

```javascript
function Square( {value, onSquareClick} ) {
```

**Step 3.1.1.4.4.2.** Update the `Square` component to call `onSquareClick` when a square is clicked

The new `<button ...` tag in the `Square` component now looks like this:

```javascript
<button
  className="square"
  onClick={onSquareClick}
>
  {value}
</button>
```

**Step 3.1.1.4.4.3.** Add a `handleClick` function in the `Board` component that updates the `squares` array

The new `handleClick` event handler goes between the `const` and `return` statements, and looks like this:

```javascript
function handleClick() {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[0] = "X";                  // Updates the first one (!!!)
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

**Step 3.1.1.4.4.4.** Update the `Board` component to connect `onSquareClick` with `handleClick`

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

- **Step 3.1.3.5.** Enable "X"s in more than just first square
- **Step 3.1.3.6.** Understand why `onSquareClick={handleClick(0)}` causes an **infinite loop!**
-  The parens around the `0` in `onSquareClick={handleClick(0)}` cause handleClick to be called without clicks!
   - `onSquareClick={handleClick}` sets `onSquareClick` equal to the function `{handleClick}`
   - `onSquareClick={handleClick(0)} causes React to try to call `handleClick(0)` !!
- **Step 3.1.3.7.** Use the correct syntax to pass the clicked `Square`s index to the event handler

### 3.1.4. Refactoring the Code - Part 2: Using an Arrow Function

** Step 3.1.3.5.** Enable "X"s in more than just first square

This requires passing a parameter to the `Board` component's `handleClick` function.

*- **Before** :*

```javascript
function handleClick() {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[0] = "X";                  // Updates the first one (!!!)
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

*- **After** :*

```javascript
function handleClick( idx ) {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[idx] = "X";                // Update the idx-th one
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

** Step 3.1.3.6.** Understand why `onSquareClick={handleClick(0)}` causes an **infinite loop!**

Change the assignment in the first `<Square...` tag from
`onSquareClick={handleClick}` to `onSquareClick={handleClick(0)}`

*- **Before** :*

```javascript
<Square value={squares[0]} onSquareClick={handleClick} />
```

*- **After** :*

```javascript
<Square value={squares[0]} onSquareClick={handleClick(0)} />
```

Open the console to see the error:

> Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

**Step 3.1.3.7.** Use the correct syntax to pass the clicked `Square`s index to the event handler

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

*Immutability* refers to the technique of making a copy of existing data before changing it,
and changing the copy rather than the original.
If you decide to keep the changes, then you can replace the old data with the newly copied-and-changed version.

- This is what we did when updating the `squares` array in the `handleClick` event handler

```javascript
function handleClick( idx ) {
  const nextSquares = squares.slice();   // Creates a new copy of the squares array
  nextSquares[idx] = "X";                // Update the idx-th one
  setSquares(nextSquares);               // Sets squares equal to the new copy
}
```

Immutability has the following benefits:

- Immutability makes it easier to implement complex features
  - This will become apparent in the next section, *4. Adding time travel*
- Immutability allows keeping earlier versions of data intact
- Immutability makes it easier to compare when a component's data has changed
  - In React, all child components automatically re-render by default when their parent changes
  - You might want to skip this re-rendering, for performance reasons, when a component's data has not changed

## 3.3. Taking turns

It is time to update the code so that clicks alternate between showing "X"s and "O"s.
"X" always has the first move.

This requires a new *boolean* state variable, `xIsNext`.
Add this declaration to the top of the `Board` component:

```javascript
const [xIsNext, setXIsNext] = useState( true );
```

Add this code to the middle of the `handleClick` event handler:

```javascript
if (xIsNext) {
  nextSquares[idx] = "X";              // Update the idx-th one
} else {
  nextSquares[idx] = "O";              // Update the idx-th one
}
setXIsNext( ! xIsNext );               // Toggle xIsNext
```

**Note:** in this version, it's possible to overwrite an existing "X" or "O".

- We can fix this by *returning early* from `handleClick`:
  - If the user clicks on a `square` whose value is not null, return before changing the array

Add this code to the top of `handleClick`:

```javascript
if ( squares[idx] ) {     // If the square already has a non-null value
  return;                 //   it cannot be played again!
}
```

Following are versions of the bulk of the `Board` component before and after the changes in this subsection:

*- **Before** :*

```javascript
export default function Board() {
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick( idx ) {
    const nextSquares = squares.slice();   // Creates a new copy of the squares array
    nextSquares[idx] = "X";                // Update the idx-th one
    setSquares(nextSquares);               // Sets squares equal to the new copy
  }

  return (
    <>
    // . . .
    </>
  )
}
```

*- **After** :*

```javascript
export default function Board() {
  const [xIsNext, setXIsNext] = useState( true );
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick( idx ) {
    if ( squares[idx] ) {                  // If the square already has a non-null value
      return;                              //   it cannot be played again!
    }
    const nextSquares = squares.slice();   // Creates a new copy of the squares array
    if (xIsNext) {
      nextSquares[idx] = "X";              // Update the idx-th one
    } else {
      nextSquares[idx] = "O";              // Update the idx-th one
    }
    setXIsNext( ! xIsNext );               // Toggle xIsNext
    setSquares(nextSquares);               // Sets squares equal to the new copy
  }

  return (
    <>
    // . . .
    </>
  )
}
```

**Note:** at this point we have accomplished **Goal A:** Place alternating "X"s and "O"s on the board.

## 3.4. Declaring a winner

A player wins when they get three in a row, diagonally, horizontally, or vertically.

- We use the `calculateWinner` function to determine whether someone has won

Add this code to the end of the file `App.js`:

```javascript
// calculateWinner: determine whether we have a winner
//   returns: the winning letter, or else null
function calculateWinner( squares ) {
  const lines = [
    [0, 1, 2],  // horiz. bottom row
    [3, 4, 5],  // horiz. middle row
    [6, 7, 8],  // horiz. bottom row
    [0, 3, 6],  // vert. left col
    [1, 4, 7],  // vert. middle col
    [2, 5, 8],  // vert. right col
    [0, 4, 8],  // diag. left to right (down)
    [2, 4, 6],  // diag. right to left (down)
  ];
  for ( let i = 0; i < lines.length; i++ ) {
    const [a, b, c] = lines[i];
    if ( squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]   )
    {
      return ( squares[a] );
    }
  }
  return ( null );
}
```

Add a call to `calculateWinner` to the top of `handleClick`, and if a player has won then just `return`:

```javascript
function handleClick( idx ) {
  if ( calculateWinner(squares) ) {      // If we have a winner
    return;                              //   no more plays: we are done!
  }
  // . . .
```

**Note:** At this point, the game is complete, but we still need to display who won.

- Remove the code that checks `calculateWinner` from the top of the `calculateWinner` function
- Add the new code as indicated in the **After** version to the `Board` component

*- **Before** :*

```javascript
// Board: our tic-tac-toe game board
export default function Board() {
  const [xIsNext, setXIsNext] = useState( true );
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick( idx ) {
    if ( calculateWinner(squares) ) {      // If we have a winner
      return;                              //   no more plays: we are done!
    }
    if ( squares[idx] ) {                  // If the square already has a non-null value
      return;                              //   it cannot be played again!
    }
    // . . .
    setXIsNext( ! xIsNext );               // Toggle xIsNext
    setSquares(nextSquares);               // Sets squares equal to the new copy
  }

  return (
    <>
      <div className="board-row">
    // . . .
    </>
  )
}
```

*- **After** :*

```javascript
// Board: our tic-tac-toe game board
export default function Board() {
  const [xIsNext, setXIsNext] = useState( true );
  const [squares, setSquares] = useState( Array(9).fill(null) );

  function handleClick( idx ) {
    if ( squares[idx] ) {                  // If the square already has a non-null value
      return;                              //   it cannot be played again!
    }
    const nextSquares = squares.slice();   // Create a new copy of the squares array
    if (xIsNext) {
      nextSquares[idx] = "X";              // Update the idx-th one
    } else {
      nextSquares[idx] = "O";              // Update the idx-th one
    }
    setXIsNext( ! xIsNext );               // Toggle xIsNext
    setSquares(nextSquares);               // Sets squares equal to the new copy
  }

  // New code to report the status of the game:
  // Note: Also add a div element to display the status to the return statement
  const winner = calculateWinner(squares);
  let status;
  if ( winner ) {
    status = winner + " is the winner!";
  } else {
    let nextPlayer = xIsNext ? "X" : "O";
    status = "The next player is " + nextPlayer;
  }

  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
}
```

**Note:** at this point we have accomplished **Goal B:** Determine when the game is over.

**Note:** At this point, the game is complete - according to the tutorial, anyway.
**But!  It does not display when no one wins the game - when it is a draw!!**

## 3.5. Extra Credit: Identifying Draws

When all squares are full but there is no winner, the game ends in a draw.

- Extra Credit: update `calculateWinner` to return a "D" for "D"raw when the game ends in a draw

Do this in two steps:

- **Step 3.5.1:** Update `calculateWinner` to check for a draw when neither player's won yet
- **Step 3.5.2:** Update the `Board` component code to check for a draw and update the `status` accordingly

*- End of `calculateWinner` - **Before** :*

```javascript
  return ( null );
```

*- End of `calculateWinner` - **After** :*

```javascript
  // No winner yet, so check for a draw
  let draw = "D";
  for ( let idx = 0; idx < squares.length; idx++ ) {
    if ( ! squares[idx] ) {
      return ( null );
    }
  }
  return ( draw );
```

*- `Board` component code - **Before** :*

```javascript
  // . . .
  // New code to report the status of the game:
  const winner = calculateWinner(squares);
  let status;
  if ( winner ) {
    status = winner + " is the winner!";
  } else {
    let nextPlayer = xIsNext ? "X" : "O";
    status = nextPlayer + " is the next player";
  }
  // . . .
```

*- `Board` component code - **After** :*

```javascript
  // . . .
  // New code to report the status of the game:
  const winner = calculateWinner(squares);
  let status;
  if ( winner ) {
    if ( winner === "D" ) {
      status = "The game is a draw!  Thanks for playing!  Reload to play again!!";
    } else {
      status = winner + " is the winner!  Reload to play again!!";
    }
  } else {
    let nextPlayer = xIsNext ? "X" : "O";
    status = nextPlayer + " is the next player";
  }
  // . . .
```

**Note:** at this point we have accomplished **Goal C:** Determine whether the someone has won or result is a draw.


# 4. Adding time travel - `<h2> ...` Element

Adding this feature will enable users to back up one or more moves.

## 4.1. Storing a history of moves

Note that this is easier because we decided make a copy of the `squares` variable, rather than mutate it directly.

- We will store the old versions of `squares` in an array named `history`

## 4.2. Lifting state up, again

Implementing this `history` feature requires making it a *state* variable.
This in turn requires adding a new top-level `default` component named `Game` in which to store it.

These are the steps we will be following:

- **Step 4.2.1** Add a new top-level component named `Game`
- **Step 4.2.2** Add `currentSquares` and the existing `xIsNext` and new `history` state variables to `Game`
- **Step 4.2.3** Add an empty function `handlePlay` to `Game` and pass it, and `squares` and `xIsNext`, to `Board`
- **Step 4.2.4** Change `Board` to take these three prop values, and call `onPlay`, i.e. `Board`'s `handlePlay` function
- **Step 4.2.5** Update `Board` to use the first two props, fixing the compile error
- **Step 4.2.6** Update `Board` to call `onPlay` when the user clicks on a square
- **Step 4.2.7** Update the `handlePlay` function in `Game` to toggle `xIsNext`
- **Step 4.2.8** Update the `handlePlay` function in `Game` to add the new `squares` array to the end of `history`

After these changes, the game should work as before, at least superficially.

- The App will be saving each move taken in `history`, but offering no way to back up through those moves.

### **Step 4.2.1** Add a new top-level component named `Game`

Add this code to the top of `App.js`:

```javascript
// Game: our tic-tac-toe game app
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>
          {/* TBD */ }
        </ol>
      </div>
    </div>
  );
}
```

Remove the `export default` qualifiers from the definition of the `Board` function component:

*- **Before** :*

```javascript
export default function Board() {
// . . .
```

*- **After** :*

```javascript
function Board() {
// . . .
```

### **Step 4.2.2** Add `currentSquares` and the existing `xIsNext` and new `history` state variables to `Game`

After this step, the top of the `Game` function component should look like this:

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState( true );
  const [history, setHistory] = useState( [Array(9).fill(null)] );
  const currentSquares = history[history.length - 1];
  // . . .
}
```

### **Step 4.2.3** Add an empty function `handlePlay` to `Game` and pass it, and `squares` and `xIsNext`, to `Board`

The new `handlePlay` function goes between the `const` definitions and the `return` statement in `Game`, and looks like this:

```javascript
  function handlePlay( nextSquares ) {
    // TBD
  }
```

This **Before** code shows that the `Board` tag in `Game''s `return` statement passes **no props**:

*- **Before** :*

```javascript
// . . .
<div className="game-board">
  <Board />
</div>
// . . .
```

This **After** code shows how to update the `Board` tag in `Game''s `return` statement to pass **in the props:**

*- **After** :*

```javascript
// . . .
<div className="game-board">
  <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
</div>
// . . .
```

**Note:** At this point the App still works.

### **Step 4.2.4** Change `Board` to take these three prop values, and call `onPlay`, i.e. `Board`'s `handlePlay` function

Update the `Board` function component's declaration as shown in the **After** code:

*- **Before** :*

```javascript
function Board() {
```

*- **After** :*

**Note: The curly braces are *extremely* important!  Forgetting to put them in caused me major issues!!**

```javascript
function Board( { xIsNext, squares, onPlay } ) {
```

**Note:** This causes the App to no longer compile.

### **Step 4.2.5** Update `Board` to use the first two props, fixing the compile error

Fixing the compile error requires two sub-steps:

**Step 4.2.5.1** Remove the `const` declarations of `xIsNext` and `squares`
**Step 4.2.5.2** Remove the calls to `setXIsNext` and `setSquares` in `handleClick`

#### Step 4.2.5.1: Remove the `const` declarations of `xIsNext` and `squares`

*- **Before** :*

```javascript
const [xIsNext, setXIsNext] = useState( true );
const [squares, setSquares] = useState( Array(9).fill(null) );
```

*- **After** :*

```javascript
//  const [xIsNext, setXIsNext] = useState( true );                    // delete or comment-out this line
//  const [squares, setSquares] = useState( Array(9).fill(null) );     // delete or comment-out this line
```

#### Step 4.2.5.2: Remove the calls to `setXIsNext` and `setSquares` in `handleClick`

*- **Before** :*

```javascript
setXIsNext( ! xIsNext );               // Toggle xIsNext
setSquares(nextSquares);               // Sets squares equal to the new copy
```

*- **After** :*

```javascript
// setXIsNext( ! xIsNext );               // Toggle xIsNext
// setSquares(nextSquares);               // Sets squares equal to the new copy
```

**Note:** At this point the App compiles ok, and does **not** display a Console error when a `Square` is clicked, but it doesn't work.

### **Step 4.2.6** Update `Board` to call `onPlay` when the user clicks on a square

Add `onPlay(nextSquares);` to the end of the `handleClick` function in `Board`:

*- **Before** :*

```javascript
// setXIsNext( ! xIsNext );               // Toggle xIsNext
// setSquares(nextSquares);               // Sets squares equal to the new copy
```

*- **After** :*

```javascript
// setXIsNext( ! xIsNext );               // Toggle xIsNext
// setSquares(nextSquares);               // Sets squares equal to the new copy
onPlay(nextSquares);                   // Sets squares equal to the new copy
```

**Note:** At this point the App compiles ok, and does **not** display a Console error when a `Square` is clicked, but it doesn't work.

### **Step 4.2.7** Update the `handlePlay` function in `Game` to toggle `xIsNext`

*- **Before** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay( nextSquares ) {
    // TBD
  }
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay( nextSquares ) {
    setXIsNext( ! xIsNext );               // Toggle xIsNext
  }
  // . . .
}
```

**Note:** At this point the App compiles ok, and toggles the next player when a `Square` is clicked, but it doesn't work.

### **Step 4.2.8** Update the `handlePlay` function in `Game` to add the new `squares` array to the end of `history`

Add `setHistory( [...history, nextSquares] );` to the top of the `handlePlay` function:

*- **Before** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay( nextSquares ) {
    setXIsNext( ! xIsNext );               // Toggle xIsNext
  }
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  // . . .
  function handlePlay( nextSquares ) {
    setHistory( [...history, nextSquares] );  // Adds nextSquares to the end of history
    setXIsNext( ! xIsNext );                  // Toggle xIsNext
  }
  // . . .
}
```

The tutorial explains the syntax in the just-added statement as follows:

> Here, [...history, nextSquares] creates a new array that contains all the items in history, followed by nextSquares.
> (You can read the ...history spread syntax as “enumerate all the items in history”.)

After these changes, the App works as before, but also saves each move taken in `history`.

**Note:** The App does not yet offer a way to back up through those moves.

## 4.3. Showing the past moves

The goal of all the refactoring in subsection 4.2. was to save all of the moves in the `history` variable in the `Game` component.

- We want to transform the Array of `square` Arrays in `history` into an array of `Button` components

We can use the Array class' `map()` method to do this.
Following is a simple example of how `map()` works as an anonymous *arrow function:*

```javascript
[1, 2, 3].map( (x) => x * 2);  // yields [2, 4, 6]
```

These are the steps we will be following:

- **Step 4.3.1** Add an empty function named `jumpTo` to the `Game` component
- **Step 4.3.2** Add the `moves` **arrow function** to just after `jumpTo` in `Game`
- **Step 4.3.3** Add a reference to `moves` to the `return` statement in `Game`
- **Step 4.3.4** Note the Warning message in the console

### Step 4.3.1 Add an empty function named `jumpTo` to the `Game` component

Add this function stub to just after `handlePlay` in `Game`:

```javascript
function jumpTo( nextMove ) {
  // TBD
}
```

### Step 4.3.2 Add the `moves` *arrow function* to just after `jumpTo` in `Game`

```javascript
// Build a list of buttons, each with a key and a descripton, that allow time travel
//   Note: this is a multi-line anonymous ARROW FUNCTION
const moves = history.map( (squares, move) => {
  let description;
  if ( move > 0 ) {
    description = 'Go to move #' + move;
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

### Step 4.3.3 Add a reference to `moves` to the `return` statement in `Game`

*- **Before** :*

```javascript
<div className="game-info">
  <ol>
    {/* TBD */ }
  </ol>
</div>
```

*- **After** :*

```javascript
<div className="game-info">
  <ol>{moves}</ol>
</div>
```

**Note:** at this point, the list displays next to the `Board`, but clicking on the buttons does not take us back to prior moves.

### Step 4.3.4 Note the Warning message in the console

In additon to the list not working, the console displays this message:

- Warning: Each child in a list should have a unique "key" prop

The next section discusses this issue.

## 4.4. Picking a key

Implementing this feature requires rendering a list of buttons enabling the user to back up to previous moves in the game.
When the user clicks on one of these buttons, the list must change -- it must back up to the move on which the user clicked and
remove the moves after that.

- A list whose elements can change is called a *dynamic list*

React requires that each element in a *dynamic list* have a *key.*

- A key from a database is a good candidate for use in this situation
- The key enables React to determine which list elements have changed and need to be re-rendered
  - If the current list contains a key that doesn't match an existing key, React knows it must *create* the list element
  - If the current list does not contain a key that was in the previous list, React knows it must *destroy* the list element
  - If the current list contains a key that matches one in the previous list, React knows it must *change* the list element
  - If no key is specified, React will use the array index and report an error
    - This can cause issues if the array elements are re-ordered
- Keys need to be unique only within a given list, not globally

Quoting from the tutorial:

> **It’s strongly recommended that you assign proper keys whenever you build dynamic lists.**

Additionally:

> If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

## 4.5. Implementing time travel

Finishing this up requires taking these steps:

- **Step 4.5.1** Add a `key` to the list items returned by the `moves` arrow function
- **Step 4.5.2** Add a `currentMove` state variable to the `Game` function component
- **Step 4.5.3** Update `Game`'s `jumpTo` method to update `currentMove`, using its value to also set the value of `xIsNext`
- **Step 4.5.4** Update `Game`'s `handlePlay` method to accurately reflect the user's currently desired state
- **Step 4.5.5** Update `Game` to render the move that was selected by the user

### Step 4.5.1 Add a `key` to the list items returned by the `moves` arrow function
Update the list item tag in the `return` statement in the `moves = history.map(...` arrow function to use the `move` index as the key:

*- **Before** :*

```javascript
const moves = history.map( (squares, move) => {
  // . . .
  return (
    <li>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

*- **After** :*

```javascript
const moves = history.map( (squares, move) => {
  // . . .
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

Note that this causes the Warning to disappear.

### Step 4.5.2 Add a `currentMove` state variable to the `Game` function component

Initialize the new state variable to 0:

*- **Before** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState( true );
  const [history, setHistory] = useState( [Array(9).fill(null)] );
  const currentSquares = history[history.length - 1];
```

*- **After** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState( true );
  const [history, setHistory] = useState( [Array(9).fill(null)] );
  const [currentMove, setCurrentMove] = useState( 0 );
  const currentSquares = history[history.length - 1];
```

- **Step 4.5.3** Update `Game`'s `jumpTo` method to update `currentMove`, using its value to also set the value of `xIsNext`

The `jumpTo` function in `Game` takes an argument named `nextMove`, so we can use that to set our new `currentMove` variable.

If we are backing up moves, we may need to change the of `xIsNext`.
Indeed, we can always determine the value of `xIsNext` based on the value of `currentMove` - even when we are not backing up moves!

- If the value of `currentMove` is even, then it is "X"'s turn
- If the value of `currentMove` is odd, then it is "O"'s turn

*- **Before** :*

```javascript
function jumpTo( nextMove ) {
  // TBD
}
```

*- **After** :*

```javascript
// jumpTo: called when the user clicks a button in the list of moves to which they can back up
function jumpTo( nextMove ) {
  setCurrentMove( nextMove );
  setXIsNext( nextMove % 2 === 0 );         // true for even-numbered moves, else false
}
```

### Step 4.5.4 Update `Game`'s `handlePlay` method to accurately reflect the user's currently desired state

Add a new `nextHistory` variable to `Game`'s `handlePlay` method to contain the way the board should look after this play.
Set `nextHistory` equal to the existing array from 0 to `currentMove + 1) plus the next array of squares `nextSquares`.

- Use `setHistory` to update the value of `history` so that it matches `nextHistory`
- Use `setCurrentMove` to the length of `nextHistory` minus 1

*- **Before** :*

```javascript
// handlePlay: called when a user clicks on a square
function handlePlay( nextSquares ) {
  setHistory( [...history, nextSquares] );  // Adds nextSquares to the end of history
  setXIsNext( ! xIsNext );                  // Toggle xIsNext
}
```

*- **After** :*

```javascript
// handlePlay: called when a user clicks on a square
function handlePlay( nextSquares ) {
  const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
  setHistory( [...history, nextSquares] );    // Adds nextSquares to the end of history
  setCurrentMove( nextHistory.length - 1 );   // currentMove must reflect the # of moves in history
  setXIsNext( ! xIsNext );                    // Toggle xIsNext
}
```

### Step 4.5.5 Update `Game` to render the move that was selected by the user

In other words, update `currentSquares` to match the `currentMove` in the `history` array of moves:

*- **Before** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState( true );
  const [history, setHistory] = useState( [Array(9).fill(null)] );
  const [currentMove, setCurrentMove] = useState( 0 );
  const currentSquares = history[history.length - 1];
  // . . .
}
```

*- **After** :*

```javascript
export default function Game() {
  const [xIsNext, setXIsNext] = useState( true );
  const [history, setHistory] = useState( [Array(9).fill(null)] );
  const [currentMove, setCurrentMove] = useState( 0 );
  const currentSquares = history[currentMove];
  // . . .
}
```

The game now appears to travel through time to previous moves, but some problems still remain.

- The list of moves **does *not* update** when we move backwards
- Subsequent moves do not reflect the input, but rather take us through the old moves
- Subsequent moves are still tacked on to the end of the list

At this point I'm not sure whether I messed something up, or the tutorial is still a work in progress.

## 4.6. Final cleanup

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


## 4.7. Wrapping up

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


