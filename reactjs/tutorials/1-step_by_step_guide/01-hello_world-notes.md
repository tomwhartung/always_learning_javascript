
# 1-hello_world.md

Notes from going through step 1 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Hello World](https://reactjs.org/docs/hello-world.html)

# 1. Hello World

Here is the smallest React example:

```html
<div id="root">
    <!-- This element's contents -->
    <!-- will be replaced with -->
    <!-- the React component we will -->
    <!-- define in the code. -->
</div>
```
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```

We also need to use Babel as the JS preprocessor and include the following two ReactJS files:

```
https://unpkg.com/react/umd/react.development.js
https://unpkg.com/react-dom/umd/react-dom.development.js
```

**Note:** this code is now set up in my codepen template named *ReactJS Starting Point.*

## Getting "My Hello World in React" to Work in My Codepen Account

I did the following to get the example above to work in my new codepen account:

1. Created the account
1. Copy-and-pasted the code (not sure whether I created a pen...)
1. Created a collection named "Reactjs step-by-step tutorial code"
1. Renamed the pen by clicking on the pencil next to "Untitled" in the upper-left-hand corner to "My Hello World in React"
1. Added the pen to the collection
1. Noticed a little red exclamation point in the bottom right corner of the JS panel
1. Clicked on the gear icon in the JS panel
1. Changed JS Preprocessor to Babel
1. Added the following External Scripts, copied from Dan Abramov's "Hello World in React" pen referenced and linked to in the tutorial:
   - https://unpkg.com/react/umd/react.development.js
   - https://unpkg.com/react-dom/umd/react-dom.development.js

After waiting a few seconds, it worked!!

## Modern JS

This page links to the following page:

- [Modern JavaScript in React Documentation](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c)

It is for people used to old-school JS, such as *moi,* and contains the following tips:

- They use `let` and `const` instead of `var` to define variables
- They use `class` to define classes
  - *Don't* put commas between class method definitions
  - The value of `this` in a method **depends on how it is called**
    - See the [page for Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Boxing_with_prototype_and_static_methods)
      in the MDN docs
    - (Looked at the page but did not readily see what they are talking about.)
- They sometimes use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
  which are like regular functions, except shorter
  - They do not have their own `this`, `arguments`, or `super`

