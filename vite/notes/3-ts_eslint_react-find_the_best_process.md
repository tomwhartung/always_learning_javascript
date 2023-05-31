
# 3-ts_eslint_react-find_the_best_process.md

Building on lessons learned in `2-rtr-typescript_in_react, this file seeks to
*find the best process* to use for building *"the whole shebang."*

# TS, ESLint, and React

There are at least a couple of different ways to get these three to work together.

- In this file, we try a few out and decide which one we like best

# List of Experiments

- [x] `notes/3a-ts_eslint_react-1-react_eslint_ts.md` , `projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-1-react_eslint_ts`
  - Tries installing `@types/node` and changing `import`s to `require`s to fix "Cannot find module ..." problems in VSCode
  - Does installing TS break ESLint?
    - YES
  - Will the suggested `npm install ...` command fix the VSCode problems?
    - YES it fixes the problems but ...
    - **Unfortunately it BREAKS THE APP**
  - Actually I was *not* big on this "solution" anyway....
- [x] `notes/3b-ts_eslint_react-2-react_ts_no_eslint.md` , `projects/3-ts_eslint_react-find_the_best_process/ts_eslint_react-2-react_ts_no_eslint`
  - It's looking like getting TS and ESLint to work together may be problematic
    - We'd have to run ESLint on the code *output* by TS
    - Fixing the issues found by lint would require tracing them back from the linted `.js` files to the `.tsx` files I work on
  - We can run `npm run lint` *before* installing TS
    - Will `npm run lint` work *after* installing TS?
    - **NO**
  -  So far, this is our **best version**

