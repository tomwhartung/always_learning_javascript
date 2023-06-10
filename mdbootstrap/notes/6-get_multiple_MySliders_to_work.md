
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

### 3.2.5. Step 5: Get the `value` of each `MySlider` and Display it in the `card`

- [x] 5.1. Add event handler function `handleChange(evt:ChangeEvent)` in the `MySlider` component
- [x] 5.2. Add `onChange={handleChange}` property to markup for `MDBRange` in the `MySlider` component
- [x] 5.3. Add state variable `value` to `MySlider` component
- [x] 5.4. Update `handleChange` to get the `value` from `evt.target`
- [x] 5.5. Update `handleChange` to log the `value` to the `console`
- [x] 5.5. Update the markup returned by the `MySlider` component to display the `value`

### 3.2.6. Step 6: Update `MyContainer` to Use a `for` Loop to Create the `MySliderCard` Components

- [x] 6.1. Add new constants to near the top of `App.tsx`
  - [x] 6.1.1. Add `numberOfSliderCards` and set it equal to **4**
  - [x] 6.1.2.  Add `ordinalsArray` containing words representing the position of each of the cards and their sliders
- [x] 6.2. Update the `MySliderCardProps` interface to contain the `sliderNo` instead of the `ordinal`
- [x] 6.3. Change the list of columns containing `MySliderCard`s in `MyContainer` to use a `for` loop to generate a list of `MySliderCard`s
  - [x] 6.3.1. Declare a `sliderCols` array in `MyContainer`
  - [x] 6.3.2. Add a `for` loop to `push` the markup for each of the `numberOfSliderCards` columns onto the `sliderCols` array
  - [x] 6.3.3. The `div` element for each of these columns must contain a `key` attribute
  - [x] 6.3.4. Each of these columns must contain a `MySliderCard` element nested in its `div` element
  - [x] 6.3.5. Each of these `MySliderCard` elements must pass `sliderNo` prop, which equals the `col` index used in the `for` loop
  - [x] 6.3.6. Replace the existing list of `div`s with a reference to the `{sliderCols}` array
- [x] 6.4. Update the `MySliderCard` component to pass the `sliderNo` prop and display the `sliderNo` along with its `ordinal`
  - [x] 6.4.1. Add 1 to the `sliderNo` to get the correct `ordinal`
  - [x] 6.4.2. Convert the `ordinal` to lower case
  - [x] 6.4.3. Change the `<MySlider ...>` tag to use the `sliderNo` prop instead of the `ordinal`
  - [x] 6.4.4. Update the text below the `MySlider` to display an appropriate message
- [x] 6.5. Update the `MySlider` component to use the `sliderNo` to set the `sliderLabel` and `sliderId`

### 3.2.7. Step 7: Lift State up, From the `MySlider` Component to the `MyContainer` Component

- Reference:
  - React.dev [lifting state up page](https://react.dev/learn/tutorial-tic-tac-toe#lifting-state-up)
- Overview:
  - Move state from single value in `MySlider` to array of values in
  - Pass state values from `MyContainer` to `MySlider` as props

- [ ] 7.1. 
- [ ] 7.2. 
- [ ] 7.3. 

### 3.2.8. Step 8: 

- [ ] 8.1. 
- [ ] 8.2. 
- [ ] 8.3. 

### 3.2.9. Step 9: 

- [ ] 9.1. 
- [ ] 9.2. 
- [ ] 9.3. 

## 3.3. Results

- See the `MySlider` and `App` function components in `src/App.tsx`:

