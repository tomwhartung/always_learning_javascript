
# 11-type_manipulation-indexed_access_types.md

Some notes from reading
[Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html).

# 1. Indexed Access Types

The following example shows how to use an *indexed access type* to define a new type, `Age`, based on
the name of a member of another type, `Person`:

```javascript
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];    // type Age = number
```

The following example shows how to use *indexed access types* along with unions and `keyof` to define
new types based on other types:

```javascript
type Person = { age: number; name: string; alive: boolean };

type I1 = Person["age" | "name"];    // type I1 = string | number

type I2 = Person[keyof Person];      // type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];       // type I3 = string | boolean
```

The following example shows the error message TS displays when you misspell a property name, or reference a
property that doesn't exist:

```javascript
type I1 = Person["alve"];   // Error: "Property 'alve' does not exist on type 'Person'."
```

The following example shows how you can get the property names and types of an array's elements by using `number`,
and use them with `typeof` to create new types:

```javascript
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];       // type Person = { name: string; age: number; }

type Age = typeof MyArray[number]["age"];   // type Age = number
                                            // Or
type Age2 = Person["age"];                  // type Age2 = number
```

The following example shows the error message TS displays when you try to get an *indexed access type* using
a variable rather than a type:

```javascript
const key = "age";
type Age = Person[key];  // Error: "Type 'key' cannot be used as an index type.
                         //   'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?"
```

