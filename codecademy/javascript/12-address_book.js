
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

---

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [ bob, mary ];

console.log( mary.phoneNumber );

---

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here

var printPerson = function( person ) {
    console.log( person.firstName + ' ' + person.lastName );
};

printPerson( contacts[0] );
printPerson( contacts[1] );

---

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function() {
    var contactsLength = contacts.length;
    for( idx = 0; idx < contactsLength; idx++ ) {
        printPerson( contacts[idx] );
    }
};

list();

---

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search( lastName ) {
	var contactsLength = contacts.length;
	for (var idx = 0; idx < contactsLength; idx++) {
	    if( contacts[idx].lastName === lastName ) {
    		printPerson(contacts[idx]);
	    }
	}
};

search( "Jones" );

---

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search( lastName ) {
	var contactsLength = contacts.length;
	for (var idx = 0; idx < contactsLength; idx++) {
	    if( contacts[idx].lastName === lastName ) {
    		printPerson(contacts[idx]);
	    }
	}
};

function add( firstName, lastName, email, phoneNumber ) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
}

add( 'Zeronimo', 'Hartung', 'zeronimo@tomhartung.com', '303-863-1757' );
list();

