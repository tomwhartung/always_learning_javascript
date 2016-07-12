//
// ## HTTP CLIENT (Exercise 7 of 13)
//
//  Write a program that performs an HTTP GET request to a URL provided to you
//  as the first command-line argument. Write the String contents of each
//  "data" event from the response to a new line on the console (stdout).
//
var urlToGet = process.argv[2];
var http = require('http')

http.get( urlToGet, processResponse );

function processResponse ( response ) {
	response.setEncoding( "utf8" );
	console.log( 'Processing Response' );
	response.on( "data", function (data) {
		console.log( typeof data );
	})  

	{
	}
}

