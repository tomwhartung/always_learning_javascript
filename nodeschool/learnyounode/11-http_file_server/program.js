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
	var readableStream = fs.createReadStream( fileName );
	readableStream.on( 'data', (chunk) => {
	//	readableStream.pipe(response);
		console.log(`Received ${chunk.length} bytes of data.`);
	});
});

server.listen( portNum );

