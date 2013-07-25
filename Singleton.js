// A Singleton Pattern happens when all references created using the 'new' keyword
// point to the same object.
// Example :
// var reference1 = new Single("Samurai");
// var reference2 = new Single("Ninja");
// Both 'reference1' and 'reference2' will point to the same object called 'Ninja'.

// The Singleton constructor
function Single(name) {
Single.only = function () {
if(typeof one_only == 'undefined'){
one_only = this;
        }
};
Single.only();
one_only.title = name;
return one_only;
}

var reference1 = new Single("Samurai");
var reference2 = new Single("Ninja");

console.log(reference1.title); // Ninja
console.log(reference2.title); // Ninja

// Singleton pattern is also used to create namespaces and 
// reduce global variables.
// The 'Utils' namespace creates various cross browser functions.

var Utils = {
    addEventHandler: function () {
        // code to create event handlers
    },

    createRequest: function () {
        // code to create Ajax request
    },

    preventDefaultBehavior: function () {
        // code to prevent default behavior of an event
    },

    stopPropogation: function () {
       // code to prevent event bubbling
    }
}
