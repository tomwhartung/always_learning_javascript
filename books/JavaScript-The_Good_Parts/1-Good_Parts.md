
# Chapter 1: Good Parts

Cannot remove bad features already in language because that would break much code.

You have the power to use only the good features of JavaScript and not the bad.

### Why JavaScript?

The DOM is awful and this makes parts of JavaScript awful.

JavaScript is often despised because it is forced upon people and because it is not some other language (the one they are used to).

### Analyzing JavaScript

JavaScript is rather like LISP in C's clothing.

It has a very powerful object literal notation (JSON).

Trying to impose a classical inheritance design patterns upon it causes frustration, it is best to embrace prototypal inheritance.

The top-level global object is one of the worst aspects of JavaScript, but is fundamental to the language.

### Simple Testing Ground

Only need a browser and a text editor.

#### Defining a method Method

This is explained in Chapter 4:
```
Function.prototype.method = function( name, func )
{
	this.prototype[name] = func;
	return this;
}
```
