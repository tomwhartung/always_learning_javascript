//
// # Your Mission
//
// Starting with your solution from the previous lesson, assign a value to quux
// inside foo() (don't use var or let). The value should be different to the
// value assigned when defining quux inside zip().
//

function foo() {
	var bar = '';
	quux = 'quux for foo, "shadowed" by the quux for zip only';

	function zip() {
		var quux = 'quux for zip only';    // lexically scoped to zip(); unavailable to foo outside of zip
	}
}
