
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

- [x] Project 7: Take Baby Steps in Lifting State up Multiple Levels for Multiple Components
  - In Project 6, lifting state up proved to be difficult
    - In project 7 we work on figuring out how to lift the state up for just one slider
  - Breaking this down into 4 steps
    - The first step is trivial, so it's really kinda sorta just 3 steps
    - Overview notes are in `mdbootstrap/notes/7-lift_state_way_up_for_multiple_sliders.md`
  - [x] Steps 3.1. and 3.2. - Lift State Up One Level for One Slider
    - Notes are in `mdbootstrap/notes/7a-lift_state_up-single_slider-one_level.md`
    - Project is in `mdbootstrap/projects/7a-lift_state_up-single_slider-one_level`
  - [x] Step 3.3. - Lift State Up Two Levels for One Slider
    - Notes are in `mdbootstrap/notes/7b-lift_state_up-single_slider-two_levels.md`
    - Project is in `mdbootstrap/projects/7b-lift_state_up-single_slider-two_levels`
  - [x] Step 3.4. - Lift State Up Two Levels for Multiple Sliders Using an Array of Numbers
    - **Note: This is the *best-so-far* version**
    - Notes are in `mdbootstrap/notes/7c-lsup-array_of_numbers.md`
    - Project is in `mdbootstrap/projects/7c-lsup-array_of_numbers`
  - [!] Step 3.5. - Lift State Up Two Levels for Multiple Sliders Using an Array of Objects
    - Got a clean compile but this is broken due to a browser error
      - Error message: "Uncaught TypeError: Cannot read properties of undefined (reading slVal)"
    - **The root of the problem seems to be that:**
      - I cannot (easily) figure out how to *initialize objects used as state variables*
        - And I can see *no reason* to figure out how to do that at this time.
      - It is trivial to initialize single values (numbers) used as state variables
      - See details in `mdbootstrap/notes/7c-lsup-array_of_numbers.md`
    - Notes are in `mdbootstrap/notes/7d-lsup-array_of_objects.md`
    - Project is in `mdbootstrap/projects/7d-lsup-array_of_objects`
- [!] Project 8: Test My Idea of Using CSS to Set the Colors of Squares in a Small Grid
  - Was unable to get this to work as desired
    - Was forced to list at least a row of the components rather than create them all in a nested `for` loop
    - This means it is impossible to scale up the experiment as desired
    - For details and code that I could not get to work, see the file `App.tsx` in the code for this project:
      - I.e., see `mdbootstrap/projects/8-test_css_groja_grid/src/App.tsx`
  - Notes are in `mdbootstrap/notes/8-test_css_groja_grid.md`
  - Project is in `mdbootstrap/projects/8-test_css_groja_grid`

- [ ] Project 9: Figure out where to put navbar code
  - Is it best to put it in `index.html` or `src/main.tsx`?
    - After examining our requirements, the answer is: **both!**
  - References:
    - MDB Navbar code:
      - https://mdbootstrap.com/docs/standard/navigation/navbar/
    - Project 5 in `whole_shebang` in this repo
      - `whole_shebang/notes/5-whole_shebang_no_cruft.md`
      - `whole_shebang/projects/5-whole_shebang_no_cruft`
    - React Router Tutorial:
      - For projects `9b-wsw_navbar-in_main_tsx` and `9c-wsw_navbar-two_navbars`
      - There are several of these; see Chrome -> Bookmarks -> techie new -> react -> react router dom
      - Dated 12/6/21, this one is the latest: https://www.copycat.dev/blog/react-js-navigation/
      - Other `react-router-dom` tutorial pages?
  - Notes are in:
    - [ ] `mdbootstrap/notes/9-wsw_navbar.md`
      - Contains general information applicable to all of these `9*` projects
    - [x] `mdbootstrap/notes/9a-wsw_navbar-in_index_html.md`
      - Shows how we can put a navbar in `index.html` that supports "mutually exclusive" options
      - Uses multiple languages to demonstrate how we plan to handle multiple quiz types
    - [x] `mdbootstrap/notes/9b-wsw_navbar-in_main_tsx.md`
      - Uses multiple English phrases to demonstrate how we plan to handle creating, displaying, and editing an image
      - Shows how we can put a navbar in `src/main.tsx` that supports different *"pages"* in a single page app
        - Each *"page"* is actually a different *component*
        - Each *"page"* displays a different phrase:
          - Menu option "AM": Good morning!
          - Menu option "Noon": It's lunchtime!
          - Menu option "PM": Goodbye!
          - Menu option "Midnight": Good night!
    - [ ] `mdbootstrap/notes/9c-wsw_navbar-two_navbars.md`
      - Uses menus to access multiple phrases in different languages
      - Demonstrates how we plan to create menus allowing users to create, display, and edit an image
      - Combines the menuing techniques used in:
        - `mdbootstrap/notes/9a-wsw_navbar-in_index_html.md` and
        - `mdbootstrap/notes/9b-wsw_navbar-in_main_tsx.md`
  - Projects are in:
    - [x] `mdbootstrap/projects/9a-wsw_navbar-in_index_html`
    - [x] `mdbootstrap/projects/9b-wsw_navbar-in_main_tsx`
    - [ ] `mdbootstrap/projects/9c-wsw_navbar-two_navbars`

