//
// ## MAKE IT MODULAR (Exercise 6 of 13)  
//   
//  filterLsModule.js: module described below
//   
//  These four things are the contract that your module must follow.  
//   
//   » Export a single function that takes these arguments:
//     the directory name, the filename extension string and a callback function, in that order
//   » Call the callback exactly once with an error or some data as described.     
//   » Don't change anything else, like global variables or stdout.                
//   » Handle all the errors that may occur and pass them to the callback.         
//   
//  The benefit of having a contract is that your module can be used by anyone  
//  who expects this contract. So your module could be used by anyone else who  
//  does learnyounode, or the verifier, and just work.  
//

var fs = require('fs')
var path = require('path')

module.exports = function (directory, extension, filterLs ) {
//	fs.readdir( directory, filterLs );
	console.log( 'Hi from the exports function in filterLsModule.js' );
}  


// function filterLs ( err, list ) {
// 	if ( err ) {
// 		console.log( 'Error: ' + err )
// 	} else {
// 	//	console.log( 'Found ' + list.length-1 + ' elements in the directory; extension = "' + extension + '"' );
// 		var dotExtension = '.' + extension;
// 		for( index=0; index < list.length; index++ ) {
// 			var dirElt = list[index];
// 			var eltExtension = path.extname(dirElt);
// 	//		console.log( 'Testing ' + dirElt + '; eltExtension = ' + eltExtension + '; extension = ' + extension );
// 			if( eltExtension == dotExtension ) {
// 				console.log( dirElt );
// 			}
// 		}
// 	}
// }

