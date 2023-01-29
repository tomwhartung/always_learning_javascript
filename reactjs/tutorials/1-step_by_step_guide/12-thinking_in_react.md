
# 12-thinking_in_react.md

Notes from going through step 12 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

# 12. Thinking in React

In this lesson we build an app, a website on which we can sell stuff.

**Note:** a new, improved version of this lesson is available, in beta form,
on [this page](https://beta.reactjs.org/learn/thinking-in-react).

Glancing at it, it appears to be very similar, but **we might want to look at it when we finish with this *"old"* version.**

## [Step 0:] Start With A Mock

See the [supplied mock UI](https://reactjs.org/docs/thinking-in-react.html#start-with-a-mock) and sample data
for this lesson.

## Step 1: Break The UI Into a Component Hierarchy

The intial steps are to:

1. Draw a box - on the paper copy of the mock-up - around every component
2. Give each component a name
  - If the designer's already done this, e.g., as photoshop layer names, feel free to use these names
  - One technique: the *single responsibility principle:* ideally each component should do only one thing.
  - Examine the data; it should adhere to an *information architecture*
  - Each component should match one piece of your data model
3. Arrange the components into a hierarchy

### Step 1.1. Identify the Components

Following is a list of the components identified by the authors of the tutorial:

- `FilterableProductTable` (orange): contains the entirety of the example
- `SearchBar` (blue): receives all user input
- `ProductTable` (green): displays and filters the data collection based on user input
- `ProductCategoryRow` (turquoise): displays a heading for each category
- `ProductRow` (red): displays a row for each product

### Step 1.2. Arrange the Components Into a Hierarchy

- FilterableProductTable
  - SearchBar
  - ProductTable
     - ProductCategoryRow
     - ProductRow

## Step 2: Build a Static Version in React

Start with a version that does not interact with the user.

```javascript
// ProductCategoryRow: component to render a category row in our table of categories and products
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

// ProductRow: component to render a product row in our table of categories and products
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

// ProductTable: component to render the table of products
//    uses the ProductCategoryRow and ProductRow components
class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

// SearchBar: component to display a search bar
class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

// FilterableProductTable: component to display the search bar and table of products
//    This component is "Filterable" in that at times it may contain just the search results
//    rather than all available products.
class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

// Hard-coded list of products, used temporarily for development and testing
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const root = ReactDOM.createRoot(document.getElementById('**container**'));
root.render(<FilterableProductTable products={PRODUCTS} />);
```

> The easiest way is to build a version that takes your data model and renders the UI but has no interactivity.
> It’s best to decouple these processes because building a static version requires a lot of typing and no thinking,
> and adding interactivity requires a lot of thinking and not a lot of typing.

Well, that's one way of looking at it!

Here are some additional things to note:

- When building a static version of a page, use `props` exclusively, and *don't use state at all.*  State is used only when interacting with the user.
- When building larger apps, it is usually easier to start with the small components and work your way up to the big ones
  - This makes it easier to develop reusable components
- When building smaller apps, it might be easier to start with the big components and work your way down to the smaller ones
- At the end of this state, the components will have only `render()` methods

### A Brief Interlude: Props vs State

The two types of data in ReactJS are `props` and `state`.
If you feel uncertain about this distinction, refer to the following pages:

- [React docs: state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React FAQ: the difference between `state` and `props`](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)

## Step 3: Identify The Minimal (but complete) Representation Of UI State

Remember Lesson 10:
[Lifting State Up?](https://github.com/tomwhartung/always_learning_javascript/blob/master/reactjs/tutorials/1-step_by_step_guide/10-lifting_state_up.md)
When implementing the interactive part of the UI, the idea of there being a *single source of truth* is essential!

This is also known as keeping the state variables **DRY:** *Don't Repeat Yourself.*
For example, if you are keeping an array of TODO items, there is no reason to keep a count of items, just keep the array of the items itself.
It is easy enough to count them when the count is needed.

A good way to identify which data items are `state` is to:

1. Make a list of each piece of data in the app
2. For each piece of data, ask the following questions:
   - Is it a property passed in from its parent?
     - If so, it is probably *NOT* `state`
   - Does the user change its value?
     - If so, it probably *IS* `state`
   - Can its value be derived from other `props` or `state` variables?
     - If so, it is probably *NOT* `state`

In the app we are developing, the following data items are dependent on user input, and hence are `state` variables:

- The search text
- The value of the "Only show products in stock" checkbox

## Step 4: Identify Where Your State Should Live

This next step can be the most challenging.
If you get it wrong, then you will need to go through the steps in Lesson 10,
[Lifting State Up](https://github.com/tomwhartung/always_learning_javascript/blob/master/reactjs/tutorials/1-step_by_step_guide/10-lifting_state_up.md)
which can take some time.

Here is what the tutorial recommends doing for each `state` variable you identified in the last step:

1. Identify all components that depend on that `state` for rendering something
2. Find the component that is common to all of these components
3. Consider designating this component, or its parent, as the owner of the `state` - as the *single source of truth* for it
4. If it doesn't make sense for the component identified in the prior step to own the variable, create a new component solely for this purpose

In our app, the following components use the `state` variables we have identified:

- The user specifies the search text and checked `state` in the `SearchBar` component
- `SearchBar` also needs to display the search text and checked `state`
- `ProductTable` needs to filter the product list based on the `state`
- The FilterableProductTable component is a common parent to both of these components

Therefore, it totally makes sense for the `FilterableProductTable` component to own both the filter text and checked value `state` variables.

## Step 5: Add Inverse Data Flow

This version of the tutorial doesn't cover these changes very well.
After taking a glance, it looks like the newer version, which is in beta and was mentioned previously, does a better job of it.

For my purposes, I created two javascript files, copy-and-pasting code from the tutorial into them and adding just a few comments at the top.

- `12a-thinking_in_react-BEFORE-static_version.js` - containing the static version of the code from near the beginning of the tutorial
- `12b-thinking_in_react-AFTER-stateful_version.js` - containing the stateful version of the code from near the end of the tutorial

Following is the output from running diff against the two versions:

```
 $ diff 12a-thinking_in_react-BEFORE-static_version.js 12b-thinking_in_react-AFTER-stateful_version.js
2,3c2,3
< // 12a-thinking_in_react-BEFORE-static_version.js
< // ----------------------------------------------
---
> // 12b-thinking_in_react-AFTER-stateful_version.js
> // -----------------------------------------------
45a46,48
>     const filterText = this.props.filterText;
>     const inStockOnly = this.props.inStockOnly;
>
49a53,58
>       if (product.name.indexOf(filterText) === -1) {
>         return;
>       }
>       if (inStockOnly && !product.stocked) {
>         return;
>       }
60c69,70
<           key={product.name} />
---
>           key={product.name}
>         />
79a90,103
>   constructor(props) {
>     super(props);
>     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
>     this.handleInStockChange = this.handleInStockChange.bind(this);
>   }
>
>   handleFilterTextChange(e) {
>     this.props.onFilterTextChange(e.target.value);
>   }
>
>   handleInStockChange(e) {
>     this.props.onInStockChange(e.target.checked);
>   }
>
83c107,112
<         <input type="text" placeholder="Search..." />
---
>         <input
>           type="text"
>           placeholder="Search..."
>           value={this.props.filterText}
>           onChange={this.handleFilterTextChange}
>         />
85c114,118
<           <input type="checkbox" />
---
>           <input
>             type="checkbox"
>             checked={this.props.inStockOnly}
>             onChange={this.handleInStockChange}
>           />
94a128,150
>   constructor(props) {
>     super(props);
>     this.state = {
>       filterText: '',
>       inStockOnly: false
>     };
>
>     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
>     this.handleInStockChange = this.handleInStockChange.bind(this);
>   }
>
>   handleFilterTextChange(filterText) {
>     this.setState({
>       filterText: filterText
>     });
>   }
>
>   handleInStockChange(inStockOnly) {
>     this.setState({
>       inStockOnly: inStockOnly
>     })
>   }
>
98,99c154,164
<         <SearchBar />
<         <ProductTable products={this.props.products} />
---
>         <SearchBar
>           filterText={this.state.filterText}
>           inStockOnly={this.state.inStockOnly}
>           onFilterTextChange={this.handleFilterTextChange}
>           onInStockChange={this.handleInStockChange}
>         />
>         <ProductTable
>           products={this.props.products}
>           filterText={this.state.filterText}
>           inStockOnly={this.state.inStockOnly}
>         />
```

It's easy to see they made **a lot** of changes, which I will go through in the next subsection, which is not part of the tutorial.

## Examining the Before and After versions

This subsection looks at what they changed between the static and stateful versions of the app.

Just prior to this section you can see all of the differences betwen the two versions.
This subsection goes through these changes one component at a time, starting at the top of the hierarchy, which is at the end of the file.

### Changes to the `FilterableProductTable` Component

The `FilterableProductTable` component is at the top of the hierarchy - and is the last component in the file.
This component:

- Renders the `SearchBar` component
- Renders the `` component
- Owns the `state` variables set in the `SearchBar` component
  - `FilterableProductTable` monitors and manages changes to the `state` variables set in the `SearchBar` component
  - When the `state` variables change, `FilterableProductTable`
    - Passes the latest values for the `state` variables to them
    - Rerenders the `SearchBar` and `ProductTable` components at the same time

Following is the `FilterableProductTable` component **BEFORE** these changes:

```javascript
class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
```

The `FilterableProductTable` component needs to be updated to manage the `state` variables.
These are values input by the user in the `SearchBar` component that affect the display of products in the `ProductTable` component.

Following is the `FilterableProductTable` component **AFTER** these changes, with comments added that briefly explain what the new code does:

```javascript
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    // Add the state variables to this class component
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    // Bind the event handlers for the state variables
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  // Event handler for the search bar's filter text state variable
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  // Event handler for the in stock only checkbox state variable
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  // Render the child components, passing the updated values for the state variables
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
```

Updating the `FilterableProductTable` class in the
[12. My Product Page App](https://codepen.io/tomwhartung/pen/ZEjREar?editors=1010)
on codepen does not cause an error, but it's only a partial solution.

### Changes to the `SearchBar` Component

Following is the `SearchBar` component **BEFORE** these changes:

```javascript
class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
```

The `SearchBar` component needs to be updated to pass the `state` variables, which are just `props` in this class,
from its parent component, the `FilterableProductTable` component, to the elements in the DOM.

Following is the `SearchBar` component **AFTER** these changes, with comments added that briefly explain what the new code does:

```javascript
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // Bind the event handlers for the props that reflect the parent component's state variables
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  // Event handler for the filter text prop: call event handler in parent class
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  // Event handler for the in stock change checkbox prop: call event handler in parent class
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  // Render the form, using the latest values for the props
  // -> Note that these props are state variables in the parent component
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
```
Updating the `SearchBar` class in the
[12. My Product Page App](https://codepen.io/tomwhartung/pen/ZEjREar?editors=1010)
on codepen does not cause an error, but it's still only a partial solution.

### Changes to the `ProductTable` Component


```javascript
```

```html
```

```javascript
```

```html
```

