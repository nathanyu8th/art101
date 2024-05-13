// index.js - Lab9: Libraries and jQuery
// Author: Nathan Yu
// Date: 5/9/24

// Constants

// Functions
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#problems").append("<button id='button-challenge-problems'>Make Special</button>");

$("#reflection").append("<button id='button-challenge-reflection'>Make Special</button>");

$("#results").append("<button id='button-challenge-results'>Make Special</button>");

// add a click listener to the challenge button
$('#button-challenge').click(onButtonClick);
$('#button-challenge-problems').click(onButtonClickProblems);
$('#button-challenge-reflection').click(onButtonClickReflection);
$('#button-challenge-results').click(onButtonClickResults);
//$('button-challenge').addEventListener('click', onButtonClick);

function onButtonClick() {
  $("#challenge").toggleClass("special");
}

function onButtonClickProblems() {
  $("#problems").toggleClass("transformAxis");
}

function onButtonClickResults() {
  $("#results").toggleClass("animation");
}

function onButtonClickReflection() {
  $("#reflection").toggleClass("reflection");
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
