
# 7-lift_state_up_for_a_single_slider.md

Getting one slider to work was fairly easy, now let's try getting four of them to work ok.

# 1. Setup

The code for this project is in the `mdbootstrap/projects/7-lift_state_up_for_a_single_slider` directory in this repo.

## 1.1. Commands

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "7-lift_state_up_for_a_single_slider"

cd 7-lift_state_up_for_a_single_slider         # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7-lift_state_up_for_a_single_slider
npm i mdb-react-ui-kit                         # Add mdb and react
npm run dev                                    # Start development server; press "q" to quit
```

## 1.2. Add `mdb.min.css` to `index.html`:

Add the code in the following code box to inside the `<head>...</head>` element in `index.html`:

```
<!-- MDB -->
<link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
```

**Note:** if this is the only change made to the installed version of `index.html` in `6-get_multiple_MySliders_to_work`,
then just copy that file over.

```
$ pwd
/var/www/always_learning/always_learning_javascript/mdbootstrap/projects
$ diff 6-get_multiple_MySliders_to_work/index.html 7-lift_state_up_for_a_single_slider/index.html
7,8d6
<     <!-- MDB -->
<     <link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
$ cp 6-get_multiple_MySliders_to_work/index.html 7-lift_state_up_for_a_single_slider/index.html
$ diff 6-get_multiple_MySliders_to_work/index.html 7-lift_state_up_for_a_single_slider/index.html
$
```

**As noted last time:** We may want to add Font Awesome, Google Fonts Roboto, and maybe others.
For details, see the
[bootstrap download and setup page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/).

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
- [x] Run `npm run lint`

# 3. Process

- [x] 3.1. Remove all but one card from `MyContainer`
- [ ] 3.2. Lift state up for just the one card from `MySlider` to `MySliderCard`
  - [x] 3.2.1. Move definition of state variable `const [value...` from `MySlider` to `MySliderCard`
  - [x] 3.2.2. Move definition of event handler `handleChange` from `MySlider` to `MySliderCard`
  - [x] 3.2.3. Change the `onChange` attribute of the `MDBRange` tag to use `props.onSliderChange` instead of `handleChange`
  - [x] 3.2.4. Add new member `sliderVal: number` to `MySliderCardProps`
  - [x] 3.2.5. Update the `p` tag in `MySlider` to display `sliderValue = {props.sliderVal}`
  - [x] 3.2.6. Add new prop `sliderVal={props.sliderVal}` to the `MySlider` tag in `MySliderCard`
  - [x] 3.2.7. Update `MySliderCard` to accept only the `sliderNo` prop
    - Make a copy of `MySliderCardProps` and name it `MyCardProps`
    - Change `MySliderCardProps` to have only the `sliderNo` member
    - Update `MySliderCard`'s signature to accept a `MySliderCardProps`
    - Update the `MySlider` tag in `MySliderCard` to:
      - Pass the `sliderNo` on as a `MySlider` prop
      - Use the local value of `value` for the `MySlider` tag's `sliderVal` prop
      - Use the local function named `handleChange` for the `MySlider` tag's `onSliderChange` prop
    - `MyContainer`'s `MySliderCard` tag to ...   
  - [x] 3.2.8. Comment out all of the `logSliderChange` function in `MyContainer`
  - [x] 3.2.9. This gets us a clean compile, so commit these changes!
  - [ ] 3.2.10. 
- [ ] 3.3. Lift state up for just the one card again from `MySliderCard` to `MyComponent`
- [ ] 3.4. Figure out how to put the new tag for `MySliderCard` in a loop


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
We are here!
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


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

- References:
  - React.dev [lifting state up page](https://react.dev/learn/tutorial-tic-tac-toe#lifting-state-up)
  - [App.js](https://github.com/tomwhartung/always_learning_javascript/blob/master/reactjs/projects/ttt-my_way-app/src/App.js) done *"my_way"*
- Overview:
  - Move state from single value in `MySlider` to array of values in
  - Pass state values from `MyContainer` to `MySlider` as props
  - **The tricky part is calling the event handler in `MyContainer` from the slider in `MySlider`**
- These names follow the pattern used in naming event handler functions in the *"References"* above
  - `onSliderChange` - prop specifying the function to call
    - Add to `MySliderCardProps`
    - Specify as a prop (attribute) in the `MySliderCard` tag
    - Use as the value of the `onChange` attribute for the `MDBRange` tag in the `MySlider` component function
  - `handleChange` - new event handler in the `MyContainer` component
    - Should be close to what we have now as the `handleChange` function in the `MySlider` component function
    - Used in the arrow function which is the value of the `onSliderChange` prop in the `MyContainer` component
  - 

- [x] 7.1. Add a state Array variable to the `MyContainer` Component
  - [x] `const [values, setValues] = useState(Array(numberOfSliderCards).fill(defaultValue));`
- [x] 7.2. Add `onSliderChange` to the `MySliderCardProps` interface
  - [x] `onSliderChange: (evt: ChangeEvent<Element>) => void;`
- [x] 7.3. Add `onSliderChange` as a prop to all `MySliderCard` and `MySlider` tags
  - [x] 7.3.1. In `MySliderCard` add `onSliderChange={props.onSliderChange}` to the `MySlider` tag
  - [x] 7.3.2. In `MyContainer` add `onSliderChange={() => handleSliderChange(col)}` to the `MySliderCard` tag
- [x] 7.3.yikes!
  - [x] This turned out to be more complicated that I thought!
  - [x] Stepping back for a bit to try lifting state up for a single slider
  - [ ] See `7-lift_state_up_for_a_single_slider.md` in this directory
- [ ] 7.4. 
- [ ] 7.5. 
- [ ] 7.6. 
- [ ] 7.7. 

