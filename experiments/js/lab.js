// index.js - Lab10: Javascript for the Web
// Author: Nathan Yu
// Date: 5/14/24

// Constants



// Functions

$("#my-button").click(onButtonClick);

$("#test-button").click(onTestButton);

function onButtonClick(){

  console.log("hi");
  var name = prompt("Whats ur name bro: ");
  $("#title").html("hello " + name);
}

function onTestButton(){
  
  var testName = document.getElementById("input-text").value;

  testName = testName.toLowerCase();
  const first = testName.charAt(0).toUpperCase();
  testName = first + testName.slice(1);
  
  $("#change").html(testName);

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
