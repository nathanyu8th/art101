// index.js - Lab12: Conditionals
// Author: Nathan Yu
// Date: 5/24/24

// Constants

// Functions




// click listener for button
$("#button").click(sortingHat);

function sortingHat(){
  const newText = $("#input").val();
  let length = newText.length;
  const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  $("#output").append('<div class="text"><p>' + houses[length%4] + '</p></div>');
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
