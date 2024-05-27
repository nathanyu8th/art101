// index.js - Lab13: Loops
// Author: Nathan Yu
// Date: 5/26/24

// Constants
let oneLongString = "";

// Functions

for (let i = 1; i <= 200; i++){
  let str = ""
  if (i % 3 == 0 ){
    str+= "Fizz";
  }
  if (i % 5 == 0){
    str+= "Buzz";
  }
  if (i % 7 == 0){
    str+= "Boom";
  }
  oneLongString += str;
  $("#output").append("<p>" + i + ": "+ str + "</p>");
}


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
