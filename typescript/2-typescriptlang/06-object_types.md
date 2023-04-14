
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

You can remove optional attributes by using
[mapping modifiers](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers).

## 1.2. `readonly` Properties

Use the TS `readonly` keyword to flag attempts to change a property during type checking:

```javascript
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello";                // TS Error: "Cannot assign to 'prop' because it is a read-only property."
}
```

Just because a property is `readonly` does not mean it is *immutable.*

The following example shows how we can change a property of the `home.resident` property,
but not the `home.resident` property itself:

```javascript
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {               // Error: "Cannot assign to 'resident' because it is a read-only property."
    name: "Victor the Evictor",
    age: 42,
  };
}
```

The `readonly` keyword is not infallible, because TS does not look for the signal when checking for compatibility
between types.

The following example shows how to circumvent the `readonly` property of two properties
by aliasing the object that contains them:

```javascript
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```

You can remove `readonly` attributes by using
[mapping modifiers](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers).

## 1.3. Index Signatures

Following is an example of an `interface` that has an *index signature:*

```javascript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];         // const secondItem: string
```

The *index signature* above indicates that indexing `StringArray` with a `number` returns a `string`.

An index signature must be a `string`, `number`, `symbol` or a template string pattern, or a union type
made up of these types.

The following example shows how to create a "dictionary" of `number`s indexed by `string`s that *cannot*
add or retrieve `string`s:

```javascript
interface NumberDictionary {
  [index: string]: number;

  length: number;   // ok
  name: string;     // Error: "Property 'name' of type 'string' is not assignable to 'string' index type 'number'."
}
```

The following example shows how to create a "dictionary" of `number`s indexed by `string`s that *allows*
adding and retrieval of `string`s:

```javascript
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;   // ok, length is a number
  name: string;     // ok, name is a string
}
```

The following example shows that making an index signature *readonly* will prevent changes to it:

```javascript
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";     // Error: "Index signature in type 'ReadonlyStringArray' only permits reading."
```


# 2. Extending Types

The following example shows how to use the `extends` keyword when creating an `interface` to effectively copy
the properties of one type into another type, then add more properties with more specialized data:

```javascript
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

The following example shows how to `extend` two `interface`s:

```javascript
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
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


