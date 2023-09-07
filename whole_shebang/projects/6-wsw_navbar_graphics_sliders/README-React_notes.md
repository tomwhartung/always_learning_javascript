
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

# 2. State Variables and Event Handlers

All state variables have been *"lifted up"* into each page's main container,
enabling child components to share these values.

## 2.1. State Variables and Event Handlers in `Create.tsx`

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

## 2.2. State Variables and Event Handlers in `View.tsx`

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

**However,** I got the state variable to work ok so am sticking with that - for the time being!

## 2.3. State Variables and Event Handlers in `Refine.tsx`

The Refine page in `Create.tsx` supports using the following controls to refine an image:

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

# 3. `useEffect()` Hooks

The following files contain `useEffect()` calls:

- `src/jungian/Create.tsx`
- `src/jungian/View.tsx`
- `src/jungian/Refine.tsx`

## 3.1. "First useEffect"

The "First useEffect" calls in `Create.tsx`, `View.tsx`, and `Refine.tsx`:

- Contain an empty dependency array
  - This means they are supposed to run only once, when the component mounts
    - Adding `console.log` statements proves this is not exactly true
    - For an explanation of this behavior, see:
      https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
  - 

