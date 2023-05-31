//
// ## JUGGLING ASYNC (Exercise 9 of 13)  
//   
//  This problem is the same as the previous problem (HTTP COLLECT) in that  
//  you need to use http.get(). However, this time you will be provided with  
//  three URLs as the first three command-line arguments.  
//   
//  You must collect the complete content provided to you by each of the URLs  
//  and print it to the console (stdout). You don't need to print out the  
//  length, just the data as a String; one line per URL. The catch is that you  
//  must print them out in the same order as the URLs are provided to you as  
//  command-line arguments.  
//
var http = require('http')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var content = [ '', '', '' ];
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
		content[index] += data;
	})
	response.on( "end", function () {
		done[index] = true;
		checkForCompletion();
	})  
}

function checkForCompletion() {
	if( done[0] && done[1] && done[2] ) {
		console.log( content[0] );
		console.log( content[1] );
		console.log( content[2] );
	}
}
