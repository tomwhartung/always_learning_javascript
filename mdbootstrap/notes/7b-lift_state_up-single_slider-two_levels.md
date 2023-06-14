
# 7b-lift_state_up-single_slider-two_levels.md

Details for Step 3.3. in `7-lift_state_up_for_a_single_slider.md`.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/7b-lift_state_up-single_slider-two_levels` directory in this repo.

## 1.1. Initial Setup

**Commands:**

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "7b-lift_state_up-single_slider-two_levels"

cd 7b-lift_state_up-single_slider-two_levels   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7b-lift_state_up-single_slider-two_levels
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

## 1.2. Start With Code From `7a-lift_state_up-single_slider-one_level`

**Commands:**

```
cd ..
pwd              # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects

cp 7a-lift_state_up-single_slider-one_level/index.html 7b-lift_state_up-single_slider-two_levels
cp 7a-lift_state_up-single_slider-one_level/src/App.tsx 7b-lift_state_up-single_slider-two_levels/src/App.tsx

cd 7b-lift_state_up-single_slider-two_levels   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7b-lift_state_up-single_slider-two_levels
npm run dev                                    # Start development server; press "q" to quit
```

**As noted the last two times:** We may want to add Font Awesome, Google Fonts Roboto, and maybe others.
For details, see the
[bootstrap download and setup page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/).

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
- [x] Run `npm run lint`

# 3. Process

## 3.0. Overview

- [x] Step 3.1. Remove all but one card from `MyContainer`
- [x] Step 3.2. Lift state up for just the one card from `MySlider` to `MySliderCard`
- [ ] Step 3.3. Lift state up for just the one card again from `MySliderCard` to `MyComponent`
- [ ] Step 3.4. Figure out how to put the new tag for `MySliderCard` in a loop

## 3.1. Details for Step 3.1.

For these details, see `7a-lift_state_up-single_slider-one_level.md`.

## 3.2. Details for Step 3.2.

For these details, see `7a-lift_state_up-single_slider-one_level.md`.

## 3.3. Details for Step 3.3.

In this step we work on lifting state up for a single slider an additional level.

- [ ] 3.3. Lift state up for just the one card again from `MySliderCard` to `MyComponent`
  - [x] 3.3.1. Move definition of state variable `const [value...` from `MySliderCard` to `MyContainer`
  - [x] 3.3.2. Move definition of event handler `handleChange` from `MySliderCard` to `MyContainer`
  - [x] 3.3.3. Change the type of the argument passed to `MySliderCard` from `props:MySliderCardProps` to `props:MySliderProps`
  - [x] 3.3.4. Change the `sliderVal` attribute of the `MySlider` tag in `MySliderCard` to use `props.sliderVal` instead of `value`
  - [x] 3.3.5. Change the `onChange` attribute of the `MySlider` tag in `MySliderCard` to use `props.onSliderChange` instead of `handleChange`
  - [x] 3.3.6. Change the `<p>...` tag in `MySliderCard` to use `props.sliderVal` instead of `value`
  - [x] 3.3.7. Add an `onChange={handleChange}` attribute to the `MySliderCard` tag in `MyContainer`
  - [x] 3.3.8. Add an `sliderVal={value}` attribute to the `MySliderCard` tag in `MyContainer`
  - [x] 3.3.9. Comment out the definition of the `MySliderCardProps` interface
  - [x] 3.3.10. This gets us a clean compile, so commit these changes!
  - [x] 3.3.10. Test what we have!  OMG it works - at least inside the `MySlider` component...

  - [ ] 3.3.11. Test that the value is getting up from `MySlider` to `MySliderCard`
    - [ ] Change the `<p>TODO...` tag in the second row of `MyComponent` to display `Value of slider number {slNo} = {value}`
    - [ ] Move the slider on the web page back-and-forth
    - [ ] Confirm the `<p>Value of...` tag in the second row displays the correct value


    - [?] Change `MySliderCardProps` to have only the `sliderNo` member
    - [?] Update `MySliderCard`'s signature to accept a `MySliderCardProps`
    - [?] Update the `MySlider` tag in `MySliderCard` to:
      - [?] Pass the `sliderNo` on as a `MySlider` prop
      - [?] Use the local value of `value` for the `MySlider` tag's `sliderVal` prop
      - [?] Use the local function named `handleChange` for the `MySlider` tag's `onSliderChange` prop
    - [?] Update the `MySliderCard` tag in `MyContainer` to use just the `sliderNo` prop



-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
We are here!
Thinking these steps may be somewhat similar to what we did last time, so we will use them as a starting point
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


## 3.4. Details for Step 3.4.

In this step we work on being able to create multiple sliders in a `for` loop.

- See details in `7c-TBD` 

