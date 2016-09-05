/*
 * JAVASCRIPTING - ROUNDING NUMBERS (Exercise 7 of 19)
 *
 * The challenge:
 * Create a file named rounding-numbers.js.
 * In that file define a variable named roundUp that references the float 1.5.
 * We will use the Math.round() method to round the number up. This method
 * rounds either up or down to the nearest integer.
 * An example of using Math.round():
 *    Math.round(0.5);
 * Define a second variable named rounded that references the output of the
 * Math.round() method, passing in the roundUp variable as the argument.
 * Use console.log() to print that number to the terminal.
 */
var roundup = 1.5;
var rounded = Math.round( roundup );
console.log( rounded );
