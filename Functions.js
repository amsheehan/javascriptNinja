// A function to log output to the Console.
function show(x) {
    console.log(x);
}

/*
Immediately Invoked Function Expressions enable developers to
avoid creating global variables and functions.
*/

// Regular Function expression creates a global variable
var greeting = function ( ) {
show("Hello World!");
};

// Function Call
greeting();

// In the above function call, we can substitute the function reference 'greeting'
// with the actual function as follows.

(function(){show("Hello World!");})();

// We need to enclose the function in parantheses otherwise the
// it will be interpreted as a function declaration.

/*
A Closure happens when an 'Inner' function holds on to the variables 
of its containing function.
*/
// empty global reference
var globalReference;

function outer() {
    // variable belongs to the 'outer' function.
    var me = "Javascript RockStar";
    // create 'inner' function
    function inner() {
        show(me);
    }
    globalReference = inner;
}

// call the outer function
outer();

// call inner() after outer() has run
globalReference();
// outputs 'Javascript RockStar'
// the inner() function 'holds on' to the variable 'me' 
// belonging to the 'outer' function


// In a closure Inner functions always see the last value
// of a variable.

function makeArray() {
    var myIntegers = [];
    for (var i = 0; i < 10; i++) {
        var showInteger = function () {
            show(i);
        }
        myIntegers.push(showInteger);
    }
    return myIntegers;
}

var myArray = makeArray();

myArray[4](); // 10
myArray[5](); // 10

// the inside function referenced by 'showInteger'
// only sees the last value of 'i' and so
// the output is '10' each time

// the loop can be fixed by creating an 'immediately 
// invoked function expression' 

function makeArrayFixed() {
    var myIntegers = [];
    for (var i = 0; i < 10; i++) (function (i) {
        var showInteger = function () {
            show(i);
        }
        myIntegers.push(showInteger);
    })(i);
    return myIntegers;
}

myArray = makeArrayFixed();

myArray[4](); // 4
myArray[5](); // 5