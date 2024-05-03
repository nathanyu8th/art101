// index.js - Lab7 Functions
// Author: Nathan Yu
// Date: 4/28/24

// Constants

// Functions
let result = '';

function sortString(userString){
  var inputString = userString;
  var inputArray = inputString.split('');
  inputArray = inputArray.sort();
  inputString = inputArray.join('');
  console.log(inputString);
  return inputString;
}

function onButtonClick() {
  result = sortString(window.prompt("Hi, give me a string"));
  //document.writeln("Here is the string sorted: " + result + "<br>");
  //alert('Button clicked!');
  outputButton.innerHTML = result;
}



const button = document.querySelector('button');
const outputButton = document.getElementById('outputButton');
button.addEventListener('click', onButtonClick);



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
