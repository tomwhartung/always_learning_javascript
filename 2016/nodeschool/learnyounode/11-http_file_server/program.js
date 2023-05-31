//
// ## HTTP FILE SERVER (Exercise 11 of 13)  
//   
//  Write an HTTP server that serves the same text file for each request it  
//  receives.  
//   
//  Your server should listen on the port provided by the first argument to  
//  your program.  
//   
//  You will be provided with the location of the file to serve as the second  
//  command-line argument. You must use the fs.createReadStream() method to  
//  stream the file contents to the response.  
//

var http = require('http');
var fs = require('fs');

var portNum = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer(function( request, response ) {  
	console.log( 'creating a readable stream for fileName = ' + fileName + '.' );
	var readableStream = fs.createReadStream( fileName );
	var fileData = '';
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

