
# 01-quick_start.md

Notes from going through this reactjs tutorial:

- [ReactJS Quick Start](https://beta.reactjs.org/learn)

The goal is to *not* dwell on things I already learned in going through the previous tutorials.

# 0. Creating a New React App

I am creating a new react app so I can play around with some of these ideas and topics.

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

- 

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

