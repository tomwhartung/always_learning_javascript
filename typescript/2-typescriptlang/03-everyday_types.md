
# 03-everyday_types.md

Some notes from reading the
[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
page of the handbook.

# 1. The primitives: `string`, `number`, and `boolean`

Always use the lowercase JS primitive type names in TS.

# 2. Arrays

Use square brackets `[]` to declare an array:

```javascript
number[];
string[];
```

# 3. `any`

Use the special TS type `any` for values you do not want to cause typechecking errors.

```javascript
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

Of course, the fact that compiling an expresson does not cause syntax errors, doesn't necessarily mean it will run ok!!

# 4. `noImplicitAny`

The `noImplicitAny` compiler flag disables TS's default behavior of setting a variable's type to `any` when it
cannot infer any other type.
Setting `noImplicitAny` causes TS to flag any variable declaration as an error before assigning it the `any` type.

# 5. Type Annotations on Variables

```javascript
```


# 6. 

```javascript
```


# 7. 

```javascript
```


# 8. 

```javascript
```


# 9. 

```javascript
```


# 10. 

```javascript
```

