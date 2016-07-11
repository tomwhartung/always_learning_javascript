
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

-----------


var friends = {};

friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = { 
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['One Milky Way','Afterlife','HV','12345']
};


var search = function(name) {
    for( var nameKey in friends ) {
        if( friends[nameKey].firstName == name ) {
            console.log( friends[nameKey] );
            return friends[nameKey];
        }
    }
};

var list = function() {
    for( var nameKey in friends ) {
        console.log( nameKey );
    }
};

-----


var friends = {};

friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = { 
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['One Milky Way','Afterlife','HV','12345']
};


var search = function(name) {
    for( var nameKey in friends ) {
        if( friends[nameKey].firstName == name ) {
            console.log( friends[nameKey] );
            return friends[nameKey];
        }
    }
};

var list = function() {
    for( var nameKey in friends ) {
        console.log( nameKey );
    }
};

list();
search( 'Bill' );

