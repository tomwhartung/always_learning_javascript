//
// # Task
//
// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
//
// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.
//
// ## Arguments
//
//   * operation: A Function, takes no arguments, returns no useful value.
//   * num: the number of times to call `operation`
//
function repeat( operation, num ) {
	var executions = 0;
	while( executions < num ) {
		operation();
		executions++;
	}
}

// Do not remove the line below
module.exports = repeat

