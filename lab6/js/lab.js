// index.js - Lab6 Arrays and Objects
// Author: Nathan Yu
// Date: 4/28/24

// Constants
var myTransport = ["walking", "bus", "uber"];

var myMainRide = {make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 1995,
  age: function(){
    return 2024 - this.year;
  }
}
// Functions

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
