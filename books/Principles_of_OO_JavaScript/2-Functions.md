
# Chapter 2. Functions

### Syntax of Declarations and Expressions

Ok to use first and define later.

function add( x, y ) {
	return x + y;
}

var concat = function( prefix, suffix ) {
	return prefix + suffix;
};

### Functions as Values

Ok to:

* Assign a function to a variable
* Add a function to an object
* Pass a function as an argument to a function
* Return a function from a function

### Arity

function hasArgs( one, two ) {
	// do stuffs
}

hasArgs.length   // 2

Not the same as arguments.length .

Ok to call a function with the wrong number of arguments.

* too few: missing are undefined
* too many: extras are ignored

### Overloading

Functions do not really have a signature (see Arity above).

When there are two functions with the same name in the code, the second one is used and the first one is ignored.

### Methods and "this"

Every scope in JS has a "this" object that represents the calling object for the function (global functions: "this" is the window).

var person = {
	name: 'Joe',
	sayName: function () {
		console.log( this.name );
	}
};

#### Changing the value of "this"

The value of "this" can be changed by calling one of the following methods:

* call()
* apply()
* bind()

For details see pp. 26-28.

