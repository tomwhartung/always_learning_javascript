
# 08-lists_and_keys.md

Notes from going through lesson 8 of this reactjs tutorial:

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

Supplying keys to elements in a list ensures each element has a stable identity.

- Usually you will want to use the `id` value for the item from the database
- If the `id` value is not available, use the index "as a last resort:"

```javascript
const todoItems = todos.map((todo, **index**) =>
  // Only do this if items have no stable IDs
  <li key={**index**}>
    {todo.text}
  </li>
);
```

> We don’t recommend using indexes for keys if the order of items may change.
> This can negatively impact performance and may cause issues with component state.

This part of the tutorial has a couple of links to details about all this.

## Extracting Components With Keys

It is **crucial** to specify the key when creating the **component** rather than with the tag.

This example shows the correct usage:

```javascript
function ListItem(props) {
  // **Correct! There is no need to specify the key here:**
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // **Correct! Key should be specified inside the array.**
    <ListItem **key={number.toString()} value={number}** />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

> A good rule of thumb is that elements inside the map() call need keys.

See my pen ["My Map of List Items"](https://codepen.io/tomwhartung/pen/XWBzNBw?editors=1011) on codepen to see the example from the "Basic List Component" subsection
refactored with comments that highlight this distinction.

## Keys Must Only Be Unique Among Siblings

Some details on using keys:

- Keys do not need to be globally unique.  That is, we can use the same key values in different lists.
- Keys do not get passed to components.  If you need the value, pass it as a prop with a different name.

This example code apparently uses the `post` variable as an alias for `props` (??):

```javascript
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

> With the example above, the Post component can read `props.id` (`post.id` ??), but not `props.key` (`post.key` ??).

## Embedding `map()` in JSX

The following code is a more succinct version of previous versions, in that the return statement contains the call to the `map()` function:

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

This style is not always preferable, however, because when the nesting gets complicated, embedding too much code like this can hurt readability.

