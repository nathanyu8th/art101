// index.js - Lab11: Javascript for the Web
// Author: Nathan Yu
// Date: 5/19/24

// Constants

// Functions

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(onSortButtonClick);

function onSortButtonClick(){
  const userName = $("#user-name").val();
  userNameSorted = sortString(userName);
  $("#output").append('<div class="text" id = "test"><p>' + userNameSorted + '</p></div>');
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
