
# 11-composition_vs_inheritance.md

Notes from going through lesson 11 of this reactjs tutorial:

- [ReactJS Step-by-step Guide - Composition vs. Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

# 11. Composition vs. Inheritance

The tutorial recommends using the former (composition) rather than the latter (inheritance).

This lesson shows how some newbies might think inheritance would work better for some situations, and
how to accomplish the same goals using composition.

## Containment

Compositon works well when a component doesn't know what children it will have until run time.
Examples include generic boxes such as sidebars and dialogs.

### Containment Using ReactJS' `children` prop

For this use case, ReactJS implements a special `children` property:

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

This code demonstrates how the `FancyBorder` component can use the special `children` property:

```javascript
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

> Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.

To see this code complete, see my pen
[11. My WelcomeDialog](https://codepen.io/tomwhartung/pen/zYLRVag?editors=0010) on codepen.

Note that, unlike previous pens, this one includes some special CSS code!

### Containment Using DIY Properties

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

