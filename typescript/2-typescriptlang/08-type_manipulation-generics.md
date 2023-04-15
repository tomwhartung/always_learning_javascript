
# 08-type_manipulation-generics.md

Some notes from reading
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

# 0. Generics

A key technique for creating reusable code is to define *generic types,*
which allow developers to create new types based on existing type patterns.

# 1. Hello World of Generics

Following is an example of the *"Hello World"* of *generic types,* an `identity` function that
returns its argument:

```javascript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

The `identity` function above is *generic* because it allows us to work with any type of data.

When calling this function we can either specify the type, as in the following example:

```javascript
let output = identity<string>("myString");    // let output: string
```

Or we can let TS use *type argument inference* to *infer* the type, as in the following example:

```javascript
let output = identity("myString");    // let output: string
```

If TS is unable to correctly *infer* the type, then you can always revert to specifying it in angle brackets `<>`.

# 2. Working With Generic Type Variables

The following example shows how to write a variation on the `identity` function that:

- Takes an array as its argument
- Logs the number of elements in the array to the `console`
- Returns the array

```javascript
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

The following example is a variation on the previous example that specifies the `Array` rather
than using square brackets `[]` to declare that the argument and return type are arrays:

```javascript
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

# 3. Generic Types

The following example shows how we can create a `myIdentity` function based on the `identity` function:

```javascript
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;
```

Note that, when creating the `myIdentity` function we changed the name of the *type parameter* from `Type`
to `Input`.

The following example shows how to write the generic type *"as a call signature of an object literal type:"*

```javascript
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: { <Type>(arg: Type): Type } = identity;
```

The following code takes this one step further, taking the previous example's *object literal* and moving it
into an `interface`:

```javascript
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

The following example shows how to make the *generic type* a *"parameter of the whole interface."*

```javascript
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

**Note:** now when we use the `interface` we need to specify what we want to use for the `Type` -
in this case, by specifying `<number>`.


# 4. Generic Classes

The following example shows how to make a *generic class* by using angle brackets `<>` to specify
a type name that will be referenced inside the class:

```javascript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

The following example shows how someone could use the `GenericNumber` *generic `class`* with a value
for `<NumType>` that is, in fact, non-numeric:

```javascript
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

It sounds like the technique of *"putting the type parameter on the class itself"* is preferred, because,
as the manual states:

> Just as with interface, putting the type parameter on the class itself lets us make sure all of the properties of the class are working with the same type.


# 5. Generic Constraints

```javascript
```

# 6. Using Type Parameters in Generic Constraints

```javascript
```

# 7. Using Class Types in Generics

```javascript
```

