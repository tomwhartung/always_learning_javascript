//
// ## BABY STEPS (Exercise 2 of 13)  
//   
//  Write a program that accepts one or more numbers as command-line arguments  
//  and prints the sum of those numbers to the console (stdout).  
//
var argsSum = 0;
var thisArg = 0;

for( var index = 2; index < process.argv.length; index++ ) {
	thisArg = Number( process.argv[index] );
//	console.log( 'process.argv[' + index + '] = ' + thisArg );
	argsSum += thisArg;
}

console.log( argsSum );
