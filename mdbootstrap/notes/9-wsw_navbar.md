
# 9-wsw_navbar.md

This file contains information that is common to all of these projects:

- `9a-wsw_navbar-in_index_html.md`
- `9b-wsw_navbar-in_main_tsx.md`
- `9c-wsw_navbar-multiple_index_files.md`

# 1. Goals

## 1.1. Original Goal

- [ ] Decide whether it is best to add the navbar code to `index.html` or `src/main.tsx`

## 1.2. Ultimate Goals

- [ ] Experiment with different ways of approaching navigation in the app I ultimately want to create

# 2. Big Picture Considerations

Looking at the *"Big Picture,"* I want to support **multiple quiz types.**

- These different quiz types will have virtually **nothing in common**
- If someone is using the Jungian quiz, there is next to nothing in the Ennegram or Big 5 quiz that will help them
- There is no reason to download the js for more than one quiz type

Also, looking at the *"Big Picture,"* I want to support **Progressive Web Apps.**

- Any given individual will probably not be interested in having multiple quiz types on their phone
  - I believe I will implement each quiz type in its own **Single Page App**
- Ideally, I would want to make each quiz type a **different PWA**
  - I just do not foresee people interested in the MBTI also being interested in Ennegrams or the Big 5
  - I believe each PWA corresponds to just one SPA
- It's too early to tell how this might impact navigation

## 2.1. React Router

Looking at the React Router package, it looks to be how we want to go for *each quiz type.*

## 2.2. More Initial Impressions

These are the reasons why I want to look into using multiple ways of handling navigation:

- `9a-wsw_navbar-in_index_html.md`
  - This is looking like it is the way to go for navigation between quiz types
  - This is looking like it is *not* the way to go for navigation *within a quiz type's page*
- `9b-wsw_navbar-in_main_tsx.md`
  - This is looking like it is how we will need to go to use React Router
    - It makes *perfect* sense for navigation *within a quiz type's page*
  - This is looking like it is *not* the way to go for navigation *between quiz types*
- `9c-wsw_navbar-multiple_index_files.md`
  - This looks like using multiple `index-*.html` files is how we want to handle multiple quiz types
  - Then within each `index-*.html` we would use React Router for navigation
  - Thus would be a combination of `9a-wsw_navbar-in_index_html` and `9b-wsw_navbar-in_main_tsx`

# 3. Process

- Step 1. Create two projects that are identical *except* the file in which we place the navbar code
  - `9a-wsw_navbar-in_index_html.md` - puts the navbar code in `index.html`
  - `9b-wsw_navbar-in_main_tsx.md` - puts the navbar code in `src/main.tsx`
- Step 2. Create a list of "pros" for each project
  - Note that the "pros" for one project are essentially "cons" for the other project
    - In other words, adding "cons" would be redundant!
- Step 3. Review these lists and make a decision

