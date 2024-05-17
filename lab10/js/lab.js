// index.js - Lab10: Javascript for the Web
// Author: Nathan Yu
// Date: 5/16/24

// Constants

// Functions

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

function generateRandomTextNew() {
  var textName = document.getElementById("input-text").value;
  const min = 0;
  const max = textName.length - 1;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (textName.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return textName.slice(randStart, randStart + randLen);
}



// click listener for button
$("#make-convo").click(onConvoButtonClick);

function onConvoButtonClick(){
  const newText = generateRandomTextNew();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
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
