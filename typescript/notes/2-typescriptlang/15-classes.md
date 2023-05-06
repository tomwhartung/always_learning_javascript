
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

The following example shows that the order in which JS initializes class members can be counter-intuitive at times:

```javascript
class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}

class Derived extends Base {
  name = "derived";
}

const d = new Derived();   // Prints "base", not "derived"
```

This is because JS runs the `constructor()` in the `Base` class before initializing the members in the `Derived` class and
running its `constructor()`.

### 2.2.4. Inheriting Built-in Types

This subsection is so esoteric that the manual includes the following Note:

> Note: If you don’t plan to inherit from built-in types like Array, Error, Map, etc. or your compilation target is explicitly set to ES6/ES2015 or above, you may skip this section

I think it's totally ok to skip this subsection.


# 3. Member Visibility

## 3.1. `public`

The following example demonstrates that `public` is the default visibility of class members:

```javascript
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
```

As the example shows, a `public` member is accessible from anywhere.

**Note** that because `public` is the default, personal preference and stylistic concerns are the only reasons to specify it.

## 3.2. `protected`

The following example shows how you can access a `protected` data member only from a subclass:

```javascript
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    console.log("Howdy, " + this.getName());   // OK to access protected member here
  }
}
const g = new SpecialGreeter();
g.greet();      // OK, because it's public
g.getName();    // Error: "Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses."
```

### 3.2.1. Exposure of `protected` members

The following example deomonstrates that a `Derived` class can override - and make accessible - a member defined in a
`Base` class by defining the member with implicit `public` access:

```javascript
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
```

**Note** that if one merely forgot to add `protected` to the definition of `m` in `Derived`, this technique can lead to logic errors.

- I personally would recommend against shenanigans like this!

### 3.2.2. Cross-hierarchy `protected` access

The following example demonstrates the error message TS displays when you try to access an inherited, `protected` member
that is in a class *more than one level away* from - i.e., not a direct descendant of - the current derived class:

```javascript
class Base {
  protected x: number = 1;
}
class Derived1 extends Base {
  protected x: number = 5;
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: Base) {
    other.x = 10;   // Error: "Property 'x' is protected and only accessible through an instance of class 'Derived2'.
                    //    This is an instance of class 'Base'."
  }
}
```

