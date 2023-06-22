
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

# 3. Test Idea of Using CSS to Set Colors in a Grid of Squares

## 3.1. Resources

- The project `mdbootstrap/projects/7c-lsup-array_of_numbers` shows how I like to create a container with rows and columns
- The project `reactjs/projects/ttt-my_way-app` might have some ideas with respect to creating the grid of squares

## 3.2. Process

### 3.2.1.

- [x] Step 0: Remove crufty code I do not want to use from `App.tsx` and `App.css`
  - Keep the old count-the-clicks functionality around in a separate component for the time being
- [x] Step 1: Create a `MyContainer` function component to hold most of the page's content
- [x] Step 2: Create a `MyGridOfSquares` function component to hold the grid of squares that I will be focusing on for the time being
- [x] Step 3: Create a `ResponsiveSquare` function component to represent an individual square
  - This requires getting some styles from the code for the tic-tac-toe tutorial in `reactjs/projects/ttt-my_way-app`
- [!] Step 4: Try using a `for` loop to render the squares, three to a row
  - Unable to get this to work!  Unable to create the grid in a loop!
    - Could only create the grid by hard-coding at least a row of it, making it unscalable
  - **For details, see comments in the code:**
    - Near and in the `MyGridOfSquares` function component in `mdbootstrap/projects/8-test_css_groja_grid/src/App.tsx`
  - Abandoning this project!  Thinking I may need to do this the "old-fashioned" way and use actual graphics commands!!

