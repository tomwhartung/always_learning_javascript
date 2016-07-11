
var answer;

if( ((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX") ) {
    answer = true;
} else {
    answer = false;
}

-----

var output = '';

for( index=1; index <= 20; index++ ) {
    output = '';
    if( index%3 === 0 ) {
        output = 'Fizz';
    }
    if( index%5 === 0 ) {
        output += 'Buzz';
    }
    if( output.length === 0 ) {
        output = index;
    }
    console.log( output );
}

---------

var getReview = function (movie) {
    switch( movie ) {
        case "Toy Story 2":
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
            break;
    }
};

-----

// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species: "beagle",
    age: 10
};

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;

var bicycle = {};
bicycle.speed = 0;
bicycle.gear = 1;
bicycle.frame_material = 'carbon fiber';


