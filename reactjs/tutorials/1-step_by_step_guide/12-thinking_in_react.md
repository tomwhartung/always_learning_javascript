
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


```javascript
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

