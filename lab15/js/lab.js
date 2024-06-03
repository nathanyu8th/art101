// index.js - Lab11: Javascript for the Web
// Author: Nathan Yu
// Date: 5/19/24

// Constants

// Functions


// Using the core $.ajax() method
$('#activate').click(function() {
  const newText = $("#input").val();
  //"https://swapi.dev/api/people/1/"
  $.ajax({
      url: newText,
      data: {
          id: 123,
          api_key: "starWars",
      },
      type: "GET",
      dataType: "json",
      success: function(data) {
          // Convert data to a string for display
          var output = JSON.stringify(data, null, 2);
          // Put the output in the div
          $('#outputer').html('<pre>' + output + '</pre>');
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
          $('#outputer').html('<p>Error: ' + textStatus + '</p>');
      }
  });
});

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
