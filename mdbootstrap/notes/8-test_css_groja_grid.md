
# 8-test_css_groja_grid.md

Testing my idea of using CSS to set the colors in a grid of squares.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/8-test_css_groja_grid` directory in this repo.

## 1.1. Setup

Following the process outlined in `whole_shebang/notes/1-whole_shebang-commands.md`.

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "8-test_css_groja_grid"

cd  8-test_css_groja_grid                      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/8-test_css_groja_grid
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

## 1.2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
- [x] Run `npm run lint`

# 2. Extra Setup Steps Taken

- Copied over the `index.html` file from the `whole_shebang/projects/1-whole_shebang/` project
  - This adds in Font Awesome, the Google Roboto Font, and `mdb.min..css`
- Removed the two crufty logos:
  - `mdbootstrap/projects/7d-lsup-array_of_objects/public/vite.svg`
  - `mdbootstrap/projects/7d-lsup-array_of_objects/src/assets/react.svg`
- Removed references to them in `src/App.tsx`
- Copied over my favorite icon `favicon.ico` file from the `joomoowebsites` repo
  - Updated `index.html` to use it

