
# 7c-lsup-array_of_numbers.md

Details for Step 3.4. in `7-lift_state_way_up_for_multiple_sliders.md`.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/7c-lsup-array_of_numbers` directory in this repo.

**Note:** this file and its corresponding project were originally named `7c-lift_state_up-multiple_sliders-two_levels` then
later changed to `7c-lsup-array_of_numbers`.

## 1.1. Initial Setup

**Commands:**

```
pwd                                              # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                                 # Start with vite
npm init vite@latest -- --template react-ts      # *Note:* set project name to "7c-lsup-array_of_numbers"

cd 7c-lsup-array_of_numbers                      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7c-lsup-array_of_numbers
npm i mdb-react-ui-kit                           # Add mdb and react
npm run dev                                      # Start development server; press "q" to quit
```

## 1.2. Start With Code From `7b-lift_state_up-single_slider-two_levels`

**Commands:**

```
cd ..
pwd              # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects

cp 7b-lift_state_up-single_slider-two_levels/index.html 7c-lsup-array_of_numbers
cp 7b-lift_state_up-single_slider-two_levels/src/App.tsx 7c-lsup-array_of_numbers/src/App.tsx

cd 7c-lsup-array_of_numbers                      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7c-lsup-array_of_numbers
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
- [ ] Then, create 2-3-4 sliders in a `for` loop using an array of numeric `values`

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
  - [x] 3.4.2. Using an array of state variables in a `for` loop
    - Use an array of numbers named `values[]` for the slider state variables
    - [x] 3.4.2.1. Figure out how to declare an array of state variables that will hold numeric `values`
      - `const [values, setValues] = useState([defaultValue]);`
    - [x] 3.4.2.2. Figure out how to declare a `handleChangeArrayOfNumbers` event handler function
    - [x] 3.4.2.3. Figure out how to call the `handleChangeArrayOfNumbers` event handler
      - Must use an arrow function so we can pass in the array subscript
    - [x] 3.4.2.4. Write a `for` loop to construct markup for a set of columns containing `MySliderCards`
    - [x] 3.4.2.5. Declare a `MySliderResultProps` interface with two members:
      - `slNo: number;`
      - `slVal: number;`
    - [x] 3.4.2.6. Create a `MySliderResultsCard` function component to display the slider values
    - [x] 3.4.2.7. Write a `for` loop to construct markup for a set of columns containing `MySliderResultsCards`
    - [x] 3.4.2.8. Cleanup code for the sliders in the hard-coded list
      - [x] Use an arrow function to consolidate the two event handlers into one
    - [x] 3.4.2.9. Get it working, clean up the code, and make it look half-decent

