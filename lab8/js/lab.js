// index.js - Lab8: Anon Functions and Callbacks
// Author: Nathan Yu
// Date: 5/2/24

// Constants

// Functions
function addNum(x){
  var results = x + 5;
  return results;
}

console.log(addNum(6));

var arrayNum = [3,4,5,6,6,7,4,90];

console.log(arrayNum.map(addNum));

var mappedArray = arrayNum.map(function(x){
  var results = x**2;
  return results;
})

console.log(mappedArray);


var mapResults = arrayNum.map(addNum);

console.log("mapResults: ", mapResults);

$("#results").append("<p>" + "Map Results: " + mapResults + "</p>");
$("#results").append("<p>" + " Mapped Array (Squaring each Number): " + mappedArray + "</p>");


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
