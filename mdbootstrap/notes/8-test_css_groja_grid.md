
# 8-test_css_groja_grid.md

Testing my idea of using CSS to set the colors in a grid of squares.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/8-test_css_groja_grid` directory in this repo.

## 1.1. Commands

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "8-test_css_groja_grid"

cd  8-test_css_groja_grid                      # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/8-test_css_groja_grid
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
- [x] Run `npm run lint`

# 3. Test Idea of Using CSS to Set Colors in a Grid of Squares

## 3.1. Resources

- See `6-get_multiple_MySliders_to_work.md` in this directory

## 3.2. Process

### 3.2.1. Add `mdb.min.css` to `index.html`:

- [x] 1.1. Add the code in the following code box to inside the `<head>...</head>` element in `index.html`:

```
<!-- MDB -->
<link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
```
**Note:** I am not sure whether this is the *"proper"* place, file, or path to use!
I searched the project directory for files named `mdb.min.*` and found this one, and adding the code above to `index.html` worked, so ...!!

**Note:** We may want to add Font Awesome, Google Fonts Roboto, and maybe others.
For details, see the
[bootstrap download and setup page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/).

### 3.2.1. Step 1: Replace demo code in `App.tsx` with code to use one `MySlider` in a single `card`

  - [x] 1.1. Add MySlider function component from `5-try_to_get_slider_to_work` project
  - [x] 1.2. Remove demo code in `App` function component
  - [x] 1.3. Add code to use one slider in the one `card` to the `App` function component

### 3.2.2. Step 2: Create a grid of four columns

- [x] 2.1. Create a `container`
- [x] 2.2. Create a `row`
- [x] 2.3. Create four `col-md-3`s

### 3.2.3. Step 3: Use `props` to Set the `MySlider`s' `label`s

This
[pluralsight.com post](https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript)
helped me figure how to do this.

- [x] 3.1. Create an `interface` named `MySliderProps`
- [x] 3.2. Add a member named `ordinal` of type `string` to `MySliderProps`
- [x] 3.3. Update the `MySlider` function component to accept a `props` argument of type `MySliderProps`
- [x] 3.4. Update the `MySlider` function component to use the `props.ordinal` to set a new variable named `slider_label`
- [x] 3.5. Update the `MySlider` function component to use `slider_label` to set the `label` on the `MDBRange` component
- [x] 3.6. Update the `MySlider` tags in the `MyContainer` function component to pass in values for the `ordinal` property

### 3.2.4. Step 4: Create `MySliderCard` Component and Refactor `MyContainer` to Use It

- [x] 4.1. Create `MySliderCard` component based on markup for the `card` elements in `MyContainer`
- [x] 4.2. Refactor `MyContainer` to use the new `MySliderCard`
- [x] 4.3. Rename `MySliderProps` to `MySliderCardProps`
- [x] 4.4. Pass values for the `ordinal` prop from `MyContainer` through `MySliderCard` to `MySlider`

### 3.2.5. Step 5: 

- [ ] 5.1. 
- [ ] 5.2. 
- [ ] 5.3. 

### 3.2.6. Step 6: 

- [ ] 6.1. 
- [ ] 6.2. 
- [ ] 6.3. 

## 3.3. Results

- See the `MySlider` and `App` function components in `src/App.tsx`:
