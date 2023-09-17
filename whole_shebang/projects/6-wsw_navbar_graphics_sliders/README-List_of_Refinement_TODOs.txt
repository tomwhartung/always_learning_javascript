
Review code on all pages:
  [x] lib/JungianLib.tsx
    [x] Check for unnecessary code, e.g., console.log statements
    [x] Check for unnecessarily-exported functions
  [x] lib/jungian/LocalStorageLib.tsx
    [x] Check for unnecessary code, e.g., console.log statements
    [x] Check for unnecessarily-exported functions
  [x] Create page
    [x] Check event handlers
    [x] Check for unnecessary code, e.g., console.log statements
    [x] Check for clarity
    [x] Check for unnecessary state variables - could be scary!
    [x] Check useEffect() calls:
      [x] Check for consistency, esp. in First useEffect()
  [x] View page
    [x] Check event handlers
    [x] Check for unnecessary code, e.g., console.log statements
    [x] Check for clarity
    [x] Check for unnecessary state variables - could be scary!
    [x] Check useEffect() calls:
      [x] Check for consistency, esp. in First useEffect()
  [x] Refine page
    [x] Check event handlers
    [x] Check for unnecessary code, e.g., console.log statements
    [x] Check for clarity
    [x] Check for unnecessary state variables - could be scary!
    [x] Check useEffect() calls:
      [x] Check for consistency, esp. in First useEffect()

[x] Rename all "*String" to "*Str"
  - These are all *[iI]mageString variables (no other *Strings currently being used)
  - Rename *[iI]mageString to *[iI]mageString as we verify their use as consistent and appropriate
[x] Change `defaultImageString` to `initialImageStr` or `invalidImageStr`
[x] Change `jungian.imageString` to `jungian.imageStr` in local storage
    [x] Change `storeImageString` to `storeImageStr` in `LocalStorageLib.tsx`
    [x] Change `getStoredImageString` to `getStoredImageStr`in `LocalStorageLib.tsx`
[x] Rename `drawStoredImageString()` to `drawImageStr()`
    [x] `drawImageStr()` should have only one parameter: the context
[x] `imageStringToDraw` to `ImageLib.imageStr`
    [x] Verify the use of this variable is consistent and appropriate
    [x] Replace with `ImageLib.imageStr` - as with other Image Parameters

[x] Fix bug in View:
  - Reload -> Jungian -> View:
    - Slider values and Grid size reset to initial values!!
    - Also, status message is wrong!!
    - Visit Create or Refine then -> View:
      - Slider values and Grid size ok!
  - To fix: Add back currentSliderValueArr state variable and use it to pass props to DFlexImageAndSliderValues

Rename:
  [x] `LocalStorageLib.tsx` to `LocalStorageLib.ts`
  [x] All `[sS]coreValues` that are an array of values to `[sS]coreValueArr`
      [x] This includes the `jungian.scoreValues` local storage item
  [x] All `jungianScorePropNames` to `scoreValueNames`
  [x] All `jungianScoreLabels` to `scoreValueLabels`
  [x] All `JungianScoreValues` to `ScoreValueIFace`
  [x] All `scoreValueObj` to `ScoreValueObj`
      [!] Yikes!  Doing this causes 20 of these errors in ImageLib.tsx !!
      - "Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components."
      - Fixed these warnings by renaming `ImageLib.tsx` to `ImageLib.ts`
        =-> `ImageLib.ts` is not a JSX file!!

Cleanup:
[x] View cleanup:
    [x] Remove `opacityValue` global scope
    [x] Does `currentImageString` need to be a state variable???
        =-> No
    [x] Does `currentScoreValueArr` need to be a state variable???
        =-> YES!  Removing this causes a bug when visiting View immediately after Reloading the site!!
        =-> For details, see the comments in the code just prior to the definition of currentScoreValueArr
[x] Refine cleanup:
    [x] Remove `opacityValue` global scope
    [x] Remove `scoreValues` from `props`
    [!] Does `currentImageString` need to be a state variable ???
        - Yes!
        - Need to set it in `handleImageClick`
        - When it changes, need to update it in ImageLib and Local Storage
    [x] Do we need to call `ImageLib.setSquareSize` twice?
        [x] Calling it twice looks like it makes sense
        - Once to get the value and again when the value changes
    [!] Are we calling `ImageLib.setImageStr` in the correct places ???
        - Yes!
        [!] Maybe handle `ImageLib.setImageStr` like `ImageLib.setSquareSize` ???
            - Call it once when we get the value from storage and again when the value changes?
            - NO!
        [!] Removing the call from the body of `FixedContainer` causes Refine to not show the image!!

Review:
  [x] Ensure all functions that are not JSX Components specify the type of their return values
  [x] Review code and comments in ImageLib for correctness, consistency, and clarity
  [x] Ensure logic, comments, and console log statements in all functions in LocalStorageLib are correct and consistent
  [x] Review ScoreSliderLib and SquareSizeSliderLib for consistency and clarity
  [x] Review code, console.log statements, and comments on all pages for consistency and clarity
      [x] Create
      [x] View
      [x] Refine
  [x] Check use of testing the length of `ImageLib.imageStr`
      [x] Maybe check for equality to `ImageLib.initialImageStr` or `ImageLib.invalidImageStr` ???
  [x] Check the use of the `ScoreValueIFace` type
      [x] Look for times when it would make sense to use the `ScoreValueIFace` interface
  [x] Look for times when it would make sense to use a new interface

Add `README-React_notes.md` explaining:
- [x] Standard process
  - [x] User Action -> Event Handler -> State Variable -> `useEffect()` -> local storage
- [x] Problems encountered and solved
- [x] State vs. Local Storage
- [x] Controls, Event Handlers, and State Variables
- [x] useEffect() calls


