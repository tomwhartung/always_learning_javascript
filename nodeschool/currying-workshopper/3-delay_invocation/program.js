//
//  DELAY INVOCATION
//  Exercise 3 of 6
//
// Write a unary function which takes single input and return another unary function.
// On calling second Function it should result in addition of two inputs.
//
// Feel like I am cheating using a global var.
// Here's the "official" solution:
//
//   var secondInvoc = function (a) {
//     return function(b) {
//       return a + b;
//     }
//   }
// It is certainly a bit more succinct than my version.
//

var saveAddend1 = 0;

var unary1 = function( addend1 ) {
	saveAddend1 = addend1;
	return unary2;
};
var unary2 = function( addend2 ) {
	return saveAddend1 + addend2;
};

module.exports = unary1, unary2

