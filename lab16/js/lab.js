// index.js - Lab16: JSON an APIs
// Author: Nathan Yu
// Date: 6/7/24

// Constants

// Functions


// Using the core $.ajax() method
/*$.ajax({
  dataType: "json", // Note: dataType should be lowercase "json"
  success: function(data) {
      console.log(data);
      // Assuming data contains an image URL and some text, update the DOM accordingly
      $('#response').html(`<p>${data.answer}</p><img src="${data.image}" alt="Yes or No Image">`);
  },
  error: function(jqXHR, textStatus, errorThrown) { 
      console.error("Error:", textStatus, errorThrown);
      $('#response').html('<p>Error.</p>');
  }
});*/

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
