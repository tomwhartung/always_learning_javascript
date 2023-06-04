
# 6-get_multiple_MySliders_to_work.md

Getting one slider to work was fairly easy, now let's try getting four of them to work ok.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/6-get_multiple_MySliders_to_work` directory in this repo.

## 1.1. Commands

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "6-get_multiple_MySliders_to_work"

cd  6-get_multiple_MySliders_to_work           # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/6-get_multiple_MySliders_to_work
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
- [x] Run `npm run lint`

# 3. Implement Four `MySlider`s

## 3.1. Resources

- See MDB documentation for their "Range" component:
  - [MDB Range component](https://mdbootstrap.com/docs/react/forms/range/)
- See `5-try_to_get_slider_to_work.md` in this directory
- See the files in the top-level `reactjs` directory in this repo

## 3.2. Results

- See the `MyRange` and `App` function components in `src/App.tsx`:

