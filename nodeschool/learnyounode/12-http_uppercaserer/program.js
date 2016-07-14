//
// ## HTTP UPPERCASERER (Exercise 12 of 13)  
//   
//  Write an HTTP server that receives only POST requests and converts  
//  incoming POST body characters to upper-case and returns it to the client.  
//   
//  Your server should listen on the port provided by the first argument to  
//  your program.  
//
// On advice from the hints, installed through2-map
//    npm install through2-map
//

var http = require('http');
var fs = require('fs');

var portNum = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer(function( request, response ) {  
	readableStream.on( 'data', (chunk) => {
		fileData += chunk;
		console.log( '"on" event: received chunk.length = ' + chunk.length + ' bytes of data.' );
		response.write( chunk );
	});
	// This page:
	//    https://www.sitepoint.com/basics-node-js-streams/
	// helped me solve this, as you can see, without using the pipe.
	// The page at the url above also suggests the code below, for processing end,
	//    which seems ok but does not work for some reason
	// Not worrying about that and leaving this program as-is for now though!
	// readableStream.on( 'end', function() {
	// //	readableStream.pipe(response);
	// 	console.log( '"end" event: received a total of fileData.length = ' + fileData.length + ' bytes of data.' );
	// });
});

server.listen( portNum );

