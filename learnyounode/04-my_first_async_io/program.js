//
// ## MY FIRST ASYNC I/O! (Exercise 4 of 13)  
//   
//  Write a program that uses a single asynchronous filesystem operation to  
//  read a file and print the number of newlines it contains to the console  
//  (stdout), similar to running cat file | wc -l.  
//   
//  The full path to the file to read will be provided as the first  
//  command-line argument.  
//

var fs = require('fs')

fs.readFile( process.argv[2], countLines );

function countLines ( err, buffer ) {
	if ( err ) {
		console.log( 'Error: ' + err )
	} else {
		var str = buffer.toString()
		var separator = "\n";
		var lines = str.split( separator );
		console.log( lines.length-1 );
	}
}

