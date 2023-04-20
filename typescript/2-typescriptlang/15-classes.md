
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


## 1.3. Constructors

The following example 
```javascript
```

## 1.4. Methods

The following example 
```javascript
```

## 1.5. Getters / Setters

The following example 
```javascript
```

## 1.6. Index Signatures

The following example 
```javascript
```


# 2. Class Heritage

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

