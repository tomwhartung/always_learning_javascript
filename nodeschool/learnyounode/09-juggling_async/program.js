//
// ## HTTP COLLECT (Exercise 8 of 13)  
//   
//  Write a program that performs an HTTP GET request to a URL provided to you  
//  as the first command-line argument. Collect all data from the server (not  
//  just the first "data" event) and then write two lines to the console  
//  (stdout).  
//   
//  The first line you write should just be an integer representing the number  
//  of characters received from the server. The second line should contain the  
//  complete String of characters sent by the server.  
//
var http = require('http')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var response = [ '', '', '' ];
var done = [ false, false, false ];

http.get( url1, getResponse1 );
http.get( url2, getResponse2 );
http.get( url3, getResponse3 );

function getResponse1( response ) {
	processResponse( response, 0 );
}

function getResponse2( response ) {
	processResponse( response, 1 );
}

function getResponse3( response ) {
	processResponse( response, 2 );
}

function processResponse( response, index ) {
	response.setEncoding( "utf8" );
	response.on( "data", function (data) {
		response[index] += data;
	})
	response.on( "end", function () {
		done[index] = true;
		checkForCompletion();
	})  
}

function checkForCompletion() {
	if( done[0] && done[1] && done[2] ) {
		console.log( response[0] );
		console.log( response[1] );
		console.log( response[2] );
	}
}