For a look at some of the reasoning behind this, see this
[blog post](https://learn.microsoft.com/en-us/archive/blogs/ericlippert/why-cant-i-access-a-protected-member-from-a-derived-class)
entitled *Why Can't I Access A Protected Member From A Derived Class?* on
[learn.microsoft.com](https://learn.microsoft.com).

## 3.3. `private`

The following example shows that `private` class members are inaccessible globally:

```javascript
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);     // Error: "Property 'x' is private and only accessible within class 'Base'."
```

The following example shows that `private` class members are also not accessible in derived classes:

```javascript
class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);     // Error: "Property 'x' is private and only accessible within class 'Base'."
  }
}
```

The following example shows that a `Derived` class *cannot* increase the visibility of a `private` member of its `Base` class:

```javascript
class Base {
  private x = 0;
}
class Derived extends Base {  // Error: "Class 'Derived' incorrectly extends base class 'Base'.
                              //   Property 'x' is private in type 'Base' but not in type 'Derived'."
  x = 1;
}
```

### 3.3.1. Cross-instance `private` access

The following example shows that it is ok for one instance of an object to access the `private` member of another
instance of the same class:

```javascript
class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}
```

### 3.3.2. Caveats

The following two examples shows that TS's visibility checking is not foolproof:

```javascript
class MySafe {
  private secretKey = 12345;
}
```

If this code is in a separate file that is *not* compiled using TS, then TS does not flag the code as
violating the `private` visibility declared in a different file:

```javascript
// In a JavaScript file...
const s = new MySafe();
// Will print 12345
console.log(s.secretKey);
```

The following example shows that another way to bypass TS's visibility checking is to use bracket `[]` notation:

```javascript
class MySafe {
  private secretKey = 12345;
}

const s = new MySafe();

// Not allowed during type checking
console.log(s.secretKey);    // Error: "Property 'secretKey' is private and only accessible within class 'MySafe'."

// OK
console.log(s["secretKey"]);
```

The following two examples show how to use JS's
[private fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
hashmark `#` operator to make a member *"hard private:"*

```javascript
class Dog {
  #barkAmount = 0;
  personality = "happy";

  constructor() {}
}
```

```javascript
"use strict";
class Dog {
    #barkAmount = 0;
    personality = "happy";
    constructor() { }
}
```

The following example shows that TS uses `WeakMap`s in place of `#` when compiling to ES2021 or earlier:

```javascript
"use strict";
var _Dog_barkAmount;
class Dog {
    constructor() {
        _Dog_barkAmount.set(this, 0);
        this.personality = "happy";
    }
}
_Dog_barkAmount = new WeakMap();
```

# 4. Static Members

The following example demonstrates that you do not need to instantiate a `class` before accessing its `static` members:

```javascript
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
```

The following example demonstrates how classes can have `static` members that are `private`:

```javascript
class MyClass {
  private static x = 0;
}
console.log(MyClass.x);   // Error: "Property 'x' is private and only accessible within class 'MyClass'."
```

Classes can also have `static` members that are `protected`.

The following example demonstrates that `static` members are inherited:

```javascript
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}
```

## 4.1. Special Static Names

The following example shows the error message you get if you try to declare a `static` member that conflicts with
the `Function` [sic] prototype's properties:

```javascript
class S {
  static name = "S!";
Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
}
```

## 4.2. Why No Static Classes?

The following example demonstrates some alternatives to defining a `static` class:

```javascript
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() {}

// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};
```

**Note** that a `static class` makes sense only in languages such as Java and C# require all code to be put in a class.

JS does not have that requirement, so there's no compelling reason to have a `static class`.


# 5. `static` Blocks in Classes

The following example shows how to use a `static` block of code in a class:

```javascript
class Foo {
    static #count = 0;

    get count() {
        return Foo.#count;
    }

    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}
```

This allows you to write code that has its own scope and can also access *hard private* class members.


# 6. Generic Classes

The following example shows how, when a `new` instance of the `Box` class is created,
TS infers that its `Type` is a `string`:

```javascript
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");   // const b: Box<string>
```

## 6.1. Type Parameters in Static Members

The following example shows an error message that may well be non-intuitive:

```javascript
class Box<Type> {
  static defaultValue: Type;   // Error "Static members cannot reference class type parameters."
}
```

A generic class cannot have any `static` members that reference the class's `Type` because:

- Type annotations are available *only* at compile time and *not* at runtime
- And moreover there can be only *one* instance of the static `defaultValue` member
  - But having multiple instances of different `Type`s of `Box` would require different `Type`s of `defaultValue`


# 7. `this` at Runtime in Classes

The following example demonstrates that the *way a function is called* determines the behavior of `this`
in functions:

```javascript
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log(obj.getName());
```

In the preceding example, `getName` is called via `obj`, *not* via `MyClass` and `c`.

The manual offers some work-arounds for this possibly confusing behavior, but I personally would recommend
steering away from writing such confusing, non-KISS, ambiguous code!

## 7.1. Arrow Functions

The following example, which is similar to the preceding example, shows how `this` works differently in
arrow `=>` functions:

```javascript
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
```

The manual offers these trade-offs for our consideration when deciding whether to use a regular function
or an arrow `=>` function in a class:

- The value of `this` in the arrow `=>` function *"is guaranteed to be correct at runtime"*
  - That is, the value will be more intuitive in the arrow function
- Using the arrow `=>` function function will consume more memory
  - This is *"because each instance will have its own copy of each function defined this way"*
- The prototype chain does not have an entry for the arrow `=>` function
  - This means you cannot use `super.getName`

## 7.2. `this` parameters

The following two examples show that using `this` as an argument in a function definition has a *special meaning:*

```javascript
// TypeScript input with 'this' parameter
function fn(this: SomeType, x: number) {
  /* ... */
}
```

The TS compiler removes the `this` argument, as the following code - which is the previous code example
*after* having been run through the TS compiler - shows:

```javascript
// JavaScript output
function fn(x) {
  /* ... */
}
```

The following example shows that putting `this` in a function's argument list causes TS to check
*"that calling a function with a this parameter is done so with a correct context:"*

```javascript
class MyClass {
  name = "MyClass";
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// OK
c.getName();

// Error, would crash
const g = c.getName;
console.log(g());   // Error: "The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'."
```

According to the manual, the tradeoffs for using this technique are the opposite of the tradeoffs
when using arrow `=>` functions.

**TODO:** if I ever want to do something this weird, review what the manual has to say about it.

# 8. `this` Types

The following example demonstrates the special significance of `this` in classes to TS, in that
TS has inferred the return type from `set` is `this` - because the function literally `return`s `this`:

```javascript
class Box {
  contents: string = "";
  set(value: string) {   // (method) Box.set(value: string): this
    this.contents = value;
    return this;
  }
}
```

This is notable because TS could have inferred the `return` type to be `Box`.

The following example shows how this can be useful when we derive a class from `Box`:

```javascript
class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}

const a = new ClearableBox();
const b = a.set("hello");    // const b: ClearableBox
```

The preceding example shows that in this case, we would want `set` to return a `ClearableBox` rather
than just a `Box`, justifying TS inferring `set`s return type to be `this`.

The following example shows that you can also use `this` in a method's *parameter **type** * definition:

```javascript
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
```

The following example shows how this works similarly to the previous examples when used with a derived class:

```javascript
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox extends Box {
  otherContent: string = "?";
}

const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);    // Error: "Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
                         //   Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'."
```

Again, I have to question when relying on this sort of overly complex code really makes sense....

## 8.1. `this`-based type guards

The following example shows how to mix using `this is Type` to declare the return type of methods
with *type narrowing*:

```javascript
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFile()) {
  fso.content;     // const fso: FileRep
} else if (fso.isDirectory()) {
  fso.children;    // const fso: Directory
} else if (fso.isNetworked()) {
  fso.host;       // const fso: Networked & FileSystemObject
}
```

The manual suggests that the preceding code could be used for *"lazy validation of a particular field,"*
and offers the following example as a way to remove *"an `undefined` from the value held inside box when
`hasValue` has been verified to be true:

```javascript
class Box<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const box = new Box();
box.value = "Gameboy";

box.value;    // (property) Box<unknown>.value?: unknown

if (box.hasValue()) {
  box.value;  // (property) value: unknown
}
```

To be honest, I find it difficult to imagine a use case for this sort of technique, but if and when
I need to do something like this, hopefully I'll remember to return here!


# 9. Parameter Properties

The following example the *special syntax* TS offers for creating *parameter properties* - members
that TS *automatically creates* when you use an *access modifier* to prefix one or more arguments to
a `class`'s `constructor`:

```javascript
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);    // (property) Params.x: number
console.log(a.z);    // Error: "Property 'z' is private and only accessible within class 'Params'."
```

# 10. Class Expressions

The following example shows a *class expression:*

```javascript
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass("Hello, world");   // const m: someClass<string>
```

The preceding *class expression* is similar to a class declaration, except it has no name!

- The only way to refer to the class is through its instances.


# 11. `abstract` Classes and Members

The following example demonstrates how you can define an *abstract method* which, like an *abstract field,*
must be in an *abstract class:*

```javascript
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

const b = new Base();  // Error: "Cannot create an instance of an abstract class."
```

The following example shows that the *only* way we can use an *abstract class* is to use it to *derive* a class:

```javascript
class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();
d.printName();
```

The following example demonstrates the error we get if the derived class fails to *implement all*
of its parent's `abstract` fields and methods.

```javascript
class Derived extends Base {   // Error: "Non-abstract class 'Derived' does not implement
                               //   inherited abstract member 'getName' from class 'Base'."
  // forgot to do anything
}
```

## 11.1. Abstract Construct Signatures

The following example shows that ... frankly I have no clue why someone might want to do something like this:

```javascript
function greet(ctor: typeof Base) {
  const instance = new ctor();     // Error: "Cannot create an instance of an abstract class."
  instance.printName();
}
```

Apparently this example builds on previous examples, in which `Base` is an *abstract class,* and hence TS
refuses to allow you to instantiate it.

The following example shows the absurdity of allowing this sort of thing:

```javascript
// Bad!
greet(Base);
```

"Bad!"???  Duh!!!

The following example shows how to use a *construct signature* - in the form of an arrow `=>` function - that
prompts TS to display a more explicit error message:

```javascript
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
greet(Base);   // Error: "Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
               //   Cannot assign an abstract constructor type to a non-abstract constructor type."
```


# 12. Relationships Between Classes

The following example demonstrates that, because TS compares classes *structurally,* it can tell that the classes
`Point1` and `Point2` are identical:

```javascript
class Point1 {
  x = 0;
  y = 0;
}

class Point2 {
  x = 0;
  y = 0;
}

// OK
const p: Point1 = new Point2();
```

The following example shows that, because TS uses *structural comparisons,* it can identify that
`Employee` is a subclass of `Person` even though it does not use `extends` to explicitly declare
itself as such:

```javascript
class Person {
  name: string;
  age: number;
}

class Employee {
  name: string;
  age: number;
  salary: number;
}

// OK
const p: Person = new Employee();
```

Again, I have no idea why someone would want to declare an empty class - and at least the manual cautions us
against doing so - but due to its use of *structural comparisons,* the following example shows how TS is
fine with this sort of absurdity:

```javascript
class Empty {}   // Don't - just DON'T!!

function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}

// All OK!
fn(window);
fn({});
fn(fn);
```

