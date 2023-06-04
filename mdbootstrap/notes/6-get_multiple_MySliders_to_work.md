
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

## 3.2. Process

Right or wrong, I am in the habit of explaining what I'm doing as I go along, so
will just keep on doing that for the time being....

### 3.2.0. Add `mdb.min.css` to `index.html`:

- [x] 0.1. Add the code in the following code box to inside the `<head>...</head>` element in `index.html`:

```
<!-- MDB -->
<link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
```

**Note:** I am not sure whether this is the *"proper"* place, file, or path to use!
I searched the project directory for files named `mdb.min.*` and found this one, and adding the code above to `index.html` worked, so ...!!

### 3.2.1. Step 1: Replace demo code in `App.tsx` with code to use one `MySlider` in a single `card`

  - [x] 1.1. Add MySlider function component from `5-try_to_get_slider_to_work` project
  - [x] 1.2. Remove demo code in `App` function component
  - [x] 1.3. Add code to use one slider in the one `card` to the `App` function component

### 3.2.2. Step 2: Create a grid of four columns

- [x] 2.1. Create a `container`
- [x] 2.2. Create a `row`
- [x] 2.3. Create four `col-md-3`s

## 3.3. Results

- See the `MySlider` and `App` function components in `src/App.tsx`:

