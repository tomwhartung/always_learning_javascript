
# mdbootstrap/README.md

Convinced I need to use MDB + React.

*Unfortunately,* it looks like this means passing on vite - at least for now.  Rats!

# Goal of This Directory

- The purpose of this directory is to test if I can still use TypeScript and Lint.

# To Find Much, Much More About MDB

Most of my notes about MDB, including notes for most of the tutorials on the site, are:

- In the `vite` directory, in the `vite/notes/4*` files
- **Why?**
  - Unfortunately, after going through all that, I assumed that:
    - Since I can use MDB + Vite
    - And I can use MDB + React
    - That I can use MDB + React + Vite
  - Unfortunately, that assumption proved to be **wrong!**  **Rats!!**

# Best So Far

Remember, the how-to for our best shot so far at getting everything we want is in:

- `vite/notes/3-ts_eslint_react-find_the_best_process.md`

# Notes and Projects

- [x] Project 1: Getting Started Using NPM
  - Trying MDB's process [using `npm`](https://mdbootstrap.com/docs/react/getting-started/installation/#section-npm)
  - Notes are in `mdbootstrap/notes/1-react-getting_started-npm.md`
  - Project is in `mdbootstrap/projects/1-react-getting_started-npm`
- [x] Project 2: Re-trying Using MDB CLI
  - Use `mdb init` command to install `mdb5-free-react`
  - Want to compare these results with what's in Project 1
  - Notes are in `mdbootstrap/notes/2-react-using_mdb_cli.md`
  - Project is in `mdbootstrap/projects/2-react-using_mdb_cli`
- [x] Project 3: Try manual process suggested by MDB Support
  - Suggested process is in `mdbootstrap/support/1-mdb_with_react_and_vite.txt`
  - Notes are in `mdbootstrap/notes/3-suggested_by_support.md`
  - Project is in `mdbootstrap/projects/3-suggested_by_support`
- [x] Project 4: Compare Results of Project 1 `npm` Version, Project 2 `mdb init` Version, and Project 3 Support Version
  - Notes are in `mdbootstrap/notes/4-mdb_ts_eslint_react-find_the_best_process.md`
  - Project is in `mdbootstrap/projects/4-mdb_ts_eslint_react-find_the_best_process`
- [x] Project 5: Get MDB's `Range` component to work
  - This is their [slider](https://mdbootstrap.com/docs/react/forms/range/)
  - Notes are in `mdbootstrap/notes/5-try_to_get_slider_to_work.md`
  - Project is in `mdbootstrap/projects/5-try_to_get_slider_to_work`

- [x] Project 6: Get multiple `MySlider` components to work
  - This builds on Project 5
  - Notes are in `mdbootstrap/notes/6-get_multiple_MySliders_to_work.md`
  - Project is in `mdbootstrap/projects/6-get_multiple_MySliders_to_work`

- [ ] Project 7: Take Baby Steps in Lifting State up Multiple Levels for Multiple Components
  - In Project 6, lifting state up proved to be difficult
    - In project 7 we work on figuring out how to lift the state up for just one slider
  - Breaking this down into 4 steps
    - The first step is trivial, so it's really kinda sorta just 3 steps
    - Overview notes are in `mdbootstrap/notes/7-lift_state_up_for_a_single_slider.md`
  - [x] Steps 3.1. and 3.2. - Lift State Up One Level for One Slider
    - Notes are in `mdbootstrap/notes/7a-lift_state_up-single_slider-one_level.md`
    - Project is in `mdbootstrap/projects/7a-lift_state_up-single_slider-one_level`
  - [x] Step 3.3. - Lift State Up Two Levels for One Slider
    - Notes are in `mdbootstrap/notes/7b-lift_state_up-single_slider-two_levels.md`
    - Project is in `mdbootstrap/projects/7b-lift_state_up-single_slider-two_levels`
  - [ ] Step 3.4. - Lift State Up Two Levels for Multiple Sliders Using an Array of Numbers
    - Notes are in `mdbootstrap/notes/7c-lsup-array_of_numbers.md`
    - Project is in `mdbootstrap/projects/7c-lsup-array_of_numbers`
  - [ ] Step 3.5. - Lift State Up Two Levels for Multiple Sliders Using an Array of Objects
    - Notes are in `mdbootstrap/notes/7d-lsup-array_of_objects.md`
    - Project is in `mdbootstrap/projects/7d-lsup-array_of_objects`

