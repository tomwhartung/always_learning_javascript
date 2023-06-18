
# 7d-lsup-array_of_objects.md

Details for Step 3.4. in `7-lift_state_way_up_for_multiple_sliders.md`.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/7d-lsup-array_of_objects` directory in this repo.

## 1.1. Initial Setup

**Commands:**

```
pwd                                              # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                                 # Start with vite
npm init vite@latest -- --template react-ts      # *Note:* set project name to "7d-lsup-array_of_objects"

cd 7d-lsup-array_of_objects                      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7d-lsup-array_of_objects
npm i mdb-react-ui-kit                           # Add mdb and react
npm run dev                                      # Start development server; press "q" to quit
```

## 1.2. Start With Code From `7c-lsup-array_of_numbers`

**Commands:**

```
cd ..
pwd              # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects

cp 7c-lsup-array_of_numbers/index.html 7d-lsup-array_of_objects
cp 7c-lsup-array_of_numbers/src/App.tsx 7d-lsup-array_of_objects/src/App.tsx

cd 7d-lsup-array_of_objects                      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7d-lsup-array_of_objects
npm run lint                                     # Ensure there are no linting errors or warnings
npm run dev                                      # Start development server; press "q" to quit
```

**As noted the last few times:** We may want to add Font Awesome, Google Fonts Roboto, and maybe others.
For details, see the
[bootstrap download and setup page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/).

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode

# 3. Process

## 3.0. Overview

- [x] Step 3.1. Remove all but one card from `MyContainer`
- [x] Step 3.2. Lift state up for just the one card from `MySlider` to `MySliderCard`
- [x] Step 3.3. Lift state up for just the one card again from `MySliderCard` to `MyComponent`
- [ ] Step 3.4. Figure out how to put the new tag for `MySliderCard` in a loop

## 3.1. Details for Step 3.1.

For these details, see `7a-lift_state_up-single_slider-one_level.md`.

## 3.2. Details for Step 3.2.

For these details, see `7a-lift_state_up-single_slider-one_level.md`.

## 3.3. Details for Step 3.3.

In this step we work on lifting state up for a single slider an additional level.

- See details in `7b-lift_state_up-single_slider-two_levels.md`

## 3.4. Details for Step 3.4.

In this step we work on being able to use the state in `MyComponent` in multiple sliders:

- [x] First, create 2-3-4 sliders in a list
- [ ] Then, create 2-3-4 sliders in a `for` loop that uses an array of `SliderValue` objects

- [ ] 3.4. Use the state in `MyComponent` in multiple `MySlider`s in multiple `MySliderCard`s
  - [x] 3.4.1. In a list
    - [x] 3.4.1.1. Make new variables and functions in `MyContainer`:
      - `value1`, `setValue1`, `slNo1`, and `handleChange1`
      - `value2`, `setValue2`, `slNo2`, and `handleChange2`
    - [x] 3.4.1.2. Make a copy of lines that use these variables and functions:
      - `value`, `setValue`, `slNo`, and `handleChange`
    - [x] 3.4.1.3. Make one copy of the code use `value1`, etc.
    - [x] 3.4.1.4. Make the other copy of the code use `value2`, etc.
    - [x] 3.4.1.5. Test it -- it works!
  - [ ] 3.4.2. Using an array of state variables in a `for` loop
    - Use an array of `SliderValue` objects for the slider state variables:
      - `sliderValues[]` - an array of `SliderValue` objects
    - [x] 3.4.2.1. Declare a `SliderValue` interface with two members:
      - `slNo: number;`
      - `slVal: number;`
    - [x] 3.4.2.2. Figure out how to declare an array of state variables using the `SliderValue` interface
      - `const [sliderValues, setSliderValues] = useState<SliderValue[]>([]);`
    - [!] 3.4.2.4. Try to initialize both the `values` and `sliderValues` arrays to their `defaultValue`s
      - Writing a `for` loop to initialize them caused a *"Too many re-renders"* error
      - There are ways to fix this, but it's no biggie?
        - [Using error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
      - Leaving this code commented-out for now...
    - [x] 3.4.2.5. Add the `MySliderResultProps` interface and `MySliderResultsCard` function component developed in the last project `7c-...`
    - [x] 3.4.2.6. Update the code that uses the single value state variables to:
      - Use the `MySliderResultProps` interface and `MySliderResultsCard` function component developed in the last project `7c-...`
      - Use arrow function calls to consolidate the two `handleChange[12]` functions into a single `handleChangeSingleValues` function
    - [!] 3.4.2.7. The code now compiles cleanly but displays a browser error
      - Error message: "Uncaught TypeError: Cannot read properties of undefined (reading slVal)"
        - **I could fix this if I could figure out how to initialize these objects!**
      - Temporarily "fix" the browser error so we can test the changes to the code using the single value state variables
      - This breaks the slider that uses the object
    - [ ] 3.4.2.8. 
    - [ ] 3.4.2.9. 
  - [!] 3.4.3. Abandoning this project for now, because at this time I do not forsee needing to use an array of objects for state variables
    - **We may want to return to this someday!**
  - [ ] 3.4.4. 
  - [ ] 3.4.5. 

