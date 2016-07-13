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

module.exports = function (directory, extension, filterLsCallback ) {
	console.log( 'Hi from the exports function in filterLsModule.js' );
	fs.readdir( directory, function( err, list ) {   // filterLsModule as a callback fcn
		console.log( 'do filterLsModule stuff here' );
		if ( err ) {
			console.log( 'Error: ' + err )
		} else {
			console.log( 'typeof list = ' + typeof list );
			console.log( 'list instanceof Array = ' + list instanceof Array );
			console.log( 'Found ' + list.length-1 + ' elements in the directory; extension = "' + extension + '"' );
// 		var dotExtension = '.' + extension;
// 		for( index=0; index < list.length; index++ ) {
// 			var dirElt = list[index];
// 			var eltExtension = path.extname(dirElt);
// 	//		console.log( 'Testing ' + dirElt + '; eltExtension = ' + eltExtension + '; extension = ' + extension );
// 			if( eltExtension == dotExtension ) {
// 				console.log( dirElt );
// 			}
//			}
		}
	});
}

// function filterLsModule ( err, list ) {
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

//
// ??????????????????????
// This is rather confusing to me.  It is hard to take baby steps and maintain confidence with so much going on here.
//
// It's like every thing here is a call back function, could you maybe be a bit more specific???
//
// 1. "foo(function (err, data) {" that foo looks out of place (either that or the "function") I suspect a typoe!
// 2. "callback" in this context refers to which one
// 3. I suspect that the code below is the patter we want to use in this module and
//    that "callback" refers to what we are trying to do with filterLsCallback in program.js
//
// Sorry but I do not have infinite time to play around with this right now.
// Going to let this sink in a bit and maybe ask for help later.
// ??????????????????????
//
//  Also keep in mind that it is idiomatic to check for errors and do
//  early-returns within callback functions:
//
//     function bar (callback) {
//       foo(function (err, data) {
//         if (err)
//           return callback(err) // early return
//
//         // ... no error, continue doing cool things with `data`
//
//         // all went well, call callback with `null` for the error argument
//
//         callback(null, data)
//       })
//     }

