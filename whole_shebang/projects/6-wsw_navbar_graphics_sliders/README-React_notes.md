
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
- useEffect() calls or "hooks"
  - Get and set values in local storage

All state variables, event handlers, and `useEffect()` calls are in the pages'
main container, i.e.:

- `FixedContainer` in `src/jungian/Create.tsx`
- `DFlexContainer` in `src/jungian/View.tsx`
- `FixedContainer` in `src/jungian/Refine.tsx`

The remainder of this file explains how this App uses these features.

# 2. State Variables and Event Handlers

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
  - 

