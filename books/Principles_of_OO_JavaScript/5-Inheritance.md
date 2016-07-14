
# Chapter 5. Inheritance

Inheritance can occur between two objects without a class-like structure defining the inheritance.

#### Prototype Chaining and Object.prototype

Prototype chaining, or prototypal inheritance: object instances inherit from the prototype.

* Objects inherit from their prototype

* Prototypes inherit from their prototypes, if they have any

#### Methods Inherited from Object.prototype

* hasOwnProperty()

* propertyIsEnumerable()

* isPrototypeOf()

* valueOf() - may want to override this

* toString() - may want to override this

#### Modifying Object.prototype

All objects inherit from Object.prototype, so modifying it affects *all* objects

### Object Inheritance

You can explicitly set an object's prototype with the Object.create() method:

var book = Object.create( Object.prototype, { ... });

You can also inherit from objects:

var person1 = { ... };
var person2 = Object.create( person1, { ... });

