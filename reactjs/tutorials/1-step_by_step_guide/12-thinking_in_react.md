
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

const root = ReactDOM.createRoot(document.getElementById('container'));
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

