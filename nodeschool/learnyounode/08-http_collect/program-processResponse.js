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
var urlToGet = process.argv[2];
var http = require('http')
var entireResponse = '';

http.get( urlToGet, processResponse );

function processResponse ( response ) {
	response.setEncoding( "utf8" );
	response.on( "data", function (data) {
	//	console.log( 'DATA: ' + data );
		entireResponse += data;
	})
	response.on( "end", function () {
		console.log( entireResponse.length );
		console.log( entireResponse );
	})  
}

