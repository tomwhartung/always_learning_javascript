
# 8-lists_and_keys.md

Notes from going through step 8 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

# 8. Lists and Keys

Here is a quick review of how JavaScript's `map()` function can double a list of numbers:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);          // logs [2, 4, 6, 8, 10] to the console.
```

ReactJS allows us to do similar operations.

## Rendering Multiple Components

The following code shows how to create a collection of elements and include them in JSX using curly braces {}:

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <ul>{listItems}</ul> );                 // renders list of bullet items, each of which contains an integer
```

Note that this code produces a warning:

> "Warning: Each child in a list should have a unique 'key' prop.%s%s See https://reactjs.org/link/warning-keys for more information.%s" "
> Check the top-level render call using <ul>." "" "
>     at li"

At this point I am not sure what that means!  Proceeding....

## Basic List Component

The next example shows how to refactor the previous example to create a component that contains the list inside of it:

```javascript
// NumberList: function component to display a bullet list of numbers
function NumberList(props) {
  const numbers = props.numbers;
  // **Including an attribute named "key" prevents the warning saying it's missing**
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li> );
  return(
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
```

Including the "key" attribute prevents the warning from displaying.

## Keys


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

