
# 15-classes.md

Some notes from reading
[Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html).

# 0. Classes

TS fully supports JS `class`es.

# 1. Class Members

The following example shows an empty class, which is not useful, but has potential:

```javascript
class Point {}
```

## 1.1. Fields

The following example shows how to specify the type when declaring the data members in a class, and
update them with values consistent with their type:

```javascript
class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
```

The following example shows how to initialize the data members in a class:

```javascript
class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
console.log(`${pt.x}, ${pt.y}`);    // Prints 0, 0
```

In the above example, TS *infers* that `x` and `y` are meant to contain `number`s.
The following example shows the TS error message you will get if you try to assign a `string` to one of these members:

```javascript
const pt = new Point();
pt.x = "0";      // Error: "Type 'string' is not assignable to type 'number'."
```

### 1.1.1. `--strictPropertyInitialization`

The following example shows the TS error message you will get if:

- You set the `--strictPropertyInitialization` TS compiler option
- You do not initialize a member in the class's constructor

```javascript
class BadGreeter {
  name: string;    // Error: "Property 'name' has no initializer and is not definitely assigned in the constructor."
}
```

The following example shows how to fix the error in the above example:

```javascript
class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}
```

**Note:** when `--strictPropertyInitialization` is set, you must initialize the class's fields *in the `constructor()`,*
**not** in methods called by the `constructor()`.

The following example shows how to use the *definite assignment assertion operator* `!` to override this requirement:

```javascript
class OKGreeter {
  name!: string;    // Not initialized, but the "!" cancels out the error message
}
```

## 1.2. `readonly`

The following example  shows the error messages that result from trying to assign a value to a `readonly`
field outside of the `constructor()`:

```javascript
class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = "not ok";   // Error: "Cannot assign to 'name' because it is a read-only property."
  }
}
const g = new Greeter();
g.name = "also not ok";   // Error: "Cannot assign to 'name' because it is a read-only property."
```

## 1.3. Constructors

The following example shows how to define a `constructor()` that takes parameters and supplies default values
for when it is called without any arguments:

```javascript
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

The following example shows how to define overloads for a `constructor()`:

```javascript
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

**Note** that in TS, `function`s can have type paramters and return type annotations, but `constructor()`s cannot.

### 1.3.1. Super Calls

The following example shows that in a class that `extends` a base class, the constructor must call `super()` *before*
it can access one of the fields in the base class:

```javascript
class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);   // Error: "'super' must be called before accessing 'this' in the constructor of a derived class."
    super();
  }
}
```

## 1.4. Methods

The following example shows how to declare the types of a *method's* argument and return value:

```javascript
class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

The following example shows that it is important to use `this` when referring to a `class`'s field from inside
one of its *methods:*

```javascript
let x: number = 0;

class C {
  x: string = "hello";

  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world";    // Error: "Type 'string' is not assignable to type 'number'."
  }
}
```

## 1.5. Getters / Setters

The following example shows how to define *accessors* - methods that change and retrieve the values of a class's
fields - in a class:

```javascript
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

**Note** the following conventions and rules:

- *Accessor methods* are optional, and you would usually provide them *only* when additional logic is needed
  - Examples of "additional logic" include validation, clean up or *sanitizing* user input, etc.
- If a field has a `get` method but no `set` method, TS considers it to be `readonly`
- If the type of the argument to the `set` method is *not* specified, TS infers it from the `get` method's return type
- The `get` and `set` methods must have the same *visibility*

The following example shows how to allow a `set` method to accept a union of types, then convert them as needed, so
that the `get` method can return a single type:

```javascript
class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}
```

## 1.6. Index Signatures

The following example shows how a class can the *index signature* syntax used for *other object types*
to declare an *index signature* in a `class`:

```javascript
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}
```

**Note:** that, although it is possible to do this, as the following quote reveals, the manual recommends against it:

> Because the index signature type needs to also capture the types of methods, it’s not easy to usefully use these types. Generally it’s better to store indexed data in another place instead of on the class instance itself.


# 2. Class Heritage

## 2.1. `implements` Clauses

The following example shows how to use the `implements` clause to signal TS to check for proper inheritance from an `interface`:

```javascript
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {    // Error: "Class 'Ball' incorrectly implements interface 'Pingable'.
                                    //   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'."
  pong() {
    console.log("pong!");
  }
}
```

### 2.1.1. Cautions

**Note:** the `implements` clause has no real effect on the inheriting type or class.
It only signals TS to *check* that class *properly defines* the methods in its parent interface.

The following example shows the error message TS displays when `NameChecker` does not *properly define* `Checkable`'s
`check(name: string): boolean;` method, which it is supposed to implement:

```javascript
interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s) {                          // Error: "Parameter 's' implicitly has an 'any' type."
    // Notice no error here
    return s.toLowercse() === "ok";   // [toLowercse()] any
  }
}
```

The following example demonstrates that neither TS nor JS creates the optional member `y` in class `C'
just because `C implements A`:

```javascript
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;         // Error: "Property 'y' does not exist on type 'C'."
```

## 2.2. `extends` Clauses

When one class `extends` another class, the *derived* [or *extending*] class gets all of the members
defined in the *parent* [or *extended*] class.

The following example shows how you can use an object of the derived class `Dog` to reference methods defined
in both its parent class `Animal` and its own class:

```javascript
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
d.move();     // Base class method
d.woof(3);    // Derived class method
```

### 2.2.1. Overriding Methods

The following example shows how a derived class can override a method in its parent class, and
use `super.` to access the overridded method:

```javascript
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();            // "Hello, world!"
d.greet("reader");    // `Hello, READER`
```

**Note** that the `name` parameter in the definition of `greet(name?: string)` in `Derived` above is marked optional
by the question mark `?`.

The following example shows how to use `d`, the instance of of the `Derived` class created in the previous example,
to create an instance of the the `Base` class and access its `greet()` method:

```javascript
// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
```

The following example shows that trying to define `Derived` *without* making the `greet` method's `name` parameter
*optional* - **which is a violation of `Base`'s contract** - causes a TS error:

```javascript
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  // Make this parameter required
  greet(name: string) {     // Error: "Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
                            //    Type '(name: string) => void' is not assignable to type '() => void'."
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}
```

### 2.2.2. Type-only Field Declarations

This subsection seems overly esoteric.
Quoting from the manual:

> "When `target >= ES2022` or `useDefineForClassFields` is `true`, class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class."

The following example shows how to use the `declare` keyword to fix the issue:

```javascript
interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}
```

### 2.2.3. Initialization Order

The following example 
```javascript
```

### 2.2.4. Inheriting Built-in Types

The following example 
```javascript
```


The following example 
```javascript
```


# 3. Member Visibility

The following example 
```javascript
```

# 4. Static members

The following example 
```javascript
```

# 5. `static` Blocks Classes

The following example 
```javascript
```

# 6. Generic Classes

The following example 
```javascript
```

# 7. `this` at Runtime in Classes

The following example 
```javascript
```

# 8. `this` Types

The following example 
```javascript
```

# 9. Parameter Properties

The following example 
```javascript
```

# 10. Class Expressions

The following example 
```javascript
```

# 11. Classes and Members

The following example 
```javascript
```

# 12. Relationships Between Classes

The following example 
```javascript
```

