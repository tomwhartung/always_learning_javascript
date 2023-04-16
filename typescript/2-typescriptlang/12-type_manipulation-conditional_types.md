
# 12-type_manipulation-conditional_types.md

Some notes from reading
[Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html).

# 1. Conditional Types

The following example shows how to use TS's conditional operator `... ? ... : ...` - which works the same as
JS's conditional operator, to create new types based on the *relationship between* already-existing types:

```javascript
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;     // type Example1 = number

type Example2 = RegExp extends Animal ? number : string;  // type Example2 = string
```

The following example shows the format of TS's conditional operator:

```javascript
  SomeType extends OtherType ? TrueType : FalseType;
```

The following example shows a `createLabel` function that has a few overloads:

```javascript
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

We can use TS's conditional operator to simplify what we're doing here.

The following example shows how to *encode logic* in a *conditional type* so that it
uses TS's conditional operator to pick the appropriate `interface`:

```javascript
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
```

The following example shows how to use the `NameOrId` type created in the previous example to
eliminate the need for all the overloads listed in the example above the previous one:

```javascript
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");    // let a: NameLabel

let b = createLabel(2.8);             // let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42);   // let c: NameLabel | IdLabel
```

## 1.1. Conditional Type Constraints

The following example 

```javascript
```

The following example 

```javascript
```


## 1.2. Inferring Within Conditional Types

The following example 

```javascript
```

## 1.3. Distributive Conditional Types

The following example 

```javascript
```

