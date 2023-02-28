
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
  - Some commenting and uncommenting may be necessary

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

```html
```

```javascript
```

```javascript
```

```html
```

```javascript
```

```html
```

```javascript
```

```html
```

