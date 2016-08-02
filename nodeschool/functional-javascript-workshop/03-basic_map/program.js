//
// Basic: Map
// Exercise 3 of 18
//
// # Task
//
// Convert the following code from a for-loop to Array#map:
//
// function doubleAll(numbers) {
//    var result = []
//    for (var i = 0; i < numbers.length; i++) {
//       result.push(numbers[i] * 2)
//    }
//    return result
// }
//
// module.exports = doubleAll
//
// ## Arguments
//
// * numbers: An Array of 0 to 20 Integers between 0 and 9

function doubleAll(numbers) {
	var doubleMapp = new Array();
	Array.prototype.map( function( currentValue, index, array ) {
	//	return 2 * currentValue;
		doubleMapp 2 * currentValue;
	});
	return doubleMapp;
}

module.exports = doubleAll

