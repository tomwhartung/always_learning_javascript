/*
 * Here's the official solution in case you want to compare notes:  
 *
 * As suspected, they use an anonymous "lambda" function
 *
 * As unsuspected, they use this "bl" library, which is apparently a buffer list.
 *     https://github.com/rvagg/bl
 *   Links to docs given in the Hints
 *     file:///usr/lib/node_modules/learnyounode/docs/bl.html
 *     file:///usr/lib/node_modules/learnyounode/docs/concat-stream.html
 */
var http = require('http')  
var bl = require('bl')  

http.get(process.argv[2], function (response) {  
  response.pipe( bl(function (err, data) {  
    if (err)  
      return console.error(err)  
    data = data.toString()  
    console.log(data.length)  
    console.log(data)  
  }) )    
})  

