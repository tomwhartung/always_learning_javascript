
# README-React_notes.md

`README` file containing some notes about the React code in this project.

# 1. General Notes

## 1.1. Local Storage

This project saves the values and images in the browser's local storage.

- All code using local storage is in `src/lib/jungian/LocalStorageLib.tsx`
- All functions using local storage have names with the following prefixes:
  - Functions that store values are named `store*`, e.g., `storeScoreValues`
  - Functions that retrieve values are named `getStored*`, e.g., `getStoredScoreValues`

## 1.2. React Features

To allow users to save the values and images in the browser's local storage and
enable them to see changes to these images *in real time,* this project uses the
following features of React:

- State variables
  - Maintain the current state of controls used to change the image
- Event handlers
  - Handle changes to these controls
- useEffect() calls or *"hooks"*
  - Get and set values in local storage

All state variables, event handlers, and `useEffect()` calls are in each page's
main container, i.e.:

- `FixedContainer` in `src/jungian/Create.tsx`
- `DFlexContainer` in `src/jungian/View.tsx`
- `FixedContainer` in `src/jungian/Refine.tsx`

The remainder of this file explains how this App uses these features.

## 1.3. Standard Process

State variables, event handlers, and `useEffect()` calls usually operate as follows:

- 1. The user manipulates a control
- 2. This fires the event handler
- 3. The event handler updates the corresponding state variable
- 4. Changing a state variable fires the corresponding `useEffect()` call
- 5. The `useEffect()` call stores the new value in local storate

I developed this technique by adding numerous `console.log()` statements to the code and
watching the console in the Chrome developer tools to see which ones are used and what
values they display.

## 1.4. Fixing Problems

My preferred technique for solving problems is to add `console.log()` statements that
allow me to trace the flow of logic - which is not always straight-forward in React
programs - and see the current values of variables.

- A test for `logLogicFlow` surrounds all `console.log()` statements
- To turn off these `console.log()` statements, set `logLogicFlow` to `false` in *all* source files

Note that many `console.log()` statements are commented-out, enabling them to be easily
re-activated as necessary.

# 2. Problems Encountered and Solved

## 2.1. Values Lagging on Different Pages

During testing I would:

- 1. Set values on the Create page
- 2. See the values on the View or Refine page
- 3. Change the values on the Create page
- 4. See the *old* values on the View or Refine page

As I recall:

- These issues arose *before* I started storing values in local storage
- I fixed these issues by adding state variables to the View and Refine pages

My memory is a little fuzzy on this, but I *do* remember having the problem!

## 2.2. Default Values Wiping out Values in Local Storage

During testing I would:

- 1. Set values on the Create page
- 2. See the values on the View and Refine pages, and in local storage
- 3. Reload the app
- 4. See the values in local storage reset to their default values

This issue was caused by:

- Specifying default values for state variables
- React saved these to local storage before the `useEffect()` call would read the saved values

I fixed this issue by:

- Making the distinction between *initial* values and *invalid* values
- Ensuring the local storate functions would *not* save *invalid* values
- Using the *invalid* values as the "default" for state variables
- Using the *initial* values when there were no values in local storage

# 2. Controls, State Variables, and Event Handlers

All state variables have been *"lifted up"* into each page's main container,
enabling child components to share these values.

## 2.1. Controls, State Variables, and Event Handlers in `Create.tsx`

The Create page in `Create.tsx` supports using the following controls to create an image:

- Four score value sliders:
  - State variable: `currentScoreValues`
  - Event handler: `handleScoreValueChange`
  - Local storage item name: `jungian.scoreValues`
- Grid size slider:
  - State variable: `currentGridSize`
  - Event handler: `handleGridSizeChange`
  - Local storage item name: `jungian.gridSize`
- Square size slider:
  - State variable: `currentSquareSize`
  - Event handler: `handleSquareSizeChange`
  - Local storage item name: `jungian.squareSize`

## 2.2. Controls, State Variables, and Event Handlers in `View.tsx`

The View page in `View.tsx` allows only viewing an image, not changing it.
Therefore, **the View page does not support any controls for changing the image.**

- Because there are no controls, this page does not contain any event handlers

This page does, however, contain a state variable - specifically an array of numbers -
containing the `scoreValues`:

- State variable: `currentScoreValues`
- Event handler: *none*
- Local storage item name: `jungian.scoreValues`

Testing and experimentation with the app proves that this state variable is needed so
that the app can display the correct and current `scoreValue`s.

- I am not sure why the `gridSize` works without a corresponding state variable
- It may be possible, and even preferred, to use the `useRef` React hook instead of a state variable

**However,** I got the state variable to work ok, and I am more comfortable using that feature than I am
with using `useRef`, so am sticking with that - for the time being!
