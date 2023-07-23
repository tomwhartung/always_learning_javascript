
# 9-wsw_navbar.md

This file contains information that is common to all of these subprojects:

- `9a-wsw_navbar-in_index_html.md`
- `9b-wsw_navbar-in_main_tsx.md`
- `9c-wsw_navbar-multiple_index_files.md`

# 1. Goals

Original goal:

- [x] Decide whether it is best to add the navbar code to `index.html` or `src/main.tsx`

Actual goal:

- [x] Experiment with different ways of approaching navigation in the app I ultimately want to create

# 2. Result:

- [x] Use a menu based on html in `index.html` to allow selection of a language
  - In the new app, a menu of this type will allow selection of a quiz type
- [x] Use menus based on `react-router-dom` to allow selection of phrases within a language
  - In the new app, a menu of this type will allow selection of options to create and process an image

# 3. Process

This section describes how and why I decided to structure these menus the way.

## 3.1. Big Picture Considerations

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

## 3.2. React Router

Looking at the React Router package, it looks to be how we want to go for *each quiz type.*

## 3.3. More Initial Impressions

These are the reasons why and the subprojects I created to decide to use the two techniques of
handling navigation in my future project:

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
  - Thus this subproject is a combination of `9a-wsw_navbar-in_index_html` and `9b-wsw_navbar-in_main_tsx`

