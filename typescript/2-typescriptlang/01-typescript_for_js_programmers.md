
# 01-typescript_for_js_programmers.md

Some notes from reading [typescript_for_js_programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

# 1. Types by Inference

- Typescript frequently generates types for you
  - E.g. strings in double quotes: `"Hello World"`

# 2. Defining Types

Following are some ways you can define your own types:

```javascript
// Inferred type
const user = {
  name: "Hayes",
  id: 0,
}
```

```javascript
// Explicit type - note the capital letter
interface User = {
  name: string,
  id: number,
}
```

```javascript
// Using an explicit type to declare a variable
const user: User = {
  name: "Hayes",
  id: 0,
}
```

If the declaration does not match the definition, typescript displays a warning:

```javascript
const user: User = {
  username: "Hayes",
  // Causes this warning message:
  // Type '{ username: string; id: number; }' is not assignable to type 'User'.
  //   Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
```

How to use an interface definition in a class:

```javascript
interface User = {
  name: string,
  id: number,
}

class UserAccount {
  name: string;
  id: number;
  constructor( name: string, id: number ) {
    this.name = name;
    this.id = id;
  }
}
```

How to use an interface definition in function definitions:

```javascript
function getAdminUser(): User {     // define the type of the return value
  // . . .
}
```

```javascript
function deleteUser(user: User) { // defind the type of the parameter
  // . . .
}
```

You can use

```javascript
```

```javascript
```

```javascript
```

