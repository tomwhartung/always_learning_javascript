
# 7c-lift_state_up-multiple_sliders-two_levels.md

Details for Step 3.4. in `7-lift_state_up_for_a_single_slider.md`.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/7c-lift_state_up-multiple_sliders-two_levels` directory in this repo.

## 1.1. Initial Setup

**Commands:**

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "7c-lift_state_up-multiple_sliders-two_levels"

cd 7c-lift_state_up-multiple_sliders-two_levels   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7c-lift_state_up-multiple_sliders-two_levels
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

## 1.2. Start With Code From `7b-lift_state_up-single_slider-two_levels`

**Commands:**

```
cd ..
pwd              # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects

cp 7b-lift_state_up-single_slider-two_levels/index.html 7c-lift_state_up-multiple_sliders-two_levels
cp 7b-lift_state_up-single_slider-two_levels/src/App.tsx 7c-lift_state_up-multiple_sliders-two_levels/src/App.tsx

cd 7c-lift_state_up-multiple_sliders-two_levels   # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7c-lift_state_up-multiple_sliders-two_levels
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

- See details in `7b-lift_state_up-single_slider-two_levels.md`

## 3.4. Details for Step 3.4.

In this step we work on being able to use the state in `MyComponent` in multiple sliders:

- [ ] First, as a list
- [ ] Then, in a `for` loop

