
# 06-object_types.md

Some notes from reading
[Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html).

# 0. Object Types

There are three types of *object types:*

- Anonymous using `{}`
- Named using an `interface`
- Named using a `type` alias

Following is an example of an anonymous *object type* that uses `{}`

```javascript
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

Following is an example of an *object type* named using an `interface`

```javascript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}
```

Following is an example of an *object type* named using a `type` alias

```javascript
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
```


# 1. Property Modifiers

Use *property modifiers* to indicate optional and `readonly` properties.

## 1.1. Optional Properties

To indicate that a property is optional, append a question mark '?' to its name:

```javascript
interface PaintOptions {
  shape: Shape;
  xPos?: number;            // optional
  yPos?: number;            // optional
}

function paintShape(opts: PaintOptions) {
  // ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

If an optional property is not set, it is `undefined`.

Following is an example of the JS syntax you can use to set default values in a function definition:

```javascript
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);   // (parameter) xPos: number
  console.log("y coordinate at", yPos);   // (parameter) yPos: number
  // ...
}
```

**Note:** in this case, the `{...}` surrounding the list is a JS
[destructuring pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

> Note that there is currently no way to place type annotations within destructuring patterns. This is because the following syntax already means something different in JavaScript.

## 1.2. `readonly` Properties

```javascript
```

## 1.3. Index Signatures

```javascript
```


# 2. Extending Types

```javascript
```


# 3. Intersection Types

```javascript
```


# 4. Interfaces vs. Intersections

```javascript
```


# 5. Generic Object Types

```javascript
```

## 5.1. The `Array` Type

```javascript
```


## 5.2. The `ReadonlyArray` Type

```javascript
```


## 5.3. Tuple Types

```javascript
```


## 5.4. `Readonly` Tuple Types

```javascript
```


