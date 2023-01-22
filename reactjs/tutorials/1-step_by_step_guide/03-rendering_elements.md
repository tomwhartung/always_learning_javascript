
# 03-rendering_elements.md

Notes from going through step 3 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

# 3. Rendering Elements

React elements are the "smallest building blocks of React apps."

- Your code must call the `render()` function to render the element it displays in the browser.
- To change what the browser displays, call the `render()` function repeatedly.

Code copy-and-pasted from the tutorial to below and the "Hello With Ticking Clock" pen on codepen.io.  And it works, cool!

```javascript
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

When you call `render()` multiple times, react compares the old DOM with the new DOM, and updates only the elements that have changed.

