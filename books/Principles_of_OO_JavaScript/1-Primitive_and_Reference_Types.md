
# Chapter 1. Primitive and Reference Types

### Primitive Types

Stored as simple data types.

Use typeof operator to determine the type.

* Boolean
* Number
* String
* Null
* Undefined

Use == to compare with coercion; use === to compare withOUT coercion.
```
"5" == 5    // true
"5" === 5   // false
```

#### Primitive Methods

(string).toLowerCase();
(string).substring();
(integer).toFixed(2);   // 10.00
(boolean).toString();   // "true" or "false"

### Reference Types

Stored as objects (pointer to object).

Use instanceof operator to determine whether an object is a certain type

```
var items = [];
var obj = {};
items instanceof Array   // true
obj instanceof Object    // true
```

#### Creating Objects

Constructor:
function MyObj() {
	prop1: 1
}
var obj = new MyObj();
obj.prop2 = 2;
obj = null;   // dereference to free up space

Literal:
var litObj = { };

### Built-in Types

* Array
* Date
* Error
* Function
* Object
* RegExp

var colors1 = [ "r", "g", "b" ];
var colors2 = new Array( "r", "g", "b" );

ECMAScript 5:
var myArr = [ 1, 2, 3 ];
Array.isArray(myArr)   // true

### Primitive Wrapper Types

* String
* Number
* Boolean

Autoboxing: objects are created and destroyed behind the scenes whenever strings, numbers, or booleans are read.

