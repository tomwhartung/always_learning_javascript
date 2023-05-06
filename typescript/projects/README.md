
# typescript/projects/README.md

This is the `README.md` file for the `typescript/projects` directory in the `always_learning_javascript` repository.

# Projects

# 0. `typescript/projects/0-my-test_tsc`

## 0.1. Notes on `typescript/projects/0-my-test_tsc`

- Contains the *most minimal* "Hello world"-type project possible
  - Hence the "0-", even though this is technically the second project
- Done while going through the [Basics tutorial at typescriptlang.org](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler)
- Corresponding notes are in `typescript/notes/2-typescriptlang/02-the_basics.md`

## 0.2. Lessons learned From `typescript/projects/0-my-test_tsc`

- How to use TS and `tsc` independently of React
- How to configure TS to output a `.js` file even when there are type errors

# 1. `typescript/projects/1-my-first_typescript-app`

1.1. Notes About `typescript/projects/1-my-first_typescript-app`

- Contains a minimal "Hello world"-type project created by `create-react-app`
- Done while going through the [typescript tutorial at w3schools](https://www.w3schools.com/typescript/index.php)
- Notes are in the beginning of `typescript/notes/1-w3schools/1-notes.md`
- Created using `npm`

1.1. Lessons Learned From `typescript/projects/1-my-first_typescript-app`

**This project is currently broken!**

```
$ pwd
/var/www/always_learning/always_learning_javascript/typescript/projects/1-my-first_typescript-app
$ npm run start

> my-first_typescript-app@0.1.0 start
> react-scripts start

sh: 1: react-scripts: not found
$
```

- Only change is renaming the directory from `my-first_typescript-app` to `1-my-first_typescript-app`
  - "Renaming it back" did not help, rats.
- Not going to look into this because it was created by `create-react-app`
  - I am going to use `vite` instead

