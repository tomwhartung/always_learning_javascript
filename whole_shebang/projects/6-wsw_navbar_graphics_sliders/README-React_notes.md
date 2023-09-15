
# README-React_notes.md

This `README` file contains notes about the React code in this project.

# 1. General Notes

## 1.1. Local Storage

This project saves the images and the values used to create them in the
browser's local storage.

- All code using local storage is in `src/lib/jungian/LocalStorageLib.tsx`
- All functions using local storage have names with the following prefixes:
  - Functions that store values are named `store*`, e.g., `storeImageStr`
  - Functions that retrieve values are named `getStored*`, e.g., `getStoredImageStr`

## 1.2. React Features

To allow users to save the values and images in the browser's local storage and
enable them to see changes to these images *in real time,* this project uses the
following features of React:

- State variables
  - Maintain the current state of controls used to change the image
  - The names of all state variables begin with the `current` prefix
- Event handlers
  - Handle changes to these controls
  - The names of all event handlers begin with the `handle` prefix
- `useEffect()` calls or *"hooks"*
  - Store and get values in local storage

All state variables, event handlers, and `useEffect()` calls are in each page's
main container, i.e.:

- The `FixedContainer` component in `src/jungian/Create.tsx`
- The `DFlexContainer` component in `src/jungian/View.tsx`
- The `FixedContainer` component in `src/jungian/Refine.tsx`

The remainder of this file explains how this App uses these features.

## 1.3. Overview of Process

State variables, event handlers, and `useEffect()` calls usually operate as follows:

- 1. The user manipulates a control
- 2. This fires the event handler
- 3. The event handler updates the corresponding state variable
- 4. Changing a state variable fires the corresponding `useEffect()` call
- 5. The `useEffect()` call stores the new value in local storage
  - An exception occurs when `Create.tsx`'s `draw()` function stores a new `imageStr`

I developed this technique by adding numerous `console.log()` statements to the code
and watching the console in the Chrome developer tools to see the flow of control
within the components.

## 1.4. Fixing Problems

My preferred technique for solving problems is to add `console.log()` statements that
allow me to trace the flow of logic - which is not always straight-forward in React
programs - and see the current values of variables.

- A test for `logLogicFlow` surrounds all `console.log()` statements
- To suppress this `console.log()` output, set `logLogicFlow` to `false` in *all* source files

Note that many `console.log()` statements are commented-out, enabling them to be easily
re-activated as necessary.

# 2. Problems Encountered and Solved

## 2.1. Default Values Wiping out Values in Local Storage

### 2.1.1. Symptoms

During testing I would:

- 1. Set values on the Create page
- 2. See the values on the View and Refine pages, and in local storage
- 3. Reload the app
- 4. See the values in local storage reset to their default values

### 2.1.2. Cause

This issue was caused by:

- Specifying *valid* "default" values for state variables
- React saved these to local storage before the `useEffect()` call would read the saved values

### 2.1.3. Fix

I fixed this issue by:

- Making the distinction between *initial* values and *invalid* values
- Ensuring the local storate functions would *not* save *invalid* values
- Using the *invalid* values as the "default" for state variables
- Using the *initial* values when there were no values in local storage

## 2.2. Values Lagging on Different Pages

### 2.2.1. Symptoms

During testing I would:

- 1. Set values on the Create page
- 2. See the values on the View or Refine page
- 3. Change the values on the Create page
- 4. Sometimes see the *old* values on the View or Refine page
  -  In particular, this can happen after reloading the app before visiting View or Refine

### 2.2.2. This Bug Came Back!

As I recall, these issues arose *before* I started storing values in local storage, and
I fixed them by adding state variables to the View and Refine pages.

The issue was also probably before I added code to the Refine page supporting controls that
allowed changing the image, which required adding state variables to the page as well.

### 2.2.3. The Definitive Cause

I re-introduced this bug when trying to remove the `currentScoreValueArr` state variable from
the View page!

- The View page has no controls allowing changes to the image
- I thought that meant I did not need this state variable
- I reproduced this bug by:
  - 1. Removing the `currentScoreValueArr` state variable from the View page
  - 2. Creating a new image
  - 3. **Reloading** the app, then immediately visiting the View page
- This caused the View page to display the `initial*` values, rather than the stored values!

