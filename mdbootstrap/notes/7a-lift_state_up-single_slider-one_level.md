
# 7a-lift_state_up-single_slider-one_level.md

Details about changes that went into Steps 3.1. and 3.2. of the process in `7-lift_state_up_for_a_single_slider`.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/7a-lift_state_up-single_slider-one_level` directory in this repo.

## 1.1. Commands

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "7a-lift_state_up-single_slider-one_level"

cd 7a-lift_state_up-single_slider-one_level    # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7a-lift_state_up-single_slider-one_level
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

## 1.2. Add `mdb.min.css` to `index.html`:

Add the code in the following code box to inside the `<head>...</head>` element in `index.html`:

```
<!-- MDB -->
<link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
```

**Note:** if this is the only change made to the installed version of `index.html` in `6-get_multiple_MySliders_to_work`,
then just copy that file over.

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects
$ diff 6-get_multiple_MySliders_to_work/index.html 7a-lift_state_up-single_slider-one_level/index.html
7,8d6
<     <!-- MDB -->
<     <link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
$ cp 6-get_multiple_MySliders_to_work/index.html 7a-lift_state_up-single_slider-one_level/index.html
$ diff 6-get_multiple_MySliders_to_work/index.html 7a-lift_state_up-single_slider-one_level/index.html
$
```

**As noted last time:** We may want to add Font Awesome, Google Fonts Roboto, and maybe others.
For details, see the
[bootstrap download and setup page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/).

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
- [x] Run `npm run lint`

# 3. Process

These are the details for Steps 3.1. and 3.2. listed in the Overview below.

## 3.0. Overview

- [x] Step 3.1. Remove all but one card from `MyContainer`
- [ ] Step 3.2. Lift state up for just the one card from `MySlider` to `MySliderCard`
- [ ] Step 3.3. Lift state up for just the one card again from `MySliderCard` to `MyComponent`
- [ ] Step 3.4. Figure out how to put the new tag for `MySliderCard` in a loop

## 3.1. Details for Step 3.1.

- [x] 3.1. Remove all but one card from `MyContainer`
  - In this case, the details are really not worth mentioning
    - This is because it mostly involves deleting or commenting-out code from the `6-get_multiple_MySliders_to_work` project's `App.tsx`

## 3.2. Details for Step 3.2.

In this step we work on lifting state up for a single slider just one level.

- [x] 3.2. Lift state up for just the one card from `MySlider` to `MySliderCard`
  - [x] 3.2.1. Move definition of state variable `const [value...` from `MySlider` to `MySliderCard`
  - [x] 3.2.2. Move definition of event handler `handleChange` from `MySlider` to `MySliderCard`
  - [x] 3.2.3. Change the `onChange` attribute of the `MDBRange` tag to use `props.onSliderChange` instead of `handleChange`
  - [x] 3.2.4. Add new member `sliderVal: number` to `MySliderCardProps`
  - [x] 3.2.5. Update the `p` tag in `MySlider` to display `sliderValue = {props.sliderVal}`
  - [x] 3.2.6. Add new prop `sliderVal={props.sliderVal}` to the `MySlider` tag in `MySliderCard`
  - [x] 3.2.7. Update `MySliderCard` to accept only the `sliderNo` prop
    - [x] Make a copy of `MySliderCardProps` and name it `MyCardProps`
    - [x] Change `MySliderCardProps` to have only the `sliderNo` member
    - [x] Update `MySliderCard`'s signature to accept a `MySliderCardProps`
    - [x] Update the `MySlider` tag in `MySliderCard` to:
      - [x] Pass the `sliderNo` on as a `MySlider` prop
      - [x] Use the local value of `value` for the `MySlider` tag's `sliderVal` prop
      - [x] Use the local function named `handleChange` for the `MySlider` tag's `onSliderChange` prop
    - [x] Update the `MySliderCard` tag in `MyContainer` to use just the `sliderNo` prop
  - [x] 3.2.8. Comment out all of the `logSliderChange` function in `MyContainer`
  - [x] 3.2.9. This gets us a clean compile, so commit these changes!
  - [x] 3.2.10. Test what we have!  OMG it works - at least inside the `MySlider` component...
  - [x] 3.2.11. Test that the value is getting up from `MySlider` to `MySliderCard`
    - [x] Update the `<p>` tag in `MySliderCard` to display the value of the `value` state variable
    - [x] Move the slider in the web page back-and-forth
    - [x] Confirm the `<p>` tag in `MySliderCard` displays the correct value

## 3.3. Details for Step 3.3.

In this step we work on lifting state up for a single slider an additional level.

- See details in `7b-lift_state_up-single_slider-two_levels.md`.

## 3.4. Details for Step 3.4.

In this step we work on being able to lift state up multiple levels for multiple sliders using an array of numbers
as the state variable.

- Ultimately figured out how to create multiple sliders in a `for` loop!  YES!!
- See details in `7c-lsup-array_of_numbers.md`

## 3.5. Details for Step 3.5.

In this step we work on being able to lift state up multiple levels for multiple sliders using an array of objects.
as the state variable

- Decided to abandon this project!
  - Don't need to do this and time's a-wastin!  Want to get on with other stuff!!
- See details in `7d-lsup-array_of_objects.md`

