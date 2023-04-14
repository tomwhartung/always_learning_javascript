
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

Use the TS `readonly` modifier to flag attempts to change a property during type checking:

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

The `readonly` modifier is not infallible, because TS does not look for the signal when checking for compatibility
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

The following example shows how to use an ampersand `&` to create an *intersection type,*
which is a *type alias* that combines two existing types without extending them.

```javascript
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

The following example code shows how we might use the `ColorfulCircle` type defined above:

```javascript
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });    // okay
```


# 4. Interfaces vs. Intersections

The subtle difference between the `interface` created in section *2. Extending Types*
and the *intersection* created in section *3. Intersection Types* is, according to this
section, "how conflicts are handled."

TODO: If I need to do this, figure out exactly what they mean by "how conflicts are handled."


# 5. Generic Object Types

Following is an example of an `interface` that defines a *generic object type* that declares a *type parameter:*

```javascript
interface Box<Type> {
  contents: Type;
}
```

The following example shows how to use a *type alias* to define a similar *generic object type:*

```javascript
type Box<Type> = {
  contents: Type;
};
```

In the above example, the *generic type* is `<Type>` and the *type parameter* is `Type`.

The following example shows how to use this *generic type* to declare a variable
by specifying a *type argument:*

```javascript
let box: Box<string>;
let boxA: Box<string> = { contents: "hello" };
```

The following example shows how we can *reuse* the generic `Box` type to work with `Apple`s:

```javascript
interface Box<Type> {
  contents: Type;
}

interface Apple {
  // ....
}

// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```

The following example shows how a *generic object type* also allows us to use
[*generic functions*](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions)
instead of overloads:

```javascript
function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

The following example shows how using a *type alias,* which can describe primitive as well as object types,
enables us to define many interesting combinations:

```javascript
type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;    // type OneOrManyOrNull<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;    // type OneOrManyOrNullStrings = OneOrMany<string> | null
```

## 5.1. The `Array` Type

An `Array` is a *generic* type.

- `number[]` is equivalent to `Array<number>`
- `string[]` is equivalent to `Array<string>`

```javascript
interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;

  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;

  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;

  // ...
}
```

JS provides other *generic* data structures, such as `Map<K,V>`, `Set<T>`, and `Promise<T>`.

## 5.2. The `ReadonlyArray` Type

The following example shows how you can use the `ReadonlyArray` special type type to describe an
array that shouldn't be changed:

```javascript
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");                // Error: "Property 'push' does not exist on type 'readonly string[]'."
}
```

The following example shows how to use a regular `Array` to create a `ReadonlyArray`:

```javascript
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

The following example, which is equivalent to a previous example, shows how to use
the `readonly` modifier instead of using the `ReadonlyArray` special type:

```javascript
function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");                  // Error: "Property 'push' does not exist on type 'readonly string[]'."
}
```

Interestingly, you *cannot* assign a `ReadonlyArray` to a regular `Array`:

```javascript
let x: readonly string[] = [];
let y: string[] = [];

x = y;
y = x;      // Error: "The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'."
```


## 5.3. Tuple Types

*Tuple types* are relavent to TS only, and are not a feature of JS.

Following is an example of a *tuple type:*

```javascript
type StringNumberPair = [string, number];
```

Violating the number of elements or the types defined causes an error.

The following example shows how to *destructure* a *tuple type:*

```javascript
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;

  console.log(inputString);   // const inputString: string
  console.log(hash);          // const hash: number
}
```

The following example shows how to use a question mark `?` to indicate the member of a tuple is optional:

```javascript
type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;                 // const z: number | undefined

  console.log(`Provided coordinates had ${coord.length} dimensions`);   // (property) length: 2 | 3
}
```

Any optional members must be at the end.

The following example shows how to use *rest elements* in a variety of *tuples:*

```javascript
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

These can come in handy when used in argument lists.

## 5.4. `Readonly` Tuple Types

The following example shows how to use the `readonly` modifier with a *tuple:*

```javascript
function doSomething(pair: readonly [string, number]) {

  pair[0] = "hello!";   // Error: "Cannot assign to '0' because it is a read-only property."
}
```

