
var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
gabby = new Person( "student", true );
var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
gabby = new Person( "student", true );

--

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
        console.log( 'Hello!' );
    }
}

var user = new Person("Codecademy Student",false);
user.speak();

--

var james = {
    job: "programmer",
    married: false,
    speak: function( feeling ) {
        console.log( 'Hello, I am feeling ' + feeling );
    }
};

james.speak("great");
james.speak("just okay");

--

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log( "Hi, I work as a " + this.job );
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();

--

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log( james[aProperty] );

--

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"

--

var myObj = {
    // finish myObj
    name: 'name property'
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

--

var suitcase = {
    shirt: "Hawaiian"
};

if( suitcase.hasOwnProperty("shorts") ) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = 'electrical';
    console.log(suitcase.shorts);
}

--

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for( var prop in nyc ) {
    console.log( prop );
}

--

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for( var prop in nyc ) {
    console.log( nyc[prop] );
}

--

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle( radius ) {
    this.radius = radius;
}

--

function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
  console.log("Woof");
};

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

--

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name

var me = new Person( "Tom H.", 48 );
printPersonName(me);

--

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

--

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function() {
    console.log( 'Meow!' );
}

// add code here to make the cats meow!
cheshire.meow();
gary.meow();

--

// create your Animal class here
function Animal( name, numLegs ) {
    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal
Animal.prototype.sayName = function() {
    console.log( "Hi my name is " + this.name );   
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

--

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin( name, numLegs ) {
    this.name = name;
    this.numLegs = numLegs;    
}

// create a sayName method for Penguins here
Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();

--

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin( name ) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

--

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin( name ) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin = new Penguin( 'Opus' );

penguin.sayName();

--

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor( name ) {
    this.name = name;   
}
Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has

emperor = new Emperor( 'Ceasar' );

console.log( emperor.numLegs );

--

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying );   // should print "Waddle waddle"
console.log( myEmperor.numLegs );  // should print 2
console.log( myEmperor.isAlive );  // should print true

--

function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.

var myAge = john.age;

--

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;  // private variable
}

// create your Person 

var john = new Person( 'John', 'Doe', 63 );

// try to print his bankBalance

console.log( john.bankBalance );

--

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
        return bankBalance; 
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log( myBalance );

--
//
// Private functions are super-confusing!
//
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

--

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */

var myBalance = john.askTeller( 1234 );

--

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages

for( var lang in languages ) {
    if( typeof languages[lang] === 'string' ) {
        console.log( languages[lang] );
    }
}

--

function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
    console.log( "Hello this is a " + this.breed + " dog" );
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

--

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty( 'hasOwnProperty' );
console.log(hasOwn);

--


