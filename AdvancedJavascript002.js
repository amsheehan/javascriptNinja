// Function to log output to the console
function log(x) {
console.log(x);
}

// Timers
// setInterval(function, delay) does not guarantee a given delay between executions.
// Calling setTimeout recursively gives us a fixed delay

var i = 0;

setTimeout(function(){

log(++i);

if (i < 30){
setTimeout(arguments.callee, 1000);
}
}, 1000); // Logs 1 to 30 on the console.

    // Array Chunking
    // When a function takes more than 100 ms to complete, it is 
    // advisable to process the tasks in the function using 
    // 'setTimeout()'

    function chunk(array, process, context) {
        setTimeout(function () {
        // Take one array element
            var item = array.shift();
            // call the function to process the array element
            process.call(context, item);
            if (array.length > 0) {
                // if array has more elements process them after a delay 
                // to give the browser a break
               setTimeout(arguments.callee, 100);
            }
        }, 100);
    }

// Create a 'div' element
   var myDiv = document.createElement("div");
   document.body.appendChild(myDiv);
   
   // simple display function
    function display(item) {
    myDiv.innerHTML += item + "<br>";
    }

    var myArray = [12, 123, 1234, 453, 436, 23, 23, 5, 4123, 45, 346, 5634, 2234, 345, 342];

    // Create an html page that has a 'div' element, with an id of 'myDiv' to use this function
    chunk(myArray, display);
    // Displays the numbers on the page.
