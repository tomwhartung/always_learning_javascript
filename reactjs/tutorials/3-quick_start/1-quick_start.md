
# 01-quick_start.md

Notes from going through this reactjs tutorial:

- [ReactJS Quick Start](https://beta.reactjs.org/learn)

The goal is to *not* dwell on things I already learned in going through the previous tutorials.

# Creating a New React App

I am creating a new react app so I can play around with some of these ideas and topics, if I decide I want to....

## Commands Run

```
$ pwd      # /var/www/always_learning/always_learning_javascript/reactjs/projects
$ npx create-react-app my-quick-start-app
$ cd my-quick-start-app
$ pwd      # /var/www/always_learning/always_learning_javascript/reactjs/projects/my-quick-start-app
$ npm run start
$
```

## Files Edited

Edited the following files, to get rid of some of the "cutesy stuff" etc., before starting to play around:

- my-quick-start-app/public/index.html
  - Changed the title
- my-quick-start-app/src/App.js
  - Replaced default "cutesy stuff" with my own message


# Quick Start

Noting just the **important** stuff!

## 1. Creating and Nesting Components

- React component names *must* start with an upper case letter
- HTML elements *must* be all lower case

## 2. Writing markup with JSX

- JSX is stricter than HTML
  - For example, you must close tags, e.g., `<br />`
- You can use an [online converter](https://transform.tools/html-to-jsx) to convert HTML to JSX

## 3. Adding styles

- Use the `className` attribute to specify CSS classes for your components
  - In JSX, the `className` attribute **replaces** the HTML `class` attribute
  - Idea: use lower-case for class names and put them in double quotes (based on the example I'm seeing)

In the JSX (reactjs/projects/my-quick-start-app/src/App.js):

```
  return (
    <button
      className="independent-button">
      ...
    </button>
```

In the css (reactjs/projects/my-quick-start-app/src/App.css):

```
.independent-button {
  margin: 10px;
  padding: 5px;
}
```

## 4. Displaying data

- Use curly braces to "escape back" into JavaScript and embed a bit of data

```javascript
  <h1>
    {user.name}
  </h1>
```

- Use curly braces *instead of* double quotes to specify a JavaScript value as an HTML attribute
  - In these cases it's ok to use "complex expressions" such as string concatenation

```javascript
  <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of ' + user.name}
  />
```

## 5. Conditional rendering

- It's ok to use regular old JavaScript `if {...} else {...}` statements in JSX

```javascript
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
```

- To use the ternary conditional operator `... ? ... : ...', put it inside curly braces

```javascript
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
```

- If you don't need an `else`, you can use the logical `&&` operator inside curly braces

```javascript
  {isLoggedIn && <AdminPanel />}
```

# 6. Rendering lists

- Use `for` loops and the array `map()` function to process lists
- React will *need* the `id` numbers if items will be deleted, inserted, or reordered

```javascript
// No curly braces needed to declare our array
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
//
// **Notes:**
//   Curly braces needed **only inside the markup tags**
//   product.id comes from the array, which will typically come from a database
//
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

# 7. Responding to events

- Define and specify event handlers inside the components

```javascript
//
// handleClick() is the event handler
// Use curly braces used to specify it inside the markup tag
//
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

# 8. Updating the screen - Using state variables

1. `import` the ability to `useState` from `'react'`
2. Declare a *state variable* in the component
   - This declaration specifies the name of the state variable, the function that sets it, and its initial value
   - The declaration usually takes the form `const [something, setSomething] = useState(initialValue);`
3. Each instance of the component gets its own unique value for the state variable

- For a demo of this code, see the Second App, `MyStateApp`, in this repo under `reactjs/projects/my-quick-start-app`
  - `export` the `AllMyApps` app to run all apps in `my-quick-start-app`

```javascript
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

# 9. Using Hooks

- A *hook* is a function that starts with `use`
- In the example above, `useState` is a *hook*
- There are several types of [built-in React hooks](https://beta.reactjs.org/reference/react)
- It is also possible to create custom *hooks*
- *Hooks* are like functions, but are more restrictive
  - For example, it is possible to call hooks only at the *top level* of your components

# 10. Sharing data between components

In section *8. Updating the screen - Using state variables* above we wrote a program showing how to
keep independent values in two different instances of the same component.

- React also support sharing data between components
  - This was covered previously in `../1-step_by_step_guide/10-lifting_state_up.md`

Here is the process:

1. Move the *state variable* up to the lowest component in the heirarchy that is above the components that need to share the state
2. Pass the state down *as a property* to each of the lower components that use the state variable
   - Use curly braces to refer to the new *property* defined in the higher-level component
3. Change each of the lower components to use the new *property* instead of the state variable

The following code examples show each step in this process.

1. Move the *state variable* up to the lowest component in the heirarchy that is above the components that need to share the state

```javascript
export default function MyApp() {
  const [count, setCount] = useState(0);    // formerly in the MyButton() function component

  function handleClick() {                  // formerly in the MyButton() function component
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  // we moved code defining the state (const...) and handling the click (handleClick())
  //   *from* here *to* the top-level MyApp component
}
```

2. Pass the state down *as a property* to each of the lower components that use the state variable
   - Use curly braces to refer to the new *property* defined in the higher-level component

```javascript
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // Pass the state down as a property by setting the count={count} and
  //   handleClick event onClick handler for each button
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```

3. Change each of the lower components to use the new *property* instead of the state variable

```javascript
//
// The new MyButton function component now uses passed-in *properties* to refer to the onClick event handler count value
// *Note* the passed-in parameters that appear inside curly braces inside the parenthesis in the function definition!!
//
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```

Got this much to work ok.

- See `reactjs/projects/my-quick-start-app/src/App.js` for the results

# Extra Credit: Implement a `totalCount`??

## Problems and the Solution

I had issues trying to do this.

- The next section describes early attempts to do this
- To see the solution, go to the end of this file

## The Problems

I tried extending the resulting `reactjs/projects/my-quick-start-app/src/App.js` to maintain a `totalCount`

- Tried keeping a `totalCount` state variable in the `AllMyApps` top-level component
- Tried passing a function to display this count in the `BonjourApp` component
  - Got this to work ok by refering to `{totalCount.totalCount}`, which I found puzzling
- Tried passing a function to update this count to the `IndependentCountersApp` and `ControlledCountersApp` components
  - This gave me a "white screen of death"
  - See `App-handleAnyClick-first_effort_failure.js` for an initial effort that I thought should work
  - **I currently don't understand why this won't work** (*)
- Tried passing a function to update this count to just the `ControlledCountersApp` component
  - This compiles and runs but does not work
  - One error is "handleAnyClick is not a function"
  - Trying the trick learned above with totalCount.totalCount, I get a "handleAnyClick.handleAnyClick is not a function" error
  - See `App-passing_a_function_fail.js`
  - **I currently don't understand why this won't work** (*)
- Tried passing the `totalCount` property to just the `ControlledCountersApp` component and updating it locally
  - This compiles and runs but does not work
  - I did not really expect it to work but thought I'd give it a try
  - See `App-passing_a_variable_fail.js`

## Use Classes to Fix??

Note that all of these are function components.

Could I get it to work by using classes as components?

**That's a good question that I do not care to try to answer at this point!**

## The Solution

The solution was to put curly braces around the arguments in the function definitions of the function components.

For the working app, see
`reactjs/projects/my-quick-start-app/src/App.js`.

