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