**Note:** this *did not wipe out* the values in local storage, it just caused them to lag.

- I believe the bug was caused by React failing to re-render `DFlexImageAndSliderValues`

### 2.2.4. The Definitive Fix

I was able to fix the last manifestation of this bug by adding the `currentScoreValueArr`
state variable back into the the View page's `DFlexContainer` component.

For details, see the lengthy comment at the top of `DFlexContainer` in `View.tsx`.


# 3. Controls, State Variables, and Event Handlers

All state variables have been *"lifted up"* into each page's main container,
enabling child components to share these values.

## 3.1. Controls, State Variables, and Event Handlers in `Create.tsx`

The Create page in `Create.tsx` supports using the following controls to create an image:

- Four score value sliders:
  - State variable: `currentScoreValueArr`
  - Event handler: `handleScoreValueChange`
  - Local storage item name: `jungian.scoreValueArr`
- Grid size slider:
  - State variable: `currentGridSize`
  - Event handler: `handleGridSizeChange`
  - Local storage item name: `jungian.gridSize`
- Square size slider:
  - State variable: `currentSquareSize`
  - Event handler: `handleSquareSizeChange`
  - Local storage item name: `jungian.squareSize`

## 3.2. Controls, State Variables, and Event Handlers in `View.tsx`

The View page in `View.tsx` allows only viewing an image, not changing it.

- However, without a state variable, values on the View page can lag behind their current values

Therefore, even though there are no controls, this page contains the `currentScoreValueArr` state variable.

- No controls:
  - State variable: `currentScoreValueArr`
  - Event handler: *none*
  - Local storage item name: *none*
    - The View page does not store any items, but it does get their values so it can display them

## 3.3. Controls, State Variables, and Event Handlers in `Refine.tsx`

The Refine page in `Create.tsx` supports using the following controls to refine an image:

- Four color picker radio buttons:
  - State variables: `currentColorIndex` and `currentImageStr`
  - Event handler: `handleColorPickerChange`
  - Local storage item name: None, but ultimately enables changing `jungian.imageStr`
- Clicking on image:
  - State variable: `currentImageStr`
  - Event handler: `handleImageClick`
  - Local storage item name: `jungian.imageStr`
- Square size slider:
  - State variable: `currentSquareSize`
  - Event handler: `handleSquareSizeChange`
  - Local storage item name: `jungian.squareSize`
- Image and color picker:
  - State variable: `currentStatusMsg`
  - Event handlers: `handleColorPickerChange` and `handleImageClick`
  - Local storage item name: *none*


# 4. `useEffect()` Hooks

The following files contain `useEffect()` calls:

- `src/jungian/Create.tsx`
- `src/jungian/View.tsx`
- `src/jungian/Refine.tsx`

Some of these `useEffect()` calls contain several lines of code but actually do very little.
This is because I like to use `console.log` statements to trace the flow of control
and see values as they change.

## 4.1. "First `useEffect()`"

The "First `useEffect()`" calls in `Create.tsx`, `View.tsx`, and `Refine.tsx` are fairly similar
to one another:

- Contains an empty dependency array
  - This means they are supposed to run only once, when the component mounts
    - Adding `console.log` statements proves this is not exactly true
    - For an explanation of this behavior, see:
      https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
- Reads values from local storage and sets these in:
  - The `ImageLib` variables
  - State variables, as appropriate

## 4.2. Subsequent `useEffect()` Calls in `Create.tsx`

The Create page contains the following additional `useEffect()` calls:

- `useEffect()` for `currentScoreValueArr`
  - Updates local storage with the new `scoreValueArr`
- `useEffect()` for `currentGridSize`
  - Updates local storage with the new `gridSize`
- `useEffect()` for `currentSquareSize`
  - Updates local storage with the new `squareSize`

## 4.3. Subsequent `useEffect()` Calls in `View.tsx`

The Create page contains *no* additional `useEffect()` calls!

## 4.4. Subsequent `useEffect()` Calls in `Refine.tsx`

The Refine page contains the following additional `useEffect()` calls:

- `useEffect` for `currentImageStr`
  - Updates local storage with the new `imageStr`
- `useEffect()` for `currentGridSize`
  - Updates local storage with the new `gridSize`
- `useEffect()` for `currentSquareSize`
  - Updates local storage with the new `squareSize`

