
// prompt( 'What is your name?' );
//
// console.log( 'Hi ' + user );

var list = [ 'elt', 'member', 'item' ];

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log( languages[2] );
console.log( languages.length );

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];


for( langIdx=0; langIdx < languages.length; langIdx++ ) {
    console.log( languages[langIdx] );
}

var myArray = [ 6, false, "Python" ];

var newArray = [ ['me', 2, true], ['Zeronimo', 4, true], ['Mildred', 4, false] ];

var jagged = [
    ['me', 2, true],
    ['Mildred', 4]
];

var me = {};
me.name = 'Tom H.';
me.age = 29;

var me = new Object();
me.name = 'Tom H.';
me['age'] = 29; 

var object1 = new Object();
object1.name = 'Tom H.';
object1['age'] = 29;

var object2 = new Object();
object2.name = 'Zeronimo';
object2['age'] = 8;

var object3 = new Object();
object3.name = 'Mildred';
object3['age'] = 22;


var me = {}; 
me.name = 'Tom H.';
me.age = 29; 

var myArray = [ 5, true, 'Merna Mernz', me ];

var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests: ['cats', 'girls', 'music'],
};


var myOwnObject = {};

myOwnObject.greeting = 'hi';
myOwnObject.farewell = 'bye';
