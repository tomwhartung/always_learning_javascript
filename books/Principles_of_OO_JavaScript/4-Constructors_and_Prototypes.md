
# Chapter 4. Constructors and Prototypes

Classes rely heavily on constructors and prototypes.

### Constructors

A function that is used with new to create an object.

function Person( name ) {
	this.name = name;
	this.sayName = function() {
		console.log( "Hi I am " + name );
	};
}

var person1 = new Person();
var person2 = new Person();

* Note that each object has its own copy of sayName.

* If there are 100 person objects, there are 100 identical copies of the sayName function.

* It is better to use the constructor to put the methods in the prototype (so there is only one).

### Prototypes

* Like a recipe for an object

* Almost every function has a prototype property used to create new objects

* Example: the Object prototype defines hasOwnProperty() so every object can access that function

* Note that hasOwnProperty does not search the object's prototype (use "in" instead)

var book = { title: "The Big Sleep" };

Object.prototype.hasOwnProperty( "hasOwnProperty" );   // true
book.hasOwnProperty( "hasOwnProperty" );               // false
book.hasOwnProperty( "title" );                        // true
title in book;                                         // true
hasOwnProperty in book;                                // true

#### Using Prototypes With Constructors

It is much more efficient to use the constructor to put the methods in the prototype:

Person.prototype.sayName = function() {
	console.log( 'Hi my name is ' + this.name );
}

You do not want to do this with the data members, though, because then every Person object would have the same name!


