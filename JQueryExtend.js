 /*
 The JQuery '$.extend(deep, target, object1, object2)' function 
 merges two or more objects into one recursively, if deep is set to true.
 */

     var scripter = {
     Javascript : "Very Good",
     JQuery : "Very Good",
     AJAX : "Very Good",
     HTML : "Decent",
     CSS : "Decent"
 };

 var programmer = {
     Javascript: "Excellent",
     MVC: "Decent",
     Databases: "Decent",
     CSharp: "Decent",
     Java: "Working Knowledge",
     Git: "Working Knowledge"
 };

 var javascriptNinja = $.extend(true, {}, scripter, programmer);
 for (var prop in javascriptNinja) {
     console.log(prop + " : " + javascriptNinja[prop]);
 }

 // Output
"Javascript : Excellent"

"JQuery : Very Good"

"AJAX : Very Good"

"HTML : Decent"

"CSS : Decent"

"MVC : Decent"

"Databases : Decent"

"CSharp : Decent"

"Java : Working Knowledge"

"Git : Working Knowledge"

 // We can also use JSON to merge two objects or duplicate a JQuery Extend

 var stout = {
 beer : "Guiness"
}

var sparkling = {
champagne : "Korbel"
}

var blackVelvet = JSON.stringify(stout) + JSON.stringify(sparkling);
blackVelvet = blackVelvet.replace(/\}\{/, ",");
blackVelvet = JSON.parse(blackVelvet);
for (var prop in blackVelvet) {
    console.log(prop + " : " + blackVelvet[prop]);
}

// Output

"beer : Guiness"

"champagne : Korbel"