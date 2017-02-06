
// Get a reference to the button element in the DOM
var button = document.getElementById("convert");

// This function should determine which conversion should happen based on which radio button is selected.

function determineConverter (clickEvent) {
  var units = document.getElementsByName("units");
  	units.forEach(function(x) {
  	if (x.checked) {
  		// if (x.id === celsius) {

  		}
  	}
  })
}

// when ( units === celsius ) {
// 	function toFahrenheit () {
// 	var button = button * (9/5) + 32;
// 	}	
// }

// when ( units === fahrenheit ) {
// 	function toCelsius () {
// 	var button = (button - 32) * (5/9);
// }


// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


// newTemp.innerHTML = convertedTemp;


// For reference to study
// 
  	// var isChecked = false;
  	// isChecked = x.checked;
  	// console.log(isChecked);