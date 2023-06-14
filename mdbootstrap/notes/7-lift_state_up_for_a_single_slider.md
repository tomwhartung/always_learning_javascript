
# 7-lift_state_up_for_a_single_slider.md

Lifting state up two levels for an array of components - as begun in `6-get_multiple_MySliders_to_work.md`, proved to be extremely challenging.

- In this project we *divide and conquer* by breaking the task in Project 6 down into *"baby steps"*

# 1. Setup

The code for this project is in:

- `mdbootstrap/projects/7a-lift_state_up-single_slider-one_level`
- `mdbootstrap/projects/7b-lift_state_up-single_slider-two_levels`
- `mdbootstrap/projects/7c-TBD`  

## 1.1. Commands

All of these sub-projects are set up similarly, by running these commands:

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "7-lift_state_up_for_a_single_slider"

cd 7-lift_state_up_for_a_single_slider         # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7-lift_state_up_for_a_single_slider
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

**Note:** the `7-lift_state_up_for_a_single_slider` was later renamed to `7a-lift_state_up-single_slider-one_level`,
because that turned out to be a major project!

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
$ diff 6-get_multiple_MySliders_to_work/index.html 7-lift_state_up_for_a_single_slider/index.html
7,8d6
<     <!-- MDB -->
<     <link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
$ cp 6-get_multiple_MySliders_to_work/index.html 7-lift_state_up_for_a_single_slider/index.html
$ diff 6-get_multiple_MySliders_to_work/index.html 7-lift_state_up_for_a_single_slider/index.html
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

## 3.0. Overview

- [x] Step 3.1. Remove all but one card from `MyContainer`
- [x] Step 3.2. Lift state up for just the one card from `MySlider` to `MySliderCard`
- [ ] Step 3.3. Lift state up for just the one card again from `MySliderCard` to `MyComponent`
- [ ] Step 3.4. Figure out how to put the new tag for `MySliderCard` in a loop

## 3.1. Details for Step 3.1.

In this step we remove all but one card from `MyContainer`.

- In this case, the details are really not worth mentioning

## 3.2. Details for Step 3.2.

In this step we work on lifting state up for a single slider just one level.

- Details are in `7a-lift_state_up-single_slider-one_level.md`

## 3.3. Details for Step 3.3.

In this step we work on lifting state up for a single slider an additional level.

- Details are in `7b-lift_state_up-single_slider-two_levels.md`

## 3.4. Details for Step 3.4.

In this step we work on being able to create multiple sliders in a `for` loop.

