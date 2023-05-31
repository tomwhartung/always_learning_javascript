
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea  = function() {
  return this.sideLength * this.sideLength;
};


var p = square.calcPerimeter();
var a = square.calcArea();

-----

function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(name, size) {
    this.name = name;
    this.size = size;
}


----

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person( "Sally Bowles", 39 );
var holden = new Person( "Holden Caulfield", 16 );
console.log("sally's species is " + sally.species + " and she is " + sally.age );
console.log("holden's species is " + holden.species + " and he is " + holden.age );

---

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return (2 * this.height) + (2 * this.width);
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

---

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit( "fluffy" );
var rabbit2 = new Rabbit( "happy" );
var rabbit3 = new Rabbit( "sleepy" );

----

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);

----

// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}


// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);


// loop through our new array

for( var famIdx = 0; famIdx < family.length; famIdx++ ) {
    console.log( family[famIdx].name );
}

---

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference( alice, billy );

---

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function( person1, person2 ) {
    if( person1.age < person2.age ) {
        return person2.age;
    } else {
        return person1.age;
    }
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

---

var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = new Object();

spencer2.age = 22;
spencer2.country = "United States";

---

var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;
    
// use bracket notation for snoopy's age
var age = snoopy["age"];

---

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line

// var the_hobbit = new Book( 320, "J.R.R. Tolkein" );

var the_hobbit = new Book( 320, "J.R.R. Tolkien" );

---

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
        return 2 * Math.PI * this.radius;
    }
};


