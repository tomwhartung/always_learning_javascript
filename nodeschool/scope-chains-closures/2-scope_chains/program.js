//
// # Your Mission
//
// Modify your solution from lesson 1 so foo contains a function zip
// which itself contains one variable lexically scoped called quux
//

function foo() {
	var bar = '';        // this is a lexically scoped variable

	function zip() {
		var quux = '';    // lexically scoped to zip(); unavailable to foo outside of zip
	}
}
