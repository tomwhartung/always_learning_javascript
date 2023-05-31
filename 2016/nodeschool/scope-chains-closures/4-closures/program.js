//
// # Your Mission
//
// Modify your solution from the previous lesson to set bar = true inside zip(),
// then return the function zip as the result of foo()
//

function foo() {
	var bar = false;
	quux = 'quux for foo, "shadowed" by the quux for zip only';

	function zip() {
		bar = true;
		var quux = 'quux for zip only';    // lexically scoped to zip(); unavailable to foo outside of zip
	};

	return zip;
}
