
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

The following example shows the error message TS displays when we try to use an index that doesn't necessarily
exist to create an *indexed access type:*

```javascript
type MessageOf<T> = T["message"];    // Error: "Type '"message"' cannot be used to index type 'T'."
```

The following example shows how to *constrain* a type so that we don't get this error:

```javascript
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;    // type EmailMessageContents = string
```

The following example shows how to use the conditional operator to create a `MessageOf` type that
can be used to create another type and defaults to `never` when the referenced type - in this case,
`Dog` - does *not* have the member given in the index, i.e., `message`:

```javascript
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;   // type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>;       // type DogMessageContents = never
```

The following example shows how to `Flatten` an array while leaving non-array types as-is:

```javascript
type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;   // type Str = string

// Leaves the type alone.
type Num = Flatten<number>;     // type Num = number
```


## 1.2. Inferring Within Conditional Types

The following example shows how to use the TS keyword `infer` to define the `Flatten` type from
the previous example:

```javascript
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
```

The following example shows how to use `infer` to extract the type of the value returned by function types:

```javascript
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;      // type Num = number

type Str = GetReturnType<(x: string) => string>;      // type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;      // type Bools = boolean[]
```

The following example demonstrates that TS uses the *last* function signature - i.e., the catchall case - when
using `infer` with an overloaded function's `Return` types:

```javascript
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;    // type T1 = string | number
```

# 2. Distributive Conditional Types

The following example shows a conditional type `ToArray` that can convert any type that `extends any`
into an array:

```javascript
type ToArray<Type> = Type extends any ? Type[] : never;
```

The following example shows how using this type with a union causes TS to *distribute* over the union:

```javascript
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;    // type StrArrOrNumArr = string[] | number[]
```

In other words:

1. `StrArrOrNumArr` distributes on the union `string | number`
2. So it becomes essentially `ToArray<string> | ToArray<number>;`
3. And leaves us with the type `string[] | number[]`

The following example shows that you can *prevent* TS from being *distributive* by
surrounding the types on either side of `extends` with square brackets `[]`:

```javascript
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;    // type StrArrOrNumArr = (string | number)[]
```

