
# Chapter 3. Understanding Objects

Classes are dynamic.

### Defining Properties

var person {};

person.name = 'Tom';
person.age = 16;

### Detecting Properties

Use the in operator or the hasOwnProperty function.

console.log( "name" in person );                  // true
console.log( person.hasOwnProperty( "name" ) );   // true

### Deleting Properties

Use delete .

delete person.age;
console.log( "age" in person );    // false

### Enumeration

var property;
for( property in object ) {
	console.log( "Name: " + property );
	console.log( "Value: " + object[property] );
}

### Types of Properties

* Data properties - contain a value

* Accessor properties - functions tjhat allow setting or getting a value

var person = {
	_name: "Tom",
	get name() { return this._name },           // note: "get" used instead of "function"
	set name( value ) { this._name = value },   // note: "set" used instead of "function"
};

### Property Attributes

#### Common Attributes

#### Data Property Attributes

#### Accessor Property Attributes

#### Defining Multiple Properties

#### Retrieving Property Attributes

### Preventing Object Modification

#### Preventing Extensions

#### Sealing Objects

#### Freezing Objects


